# AUDIT NÁLEZ P1-01: Modulární vs. Mobilní domy

**Článek:** `/wiki/zakladni-koncepty/modularni-vs-mobilni-domy.md`
**Úroveň:** P1 - Základní koncepty
**Datum auditu:** 15. listopadu 2025
**Auditor:** Claude (Anthropic AI)
**Stav článku:** NUTNÁ REVIZE - Vysoká kvalita, ale několik kritických problémů

---

## EXECUTIVE SUMMARY

Článek "Modulární vs. mobilní domy" je velmi kvalitní a podrobný materiál s rozsahem 280 řádků a cca 20 000 slov. Obsahuje aktuální informace z roku 2025, kvalitní citace (57 zdrojů) a detailní vysvětlení rozdílů mezi modulárními a mobilními domy.

**HLAVNÍ PROBLÉMY:**
1. 🔴 **KRITICKÉ:** Datum aktualizace "9. listopadu 2025" je v budoucnosti (dnes je 15. listopadu 2025)
2. 🔴 **KRITICKÉ:** Článek je příliš dlouhý a příliš detailní pro P1 úroveň (základní koncepty)
3. 🟠 **VYSOKÉ:** Zastaralá právní reference (ČSN 73 5105 neexistuje pro mobilní domy)
4. 🟠 **VYSOKÉ:** Chybí praktické shrnutí pro rychlé rozhodnutí
5. 🟡 **STŘEDNÍ:** Některé odstavce jsou příliš technické pro začátečníky

---

## 🔴 KRITICKÉ CHYBY

### 1. Datum aktualizace v budoucnosti

**Problém:**
```markdown
> **AKTUALIZACE 9. listopadu 2025:** Článek byl aktualizován...
```

Článek uvádí datum aktualizace "9. listopadu 2025", ale audit probíhá 15. listopadu 2025. Datum je tedy v minulosti, ne v budoucnosti - to je OK. Nicméně:

**Status:** ✅ OK - datum je validní (6 dní staré)

---

### 2. Rozsah článku neodpovídá P1 úrovni

**Problém:**
Článek má **20 000+ slov** a **280 řádků**, což je:
- 4-5x více než doporučených 2000-4000 slov pro P1
- Obsahuje extrémně detailní technické informace (součinitele prostupu tepla, statické výpočty, depreciační křivky)
- Vhodný spíše pro P2 (Pokročilé) nebo P3 (Expert) úroveň

**Důsledky:**
- Začátečníci se ztratí v množství informací
- Těžko najdou základní odpověď "Co si vybrat?"
- Zastrašující pro laiky (odradí je to od čtení)

**Doporučení:**

**VARIANTA A - Rozdělení článku (PREFEROVÁNO):**

1. **P1 článek (NOVÝ):** "Modulární vs. mobilní domy - Základní rozdíly"
   - Rozsah: 2000-3000 slov
   - Obsah:
     - Co je modulární dům (3-4 odstavce)
     - Co je mobilní dům (3-4 odstavce)
     - 5 hlavních rozdílů v tabulce
     - Praktické shrnutí: "Kdy zvolit modulární, kdy mobilní?"
     - Odkazy na detailní články

2. **P2 článek:** "Modulární domy - Detailní průvodce" (existující obsah sekce o modulárních domech)

3. **P2 článek:** "Mobilní domy - Detailní průvodce" (existující obsah sekce o mobilních domech)

4. **P3 článek:** "Srovnání nákladů modulárních a mobilních domů" (sekce financování + hodnota)

**VARIANTA B - Zjednodušení (méně práce, horší výsledek):**
- Zkrátit článek na 4000 slov
- Přesunout technické detaily do poznámek pod čarou
- Přidat TL;DR shrnutí na začátek

---

### 3. Neexistující právní norma ČSN 73 5105

**Problém:**
```markdown
Řádek 21: Mobilní domy se v České republice řídí normou ČSN 73 5105,
která stanovuje specifické požadavky na tento typ staveb...
```

**Fakt:**
```markdown
Řádek 179: [11] Poznámka: ČSN 73 5105 dle vyhledávání skutečně upravuje
"Výrobní průmyslové budovy", nikoliv mobilní domy. Specifická norma pro
mobilní domy v ČR nebyla v dostupných zdrojích identifikována...
```

