# 🔧 Notion Setup - Krok za krokem

## Problém
API vrací 403 Forbidden → integrace nemá přístup k teamspace

---

## ✅ ŘEŠENÍ - Postup (5 minut)

### KROK 1: Zkontrolujte integraci

1. Jděte na: https://www.notion.so/my-integrations
2. Najděte vaši integraci (nebo vytvořte novou)
3. Zkopírujte "Internal Integration Token" (začíná `ntn_...`)

---

### KROK 2: Přidejte integraci do teamspace

1. **Otevřete Notion**
2. Jděte do teamspace **"Domečky"**
3. Klikněte na **Settings & members** (ikona ozubeného kola)
4. V levém menu: **Connections**
5. Klikněte **"+ Add connection"**
6. Vyberte vaši integraci
7. ✅ Potvrďte

---

### KROK 3: Vytvořte stránku v teamspace

Máte 2 možnosti:

#### A) Vytvořte stránku ručně (doporučuji):

1. V teamspace "Domečky" vytvořte novou stránku
2. Pojmenujte ji: **"Mobilheim Wiki - Kompletní průvodce"**
3. Přidejte emoji: 🏠
4. Klikněte na stránce **`•••`** (tři tečky) → **"Add connections"**
5. Vyberte vaši integraci
6. Zkopírujte **Page ID** z URL (část za notion.so/)
   - Příklad URL: `https://notion.so/Mobilheim-Wiki-123abc456def...`
   - Page ID: `123abc456def...`

#### B) Nebo dejte integrace přístup k celému teamspace (viz KROK 2)

---

### KROK 4: Spusťte upload skript

Až budete mít připravenou stránku:

```bash
# Nastavte proměnné
export NOTION_TOKEN="your_notion_token_here"  # Váš Notion API token
export PARENT_PAGE_ID="ID_VASI_STRANKY"  # Z kroku 3

# Spusťte upload
python3 notion_upload_final.py
```

---

## 🚀 RYCHLÉ ŘEŠENÍ (bez API)

Pokud nechcete řešit API:

### Manuální import markdown souborů:

1. Vytvořte stránku "Mobilheim Wiki" v teamspace Domečky
2. Vytvořte 4 podstránky: Blog, Wiki, FAQ, Studie
3. U každé podstránky:
   - Klikněte `⋯` → `Import` → `Markdown`
   - Vyberte odpovídající `.md` soubory z projektu
4. Notion automaticky převede markdown → pěkně naformátovaný obsah
5. `Share` → `Publish to web` → veřejný odkaz

**Trvá to 10 minut a je to 100% spolehlivé!**

---

## 📋 Soubory k importu

```
blog/           → 24 článků (*.md)
wiki/legislativa/     → 7 souborů
wiki/technicke-specifikace/  → 6 souborů
wiki/pripojeni-siti/  → 3 soubory
wiki/financovani/     → 2 soubory
wiki/udrzba/          → 1 soubor
wiki/pripadove-studie/ → 5 studií
faq/            → 1 kompletní FAQ (112 otázek)
```

---

## ❓ Co preferujete?

1. **MANUÁLNÍ** = 10 minut, 100% spolehlivé, pěkný výsledek
2. **AUTOMATICKÉ** = nastavit API přístup (kroky výše), pak 1 klik

Dejte vědět, kterou cestou půjdeme!
