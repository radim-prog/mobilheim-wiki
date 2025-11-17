# 📋 CHANGELOG - Mobilheim Wiki

Veškeré důležité změny v tomto projektu budou zdokumentovány v tomto souboru.

**Formát:** Verzování podle data + popis změn
**Aktuální verze:** 2.0 FINAL (16. listopadu 2025)

---

## [2.0 FINAL] - 16. listopadu 2025

### ✅ AKTUÁLNÍ PRODUKČNÍ VERZE

**Status:** ✅ Kompletně auditováno, ověřeno, připraveno k použití

### 📚 Přidáno

**43 nových blog článků (33-75):**
- Narativní formát s 2 protagonisty (Před/Po srovnání)
- Konkrétní finanční dopady (průměrně ~350 000 Kč rozdíl)
- Realistická česká jména a částky v Kč
- Délka 150-250 řádků každý
- Datum publikace: 16.11.2025

**30 FAQ otázek (docs/faq.md):**
- Research-based z 5 paralelních zdrojů:
  - Konkurenční analýza (Tropikana, ABODES, Lavaro House)
  - Google PAA a search trends
  - Legislativní fóra a stavební úřady
  - Finanční kalkulátory
  - Technická fóra
- Kompletní cross-linking na wiki + blog články
- 8 kategorií otázek

**Archiv původních blogů:**
- Přesunuto 31 původních blogů (02-32) do `/docs/blog-archive/2024-original/`
- Označeno jako zastaralé (neověřená data, staré ceny, zrušené zákony)

**Nová dokumentace:**
- CHANGELOG.md (tento soubor)
- README.md kompletně přepsán s verzováním
- `.claude-memory/2025-11-16-wiki-blog-revision-final.md` - kompletní dokumentace revize

### 🔧 Opraveno - KRITICKÉ právní chyby

**Zákon 283/2021 Sb. (Stavební zákon):**
- ❌ **CHYBA:** Účinnost "1. července 2024"
- ✅ **OPRAVA:** Účinnost **"1. ledna 2024"**
- 🚨 **DOPAD:** KRITICKÝ - mohlo způsobit čtenářům velké finanční škody

**Vyhláška 501/2006 Sb.:**
- ❌ **CHYBA:** Označena jako platná
- ✅ **OPRAVA:** **ZRUŠENA k 1.1.2024**, nahrazena vyhláškou 146/2024 Sb.

**Vyhláška 268/2009 Sb.:**
- ❌ **CHYBA:** Uváděna jako platná
- ✅ **OPRAVA:** **ZRUŠENA k 1.1.2024**, nahrazena vyhláškou 146/2024 Sb.

**Vyhláška 73/2010 Sb. a 50/1978 Sb.:**
- ❌ **CHYBA:** Uváděny jako platné
- ✅ **OPRAVA:** **ZRUŠENY k 1.7.2022**, nahrazeny zákonem 250/2021 Sb.

**Zákon 145/2010 Sb.:**
- ❌ **CHYBA:** Uveden jako platný
- ✅ **OPRAVA:** **ZRUŠEN**, nahrazen zákonem 257/2016 Sb.

**Vyhláška 43/2025 Sb.:**
- ❌ **CHYBA:** Limity CO₂ (1 500 ppm) a formaldehydu (100 μg/m³)
- ✅ **OPRAVA:** CO₂ **1 200 ppm průměr**, formaldehyd **50 μg/m³**

**Bezbariérové rampy (vyhláška 398/2009 Sb.):**
- ❌ **CHYBA:** Sklon 8,33 % (1:12)
- ✅ **OPRAVA:** Sklon **6,25 % (1:16)**

### 💰 Aktualizováno - Ceny (listopad 2025)

| Položka | Původní | Aktuální 11/2025 |
|---------|---------|------------------|
| **Elektřina** | 6,00 Kč/kWh | **7,61 Kč/kWh** |
| **Voda** | 133 Kč/m³ | **133,30 Kč/m³** |
| **Daň z nemovitosti** | 2 Kč/m² | **3,50 Kč/m²** |
| **Vrtání studny** | 2 100 Kč/m | **2 500 Kč/m** |

**Všechny ostatní ceny:** Materiály, služby, přípojky aktualizovány na listopad 2025

### 📐 Aktualizováno - Technické normy

- **ČSN 73 0540-2:** Aktualizována na verzi z **srpna 2025** (účinná od 1.9.2025)
- **Všechny odkazy na normy:** Ověřeny a aktualizovány

### 🔍 Změněno - Struktura projektu

**Před (verze 1.0):**
```
docs/
└── blog/
    ├── 02-32.md (původní, neověřené)
    └── 33-75.md (nové, ověřené)
```

**Po (verze 2.0 FINAL):**
```
docs/
├── blog/
│   └── 33-75.md (43 článků - AKTUÁLNÍ)
├── blog-archive/
│   └── 2024-original/
│       └── 02-32.md (31 článků - ARCHIV)
└── faq.md (30 otázek - NOVÉ)
```

### 📊 Statistiky verze 2.0

**Obsah:**
- 43 wiki článků (~6 450 řádků)
- 43 blog článků (~8 600 řádků)
- 30 FAQ otázek (610 řádků)
- **Celkem:** ~15 660 řádků ověřeného obsahu

