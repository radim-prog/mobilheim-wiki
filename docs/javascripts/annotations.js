// Simple annotation system for mobilheim-wiki
// Sends annotations as GitHub Issues - automatic tracking!

(function() {
  'use strict';

  let popup = null;
  let selectedText = '';
  let selectionRange = null;

  // GitHub configuration
  const GITHUB_REPO = 'radim-prog/mobilheim-wiki';
  const STORAGE_KEY = 'mobilheim-wiki-annotations';
  const TOKEN_KEY = 'mobilheim-wiki-github-token';

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

  // Get GitHub token
  function getGitHubToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  // Create GitHub Issue
  async function createGitHubIssue(annotation) {
    const token = getGitHubToken();

    if (!token) {
      showMessage('Nastavte GitHub token (tlačítko ⚙️)', 'error');
      return false;
    }

    // Create issue title and body
    const title = `📝 Poznámka: ${annotation.pageTitle}`;

    let body = `## Poznámka ze dne ${new Date(annotation.timestamp).toLocaleString('cs-CZ')}\n\n`;
    body += `**Stránka:** ${annotation.pageTitle}\n`;
    body += `**URL:** ${annotation.pageUrl}\n`;
    if (annotation.sectionHeading) {
      body += `**Sekce:** ${annotation.sectionHeading}\n`;
    }
    body += `\n---\n\n`;
    body += `**Označený text:**\n> ${annotation.selectedText}\n\n`;
    body += `**Poznámka:**\n${annotation.note}\n\n`;
    body += `---\n\n`;
    body += `*Automaticky vytvořeno systémem poznámek*`;

    try {
      const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/issues`, {
        method: 'POST',
        headers: {
          'Authorization': `token ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json'
        },
        body: JSON.stringify({
          title: title,
          body: body,
          labels: ['poznámka', 'auto-generated']
        })
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('GitHub API error:', error);
        throw new Error(error.message || 'GitHub API error');
      }

      const issue = await response.json();
      console.log('GitHub Issue created:', issue.html_url);
      return issue;

    } catch (error) {
      console.error('Error creating GitHub issue:', error);
      throw error;
    }
  }

  // Save annotation (to GitHub and localStorage backup)
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
      // Send to GitHub
      const issue = await createGitHubIssue(annotation);

      // Also save to localStorage as backup
      let annotations = [];
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          annotations = JSON.parse(stored);
        }
      } catch (e) {
        console.error('Error loading annotations:', e);
      }

      annotation.githubIssue = issue ? issue.html_url : null;
      annotations.push(annotation);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(annotations));

      showMessage('✓ Poznámka odeslána na GitHub!', 'success');
      console.log('Annotation saved:', annotation);

    } catch (error) {
      console.error('Error saving annotation:', error);
      showMessage('Chyba při odesílání na GitHub.', 'error');

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

  // Show GitHub token settings
  function showTokenSettings() {
    const currentToken = getGitHubToken();
    const tokenInput = prompt(
      'Zadejte GitHub Personal Access Token:\n\n' +
      'Jak vytvořit token:\n' +
      '1. Jděte na github.com/settings/tokens\n' +
      '2. "Generate new token" → "Classic"\n' +
      '3. Zaškrtněte "repo" (full control)\n' +
      '4. Zkopírujte token a vložte sem\n\n' +
      'Token:',
      currentToken || ''
    );

    if (tokenInput !== null) {
      if (tokenInput.trim()) {
        localStorage.setItem(TOKEN_KEY, tokenInput.trim());
        alert('✓ GitHub token uložen!\n\nPoznámky se nyní budou posílat jako Issues na GitHub.');
      } else {
        localStorage.removeItem(TOKEN_KEY);
        alert('Token odstraněn.');
      }
    }
  }

  // Add settings and export buttons
  function addButtons() {
    const container = document.createElement('div');
    container.id = 'annotation-buttons';
    container.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      z-index: 9999;
    `;

    // Settings button (always visible)
    const settingsBtn = document.createElement('button');
    settingsBtn.innerHTML = '⚙️ GitHub';
    settingsBtn.title = 'Nastavit GitHub token';
    settingsBtn.style.cssText = `
      background-color: var(--md-primary-fg-color, #3f51b5);
      color: white;
      border: none;
      border-radius: 24px;
      padding: 12px 20px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      transition: all 0.2s;
    `;
    settingsBtn.addEventListener('click', showTokenSettings);
    settingsBtn.addEventListener('mouseenter', () => {
      settingsBtn.style.transform = 'translateY(-2px)';
      settingsBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.4)';
    });
    settingsBtn.addEventListener('mouseleave', () => {
      settingsBtn.style.transform = 'translateY(0)';
      settingsBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
    });
    container.appendChild(settingsBtn);

    // Export button (only if there are annotations)
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && stored !== '[]') {
      const exportBtn = document.createElement('button');
      exportBtn.innerHTML = '📥 Export';
      exportBtn.title = 'Stáhnout poznámky jako soubor';
      exportBtn.style.cssText = `
        background-color: #607d8b;
        color: white;
        border: none;
        border-radius: 24px;
        padding: 12px 20px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        transition: all 0.2s;
      `;
      exportBtn.addEventListener('click', exportAnnotations);
      exportBtn.addEventListener('mouseenter', () => {
        exportBtn.style.transform = 'translateY(-2px)';
        exportBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.4)';
      });
      exportBtn.addEventListener('mouseleave', () => {
        exportBtn.style.transform = 'translateY(0)';
        exportBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
      });
      container.appendChild(exportBtn);
    }

    document.body.appendChild(container);
  }

  // Initialize
  function init() {
    // Create floating "Add Note" button on text selection
    document.addEventListener('mouseup', handleTextSelection);
    document.addEventListener('touchend', handleTextSelection);

    // Add settings and export buttons
    addButtons();

    console.log('Annotation system initialized (GitHub Issues mode)');
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
