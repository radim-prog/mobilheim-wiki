# PRODUKČNÍ PLÁN: Zpracování 40 Wiki Článků

**Datum:** 2025-11-09
**Status:** Ready to Execute
**Cíl:** Přepsat/napsat 40 Wiki článků v konzistentním stylu, s aktuálními daty 2025

---

## 🎯 KRITICKÉ POŽADAVKY

### 1. Aktuálnost dat (2025)
**Problém:** Staré zákony, zastaralé ceny
**Řešení:**
- ✅ VŽDY ověřit datum zákona/vyhlášky
- ✅ WebSearch s filtrem "2024 OR 2025" pro aktuální data
- ✅ Pro každý zákon: Ověřit na **sbirka-zakonu.cz** nebo **zakonyprolidi.cz**
- ✅ Ceny: Ověřit u **aktuálních dodavatelů** (ČP, ČEZ, vodárny)

### 2. Pravdivost a ověřitelnost
**Požadavek:** Žádné vymýšlení, vše podložené zdroji
**Řešení:**
- ✅ KAŽDÉ číslo = citace [1] [2] [3]
- ✅ KAŽDÝ zákon = odkaz na sbírku zákonů + datum účinnosti
- ✅ Pochybnosti? → WebSearch pro ověření
- ✅ Nelze ověřit? → NEPSAT (raději mezera než lež)

### 3. Konzistence stylu
**Požadavek:** Všechny články stejný formát, styl, úroveň detailu
**Řešení:**
- ✅ KAŽDÝ agent dostane WRITING-GUIDELINES.md
- ✅ KAŽDÝ agent dostane SAMPLE článek jako referenci
- ✅ Quality check cross-review mezi agenty

### 4. Dokončení bez zaseknutí
**Požadavek:** Projekt musí doběhnout do konce
**Řešení:**
- ✅ Rozdělení do 3 SPRINTŮ (TIER 1 → TIER 2 → TIER 3)
- ✅ Checkpoint po každém sprintu (schválení před dalším)
- ✅ Paralelní běh agentů (max 7 najednou = stabilní)
- ✅ Pokud agent selže → Backup: Manuální dokončení

---

## 📋 EXECUTION PLAN (3 SPRINTY)

### SPRINT 1: TIER 1 - Kritické (16 článků)
**Timeline:** 2-3 dny
**Důležitost:** 🔴 CRITICAL - Pokrývá 80% dotazů zákazníků

#### Fáze 1A: NOVÉ články (7 článků) - 4-5 hodin paralelně

**7 agentů běží současně:**

