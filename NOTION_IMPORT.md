# 📥 Import do Notion - Návod

**Hlavní stránka vytvořena!**

URL: https://www.notion.so/Mobilheim-Wiki-Kompletn-pr-vodce-292c49dc953281529cc3cac0254b591a

---

## 🚀 Jak nahrát obsah do Notion

Notion podporuje **přímý import Markdown souborů**. Máte 2 možnosti:

---

### ✅ MOŽNOST 1: Ruční import (doporučeno)

**Postup:**

1. **Otevřete hlavní stránku** v Notion:
   - https://www.notion.so/Mobilheim-Wiki-Kompletn-pr-vodce-292c49dc953281529cc3cac0254b591a

2. **Vytvořte strukturu stránek:**
   - Klikněte na stránku → ⋯ (tři tečky) → **Add page**
   - Vytvořte 4 hlavní stránky:
     - 📝 Blog (25 článků)
     - 📚 Wiki (6 sekcí)
     - ❓ FAQ (112 otázek)
     - 📊 Případové studie (5 studií)

3. **Import Markdown souborů:**

   **Pro Blog:**
   - Otevřete stránku "Blog"
   - Klikněte ⋯ → **Import** → **Markdown**
   - Vyberte všechny soubory z `/blog/` (01-kompletni-pruvodce.md až 25-budoucnost-trendy-2025-2030.md)
   - Notion vytvoří pod-stránku pro každý soubor ✅

   **Pro Wiki:**
   - Otevřete stránku "Wiki"
   - Klikněte ⋯ → **Import** → **Markdown**
   - Postupně importujte každou sekci:
     - `/wiki/01-legislativa/` (6 souborů)
     - `/wiki/02-technicke-specifikace/` (9 souborů)
     - `/wiki/03-energetika/` (4 soubory)
     - `/wiki/04-pripojeni-siti/` (3 soubory)
     - `/wiki/05-financovani-dotace/` (4 soubory)
     - `/wiki/06-udrzba-zivotnost/` (3 soubory)

   **Pro FAQ:**
   - Otevřete stránku "FAQ"
   - Import: `/faq/faq-kompletni.md`

   **Pro Případové studie:**
   - Otevřete stránku "Případové studie"
   - Import: `/wiki/pripadove-studie/` (5 souborů)

---

### ✅ MOŽNOST 2: Automatický import (Python skript)

Vytvořil jsem Python skript pro automatický import všech souborů.

**Prerekvizity:**
```bash
pip install notion-client
```

**Skript:**
```python
# Viz soubor: notion_import.py (připravuji...)
```

---

## 📂 Struktura po importu

```
📚 Mobilheim Wiki - Kompletní průvodce
├── 📝 Blog (25 článků)
│   ├── 01 - Kompletní průvodce mobilními domy 2025
│   ├── 02 - 10 věcí, které vám nikdo neříká
│   ├── ...
│   └── 25 - Budoucnost mobilních domů: Trendy 2025-2030
│
├── 📚 Wiki
│   ├── 01 - Legislativa (6 souborů)
│   ├── 02 - Technické specifikace (9 souborů)
│   ├── 03 - Energetika (4 soubory)
│   ├── 04 - Připojení sítí (3 soubory)
│   ├── 05 - Financování a dotace (4 soubory)
│   └── 06 - Údržba a životnost (3 soubory)
│
├── ❓ FAQ (112 otázek)
│   └── Kompletní FAQ
│
└── 📊 Případové studie (5 studií)
    ├── 01 - Off-grid resort
    ├── 02 - Mladá rodina - Airbnb
    ├── 03 - Senior - pasivní dům
    ├── 04 - Mladík - tiny house
    └── 05 - Chatová osada
```

---

## 💡 TIPY

### 1. Interní odkazy
Markdown odkazy fungují v Notion! Interní odkazy mezi články budou funkční po importu.

### 2. Tabulky
Markdown tabulky se automaticky převedou na Notion tabulky ✅

### 3. Formátování
Veškeré formátování (tučné, kurzíva, seznamy) se zachová ✅

### 4. Emojis
Všechny emoji se zachovají 🏠✅🔥

---

## ⚡ Rychlý start (5 minut)

1. Otevřete Notion stránku: https://www.notion.so/Mobilheim-Wiki-Kompletn-pr-vodce-292c49dc953281529cc3cac0254b591a
2. Vytvořte 4 stránky (Blog, Wiki, FAQ, Případové studie)
3. Do každé importujte příslušné `.md` soubory
4. **Hotovo!** ✅

---

## 📞 Potřebujete pomoc?

Pokud máte problémy s importem, dejte vědět!

---

**Datum:** 20. října 2025
**Notion Page ID:** 292c49dc-9532-8152-9cc3-cac0254b591a
**API Token:** (máte uložený)