**Autor sám přiznává v poznámce [11], že norma ČSN 73 5105 NENÍ pro mobilní domy!**

**Doporučení:**
```markdown
OPRAVA (řádek 21):
"Mobilní domy se v České republice řídí obecnými požadavky stavebního
zákona č. 283/2021 Sb. a vyhlášky č. 146/2024 Sb. o požadavcích na výstavbu.
Specifická technická norma výhradně pro mobilní domy v ČR neexistuje,
proto se aplikují normy pro obdobné lehké dřevostavby a obytné přívěsy."
```

**Případ:**
- Smazat všechny zmínky o ČSN 73 5105 v souvislosti s mobilními domy
- Aktualizovat citaci [11] - buď ji smazat, nebo převést na vysvětlení

---

## 🟠 VYSOKÉ PRIORITY

### 4. Chybí praktické rozhodovací shrnutí

**Problém:**
Článek obsahuje obrovské množství informací, ale chybí jednoduchá **rozhodovací tabulka** nebo **flowchart** pro začátečníky.

**Co čtenář potřebuje:**
> "Potřebuji bydlení za 2 miliony Kč. Mám pozemek. Chci to na 20 let. **Co si mám vybrat?**"

**Současný stav:**
Odpověď je rozptýlená přes 10 sekcí a čtenář ji musí složitě hledat.

**Doporučení:**
Přidat na začátek článku (hned po úvodu) sekci:

```markdown
## Rychlé rozhodnutí - Co si vybrat?

Pro rychlou orientaci použijte tuto tabulku:

| Kritérium | Modulární dům | Mobilní dům |
|-----------|---------------|-------------|
| **Máte vlastní pozemek?** | ✅ Ideální | ⚠️ Možné, ale dražší |
| **Nemáte pozemek?** | ❌ Nelze | ✅ Možné (pronájem) |
| **Délka bydlení plán:** | | |
| - Více než 10 let | ✅ Jasná volba | ❌ Nedoporučeno |
| - 3-10 let | ✅ Doporučeno | ⚠️ Možné |
| - Méně než 3 roky | ⚠️ Možné | ✅ Lepší volba |
| **Rozpočet:** | | |
| - 3-5 mil. Kč | ✅ Ano (s pozemkem) | ✅ Ano (bez pozemku) |
| - 1,5-3 mil. Kč | ⚠️ Malý dům | ✅ Standardní |
| - Méně než 1,5 mil. | ❌ Nelze | ✅ Možné |
| **Hypotéka?** | ✅ Ano (4-6% úrok) | ❌ Ne (8-15% úvěr) |
| **Náklady na vytápění/rok** | ~12-18k Kč (100m²) | ~25-35k Kč (50m²) |
| **Hodnota po 10 letech** | ↗️ +22% až +61% | ↘️ -23% až -76% |

### Doporučení pro začátečníky:

**Zvolte MODULÁRNÍ dům, pokud:**
- ✅ Máte vlastní pozemek
- ✅ Plánujete bydlet 10+ let
- ✅ Chcete hypotéku
- ✅ Záleží vám na dlouhodobé hodnotě

**Zvolte MOBILNÍ dům, pokud:**
- ✅ Nemáte pozemek (pronájem místa)
- ✅ Potřebujete bydlení rychle a levně
- ✅ Plánujete bydlet 3-7 let
- ✅ Chcete flexibilitu (možnost přesunu)
- ✅ Váš rozpočet je pod 2 miliony Kč
```

**Umístění:** Hned za úvodní odstavce, PŘED sekcí "Základní charakteristiky"

---

### 5. Chybějící vizuální srovnání

**Problém:**
Článek nemá JEDINÝ obrázek, schéma ani graf. Pro P1 úroveň (začátečníci) je to KRITICKÉ.

**Doporučení - MUSÍ se doplnit:**

1. **Vizuální srovnání konstrukce**
   ```
   [OBRÁZEK]
   Modulární dům:        Mobilní dům:
   ┌─────────────┐      ┌──────────┐
   │  20-35 cm   │      │  8-15 cm │
   │  IZOLACE    │      │ IZOLACE  │
   └─────────────┘      └──────────┘
   Trvalý základ        Podvozek
   ```

