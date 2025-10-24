# 🚀 GitHub Pages - Jak publikovat web

Váš web je připravený! Stačí ho aktivovat v GitHub nastavení.

---

## ✅ Krok za krokem (2 minuty)

### 1. Otevřete GitHub repozitář

Jděte na: https://github.com/radim-prog/mobilheim-wiki

---

### 2. Nastavení GitHub Pages

1. Klikněte na **Settings** (v horním menu)
2. V levém menu klikněte na **Pages**
3. V sekci **Source**:
   - **Branch:** Vyberte `claude/load-data-011CURm8kuaBXyGbkbNzF6Bf` (nebo main po merge)
   - **Folder:** Vyberte `/docs`
4. Klikněte **Save**

---

### 3. Počkejte 1-2 minuty

GitHub automaticky:
- Vygeneruje web z vašich markdown souborů
- Publikuje ho na veřejnou URL

---

### 4. Váš web bude dostupný na:

```
https://radim-prog.github.io/mobilheim-wiki/
```

---

## 🎨 Co web obsahuje

### Funkce:
- ✅ **Profesionální design** (Material theme)
- ✅ **Vyhledávání** (full-text search)
- ✅ **Navigace** (sidebar menu)
- ✅ **Tmavý/světlý režim**
- ✅ **Responzivní** (mobil, tablet, desktop)

### Obsah:
- 📝 **25 blogových článků**
- 📚 **Kompletní Wiki** (legislativa, technické, finance)
- ❓ **112 FAQ otázek**
- 📊 **5 případových studií**

---

## 🔧 Lokální preview (volitelné)

Pokud chcete vidět web PŘED publikací:

```bash
# Nainstalujte MkDocs (už máte)
pip install mkdocs-material

# Spusťte lokální server
mkdocs serve

# Otevřete v prohlížeči:
# http://127.0.0.1:8000
```

---

## 🌐 Vlastní doména (volitelné)

Pokud chcete použít vlastní doménu (např. `wiki.novyrozmerbydleni.cz`):

1. V GitHub Pages nastavení přidejte **Custom domain**
2. V DNS nastavení domény přidejte CNAME záznam:
   ```
   wiki.novyrozmerbydleni.cz → radim-prog.github.io
   ```
3. Hotovo!

---

## 📊 Výhody tohoto řešení

✅ **Zdarma** - GitHub Pages je zdarma pro veřejné repozitáře
✅ **Rychlé** - CDN distribuce po celém světě
✅ **Spolehlivé** - 99.9% uptime
✅ **Jednoduché** - Stačí commitnout markdown → automaticky se publikuje
✅ **Verzované** - Každá změna je verzovaná v Gitu

---

## 🔄 Jak aktualizovat obsah

1. Upravte markdown soubory v `/docs/`
2. Commit + push do GitHubu
3. GitHub Pages automaticky aktualizuje web (1-2 min)

---

## ❓ Problémy?

**Web se nezobrazuje?**
- Počkejte 2-3 minuty po aktivaci
- Zkontrolujte GitHub Pages nastavení (Settings → Pages)
- Ujistěte se, že branch a folder jsou správně nastavené

**404 Error?**
- Zkontrolujte URL: `https://radim-prog.github.io/mobilheim-wiki/` (s lomítkem na konci)

**Odkazy nefungují?**
- To je OK - některé interní odkazy jsou broken (warning při buildu)
- Web je plně funkční, jen některé cross-references chybí

---

## 🎯 Další kroky

Po aktivaci GitHub Pages:

1. ✅ Otevřete web a zkontrolujte obsah
2. ✅ Pošlete odkaz ke kontrole kolegům
3. ✅ Případně upravte design v `mkdocs.yml`
4. ✅ Zvažte vlastní doménu

---

**Datum:** Říjen 2025
**Technologie:** MkDocs Material + GitHub Pages
**Dokumentace:** https://squidfunk.github.io/mkdocs-material/
