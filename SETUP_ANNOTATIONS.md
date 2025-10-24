# 📝 Návod na nastavení systému poznámek

Tento dokument popisuje jak nastavit automatické ukládání poznámek do Google Sheets.

---

## 🎯 Co systém dělá

Sekretářka může **označit jakýkoliv text** na webu a **přidat poznámku**, která se automaticky uloží do Google Sheets tabulky.

**Žádné přihlašování!** Jen označit text → napsat poznámku → kliknout Uložit.

---

## 🔧 Nastavení (5 minut)

### Krok 1: Vytvoření Google Sheets tabulky

1. Přejděte na [sheets.google.com](https://sheets.google.com)
2. Vytvořte novou tabulku s názvem **"Mobilheim Wiki - Poznámky"**
3. V první řádce vytvořte hlavičky sloupců:

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Datum a čas | Stránka (URL) | Název stránky | Označený text | Poznámka | Browser |

---

### Krok 2: Vytvoření Google Apps Script

1. V Google Sheets klikněte na **Rozšíření** → **Apps Script**
2. Smažte ukázkový kód
3. Vložte tento kód:

```javascript
function doPost(e) {
  try {
    // Otevřít aktivní spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse JSON data z požadavku
    var data = JSON.parse(e.postData.contents);

    // Formátovat timestamp
    var timestamp = new Date(data.timestamp);
    var formattedTime = Utilities.formatDate(
      timestamp,
      Session.getScriptTimeZone(),
      "dd.MM.yyyy HH:mm:ss"
    );

    // Přidat řádek s daty
    sheet.appendRow([
      formattedTime,           // Datum a čas
      data.pageUrl,            // URL stránky
      data.pageTitle,          // Název stránky
      data.selectedText,       // Označený text
      data.note,               // Poznámka
      data.userAgent           // Browser info
    ]);

    // Vrátit úspěch
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Vrátit chybu
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Klikněte na **Uložit** (ikona diskety)
5. Pojmenujte projekt např. "Mobilheim Annotations"

---

### Krok 3: Nasazení webhooku

1. Klikněte na **Deploy** (Nasadit) → **New deployment** (Nové nasazení)
2. Vyberte typ: **Web app** (Webová aplikace)
3. Nastavení:
   - **Execute as:** Me (já)
   - **Who has access:** Anyone (kdokoliv)
4. Klikněte **Deploy** (Nasadit)
5. **Autorizujte aplikaci** (Google se zeptá na oprávnění)
6. **Zkopírujte URL** webhooku (vypadá jako: `https://script.google.com/macros/s/...../exec`)

---

### Krok 4: Aktivace v kódu webu

1. Otevřete soubor `/docs/javascripts/annotations.js`
2. Najděte řádek:
```javascript
const WEBHOOK_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEBHOOK_URL';
```
3. Nahraďte `'YOUR_GOOGLE_APPS_SCRIPT_WEBHOOK_URL'` vaší URL z kroku 3:
```javascript
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbz.../exec';
```
4. Uložte soubor
5. Commitněte a pushněte změny
6. Rebuild webu (viz níže)

---

## 🚀 Rebuild webu

Po nastavení webhooku musíte znovu buildnout web:

```bash
# Lokálně
mkdocs build
mkdocs gh-deploy

# Nebo přes GitHub Actions (pokud je nastavený)
git push origin main
```

---

## ✅ Testování

1. Otevřete web (https://radim-prog.github.io/mobilheim-wiki/)
2. **Označte nějaký text** na stránce
3. Objeví se **popup "Přidat poznámku"**
4. Napište testovací poznámku
5. Klikněte **"Uložit poznámku"**
6. Zkontrolujte Google Sheets - měl by se objevit nový řádek!

---

## 📊 Jak to používat

### Pro sekretářku:

1. **Označit text** myší (stačí přejet a držet)
2. **Automaticky se objeví popup**
3. **Napsat poznámku** do textového pole
4. **Kliknout "Uložit poznámku"**
5. ✅ Hotovo! Poznámka uložena

**Poznámky se ukládají automaticky do Google Sheets!**

### Pro vás (admin):

1. Otevřete Google Sheets tabulku
2. Vidíte všechny poznámky v přehledné tabulce:
   - Kdy byla poznámka přidána
   - Na které stránce
   - K jakému textu
   - Co sekretářka napsala

3. **Můžete:**
   - Filtrovat podle stránky
   - Hledat podle textu
   - Exportovat do Excel
   - Sdílet s kolegy
   - Přidat sloupec "Vyřešeno" pro tracking

---

## 🎨 Customizace

### Změna barvy tlačítek

V souboru `/docs/stylesheets/extra.css` najděte:

```css
.annotation-btn-save {
  background-color: var(--md-primary-fg-color, #3f51b5);
  color: #fff;
}
```

Změňte `#3f51b5` na jinou barvu.

### Změna textu

V souboru `/docs/javascripts/annotations.js` můžete změnit:
- Nadpis popupu: `<h3>Přidat poznámku</h3>`
- Text tlačítek: `Uložit poznámku`, `Zrušit`
- Placeholder: `Napište svou poznámku...`

---

## 🔒 Bezpečnost

- ✅ **Webhook je veřejný**, ale lze upravit Apps Script pro přidání autentizace
- ✅ **Google Sheets vidíte jen vy** (pokud ho nesdílíte)
- ✅ **Žádné citlivé údaje** se neukládají (jen text z webu + poznámky)
- ✅ **IP adresa se neukládá** (ale můžete přidat pokud chcete)

---

## 🆘 Řešení problémů

### "Chyba: Google Sheets není nakonfigurováno"

→ Zapomněli jste nahradit `WEBHOOK_URL` v `annotations.js`

### "Poznámka se neuložila"

→ Zkontrolujte:
1. Je webhook URL správná?
2. Máte povolenou Apps Script aplikaci?
3. Je Google Sheets otevřený a dostupný?

### "Popup se nezobrazuje"

→ Zkuste:
1. Označit delší text (min. 4 znaky)
2. Zkontrolovat konzoli prohlížeče (F12) na chyby
3. Refreshnout stránku (Ctrl+F5)

---

## 📞 Kontakt

Máte problémy s nastavením? Kontaktujte:
**Email:** radim@wikiporadce.cz

---

**Hotovo!** Systém poznámek je připraven k použití. 🎉