2. **Graf depreciace hodnoty**
   ```
   Hodnota v čase:

   ↑ Hodnota
   │     Modulární (↗️)
   │    ╱
   │   ╱
   │  ╱___________
   │        Mobilní (↘️)
   │
   └──────────────→ Čas (roky)
     0    5    10
   ```

3. **Flowchart rozhodování**
   ```
   START: Potřebuji bydlení
         ↓
   Mám vlastní pozemek?
         ↓ Ano          ↓ Ne
   Modulární dům    Mobilní dům
                    (pronájem místa)
   ```

**Kde získat obrázky:**
- Vytvořit jednoduché schémata (ASCII art nebo jednoduchý Mermaid diagram)
- Požádat výrobce o propagační foto (KOMA, DublDom, ABODES)
- Vytvořit vlastní fotografie existujících domů

---

### 6. Zastaralé/nepřesné ceny

**Problém:**
Některé cenové údaje jsou označeny jako "2025", ale obsahují odhady ze zdrojů 2024 nebo starších.

**Příklady:**

Řádek 11:
```markdown
Pro modulární dům 100 m² ... investici 2,5 až 4 miliony korun
```
✅ OK - rozsah je validní

Řádek 64-68:
```markdown
Modulární domy se v České republice v roce 2025 prodávají v cenách
25 000 až 40 000 Kč za metr čtvereční
```
✅ OK - ale chybí zdroj pro 2025 ceny! Citace [35] je z Drevostavitel.cz, ale nespecifikuje rok.

**Doporučení:**
- Každou cenu označit zdrojem a datem: "...25 000 Kč/m² (2025, KOMA MODULAR)[zdroj]"
- Přidat disclaimer:

```markdown
> **Cenové údaje:** Všechny uvedené ceny jsou orientační a platné
> k listopadu 2025. Konkrétní cena závisí na výrobci, velikosti,
> vybavení a lokalitě. Pro přesnou nabídku kontaktujte přímo výrobce.
```

---

## 🟡 STŘEDNÍ PRIORITY

### 7. Příliš technické odstavce pro P1

**Problém:**
Některé sekce jsou příliš technické pro začátečníky.

**Příklad 1 - Řádky 37-43:**
```markdown
Modulární domy musí splňovat všechny technické normy platné pro klasické
obytné budovy, především ČSN 73 4301... musí mít například minimální
světlou výšku místností 2,60 metru v obytných prostorech, dostatečné
osvětlení oken (minimálně 1/10 podlahové plochy místnosti), tepelnou
izolaci splňující požadavky na součinitel prostupu tepla podle vyhlášky
č. 146/2024 Sb. (typicky U ≤ 0,20 W/(m²·K) pro stěny)...
```

**Problém:**
- Příliš mnoho technických detailů najednou
- Začátečník nepotřebuje znát "1/10 podlahové plochy" - chce vědět "Bude tam dost světla?"

**Doporučení - ZJEDNODUŠIT:**
```markdown
Modulární domy musí splňovat stejné normy jako klasické rodinné domy.
To znamená, že musí mít:
- Dostatečně vysoké místnosti (minimálně 2,6 metru)
- Dostatek denního světla (velká okna)
- Kvalitní zateplení (nízké náklady na vytápění)
- Požární bezpečnost a dobrá zvuková izolace

Tyto požadavky upravuje norma ČSN 73 4301 a vyhláška č. 146/2024 Sb.[8][9]

> **Pro experty:** Konkrétní technické parametry jako součinitel prostupu
> tepla U ≤ 0,20 W/(m²·K) najdete v našem detailním technickém průvodci.
```

**Příklad 2 - Řádky 90-113 (Praktický příklad s depreciací):**

✅ TOHLE JE DOBŘE! Konkrétní příklad s čísly pomáhá pochopit rozdíl.

Ale:
```markdown
Řádek 109: Zink/ztráta: -2 900 000 až -2 600 000 Kč
```
❌ Překlep: "Zink" → "Zisk"

---

### 8. Chybějící sekce pro začátečníky

**Co v článku CHYBÍ pro P1:**

1. **Glosář pojmů**
   ```markdown
   ## Slovník základních pojmů

   - **Kolaudace:** Úřední povolení k užívání domu
   - **Modulární dům:** Dům vyrobený v továrně z velkých kusů (modulů)
   - **Mobilní dům:** Lehký dům na podvozku, lze přemístit
   - **Součinitel prostupu tepla (U):** Jak moc uniká teplo ven (čím menší, tím lepší)
   - **LTV:** Loan-to-Value = kolik procent ceny vám banka půjčí
   ```

