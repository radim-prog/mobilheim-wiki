# Wiki Audit Strategie - Mobilheim Wiki

**Datum:** 2025-11-15
**Expert Role:** Legal Expert + Construction Lawyer + Content Strategist
**Status:** active

---

## 🎯 CÍL

Systematicky zkontrolovat a opravit všechny Wiki soubory (40 souborů, 19,669 řádků) s důrazem na:
1. **Právní přesnost** (zákony, vyhlášky, limity)
2. **Business kontext** (č.p. vs č.e., připojení sítí = ztráta mobility, letniskowo.eu produkty)
3. **Konzistenci** napříč všemi sekcemi

---

## 📊 WIKI STRUKTURA (50 souborů, 19,669 řádků)

### Prioritizace podle business impact:

#### 🔴 **KRITICKÉ (P0)** - Začínáme zde
**wiki/legislativa/** (8 souborů, 3,765 řádků)
- Nejvíce ovlivňuje FAQ
- Základ pro business rozhodnutí zákazníků
- Nejčastější chyby (40m² vs 55m², územní rozhodnutí)

Soubory:
1. `novy-zakon-283-2021.md` (394 ř.) - MASTER dokument
2. `stary-zakon-183-2006.md` (862 ř.)
3. `uzemni-planovani.md` (874 ř.)
4. `registrace-kataster.md` (532 ř.)
5. `vyhlasky.md` (326 ř.)
6. `vyhlaska-501-2006.md` (169 ř.)
7. `metodika-mobilni-domy-2022.md` (370 ř.)
8. `judikatura/prehled-soudnich-rozhodnuti.md` (493 ř.)
9. `README.md` (137 ř.)

#### 🟠 **VYSOKÁ (P1)** - Po legislativě
**wiki/zakladni-koncepty/** (3 soubory, 1,251 řádků)
- Základ porozumění zákazníka
- Definice rozdílů mezi typy domů

Soubory:
1. `kontejnery-vs-mobilni-domy.md` (604 ř.)
2. `mobilni-domy-vs-tiny-houses.md` (367 ř.)
3. `modularni-vs-mobilni-domy.md` (280 ř.)

#### 🟡 **STŘEDNÍ (P2)** - Technické detaily
**wiki/technicke-specifikace/** (17 souborů, 6,165 řádků)
- Důležité pro rozhodování zákazníka
- Musí odpovídat letniskowo.eu produktům

**wiki/pripojeni-siti/** (3 soubory, 451 řádků)
- KRITICKÉ pro business kontext (připojení = ztráta mobility)
- Ale už pokryté v legislativa/novy-zakon

#### 🟢 **NÍZKÁ (P3)** - Marketing & Stories
**wiki/pripadove-studie/** (5 souborů, 1,831 řádků)
**wiki/lifestyle/** (3 soubory, 1,039 řádků)
**wiki/porovnani/** (1 soubor, 409 řádků)

#### 🔵 **PROVOZNÍ (P4)** - Praktické rady
**wiki/prakticke-pruvodce/** (4 soubory, 2,228 řádků)
**wiki/financovani/** (2 soubory, 1,493 řádků)
**wiki/udrzba/** (1 soubor, 267 řádků)

---

## 🚀 WORKFLOW PRO KAŽDOU SEKCI

### FÁZE 1: KRITICKÁ ANALÝZA (Legislativa - START)

**Krok 1: Načti MASTER dokument**
```bash
Read: wiki/legislativa/novy-zakon-283-2021.md
```

**Krok 2: Identifikuj chyby proti:**
- ✅ Zákon 283/2021 Sb. (aktuální znění z .gov.cz)
- ✅ Vyhláška 501/2006 Sb.
- ✅ Business kontext (BUSINESS-CONTEXT.md)
- ✅ Reálné produkty (letniskowo.eu 20-69m²)

**Krok 3: Vytvořím opravný dokument**
```
.claude-memory/2025-11-15-opravy-novy-zakon-283-2021.md
```

Formát:
```markdown
## Chyba #1: Velikostní limity
**Řádky:** 41-43
**Současný text:** "zastavěná plocha nesmí překročit 55 m²"
**Problém:** Nerozlišuje č.p. (40m²) vs č.e. (55m²)
**Oprava:** "40 m² pro obytné (č.p.), 55 m² pro rekreační (č.e.)"
**Zdroj:** Vyhláška 501/2006 Sb., § 25
**Business dopad:** Zákazníci neví rozdíl → špatné rozhodnutí
```

**Krok 4: Předložím ke schválení**
- Ukážu 3-5 nejkritičtějších chyb
- Počkám na "OK, pokračuj"
- Implementuji všechny opravy

**Krok 5: Aplikuji opravy**
```bash
Edit: wiki/legislativa/novy-zakon-283-2021.md
(všechny identifikované chyby najednou)
```

**Krok 6: Commit**
```bash
git add wiki/legislativa/novy-zakon-283-2021.md
git commit -m "🔧 Oprava novy-zakon-283-2021.md

✅ Opravy:
- Rozdíl 40m² (č.p.) vs 55m² (č.e.)
- Vždy nutné územní rozhodnutí
- Připojení sítí = ztráta mobility
- Business kontext (letniskowo.eu produkty)

📚 Ověřeno proti:
- Zákon 283/2021 Sb. (zakonyprolidi.cz)
- Vyhláška 501/2006 Sb.
- BUSINESS-CONTEXT.md

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## 📋 TRACKING - CHECKLIST

### ✅ Legislativa (P0) - 8 souborů
- [ ] novy-zakon-283-2021.md (394 ř.) ← **START TU**
- [ ] stary-zakon-183-2006.md (862 ř.)
- [ ] uzemni-planovani.md (874 ř.)
- [ ] registrace-kataster.md (532 ř.)
- [ ] vyhlasky.md (326 ř.)
- [ ] vyhlaska-501-2006.md (169 ř.)
- [ ] metodika-mobilni-domy-2022.md (370 ř.)
- [ ] judikatura/prehled-soudnich-rozhodnuti.md (493 ř.)
- [ ] README.md (137 ř.)

### ⏳ Zakladni-koncepty (P1) - 3 soubory
- [ ] kontejnery-vs-mobilni-domy.md (604 ř.)
- [ ] mobilni-domy-vs-tiny-houses.md (367 ř.)
- [ ] modularni-vs-mobilni-domy.md (280 ř.)

### ⏳ Technicke-specifikace (P2) - 17 souborů
- [ ] 17 souborů (6,165 řádků)

### ⏳ Pripojeni-siti (P2) - 3 soubory
- [ ] 3 soubory (451 řádků)

### ⏳ Ostatní (P3-P4) - 19 souborů
- [ ] 19 souborů (7,267 řádků)

---

## 🎯 KLÍČOVÉ KONTROLNÍ BODY

Pro každý soubor kontroluj:

### 1. Právní přesnost
- ✅ Čísla zákonů aktuální (283/2021, ne 183/2006 pro nové případy)
- ✅ Velikostní limity správné (40 vs 55 m²)
- ✅ Územní rozhodnutí VŽDY nutné (ne "většinou ne")
- ✅ Rozdíl č.p. (popisné) vs č.e. (evidenční)

### 2. Business kontext
- ✅ Připojení sítí = ztráta mobility (vždy zmíněno)
- ✅ Produkty letniskowo.eu (20-69 m²)
- ✅ Služba "na klíč" (vyřízení procesu)
- ✅ Cenový rozdíl č.p. vs č.e. (statisíce Kč)

### 3. Konzistence terminologie
- ✅ "Mobilní dům" vs "dřevostavba" vs "montovaný dům"
- ✅ "Výrobek plnící funkci stavby" (právní termín)
- ✅ "Trvalé bydliště" vs "rekreace"
- ✅ "Územní rozhodnutí" vs "stavební povolení"

### 4. Odkazy a zdroje
- ✅ Všechny odkazy na zákony aktuální
- ✅ URL funkční (zakonyprolidi.cz, mmr.gov.cz)
- ✅ Reference na jiné wiki sekce správné

---

## 💡 ANTI-PATTERNS (Čeho se vyvarovat)

❌ Neopravovat "na rychlo" bez kontextu
❌ Nekopírovat text z konkurence
❌ Neměnit styl psaní (zachovat současný tón)
❌ Nepřidávat nová témata (jen opravy faktů)
❌ Neopravovat FAQ/Blog současně (až po Wiki!)

✅ Systematicky po sekcích
✅ Každá sekce = 1 commit
✅ Vždy předložit klíčové změny ke schválení
✅ Business kontext VŽDY přítomen

---

## 📅 ODHAD ČASŮ

**Legislativa (8 souborů):**
- Analýza: 2-3 hodiny (hloubková kontrola)
- Opravy: 1-2 hodiny
- Review & commit: 30 min
**Celkem: ~4-6 hodin práce**

**Zakladni-koncepty (3 soubory):**
- Analýza: 1 hodina
- Opravy: 30 min
**Celkem: ~1.5 hodiny**

**Technicke-specifikace (17 souborů):**
- Analýza: 3-4 hodiny
- Opravy: 2 hodiny
**Celkem: ~5-6 hodin**

**CELKEM: ~10-15 hodin čisté práce**
(Rozložené do několika dnů/sessions)

---

## 🚦 ROZHODNUTÍ NA START

**Začínáme:**
1. `wiki/legislativa/novy-zakon-283-2021.md` (394 řádků)
2. Identifikuji TOP 5 chyb
3. Ukážu ti je
4. Po schválení → opravím celý soubor
5. Commit
6. → Další soubor v legislativa sekci

**Pokračujeme dokud:**
- ✅ Celá legislativa hotová (8 souborů)
- ✅ Pak zakladni-koncepty (3 soubory)
- ✅ Pak technicke-specifikace (17 souborů)
- ✅ Pak zbytek

---

**Next Step:** Načíst `novy-zakon-283-2021.md` a začít analýzu.
