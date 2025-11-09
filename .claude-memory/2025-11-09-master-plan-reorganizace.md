# MASTER PLÁN: Mobilheim Wiki Reorganizace

**Datum:** 2025-11-09
**Expert Role:** Project Manager + SEO Strategist + Content Auditor
**Status:** Planning phase
**Kontext:** Projekt potřebuje reorganizaci - obsah je kompletní, ale napsaný strojově pro experty místo pro zákazníky

---

## 🎯 CÍL PROJEKTU

**Přepsat Wiki obsah z "expertního" do "lidského" jazyka** při zachování:
- ✅ Detailních dat (pro SEO)
- ✅ Technické přesnosti
- ✅ Kompletnosti informací

**ODSTRANIT:**
- ❌ Právnický jazyk ("Zákon č. 283/2021 Sb., o stavebních výrobcích...")
- ❌ Inženýrský žargon ("Součinitel prostupu tepla, označovaný jako U-hodnota...")
- ❌ Nekonečné věty (100+ slov)
- ❌ Nerelevantní výpočty a teorie

---

## 📊 SOUČASNÝ STAV (Inventory)

### WIKI: 24 článků, ~52,061 slov
**Problém:** Strojově napsané, nečitelné pro běžné lidi

**Struktura:**
- Legislativa (6 článků) - ~18,500 slov
- Technické specifikace (6) - ~18,000 slov
- Případové studie (5) - ~6,000 slov
- Připojení sítí (3) - ~6,000 slov
- Financování (2) - ~2,000 slov
- Údržba (1) - ~1,500 slov
- Index (1)

### BLOG: 24 článků, ~43,129 slov
**Status:** Pravděpodobně OK (lidský jazyk)

**Kategorie:**
- Průvodce a návody (8)
- Financování a ceny (4)
- Energetika a úspory (5)
- Mýty a fakta (2)
- Porovnání (2)
- Speciální skupiny (2)
- Trendy (1)

### FAQ: 112 otázek, ~4,450 slov
**Status:** DOBRÉ (jasné, heslovité odpovědi)

**Kategorie:** 7 hlavních (Legislativa, Náklady, Technické, Výběr, Provoz, Praktické, Speciální)

---

## 🔍 RESEARCH VÝSLEDKY

### Co kupující SKUTEČNĚ hledají (Top 10):

1. **Kolik to celkově stojí?** (včetně skrytých nákladů)
2. **Potřebuji povolení?** (ano/ne, jak dlouho, kolik)
3. **Můžu to postavit na mém pozemku?** (územní plán)
4. **Dostanu hypotéku/dotaci?** (ano/ne, podmínky)
5. **Můžu mít trvalé bydliště?** (ano/ne, co potřebuju)
6. **Vydrží to zimu?** (izolace, vytápění, náklady)
7. **Jak dlouho to vydrží?** (životnost, údržba)
8. **Co je v ceně "pod klíč"?** (co JE a co NENÍ)
9. **Jak rychle to postavím?** (timeline)
10. **Jaké jsou skryté náklady?** (přípojky, projekt, terasa)

### Co lidi NEZAJÍMÁ:

- ❌ Přesné paragrafy zákonů
- ❌ Výrobní proces v továrně
- ❌ Složité inženýrské výpočty
- ❌ Historie mobilních domů od 1950
- ❌ Teoretické srovnání s klasickými domy

### Zlaté pravidlo obsahu:
**"Pokud to neovlivní peněženku, časovou osu, nebo právní situaci - pravděpodobně je to nezajímá."**

---

## 📋 STRATEGICKÝ PLÁN (3 fáze)

### FÁZE 1: CONTENT AUDIT & PRIORITIZACE (2 dny)

**Cíl:** Zjistit co ZACHOVAT, co PŘEPSAT, co SMAZAT

**Úkoly:**
1. Paralelní analýza všech 24 Wiki článků (3 agenti)
2. Audit Blog článků (1 agent)
3. Kontrola FAQ relevance (1 agent)

**Výstup:**
- Soubor: `AUDIT-RESULTS.md`
- Klasifikace každého článku: KEEP / REWRITE / DELETE / MERGE
- Prioritizace podle SEO hodnoty + user needs

**Agenti:**
- Agent 1: Wiki Legislativa (6 článků)
- Agent 2: Wiki Technické (6 článků)
- Agent 3: Wiki Ostatní (12 článků)
- Agent 4: Blog audit (24 článků)
- Agent 5: FAQ audit (112 otázek)

