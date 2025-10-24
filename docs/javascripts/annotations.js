// Simple annotation system for mobilheim-wiki
// Saves notes locally in browser - NO setup required!

(function() {
  'use strict';

  let popup = null;
  let selectedText = '';
  let selectionRange = null;

  // Storage key
  const STORAGE_KEY = 'mobilheim-wiki-annotations';

  // Create popup HTML
  function createPopup() {
    const popupHTML = `
      <div id="annotation-popup" class="annotation-popup" style="display: none;">
        <div class="annotation-popup-content">
          <div class="annotation-popup-header">
            <h3>Přidat poznámku</h3>
            <button class="annotation-close" id="annotation-close">&times;</button>
          </div>
          <div class="annotation-popup-body">
            <div class="annotation-selected-text">
              <strong>Označený text:</strong>
              <p id="annotation-selected-text-display"></p>
            </div>
            <textarea
              id="annotation-textarea"
              placeholder="Napište svou poznámku..."
              rows="4"
            ></textarea>
            <div class="annotation-popup-footer">
              <button class="annotation-btn annotation-btn-cancel" id="annotation-cancel">Zrušit</button>
              <button class="annotation-btn annotation-btn-save" id="annotation-save">
                <span class="annotation-btn-text">Uložit poznámku</span>
                <span class="annotation-btn-loading" style="display: none;">Ukládám...</span>
              </button>
            </div>
            <div class="annotation-message" id="annotation-message" style="display: none;"></div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', popupHTML);
    popup = document.getElementById('annotation-popup');

    // Event listeners
    document.getElementById('annotation-close').addEventListener('click', closePopup);
    document.getElementById('annotation-cancel').addEventListener('click', closePopup);
    document.getElementById('annotation-save').addEventListener('click', saveAnnotation);

    // Close on outside click
    popup.addEventListener('click', function(e) {
      if (e.target === popup) {
        closePopup();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && popup.style.display === 'flex') {
        closePopup();
      }
    });
  }

  // Show popup with selected text
  function showPopup(text, range) {
    if (!popup) {
      createPopup();
    }

    selectedText = text;
    selectionRange = range;

    document.getElementById('annotation-selected-text-display').textContent = text;
    document.getElementById('annotation-textarea').value = '';
    document.getElementById('annotation-message').style.display = 'none';

    popup.style.display = 'flex';
    document.getElementById('annotation-textarea').focus();
  }

  // Close popup
  function closePopup() {
    if (popup) {
      popup.style.display = 'none';
      selectedText = '';
      selectionRange = null;
    }
  }

  // Show message in popup
  function showMessage(message, type = 'success') {
    const messageEl = document.getElementById('annotation-message');
    messageEl.textContent = message;
    messageEl.className = 'annotation-message annotation-message-' + type;
    messageEl.style.display = 'block';

    if (type === 'success') {
      setTimeout(closePopup, 2000);
    }
  }

  // Find nearest heading above selection
  function findNearestHeading(range) {
    let element = range.startContainer;

    // If text node, get parent element
    if (element.nodeType === Node.TEXT_NODE) {
      element = element.parentElement;
    }

    // Walk up the DOM tree looking for headings
    let currentElement = element;
    while (currentElement && currentElement !== document.body) {
      // Check previous siblings for headings
      let sibling = currentElement.previousElementSibling;
      while (sibling) {
        if (sibling.tagName && /^H[1-6]$/.test(sibling.tagName)) {
          return {
            level: sibling.tagName,
            text: sibling.textContent.trim()
          };
        }
        // Check inside sibling for headings
        const headingInSibling = sibling.querySelector('h1, h2, h3, h4, h5, h6');
        if (headingInSibling) {
          return {
            level: headingInSibling.tagName,
            text: headingInSibling.textContent.trim()
          };
        }
        sibling = sibling.previousElementSibling;
      }

      // Check parent for heading
      currentElement = currentElement.parentElement;
    }

    // If no heading found, check first H1 on page
    const firstHeading = document.querySelector('h1');
    if (firstHeading) {
      return {
        level: 'H1',
        text: firstHeading.textContent.trim()
      };
    }

    return null;
  }

  // Save annotation to localStorage
  function saveAnnotation() {
    const textarea = document.getElementById('annotation-textarea');
    const note = textarea.value.trim();

    if (!note) {
      showMessage('Prosím napište poznámku', 'error');
      return;
    }

    // Find section heading
    const heading = findNearestHeading(selectionRange);

    // Prepare data
    const annotation = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      pageUrl: window.location.href,
      pageTitle: document.title,
      sectionHeading: heading ? heading.text : null,
      sectionLevel: heading ? heading.level : null,
      selectedText: selectedText,
      note: note
    };

    // Get existing annotations
    let annotations = [];
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        annotations = JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error loading annotations:', e);
    }

    // Add new annotation
    annotations.push(annotation);

    // Save to localStorage
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(annotations));
      showMessage('✓ Poznámka uložena!', 'success');
      console.log('Annotation saved:', annotation);
    } catch (error) {
      console.error('Error saving annotation:', error);
      showMessage('Chyba při ukládání.', 'error');
    }
  }

  // Handle text selection
  function handleTextSelection() {
    // Small delay to ensure selection is complete
    setTimeout(() => {
      const selection = window.getSelection();
      const text = selection.toString().trim();

      // Only show popup if text is selected (more than 3 characters)
      if (text.length > 3) {
        const range = selection.getRangeAt(0);
        showPopup(text, range);
      }
    }, 10);
  }

  // Export annotations to file
  function exportAnnotations() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored || stored === '[]') {
        alert('Žádné poznámky k exportu!');
        return;
      }

      const annotations = JSON.parse(stored);

      // Create readable text format
      let text = 'POZNÁMKY Z MOBILHEIM WIKI\n';
      text += '='.repeat(50) + '\n\n';

      annotations.forEach((ann, index) => {
        const date = new Date(ann.timestamp).toLocaleString('cs-CZ');
        text += `${index + 1}. Poznámka (${date})\n`;
        text += '-'.repeat(50) + '\n';
        text += `Stránka: ${ann.pageTitle}\n`;
        text += `URL: ${ann.pageUrl}\n`;
        if (ann.sectionHeading) {
          text += `Sekce: ${ann.sectionHeading}\n`;
        }
        text += `\nOznačený text:\n"${ann.selectedText}"\n\n`;
        text += `Poznámka:\n${ann.note}\n\n`;
        text += '='.repeat(50) + '\n\n';
      });

      // Download as file
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `poznamky-mobilheim-wiki-${new Date().toISOString().split('T')[0]}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      console.log(`Exported ${annotations.length} annotations`);
    } catch (error) {
      console.error('Error exporting annotations:', error);
      alert('Chyba při exportu poznámek');
    }
  }

  // Add export button to page
  function addExportButton() {
    // Check if there are any annotations
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored || stored === '[]') {
      return; // No button if no annotations
    }

    // Create floating export button
    const button = document.createElement('button');
    button.id = 'export-annotations-btn';
    button.innerHTML = '📥 Export poznámek';
    button.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: var(--md-primary-fg-color, #3f51b5);
      color: white;
      border: none;
      border-radius: 24px;
      padding: 12px 20px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      z-index: 9999;
      transition: all 0.2s;
    `;

    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px)';
      button.style.boxShadow = '0 4px 12px rgba(0,0,0,0.4)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
    });

    button.addEventListener('click', exportAnnotations);
    document.body.appendChild(button);
  }

  // Initialize
  function init() {
    // Create floating "Add Note" button on text selection
    document.addEventListener('mouseup', handleTextSelection);
    document.addEventListener('touchend', handleTextSelection);

    // Add export button if there are annotations
    addExportButton();

    console.log('Annotation system initialized');
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