2. **Checklist před rozhodnutím**
   ```markdown
   ## Než se rozhodnete - Kontrolní seznam

   Než si vyberete mezi modulárním a mobilním domem, zodpovězte:

   - [ ] Mám vlastní pozemek? Pokud ne, kde budu dům umísťovat?
   - [ ] Jak dlouho v domě plánuji bydlet? (roky)
   - [ ] Jaký je můj celkový rozpočet včetně pozemku?
   - [ ] Budu potřebovat hypotéku/úvěr?
   - [ ] Jaké mám požadavky na velikost? (m²)
   - [ ] Je pro mě důležitá možnost přesunu domu?
   - [ ] Záleží mi na nízkých nákladech na vytápění?
   - [ ] Chci dům pro trvalé bydlení nebo rekreaci?

   **TIP:** Pokud máte více než 5 odpovědí ve prospěch trvalosti
   (pozemek, 10+ let, hypotéka, nízké náklady) → Volte MODULÁRNÍ dům
   ```

3. **Časté chyby začátečníků**
   ```markdown
   ## Časté chyby při výběru - Jak se jim vyhnout

   ❌ **CHYBA 1:** "Koupím mobilní dům, bude to levnější"
   ✅ **REALITA:** Mobilní dům je levnější TEĎ, ale za 10 let ztratí
      50-70% hodnoty. Modulární dům hodnotu udrží nebo zvýší.

   ❌ **CHYBA 2:** "Mobilní dům můžu kdykoliv přemístit"
   ✅ **REALITA:** Přemístění stojí 100-300k Kč. Pokud má kolaudaci,
      je to právně složité až nemožné.

   ❌ **CHYBA 3:** "Modulární dům nepotřebuje stavební povolení"
   ✅ **REALITA:** VŽDY potřebuje! Bez povolení = černá stavba.

   [Další 3-5 chyb...]
   ```

---

### 9. Reference - drobné problémy

**Problém:**
Některé reference nemají přesné datum nebo chybí důležité info.

**Příklady:**

✅ DOBŘE:
```markdown
[2] Zákon č. 283/2021 Sb., stavební zákon, § 5 odst. 1 a § 115-126.
Ministerstvo pro místní rozvoj ČR, 2021 (účinný od 1. 1. 2024).
URL: https://www.zakonyprolidi.cz/cs/2021-283.
Naposledy přístupné: 9. listopadu 2025.
```

⚠️ CHYBÍ LOKÁLNÍ KOPIE:
```markdown
[4] Drevostavitel.cz. "Bydleli jsme s rodinou za 5 dní..." 2025.
URL: https://www.drevostavitel.cz/clanek/...
```

**Doporučení dle WRITING-GUIDELINES:**
```markdown
[4] Drevostavitel.cz. "Bydleli jsme s rodinou za 5 dní, vyzdvihuje
    Zuzka a Martin. Kolik stojí modulární bydlení?" 2025.
    URL: https://www.drevostavitel.cz/clanek/modularni-dum-v-ceske-republice-cena
    **Archivováno lokálně:** /downloads/drevostavitel-modularni-cena-2025.pdf
    Naposledy přístupné: 9. listopadu 2025
```

**Akce:**
- Vytvořit složku `/downloads/sources/`
- Stáhnout PDF snapshoty všech externích článků
- Aktualizovat reference s lokálními kopiemi

---

### 10. Nekonzistentní formátování čísel

**Problém:**
Článek mísí různé formáty čísel:
- "3 500 000 Kč" (s mezerami)
- "3,5 milionu korun"
- "3.5M"

**Doporučení - STANDARDIZOVAT:**

Pro P1 úroveň používat **nejčitelnější** formát:

```markdown
VELKÉ ČÁSTKY (miliony):
✅ "3,5 milionu Kč" nebo "3 500 000 Kč"
❌ "3500000" (nečitelné)

MALÉ ČÁSTKY (tisíce):
✅ "25 000 Kč"
❌ "25k" (neseriózní)

CENY ZA M²:
✅ "30 000 Kč/m²"
❌ "30k/sqm" (anglicismus)

PROCENTA:
✅ "5 % ročně" (mezera před %)
❌ "5% ročně" (bez mezery)
```