**Časový odhad:** 2 dny paralelní práce

---

### FÁZE 2: CONTENT REWRITE (10-14 dní)

**Cíl:** Přepsat obsah do lidského jazyka

**Workflow pro každý článek:**

```
1. Přečíst současný článek
2. Identifikovat klíčová fakta + data
3. Vyhledat globální best practices (EN)
4. Napsat novou verzi:
   - Úvod (2-3 odstavce lidským jazykem)
   - Praktická sekce (bullet points + příklady)
   - Detailní průvodce (text pro lidi)
   - Tech data (oddělená sekce na konci)
5. Peer review (jiný agent zkontroluje čitelnost)
```

**Formát nového článku:**
```markdown
# [Nadpis pro lidi, ne právníky]

[2-3 odstavce: Co to je + proč je to důležité]

## 💰 Praktické info (co potřebuješ vědět)
- Konkrétní fakta
- **Tučně důležité**
- Příklady s čísly

## 📖 Detailní průvodce
[Souvislý text, ale lidským jazykem]

### [Podsekce]
[Text + tabulky kde dává smysl]

---

## 📊 Technická data (pro experty)
[Detailní specs, normy, paragrafy - jasně odděleno]
```

**Prioritizace (podle SEO + impact):**

**TIER 1 - Kritické** (6 článků, 3-4 hod/článek = 18-24 hod):
1. Nový stavební zákon
2. Starý stavební zákon
3. Dotace
4. Hypotéky
5. Tepelná izolace
6. Připojení elektřiny

**TIER 2 - Důležité** (7 článků, 2-3 hod/článek = 14-21 hod):
7-13. Technické články (materiály, konstrukce, vytápění, FV, kanalizace, voda)

**TIER 3 - Střední** (3 články, 2 hod/článek = 6 hod):
14-16. Vyhlášky, metodiky, judikatura

**TIER 4 - Low priority** (8 článků, 1 hod/článek = 8 hod):
17-24. Případové studie (kontrola), index, README

**Celkový odhad:** 46-59 hodin = **10-14 dní práce s agenty**

---

### FÁZE 3: DEPLOYMENT & MONITORING (1-2 dny)

**Cíl:** Nasadit na produkci + sledovat metriky

**Úkoly:**
1. Build MkDocs webu
2. Deploy na Vercel (s custom doménou)
3. Google Search Console setup
4. Analytics tracking
5. Submit sitemap
6. Monitor 7 dní (traffic, engagement, rankings)

**Výstup:**
- Live web na `novyrozmerbydleni.cz/wiki`
- Dashboard s metrikami
- Týdenní report: Traffic, CTR, Bounce rate

---

## 🎯 SUCCESS METRICS

**Content Quality:**
- [ ] Readability score: 8th grade level nebo nižší
- [ ] Average time on page: 3+ min
- [ ] Bounce rate: <60%

**SEO Performance:**
- [ ] Organic traffic +50% za 3 měsíce
- [ ] Top 10 ranking pro 20+ keywords
- [ ] Featured snippets: 5+ články

**User Satisfaction:**
- [ ] Feedback form responses: 80%+ pozitivní
- [ ] Pages per session: 2.5+
- [ ] Return visitor rate: 30%+

---

## 🛠 ORCHESTRACE - Rozdělení práce na agenty

### AGENT ASSIGNMENTS (paralelní běh)

**FÁZE 1 - Content Audit:**

```
Agent 1: Wiki Legislativa Audit
- Input: 6 legislativních článků
- Output: AUDIT-legislativa.md (KEEP/REWRITE/DELETE per článek)
- Time: 4 hodin

Agent 2: Wiki Technické Audit
- Input: 6 technických článků
- Output: AUDIT-technicke.md
- Time: 4 hodiny

Agent 3: Wiki Ostatní Audit
- Input: 12 zbylých článků (případovky, finance, údržba)
- Output: AUDIT-ostatni.md
- Time: 4 hodiny

Agent 4: Blog Audit
- Input: 24 blog článků
- Output: AUDIT-blog.md (kontrola lidského jazyka)
- Time: 3 hodiny

Agent 5: FAQ Audit
- Input: 112 FAQ otázek
- Output: AUDIT-faq.md (relevance check)
- Time: 2 hodiny
```

**FÁZE 2 - Content Rewrite (po schválení auditu):**

