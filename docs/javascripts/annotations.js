// Simple annotation system for mobilheim-wiki
// Automatically saves notes to Google Sheets without requiring login

(function() {
  'use strict';

  // Configuration - REPLACE WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
  const WEBHOOK_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEBHOOK_URL';

  let popup = null;
  let selectedText = '';
  let selectionRange = null;

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

  // Save annotation to Google Sheets
  async function saveAnnotation() {
    const textarea = document.getElementById('annotation-textarea');
    const note = textarea.value.trim();

    if (!note) {
      showMessage('Prosím napište poznámku', 'error');
      return;
    }

    // Check if webhook URL is configured
    if (WEBHOOK_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEBHOOK_URL') {
      showMessage('Chyba: Google Sheets není nakonfigurováno. Viz dokumentace.', 'error');
      console.error('Please configure WEBHOOK_URL in annotations.js');
      return;
    }

    // Show loading state
    const saveBtn = document.getElementById('annotation-save');
    saveBtn.disabled = true;
    saveBtn.querySelector('.annotation-btn-text').style.display = 'none';
    saveBtn.querySelector('.annotation-btn-loading').style.display = 'inline';

    // Prepare data
    const data = {
      timestamp: new Date().toISOString(),
      pageUrl: window.location.href,
      pageTitle: document.title,
      selectedText: selectedText,
      note: note,
      userAgent: navigator.userAgent
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script requires this
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      // Note: With no-cors mode, we can't read the response
      // We assume success if no error is thrown
      showMessage('✓ Poznámka uložena!', 'success');

      // Log to console for debugging
      console.log('Annotation saved:', data);

    } catch (error) {
      console.error('Error saving annotation:', error);
      showMessage('Chyba při ukládání. Zkuste to znovu.', 'error');

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

    console.log('Annotation system initialized');
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