**Finanční dopady v blog článcích:**
- Průměrný rozdíl špatné/správné rozhodnutí: **~350 000 Kč**
- Range: 127 000 - 3 480 000 Kč
- Top 5 největších dopadů:
  1. Park vs vlastní pozemek: **3 480 000 Kč**
  2. Tiny house vs mobilní: **2 436 000 Kč**
  3. Modulární vs mobilní: **1 780 000 Kč**
  4. Kontejner vs mobilní: **1 111 000 Kč**
  5. Žumpa vs ČOV: **1 017 500 Kč**

### 🛠️ Tech Stack použitý

**Nástroje:**
- WebFetch - ověřování zákonů (zakonyprolidi.cz)
- WebSearch - vyhledávání aktuálních cen
- Brave Search - doplňkové ověření (limitovaně)
- Task tool - orchestrace 7 paralelních agentů

**Workflow:**
- 7 batchů po 7 článcích (wiki audit + blog vytvoření)
- Paralelní zpracování = 7x rychlejší
- Dokončeno za 2 dny (15-16.11.2025)

### 🔗 Git Commits

```bash
# 1. Hlavní revize
6337ec8 - "📚 Kompletní revize Wiki + 43 nových blogů (33-75)"

# 2. FAQ
eff90ce - "❓ FAQ - 30 research-based otázek s cross-linking"

# 3. Reorganizace (tento commit)
[aktuální] - "🗂️ v2.0 FINAL - Reorganizace projektu + archiv starých blogů"
```

---

## [1.0 Production] - 15. listopadu 2025

### ⚠️ ZASTARALÁ VERZE - Nepoužívat!

**Status:** ⚠️ Archivováno kvůli kritickým právním chybám a zastaralým cenám

### 📚 Obsah (původní)

- **40 wiki článků** (kompletní dokumentace v 9 kategoriích)
- **25 blogových článků** (~112,000 slov) - **později rozšířeno na 31 blogů (02-32)**
- **121 FAQ otázek** (1 komplexní soubor) - **později nahrazeno 30 research-based otázkami**
- **5 případových studií** (reálné kalkulace a ROI)

### ⚠️ Identifikované problémy

**Kritické právní chyby:**
- ❌ Zákon 283/2021: Špatné datum účinnosti (1.7.2024 místo 1.1.2024)
- ❌ Vyhláška 501/2006: Označena jako platná (ve skutečnosti ZRUŠENA)
- ❌ Vyhláška 268/2009: Označena jako platná (ve skutečnosti ZRUŠENA)
- ❌ Vyhláška 73/2010, 50/1978: Označeny jako platné (ve skutečnosti ZRUŠENY)
- ❌ Zákon 145/2010: Označen jako platný (ve skutečnosti ZRUŠEN)

**Zastaralé ceny:**
- ❌ Elektřina: 6 Kč/kWh (skutečnost: 7,61 Kč/kWh)
- ❌ Voda: 133 Kč/m³ (skutečnost: 133,30 Kč/m³)
- ❌ Daň z nemovitosti: 2 Kč/m² (skutečnost: 3,50 Kč/m²)
- ❌ Vrtání studny: 2 100 Kč/m (skutečnost: 2 500 Kč/m)

**Neověřená data:**
- ❌ Původní 31 blogů (02-32) - nebyly postaveny na prověřených datech
- ❌ 121 FAQ otázek - nebyly založeny na research, ale vymyšlené

### 📦 Archivace

**Co bylo archivováno:**
- 31 původních blogů (02-32) → `/docs/blog-archive/2024-original/`

**Co bylo nahrazeno:**
- 43 wiki článků - kompletně auditováno a opraveno
- 43 nových blogů (33-75) - research-based s finančními dopady
- 30 FAQ otázek - research-based z 5 zdrojů

---

## [0.9 Beta] - Před 15. listopadem 2025

### ⚠️ ZASTARALÁ VERZE - Pouze historická reference

**Status:** ⚠️ Archivováno

### 📚 Obsah

- Různé verze wiki článků (40-43 článků)
- Různé verze blogů (25-32 článků)
- FAQ soubory (různé verze)

### ⚠️ Známé problémy

- Všechny problémy z verze 1.0 Production
- Dodatečně: Nekonzistentní formátování, chybějící cross-linking, neúplná dokumentace

---

## 🚨 KRITICKÉ pravidlo

**⚠️ VŽDY používej POUZE verzi 2.0 FINAL (16. listopadu 2025)!**

1. Nikdy netahovat staré soubory z cache
2. Verze 2.0 FINAL je referenční
3. Všechny další změny stavět NA TÉTO VERZI
4. Při dotazu na projekt:
   - Načti `.claude-memory/2025-11-16-wiki-blog-revision-final.md`
   - Pull z GitHubu
   - Pracuj s aktuální verzí
   - Nikdy se nevracet k verzím před 15.11.2025

---

## 📝 Formát verzování

**[MAJOR.MINOR] - Datum (DD. měsíc YYYY)**

**MAJOR změny:**
- Kompletní revize obsahu
- Kritické právní opravy
- Reorganizace struktury projektu

**MINOR změny:**
- Přidání nových článků
- Aktualizace cen
- Opravy překlepů a formátování

---

**Poslední aktualizace:** 16. listopadu 2025
**Aktuální verze:** 2.0 FINAL
**Status:** ✅ PRODUKČNÍ