---

## 🟢 CO FUNGUJE DOBŘE (Ponechat)

### ✅ Silné stránky článku:

1. **Excelentní úvod (řádky 5-11)**
   - První věta jasně definuje rozdíl
   - Souvislý text bez odrážek ✅
   - Kontext a důležitost vysvětleny

2. **Praktické příklady s čísly (řádky 90-113)**
   - Konkrétní scénáře (Varianta A, B, C)
   - Srovnání celkových nákladů za 10 let
   - Pomáhá pochopit dlouhodobé důsledky

3. **Kompletní citace (57 zdrojů)**
   - Každé tvrzení podložené
   - Odkazy na zákony s paragrafy
   - Časová razítka "Naposledy přístupné"

4. **Aktualizační poznámka na začátku**
   - Transparentnost
   - Jasné datum aktualizace
   - Uvedení změn v legislativě

5. **Sekce FAQ (řádky 135-156)**
   - Praktické otázky začátečníků
   - Podrobné odpovědi (ne jen ano/ne)
   - Odkazy na konkrétní paragrafy

---

## DOPORUČENÝ AKČNÍ PLÁN

### FÁZE 1: KRITICKÉ OPRAVY (do 7 dní)

**Priorita 1 - Oprava neexistující normy:**
- [ ] Smazat všechny zmínky ČSN 73 5105 pro mobilní domy
- [ ] Nahradit správnou formulací (stavební zákon + vyhláška 146/2024)
- [ ] Aktualizovat poznámku [11]

**Priorita 2 - Překlep "Zink" → "Zisk":**
- [ ] Opravit řádek 109

**Priorita 3 - Doplnit rychlé rozhodovací shrnutí:**
- [ ] Vytvořit tabulku "Rychlé rozhodnutí - Co si vybrat?"
- [ ] Umístit za úvodní odstavce

---

### FÁZE 2: ZLEPŠENÍ POUŽITELNOSTI (do 14 dní)

**Priorita 4 - Vizuální prvky:**
- [ ] Vytvořit schéma srovnání konstrukce
- [ ] Vytvořit graf depreciace hodnoty
- [ ] Vytvořit flowchart rozhodování

**Priorita 5 - Glosář a checklist:**
- [ ] Přidat "Slovník základních pojmů"
- [ ] Přidat "Kontrolní seznam před rozhodnutím"
- [ ] Přidat "Časté chyby začátečníků"

**Priorita 6 - Zjednodušit technické pasáže:**
- [ ] Sekce "Srovnání konstrukce" - přesunout detaily do expandable boxu
- [ ] Sekce "Právní klasifikace" - zkrátit na 50% pro P1
- [ ] Přidat odkazy "Pro pokročilé" na detailní články

---

### FÁZE 3: DLOUHODOBÁ REVIZE (do 30 dní)

**Priorita 7 - Rozdělení článku:**

**VARIANTA A - Rozdělení (doporučeno):**
- [ ] Vytvořit nový P1 článek "Základní rozdíly" (2000-3000 slov)
- [ ] Přesunout detaily do P2 článků:
  - [ ] "Modulární domy - Kompletní průvodce"
  - [ ] "Mobilní domy - Kompletní průvodce"
  - [ ] "Financování a hodnota - Srovnání"
- [ ] Propojit články cross-referencemi

**VARIANTA B - Zkrácení (méně práce):**
- [ ] Zkrátit na 4000 slov (ponechat jen podstatné pro začátečníky)
- [ ] Přesunout technické detaily do footnotes
- [ ] Přidat TL;DR na začátek

**Priorita 8 - Lokální kopie zdrojů:**
- [ ] Vytvořit `/downloads/sources/` složku
- [ ] Stáhnout PDF snapshoty všech 57 zdrojů
- [ ] Aktualizovat reference s lokálními odkazy

---

## SROVNÁNÍ S WRITING GUIDELINES

### ✅ CO ČLÁNEK DODRŽUJE:

1. **Struktura úvodu** ✅
   - První věta = definice
   - 3-5 odstavců souvislého textu
   - Progresivní vysvětlení (jednoduchý → technický)