```
Agent 1-6: Tier 1 Critical (paralelně)
- Každý agent = 1 článek
- Input: Současný článek + audit výsledky + research guidelines
- Output: Nový článek v lidském jazyce
- Time: 3-4 hodiny per článek

Agent 7-13: Tier 2 Important (paralelně po dokončení Tier 1)
...

Agent 14-16: Tier 3 Medium (paralelně)
...

Agent 17-24: Tier 4 Low priority (paralelně)
...
```

**FÁZE 3 - Quality Check:**

```
Agent QC1: Cross-review Tier 1
- Input: 6 přepsaných článků
- Output: Readability report + suggestions
- Time: 2 hodiny

Agent QC2: Cross-review Tier 2
...
```

---

## 📁 STRUKTURA PROJEKTOVÉ PAMĚTI

```
.claude-memory/
├── 2025-11-09-master-plan-reorganizace.md (tento soubor)
├── 2025-11-09-research-buyer-questions.md (research výsledky)
├── 2025-11-09-content-best-practices.md (writing guidelines)
├── 2025-11-09-current-inventory.md (co máme)
│
├── phase-1-audit/
│   ├── AUDIT-legislativa.md
│   ├── AUDIT-technicke.md
│   ├── AUDIT-ostatni.md
│   ├── AUDIT-blog.md
│   └── AUDIT-faq.md
│
├── phase-2-rewrites/
│   ├── tier-1/
│   │   ├── 01-novy-stavebni-zakon-REWRITE.md
│   │   ├── 02-stary-stavebni-zakon-REWRITE.md
│   │   └── ...
│   ├── tier-2/
│   └── tier-3/
│
└── phase-3-deployment/
    ├── deployment-log.md
    ├── analytics-setup.md
    └── weekly-metrics.md
```

---

## ⚠️ KRITICKÁ ROZHODNUTÍ

### 1. Struktura obsahu (3-tier system)

**ROZHODNUTÍ:** Zachovat 3 sekce (Wiki/Blog/FAQ) s jasnou hierarchií

**Důvod:**
- FAQ = rychlé odpovědi (entry point)
- Blog = přístupné průvodce (learning)
- Wiki = detailní reference (mastery)

**Alternativa zamítnuta:** Sloučit vše do jednoho formátu (ztráta navigace)

---

### 2. Relevance vs. Kompletnost

**ROZHODNUTÍ:** Zachovat technické detaily, ale v oddělené sekci na konci článku

**Důvod:**
- SEO hodnota long-form content (1500+ slov)
- Experti najdou co potřebují
- Běžní lidé přeskočí na praktickou část

**Alternativa zamítnuta:** Smazat všechny tech detaily (ztráta SEO + expertní audience)

---

### 3. Multilingual research

**ROZHODNUTÍ:** Research v angličtině, output v češtině

**Důvod:**
- 15-20% lepší kvalita AI reasoning v EN
- 10x více kvalitních zdrojů v EN
- České data často zkroucená výrobci

**Workflow:**
```
CZ input → EN translation → EN research → EN processing → CZ output
```

---

### 4. Orchestrace vs. sekvenční

**ROZHODNUTÍ:** Paralelní běh agentů (orchestrace)

**Důvod:**
- 24 článků = příliš na 1 session
- Paralelní běh = 5-10x rychlejší
- Každý agent = specializovaný na kategorii

**Alternativa zamítnuta:** Sekvenčně 1 článek po druhém (měsíce práce)

---

## 🚀 NEXT STEPS

**IHNED (dnes):**
1. ✅ Vytvoření tohoto master plánu
2. ✅ Research buyer questions (hotovo)
3. ✅ Content best practices (hotovo)
4. ✅ Current inventory (hotovo)

**ZÍTRA:**
5. [ ] Spustit FÁZI 1 - Content Audit (5 agentů paralelně)
6. [ ] Počkat na výsledky auditu (~4 hodiny)
7. [ ] Review audit results
8. [ ] Schválit změny s uživatelem

**PO SCHVÁLENÍ:**
9. [ ] Spustit FÁZI 2 - Content Rewrite (podle priorit)
10. [ ] Quality check přepsaného obsahu
11. [ ] Deploy na Vercel
12. [ ] Sledovat metriky 7 dní

---

## 💾 VERSION CONTROL

**Current version:** 1.0
**Last updated:** 2025-11-09
**Next review:** Po dokončení Fáze 1 auditu

---

**END OF MASTER PLAN**
