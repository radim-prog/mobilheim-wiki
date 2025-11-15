# Git Workflow - Mobilheim Wiki

**Datum vytvoření:** 15. listopadu 2025
**Verze:** 1.0

---

## 🎯 Cíl

Zajistit, aby:
1. **Produkce (`main`)** = vždy funkční, schválená verze
2. **Development (`dev`)** = pracovní prostředí, experimenty, WIP
3. **Staré verze** = archivované, ale dostupné přes Git tags

---

## 📋 Branch Strategie

### `main` - Produkční branch
- ✅ **FREEZE** - změny JEN na explicitní pokyn majitele
- ✅ Vždy 100% funkční obsah
- ✅ Tagované verze (v1.0, v1.1, v2.0...)
- ❌ **NIKDY** nepushovat WIP nebo experimenty!

### `dev` - Development branch
- ✅ Běžná práce, experimenty, drafty
- ✅ Auto-commit po každé významné změně
- ✅ Volnost experimentovat bez obav o stabilitu
- ⚠️ Může obsahovat nedokončené věci

---

## 🔄 Workflow Pro Claude Code

### Běžná práce (experimenty, WIP):
```bash
# 1. Vždy pracuj v dev branch
git checkout dev

# 2. Po dokončení úkolu/změny - auto commit
git add .
git commit -m "📝 Popis změny"

# 3. NEPUSHUJ na GitHub (jen lokální)
```

### Schválení nové verze (na pokyn majitele):
```bash
# 1. Merge dev → main
git checkout main
git merge dev --no-ff -m "🚀 Release v1.X"

# 2. Tag verze
git tag -a v1.X -m "Verze 1.X - Popis změn"

# 3. Push na GitHub
git push origin main --tags
```

---

## 🏷️ Verzování

### Sémantické verzování:
- **v1.0** = První produkční verze (40 článků)
- **v1.1** = Minor update (opravy, drobné změny)
- **v2.0** = Major update (nové sekce, významné změny)

### Kdy vytvořit novou verzi:
- ✅ Majitel řekne: "Schvaluju, ulož jako novou verzi"
- ✅ Dokončen významný milestone (50 článků, nová kategorie)
- ❌ **NIKDY** automaticky bez pokynu!

---

## 📦 Archivace

### Staré drafty a dokumenty:
```
archive/
├── old-docs/           # Staré README, ZADANI.md, QA.md
├── deprecated/         # Zastaralé články
└── versions/           # Snapshoty starých verzí (pokud potřeba)
```

### Pravidlo:
- Vše co již není aktuální → `archive/`
- Git tags zajišťují přístup ke starým verzím kódu
- README vždy popisuje **současnou** verzi

---

## 🚨 KRITICKÁ PRAVIDLA

### ❌ NIKDY:
1. Nepushovat do `main` bez schválení
2. Neměnit schválené verze (tagged commits)
3. Nemíchat WIP s produkcí
4. Nesmazat Git tags (historie verzí)

### ✅ VŽDY:
1. Pracuj v `dev` branch
2. Commituj často (malé logické celky)
3. Před merge do `main` → zeptej se majitele
4. Tag každou produkční verzi

---

## 📝 Commit Message Formát

### Strukturované commity:
```
📝 Content: Nový wiki článek o X
🔧 Fix: Oprava chyby v Y
♻️ Refactor: Reorganizace Z
🚀 Release: Verze 1.X
📚 Docs: Aktualizace README
🗄️ Archive: Přesun starých dokumentů
```

---

## 🔍 Quick Reference

### Zjištění aktuálního stavu:
```bash
git status              # Co je změněno?
git log --oneline -10   # Poslední commity
git tag                 # Všechny verze
git diff main dev       # Rozdíl mezi prod a dev
```

### Návrat k staré verzi (pro review):
```bash
git checkout v1.0       # Podívej se na v1.0
git checkout dev        # Vrať se zpět do dev
```

---

**Autor:** Claude Code (Project Master)
**Pro:** Mobilheim Wiki
**Účel:** Prevence chaosu ve verzích
