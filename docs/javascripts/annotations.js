// Simple annotation system for mobilheim-wiki
// Sends annotations via email - ZERO setup!

(function() {
  'use strict';

  let popup = null;
  let selectedText = '';
  let selectionRange = null;

  // Email configuration - uses FormSubmit.co (free service)
  const EMAIL_ENDPOINT = 'https://formsubmit.co/radim@wikiporadce.cz';

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

  // Send annotation via email
  async function sendEmail(annotation) {
    // Create email subject and body
    const subject = `📝 Poznámka: ${annotation.pageTitle}`;

    const date = new Date(annotation.timestamp).toLocaleString('cs-CZ');
    let body = `POZNÁMKA ZE STRÁNKY\n`;
    body += `===================\n\n`;
    body += `Datum: ${date}\n`;
    body += `Stránka: ${annotation.pageTitle}\n`;
    body += `URL: ${annotation.pageUrl}\n`;
    if (annotation.sectionHeading) {
      body += `Sekce: ${annotation.sectionHeading}\n`;
    }
    body += `\n---\n\n`;
    body += `OZNAČENÝ TEXT:\n${annotation.selectedText}\n\n`;
    body += `---\n\n`;
    body += `POZNÁMKA:\n${annotation.note}\n`;

    // Send via FormSubmit
    const formData = new FormData();
    formData.append('_subject', subject);
    formData.append('Datum', date);
    formData.append('Stránka', annotation.pageTitle);
    formData.append('URL', annotation.pageUrl);
    formData.append('Sekce', annotation.sectionHeading || 'N/A');
    formData.append('Označený text', annotation.selectedText);
    formData.append('Poznámka', annotation.note);
    formData.append('_template', 'box'); // Nice email template
    formData.append('_captcha', 'false'); // No captcha

    try {
      const response = await fetch(EMAIL_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Email send failed');
      }

      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }

  // Save annotation
  async function saveAnnotation() {
    const textarea = document.getElementById('annotation-textarea');
    const note = textarea.value.trim();

    if (!note) {
      showMessage('Prosím napište poznámku', 'error');
      return;
    }

    // Show loading state
    const saveBtn = document.getElementById('annotation-save');
    saveBtn.disabled = true;
    saveBtn.querySelector('.annotation-btn-text').style.display = 'none';
    saveBtn.querySelector('.annotation-btn-loading').style.display = 'inline';

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

    try {
      // Send email
      await sendEmail(annotation);

      showMessage('✓ Poznámka odeslána!', 'success');
      console.log('Annotation sent:', annotation);

    } catch (error) {
      console.error('Error saving annotation:', error);
      showMessage('Chyba při odesílání.', 'error');

      // Re-enable button
      saveBtn.disabled = false;
      saveBtn.querySelector('.annotation-btn-text').style.display = 'inline';
      saveBtn.querySelector('.annotation-btn-loading').style.display = 'none';
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


  // Initialize
  function init() {
    // Create floating "Add Note" button on text selection
    document.addEventListener('mouseup', handleTextSelection);
    document.addEventListener('touchend', handleTextSelection);

    console.log('Annotation system initialized (Email mode)');
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