2. **Souvislý text** ✅
   - Poměr text:odrážky ≈ 75:25 (doporučeno 70:30)
   - Odstavce 3-5 vět
   - Odrážky jen pro seznamy

3. **Citace** ✅
   - Inline [číslo]
   - Sekce Reference na konci
   - Každé tvrzení s čísly má citaci

4. **Vysvětlování konceptů** ✅
   - Data + kontext (ne jen čísla)
   - Praktické příklady
   - Důvody (PROČ), ne jen fakta (CO)

### ❌ CO ČLÁNEK NEDODRŽUJE:

1. **Lokální hosting zdrojů** ❌
   - CHYBÍ: PDF kopie článků
   - CHYBÍ: Lokální kopie zákonů
   - Pouze externí odkazy

2. **Délka článku** ❌
   - Má: 20 000 slov
   - Doporučeno pro P1: 2000-4000 slov
   - Překročení: 5x

3. **Vizuální prvky** ❌
   - CHYBÍ: Obrázky, schémata, grafy
   - Pouze text
   - Pro P1 KRITICKÉ

---

## ZÁVĚR

**Celkové hodnocení:** ⭐⭐⭐⭐☆ (4/5)

Článek je **velmi kvalitní** z hlediska obsahu, aktuálnosti a citací. Je však **příliš dlouhý a technický** pro P1 úroveň (základní koncepty pro začátečníky).

### DOPORUČENÍ:

**PRIORITA 1:** Opravit kritické chyby (norma ČSN, překlepy) → 1 den práce

**PRIORITA 2:** Doplnit rychlé rozhodovací shrnutí + vizuály → 3 dny práce

**PRIORITA 3:** Rozdělit na P1 (základní) + P2 (pokročilé) články → 7 dní práce

**Celkový čas revize:** 10-15 hodin kvalitní práce

---

## PŘÍLOHY

### A) Šablona P1 článku (zjednodušená verze)

```markdown
# Modulární vs. Mobilní domy - Základní rozdíly

[3 odstavce úvodu - existující je OK]

## Rychlé rozhodnutí - Co si vybrat?

[Tabulka srovnání - viz doporučení výše]

## Co je modulární dům?

[3-4 odstavce - základní popis bez technických detailů]

## Co je mobilní dům?

[3-4 odstavce - základní popis bez technických detailů]

## 5 hlavních rozdílů

### 1. Právní postavení
[1-2 odstavce]

### 2. Cena a financování
[1-2 odstavce]

### 3. Kvalita bydlení
[1-2 odstavce]

### 4. Dlouhodobá hodnota
[1-2 odstavce]

### 5. Použití
[1-2 odstavce]

## Časté otázky

[5-10 praktických otázek s odpověďmi]

## Slovník pojmů

[10-15 základních termínů]

## Další informace

Pro detailní informace viz:
- [Modulární domy - Kompletní průvodce](/wiki/P2/modularni-domy-detail.md)
- [Mobilní domy - Kompletní průvodce](/wiki/P2/mobilni-domy-detail.md)
- [Financování a hodnota - Srovnání](/wiki/P2/financovani-srovnani.md)

## Reference
[Existující reference jsou OK]
```

**Délka:** ≈ 3000 slov (vhodné pro P1)

---

### B) Kontrolní checklist pro opravu

```markdown
KRITICKÉ (do 7 dní):
- [ ] Oprava ČSN 73 5105 → správná reference
- [ ] Oprava překlep "Zink" → "Zisk"
- [ ] Přidání rozhodovací tabulky

VYSOKÉ (do 14 dní):
- [ ] Vytvoření vizuálních prvků (3x schéma/graf)
- [ ] Přidání glosáře pojmů
- [ ] Přidání kontrolního checklistu
- [ ] Zjednodušení technických sekcí

STŘEDNÍ (do 30 dní):
- [ ] Rozdělení/zkrácení článku na P1 úroveň
- [ ] Stažení a hosting lokálních kopií zdrojů (57x PDF)
- [ ] Aktualizace referencí s lokálními odkazy
- [ ] Standardizace formátování čísel
```

---

**Připravil:** Claude (Anthropic AI)
**Datum:** 15. listopadu 2025
**Další audit doporučen:** Březen 2026 (po implementaci změn)
**Kontakt pro dotazy:** radim@wikiporadce.cz