**Agent 1: Mobilní dům vs. klasický dům (článek #30)**
- Input: WRITING-GUIDELINES.md + SAMPLE + téma
- Research: Srovnání nákladů, času výstavby, životnosti (CZ trh 2025)
- Zdroje: Statistiky ČSÚ, realitní trh, stavební firmy
- Output: `wiki/porovnani/mobilni-dum-vs-klasicky.md`
- Verifikace: Ceny aktuální k 2025, citace u každého čísla

**Agent 2: Inspekční checklist (článek #26)**
- Research: Kontrola před koupí, jak poznát vady
- Zdroje: Stavební inspektoři ČR, normy ČSN, checklist PDF
- Output: `wiki/prakticke-pruvodce/inspekce-pred-koupi.md`
- Verifikace: Checklist downloadable, normy aktuální

**Agent 3: Pojištění mobilních domů (článek #25)**
- Research: České pojišťovny (ČP, Kooperativa, Allianz), ceny 2025
- Zdroje: Webové kalkulačky pojišťoven, vzorové smlouvy
- Output: `wiki/financovani/pojisteni.md`
- Verifikace: Ceny aktuální (3-20k Kč/rok), pojišťovny existující

**Agent 4: Park vs. vlastní pozemek (článek #32)**
- Research: Mobilheimové parky v ČR, poplatky, pravidla
- Zdroje: Provozovatelé parků, legislativa, zkušenosti obyvatel
- Output: `wiki/prakticke-pruvodce/park-vs-pozemek.md`
- Verifikace: Reálné parky v ČR, aktuální poplatky

**Agent 5: Doprava a instalace (článek #29)**
- Research: Speciální doprava, povolení, náklady ČR 2025
- Zdroje: Dopravní firmy, Policie ČR (povolení), legislativa
- Output: `wiki/prakticke-pruvodce/doprava-instalace.md`
- Verifikace: Ceny dopravy aktuální, povolení platná legislativa

**Agent 6: Registrace a vlastnictví (článek #27)**
- Research: Zápis do katastru nemovitostí, geometrický plán, ČÚZK
- Zdroje: ČÚZK (cuzk.cz), stavební úřady, právníci
- Output: `wiki/legislativa/registrace-kataster.md`
- Verifikace: Postupy ČÚZK aktuální 2025, ceny geometrického plánu

**Agent 7: Záruka a servis (článek #31)**
- Research: Záruční doba, reklamace, Občanský zákoník 2025
- Zdroje: OZ § 1914-1925, dodavatelé mobilheimů, zkušenosti
- Output: `wiki/prakticke-pruvodce/zaruka-servis.md`
- Verifikace: Občanský zákoník aktuální znění

**Checkpoint 1A:**
- Quality check všech 7 článků
- Verifikace: Aktuálnost dat, citace, styl konzistentní
- User approval před pokračováním

---

#### Fáze 1B: REWRITE stávajících (9 článků) - 3-4 hodiny paralelně

**5 agentů běží současně (některé články společně):**

**Agent 1: Stavební zákon NOVÝ (článek #1)**
- Input: Současný článek + WRITING-GUIDELINES
- Úkol: Přepsat do lidského jazyka, zachovat fakta
- Focus: Zákon 283/2021 Sb. - OVĚŘIT že je stále platný 2025!
- Zdroje: zakonyprolidi.cz, sbírka zákonů (ověřit novelizace)
- Output: `wiki/legislativa/stavebni-zakon/novy-zakon-283-2021.md` (přepsaný)

**Agent 2: Stavební zákon STARÝ (článek #2)**
- Úkol: Přepsat historický kontext (platný do 2021)
- Output: `wiki/legislativa/stavebni-zakon/stary-zakon.md` (přepsaný)

**Agent 3: Dotace NZÚ (článek #16)**
- Úkol: Přepsat + AKTUALIZOVAT dotace 2025!
- KRITICKÉ: Ověřit aktuální výše dotací na **novazelenausporam.cz**
- Zdroje: SFŽP (Státní fond životního prostředí), NZÚ web
- Output: `wiki/financovani/dotace.md` (přepsaný + aktualizovaný)

**Agent 4: Hypotéky (článek #17)**
- Úkol: Přepsat + aktuální úrokové sazby 2025
- Zdroje: ČNB, české banky (ČSOB, KB, ČS)
- Output: `wiki/financovani/hypoteky.md` (přepsaný + aktualizovaný)

**Agent 5: Vyhlášky (článek #3)**
- Úkol: Přepsat stavební/požární/hygienické vyhlášky
- KRITICKÉ: Ověřit čísla vyhlášek, že jsou platné 2025
- Zdroje: sbírka zákonů, MMR
- Output: `wiki/legislativa/vyhlasky.md` (přepsaný)

Po dokončení prvních 5:

**Agent 6: Metodiky MMR (článek #4)**
**Agent 7: Judikatura (článek #5)**
**Agent 8: Územní plánování (článek #6)**
**Agent 9: Údržba a životnost (článek #18) - REWRITE**

**Checkpoint 1B:**
- Quality check všech 9 přepsaných článků
- Verifikace: Staré zákony NEJSOU citované jako platné
- Aktuální data 2025
- User approval

---

### SPRINT 2: TIER 2 - Důležité (11 článků)
**Timeline:** 1-2 dny
**Důležitost:** 🟡 IMPORTANT - Technické detaily

#### Fáze 2A: Technické REWRITES (6 článků)

**6 agentů paralelně:**

**Agent 1: Tepelná izolace (článek #7)**
- Úkol: Přepsat do lidského jazyka (odstranit inženýrský žargon)
- Focus: U-hodnoty vysvětlené jednoduše, ceny 2025
- Output: `wiki/technicke-specifikace/izolace/tepelna-izolace.md`

**Agent 2: Materiály (článek #8)**
**Agent 3: Konstrukce a statika (článek #9)**
**Agent 4: Okna a dveře (článek #12)**
**Agent 5: Testování kvality (článek #36) - NOVÝ**
**Agent 6: Klimatizace a větrání (článek #38) - NOVÝ**

#### Fáze 2B: Energetika + Sítě (5 článků)

**5 agentů paralelně:**

**Agent 1: Vytápění (článek #10)**
- KRITICKÉ: Ceny energií 2025, aktuální dotace na tepelná čerpadla
**Agent 2: Fotovoltaika (článek #11)**
- KRITICKÉ: Dotace NZÚ 2025 (10 000 Kč/kWp) - OVĚŘIT!
**Agent 3: Elektřina (článek #13)**
**Agent 4: Voda (článek #14)**
**Agent 5: Kanalizace (článek #15)**

**Checkpoint 2:**
- Quality check
- Verifikace technických dat, norem ČSN
- User approval

---

### SPRINT 3: TIER 3 - Rozšiřující (13 článků)
**Timeline:** 1 den
**Důležitost:** 🟢 NICE-TO-HAVE

#### Fáze 3A: Případové studie (6 článků)
- Kontrola stávajících + 1 nový
- Lehčí náročnost, kratší články

#### Fáze 3B: Doplňkové (7 článků)
- Konfigurace, Hodnota, Prevence škůdců, atd.

---

## 🔒 SAFEGUARDS (Prevence selhání)

### 1. Verifikace aktuálnosti zákonů
**Před napsáním KAŽDÉHO legislativního článku:**
```
1. WebSearch: "zákon [číslo] 2024 novelizace změny"
2. Check: zakonyprolidi.cz/cs/[rok]-[cislo] (zobrazí aktuální znění)
3. Pokud se změnil → Použij NOVÉ znění, poznamenej změnu
```

### 2. Ověření cen a dat
**Pro KAŽDÉ číslo v článku:**
```
1. Najdi primární zdroj (ne blog, ne sekundární)
2. Ověř datum publikace (max 1 rok starý)
3. Cross-check s dalším zdrojem (pokud možné)
4. Cituj oboje [1] [2]
```

### 3. Cross-review mezi agenty
**Po každém sprintu:**
```
Agent A napsal článek 1 → Agent B zkontroluje faktualitu
Agent B napsal článek 2 → Agent C zkontroluje faktualitu
...
```

### 4. Backup manual dokončení
**Pokud agent selže na článku:**
```
1. Zalogovat chybu
2. Přeskočit článek
3. Pokračovat na dalších
4. Na konci: Manuální dokončení problematických článků
```

---

## 📊 MONITORING (Průběžná kontrola)

### Po každém sprintu:
1. **Počet dokončených článků:** X / 16 (TIER 1)
2. **Počet citací celkem:** Y (cíl: min 15 per článek)
3. **Prům. délka článku:** Z slov (cíl: 3000-6000)
4. **Chyby/problémy:** Seznam
5. **Zastaralá data nalezená:** Seznam + opravy

### Red flags:
- ❌ Článek <2000 slov = nedostatečný detail
- ❌ <10 citací = nedostatečné zdroje
- ❌ Zákon bez data účinnosti = riziko zastaralosti
- ❌ Ceny bez uvedení roku = pravděpodobně staré

---

## ✅ ACCEPTANCE CRITERIA (Kdy je článek hotový)

### Každý článek musí mít:
- ✅ 3-5 odstavců úvod (souvislý text)
- ✅ Min 15 inline citací [1] [2] [3]
- ✅ Kompletní Reference sekce s URL a datumy
- ✅ Právní rámec (pokud relevantní) - plné znění zákonů
- ✅ Praktické příklady s reálnými čísly
- ✅ Délka: 3000-6000 slov (komplex), 2000-3000 (jednodušší)
- ✅ Styl: 70% souvislý text, 30% seznamy/tabulky
- ✅ Všechna data z 2024-2025 (ne starší!)
- ✅ Technické termíny vysvětlené jednoduše

### Projektu jako celek:
- ✅ 40 článků kompletních
- ✅ Konzistentní styl napříč všemi články
- ✅ Žádné mrtvé odkazy
- ✅ Všechny zákony aktuální k 2025
- ✅ Cross-linking mezi články fungující
- ✅ Navigation v mkdocs.yml aktualizovaná

---

## 🚀 START COMMAND

**Spustit SPRINT 1 - Fázi 1A (7 agentů paralelně):**

```
Task tool × 7 (general-purpose agents)
Input pro každého agenta:
- WRITING-GUIDELINES.md (read file)
- SAMPLE article (read file)
- Téma článku + requirements
- Instrukce: OVĚŘIT aktuálnost všech dat (2025)
```

**Po dokončení Fáze 1A:**
- Quality check
- User review
- Approval → Pokračovat na Fázi 1B

**Po dokončení SPRINT 1:**
- Kompletní review 16 článků
- User approval
- Approval → Pokračovat na SPRINT 2

---

**Verze:** 1.0
**Status:** ✅ READY TO EXECUTE
**Čeká na:** User "GO" command
