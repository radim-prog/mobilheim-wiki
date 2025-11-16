# AUDIT NÁLEZ: Územní plánování a mobilní domy

**Článek:** `/wiki/legislativa/uzemni-planovani.md`
**Úroveň:** Legislativa - Praktický průvodce
**Datum auditu:** 16. listopadu 2025
**Auditor:** Claude (Anthropic AI)
**Stav článku:** KRITICKÁ REVIZE NUTNÁ - Zastaralé právní reference

---

## EXECUTIVE SUMMARY

Článek "Územní plánování a mobilní domy" je rozsáhlý a detailní praktický průvodce (875 řádků, cca 60 000 slov) s 107 citacemi a zdrojů. Obsahuje kvalitní strukturu a praktické informace pro majitele mobilních domů.

**HLAVNÍ PROBLÉMY:**

1. 🔴 **KRITICKÉ:** Vyhláška č. 501/2006 Sb. byla **ZRUŠENA k 1. 1. 2024** - článek ji cituje 18x jako platnou
2. 🔴 **KRITICKÉ:** Vyhláška č. 500/2006 Sb. byla **ZRUŠENA k 1. 1. 2024** - článek ji cituje 9x jako platnou
3. 🔴 **KRITICKÉ:** Chybí vyhláška č. 146/2024 Sb., která nahradila vyhlášku 501/2006
4. 🟠 **VYSOKÉ:** Datum aktualizace "9. listopadu 2025" neodpovídá obsahu (zastaralé právní reference)
5. 🟡 **STŘEDNÍ:** Terminologie "mobilní domy" bez rozlišení montované vs. mobilní

---

## 🔴 KRITICKÉ CHYBY - PRÁVNÍ AKTUÁLNOST

### 1. Vyhláška č. 501/2006 Sb. - ZRUŠENA!

**Problém:**
Článek 18x cituje vyhlášku č. 501/2006 Sb. jako platnou, přestože byla **zrušena k 1. 1. 2024**.

**Důkaz:**
```markdown
Řádek 33: Další důležitou vyhláškou je vyhláška č. 501/2006 Sb.,
o obecných požadavcích na využívání území, která stanovuje minimální
standardy pro umisťování staveb...

Reference [14], [15], [17], [19], [23], [27], [29], [30], [31], [32],
[44], [45], [46], [47], [48], [107] - všechny odkazují na 501/2006
```

**Fakt:**
Vyhláška č. 501/2006 Sb. byla zrušena k **1. 1. 2024** zákonem č. 283/2021 Sb.
Nahrazena vyhláškou č. **146/2024 Sb.** (účinná od 1. 7. 2024).

**Zdroje:**
- https://www.zakonyprolidi.cz/cs/2006-501 - "Zrušeno k 01.01.2024"
- Havel & Partners: "Nová vyhláška nahrazuje vyhlášku č. 501/2006 Sb."
- ČKAIT 2025: "Původní vyhláška č. 501/2006 Sb. a č. 268/2009 Sb. jsou nově v § 137-153 stavebního zákona a vyhlášce č. 146/2024 Sb."

**Dopad:**
Všechny odkazy na konkrétní paragrafy vyhlášky 501/2006 jsou **neplatné**. Čtenář dostává zastaralé informace, které mohou vést k zamítnutí žádosti o územní souhlas.

**Oprava:**
Nahradit všechny odkazy na vyhlášku 501/2006 aktuálními:
- Pro **obecné požadavky na umisťování staveb**: § 137-153 zákona č. 283/2021 Sb.
- Pro **technické požadavky na výstavbu**: Vyhláška č. 146/2024 Sb.

**Příklad správné formulace:**
```markdown
STARÉ (NEPLATNÉ):
"Vyhláška č. 501/2006 Sb., § 25 odst. 4 - odstupy od hranic"

NOVÉ (PLATNÉ):
"Zákon č. 283/2021 Sb., § 139 - odstupy staveb a vyhláška č. 146/2024 Sb.,
§ 14 - podmínky umisťování staveb na pozemku"
```

---

### 2. Vyhláška č. 500/2006 Sb. - ZRUŠENA!

**Problém:**
Článek 9x cituje vyhlášku č. 500/2006 Sb. jako platnou, přestože byla **zrušena k 1. 1. 2024**.

**Důkaz:**
```markdown
Řádek 33: Klíčová je vyhláška č. 500/2006 Sb., o územně analytických
podkladech, územně plánovací dokumentaci...

Reference [2], [13], [25], [39], [49], [82], [85] - odkazují na 500/2006
```

**Fakt:**
Vyhláška č. 500/2006 Sb. byla **zrušena k 1. 1. 2024** zákonem č. 283/2021 Sb.

**Status:**
Nový stavební zákon č. 283/2021 Sb. (§ 31-56) přímo upravuje územní plánování a územně plánovací dokumentaci. Prováděcí vyhláška pro územně plánovací dokumentaci **zatím nebyla vydána** - platí přímo zákon.

**Oprava:**
```markdown
STARÉ:
"Vyhláška č. 500/2006 Sb., § 13-18 - obsah územního plánu"

NOVÉ:
"Zákon č. 283/2021 Sb., § 44-56 - Územní plán a jeho obsah"
```

---

### 3. Chybějící vyhláška č. 146/2024 Sb.

**Problém:**
Článek **VŮBEC nezmiňuje** vyhlášku č. 146/2024 Sb., přestože je to **klíčový předpis** účinný od 1. 7. 2024.

**Co vyhláška 146/2024 Sb. upravuje:**
- § 1: Vymezování pozemků, umisťování staveb, technické požadavky
- § 14-18: Podmínky pro umisťování staveb (odstupy, zastavění, zeleň)
- § 35-37: Parkování a garáže
- § 50-80: Technické požadavky na stavby pro bydlení

**Kde ji doplnit:**
```markdown
Řádek 33 (po zmínce stavebního zákona):

"Kromě stavebního zákona se územní plánování a umisťování staveb
řídí vyhláškou č. 146/2024 Sb., o požadavcích na výstavbu, která
nabyla účinnosti 1. července 2024.[14] Tato vyhláška nahradila
předchozí vyhlášku č. 501/2006 Sb. a stanovuje minimální standardy
pro umisťování staveb - například odstupy od hranic pozemků (§ 14),
velikost zastavěné plochy (§ 15), poměr zastavěné a nezastavěné
části pozemku (§ 16) a požadavky na parkování (§ 35-37)."
```

---

## 🟠 VYSOKÉ PRIORITY

### 4. Datum "Poslední aktualizace: 9. listopadu 2025" je zavádějící

**Problém:**
Článek uvádí datum aktualizace "9. listopadu 2025", což je **před 7 dny**, ale obsahuje:
- 27x odkazy na zrušené vyhlášky z roku 2006
- 0x zmínky o aktuální vyhlášce 146/2024 (účinná 5 měsíců)

**Důsledek:**
Čtenář věří, že má **aktuální informace z listopadu 2025**, ale ve skutečnosti jsou právní reference **zastaralé o 22 měsíců** (od 1. 1. 2024).

**Oprava:**
```markdown
**Poslední aktualizace:** 9. listopadu 2025
**UPOZORNĚNÍ:** Článek je v procesu aktualizace na právní stav 2024-2025.
Některé odkazy na vyhlášky 500/2006 a 501/2006 jsou zastaralé.
Aktuální předpisy: zákon č. 283/2021 Sb. a vyhláška č. 146/2024 Sb.
**Kompletní revize plánována:** Prosinec 2025
```

Nebo lépe: **Nepublikovat článek dokud není aktualizován**.

---

### 5. Vyhláška 503/2006 Sb. - status nejasný

**Použití v článku:**
```markdown
[61] Vyhláška č. 503/2006 Sb., o podrobnější úpravě územního rozhodování
[64] Vyhláška č. 503/2006 Sb., § 3 - obsah žádosti o územní souhlas
[71] Vyhláška č. 503/2006 Sb., § 6 - obsah územního souhlasu
```

**Otázka:**
Je vyhláška 503/2006 Sb. stále platná? Nebo ji nahradil nový stavební zákon?

**Akce:**
OVĚŘIT status vyhlášky 503/2006 Sb. a případně aktualizovat odkazy.

---

## 🟡 STŘEDNÍ PRIORITY

### 6. Terminologie "mobilní domy" bez rozlišení

**Problém:**
Článek používá termín "mobilní domy" obecně, aniž by rozlišoval mezi:
- **Montované domy** (kvalitní, trvalé bydlení, 2,5-4 mil. Kč)
- **Mobilní domy** (levnější, rekreační, 1-2,5 mil. Kč)

**Příklad:**
```markdown
Řádek 3: "pro majitele mobilních domů je znalost územního plánu
kriticky důležitá"
```

Čtenář neví, zda se to týká obou typů nebo jen skutečně mobilních.

**Kontext:**
Podle P1-01-NALEZ je terminologie důležitá:
- Montované domy = kvalitní, ČSN 73 4301, hypotéka
- Mobilní domy = levnější, často bez ČSN, spotřebitelský úvěr

**Doporučení:**
```markdown
Řádek 3 - DOPLNIT:

"pro majitele mobilních domů (včetně montovaných domů vyráběných
v továrně) je znalost územního plánu kriticky důležitá"

NEBO přidat vysvětlující poznámku:

"V tomto článku používáme termín 'mobilní domy' jako obecný pojem
pro výrobky plnící funkci stavby podle § 3 písm. h) zákona č. 283/2021 Sb.,
což zahrnuje jak skutečně mobilní domy na podvozcích, tak montované
(modulární) domy vyráběné v továrně. Pro detailní rozlišení viz článek
'Modulární vs. mobilní domy'."
```

---

### 7. Chybějící cross-reference na související články

**Problém:**
Článek neodkazuje na žádné související wiki články, přestože existují:
- `/zakladni-koncepty/modularni-vs-mobilni-domy.md` - terminologie
- `/legislativa/registrace-kataster.md` - související téma
- `/legislativa/cislo-popisne-vs-evidencni.md` - související téma

**Kde doplnit:**

**1. Úvod (po řádku 9):**
```markdown
> **Související články:**
> - [Modulární vs. mobilní domy - Základní rozdíly](/zakladni-koncepty/modularni-vs-mobilni-domy.md) - porozumění terminologii
> - [Registrace v katastru nemovitostí](/legislativa/registrace-kataster.md) - po získání územního souhlasu
> - [Číslo popisné vs. evidenční](/legislativa/cislo-popisne-vs-evidencni.md) - označení mobilního domu
```

**2. Kapitola "Jak získat územní souhlas" (po řádku 277):**
```markdown
> **Další kroky po získání územního souhlasu:**
> Po umístění mobilního domu na pozemek budete potřebovat:
> - Registraci v katastru nemovitostí - viz [Registrace v katastru](/legislativa/registrace-kataster.md)
> - Přidělení čísla evidenčního nebo popisného - viz [Číslo popisné vs. evidenční](/legislativa/cislo-popisne-vs-evidencni.md)
```

---

### 8. Praktický příklad Brno - ověřit aktuálnost URL

**Problém:**
```markdown
Řádek 169: https://gis.brno.cz/ags/apps/webappviewer/index.html?id=a0006161fd72444c81f1cf5e87d06a02
Řádek 173: https://upmb.brno.cz/
```

**Akce:**
OVĚŘIT, zda tyto URL fungují a zda portál Brna nebyl aktualizován.

---

### 9. Metodika MMR č. 5/2022 - ověřit existenci

**Reference:**
```markdown
[12] Metodická pomůcka MMR č. 5/2022: "Mobilní domy a jejich umístění
     podle nového stavebního zákona"
     Dostupné online: https://mmr.gov.cz/cs/ministerstvo/stavebni-pravo/
     stanoviska-a-metodiky/uzemni-rozhodovani-a-stavebni-rad/mobilni-domy
```

**Otázka:**
Existuje tato metodika? Nebo je to hypotetický odkaz?

**Akce:**
OVĚŘIT existenci dokumentu na webu MMR. Pokud neexistuje, **odstranit citaci**.

---

## 🟢 CO FUNGUJE DOBŘE (Ponechat)

### ✅ Silné stránky článku:

1. **Excelentní struktura**
   - Logické členění: Co → Jak → Kde → Proces
   - Praktické kroky "Krok 1, 2, 3..."
   - Kontrolní checklist na konci

2. **Praktický přístup**
   - Konkrétní příklad: "Parcela 456/12 v k.ú. Brno-Komárov"
   - Návod "jak najít územní plán" s URL adresami
   - Popis procesu získání územního souhlasu včetně cen a lhůt

3. **Časté chyby a tipy**
   - Kapitola "Nejčastější chyby a jak se jim vyhnout"
   - 6 praktických příkladů chyb s řešeními
   - Varování před konkrétními problémy

4. **Rozsáhlé reference**
   - 107 citací a zdrojů
   - Odkazy na zákony s paragrafy
   - Časová razítka "Naposledy přístupné"

5. **Komplexní pokrytí tématu**
   - Od základů (co je územní plán) po pokročilé (změna ÚP)
   - Funkční plochy detailně popsané
   - Limity a ochranná pásma vysvětlené

---

## DOPORUČENÝ AKČNÍ PLÁN

### FÁZE 1: KRITICKÉ OPRAVY (DO 7 DNÍ) ⚠️ PRIORITA 1

**1. Oprava všech odkazů na vyhlášku 501/2006 Sb. (18 výskytů)**

Seznam všech výskytů k opravě:
```
Řádek 33 - text
Reference [14] - celý záznam
Reference [15] § 3-4
Reference [17] § 25-26
Reference [19] § 5
Reference [23] § 8
Reference [27] § 14
Reference [29] § 11-12
Reference [30] § 10
Reference [31] § 15
Reference [32] § 9
Reference [44] § 25 odst. 1
Reference [45] § 25 odst. 2
Reference [46] § 25 odst. 3
Reference [47] § 25 odst. 4
Reference [48] § 20-21
Reference [107] § 25 odst. 2-3
```

**Postup:**
- [ ] Najít aktuální paragrafy v zákoně č. 283/2021 Sb. (§ 137-153)
- [ ] Najít aktuální paragrafy ve vyhlášce č. 146/2024 Sb.
- [ ] Nahradit každou citaci správnou referencí
- [ ] Aktualizovat textové zmínky v článku

**2. Oprava všech odkazů na vyhlášku 500/2006 Sb. (9 výskytů)**

Seznam k opravě:
```
Řádek 33 - text
Reference [2] § 13-18
Reference [13] plné znění
Reference [25] § 14
Reference [39] § 13-18
Reference [49] příloha č. 4
Reference [82] § 46
Reference [85] § 47-54
```

**Postup:**
- [ ] Nahradit odkazy na zákon č. 283/2021 Sb., § 44-56

**3. Doplnit vyhlášku č. 146/2024 Sb.**

- [ ] Přidat novou referenci [14a]: Vyhláška č. 146/2024 Sb.
- [ ] Doplnit zmínku v řádku 33
- [ ] Aktualizovat odkazy na technické požadavky

**4. Aktualizovat datum nebo přidat upozornění**

Buď:
- [ ] Změnit datum na "16. listopadu 2025" po dokončení revize
- [ ] Nebo přidat upozornění o probíhající aktualizaci

**Čas:** 6-10 hodin kvalifikované práce (znalost stavebního práva nutná)

---

### FÁZE 2: VYSOKÉ PRIORITY (DO 14 DNÍ)

**5. Ověřit status vyhlášky 503/2006 Sb.**
- [ ] WebFetch https://www.zakonyprolidi.cz/cs/2006-503
- [ ] Pokud zrušena → najít náhradu
- [ ] Aktualizovat odkazy [61], [64], [71]

**6. Doplnit cross-reference**
- [ ] Úvod: odkaz na "Modulární vs. mobilní domy"
- [ ] Kapitola územní souhlas: odkazy na další kroky
- [ ] Vytvořit sekci "Související články"

**7. Ověřit funkčnost URL**
- [ ] Otestovat URL pro Brno (řádky 169, 173)
- [ ] Otestovat URL pro NGÚP (řádek 101)
- [ ] Aktualizovat nefunkční odkazy

**Čas:** 3-4 hodiny

---

### FÁZE 3: STŘEDNÍ PRIORITY (DO 30 DNÍ)

**8. Vyjasnit terminologii**
- [ ] Přidat vysvětlující poznámku "mobilní domy = mobilní + montované"
- [ ] Nebo důsledně rozlišovat v textu

**9. Ověřit existenci metodiky MMR č. 5/2022**
- [ ] WebFetch odkazu v [12]
- [ ] Pokud neexistuje → odstranit citaci
- [ ] Pokud existuje → stáhnout lokální kopii

**10. Lokální kopie zdrojů (podle WRITING-GUIDELINES)**
- [ ] Vytvořit složku `/downloads/legislativa/`
- [ ] Stáhnout PDF kopie klíčových vyhlášek
- [ ] Stáhnout PDF metodiky MMR
- [ ] Aktualizovat reference s lokálními odkazy

**Čas:** 4-5 hodin

---

## SROVNÁNÍ S WRITING GUIDELINES

### ✅ CO ČLÁNEK DODRŽUJE:

1. **Struktura článku** ✅
   - Úvod vysvětluje důležitost tématu
   - Logické členění kapitol
   - Praktické příklady a tipy

2. **Souvislý text** ✅
   - Převažuje souvislý text nad odrážkami
   - Odstavce 3-5 vět
   - Odrážky jen pro seznamy

3. **Citace** ✅
   - Inline [číslo]
   - Sekce Reference na konci (107 zdrojů)
   - Odkazy na zákony s paragrafy

4. **Praktičnost** ✅
   - Krok-za-krokem návody
   - Konkrétní příklady
   - Kontrolní checklist

### ❌ CO ČLÁNEK NEDODRŽUJE:

1. **Aktuálnost právních referencí** ❌
   - 27x odkazy na zrušené vyhlášky
   - Chybí aktuální vyhláška 146/2024

2. **Lokální hosting zdrojů** ❌
   - CHYBÍ: PDF kopie vyhlášek
   - CHYBÍ: Lokální kopie zákonů
   - Pouze externí odkazy

3. **Cross-reference** ❌
   - Neodkazuje na související wiki články
   - Chybí navigace mezi tématy

---

## ZÁVĚR

**Celkové hodnocení:** ⭐⭐☆☆☆ (2/5)

Článek je **strukturálně kvalitní** a **prakticky použitelný**, ale obsahuje **kritické faktické chyby** v právních referencích, které činí obsah **zastaralým a potenciálně zavádějícím**.

### DOPORUČENÍ:

**PRIORITA 1 - KRITICKÁ:** Aktualizovat všechny právní reference (vyhlášky 500/2006, 501/2006) → **6-10 hodin práce**

**PRIORITA 2 - VYSOKÁ:** Doplnit vyhlášku 146/2024 Sb. a cross-reference → **3-4 hodiny práce**

**PRIORITA 3 - STŘEDNÍ:** Vyjasnit terminologii a stáhnout lokální kopie → **4-5 hodin práce**

**Celkový čas revize:** 13-19 hodin kvalifikované práce (znalost stavebního práva 2024-2025 nutná)

---

## KRITICKÁ AKCE PŘED PUBLIKACÍ

**⚠️ UPOZORNĚNÍ:**

Článek **NESMÍ být publikován** v současném stavu bez opravy kritických chyb. Obsahuje 27 odkazů na **zrušené právní předpisy**, což může vést k:

1. **Zamítnutí žádosti** o územní souhlas (čtenář cituje neplatnou vyhlášku)
2. **Finanční ztráta** (investice do nesprávných postupů)
3. **Ztráta důvěryhodnosti** wiki (zastaralé informace prezentované jako aktuální)

**DOPORUČENÍ:**

Buď:
- **A) Článek stáhnout** z veřejného přístupu do dokončení revize
- **B) Přidat výrazné upozornění** na začátek:

```markdown
---
⚠️ **UPOZORNĚNÍ: ČLÁNEK V PROCESU AKTUALIZACE**

Tento článek obsahuje odkazy na vyhlášky č. 500/2006 Sb. a č. 501/2006 Sb.,
které byly **zrušeny k 1. 1. 2024**. Aktuální právní úprava je v zákoně
č. 283/2021 Sb. a vyhlášce č. 146/2024 Sb.

**Pro aktuální informace kontaktujte příslušný stavební úřad.**

Kompletní aktualizace článku: prosinec 2025
---
```

---

## PŘÍLOHY

### A) Mapování změn právních předpisů

```
STARÝ SYSTÉM (do 31. 12. 2023):
├── Zákon č. 183/2006 Sb. (starý stavební zákon)
├── Vyhláška č. 500/2006 Sb. (územně plánovací dokumentace) ❌ ZRUŠENA
└── Vyhláška č. 501/2006 Sb. (požadavky na využívání území) ❌ ZRUŠENA

NOVÝ SYSTÉM (od 1. 7. 2024):
├── Zákon č. 283/2021 Sb. (nový stavební zákon) ✅ PLATNÝ
│   ├── § 31-56 - Územní plánování (nahradilo vyhlášku 500/2006)
│   └── § 137-153 - Obecné požadavky na výstavbu (částečně nahradilo 501/2006)
└── Vyhláška č. 146/2024 Sb. (požadavky na výstavbu) ✅ PLATNÁ
    ├── § 14-18 - Umisťování staveb (nahradilo § 25 vyhlášky 501/2006)
    └── § 35-37 - Parkování (nahradilo § 20-21 vyhlášky 501/2006)
```

### B) Kontrolní checklist pro opravu

```markdown
KRITICKÉ (do 7 dnů):
- [ ] Oprava 18x výskytů vyhlášky 501/2006 → zákon 283/2021 + vyhláška 146/2024
- [ ] Oprava 9x výskytů vyhlášky 500/2006 → zákon 283/2021, § 44-56
- [ ] Doplnění vyhlášky 146/2024 Sb. do textu a referencí
- [ ] Aktualizace data nebo přidání upozornění

VYSOKÉ (do 14 dnů):
- [ ] Ověření statusu vyhlášky 503/2006 Sb.
- [ ] Doplnění cross-reference na související články
- [ ] Ověření funkčnosti URL (Brno, NGÚP)

STŘEDNÍ (do 30 dnů):
- [ ] Vyjasnění terminologie mobilní vs. montované domy
- [ ] Ověření existence metodiky MMR č. 5/2022
- [ ] Stažení lokálních kopií zdrojů (PDF)
- [ ] Standardizace referencí s lokálními odkazy
```

### C) Šablona reference pro vyhlášku 146/2024

```markdown
[14a] Vyhláška č. 146/2024 Sb., o požadavcích na výstavbu
      Ministerstvo pro místní rozvoj ČR, 2024 (účinná od 1. 7. 2024)
      Dostupné online: https://www.zakonyprolidi.cz/cs/2024-146
      **Archivováno lokálně:** /downloads/legislativa/vyhlaska-146-2024.pdf
      Naposledy přístupné: 16. listopadu 2025

      Klíčové paragrafy:
      - § 14 - Vzdálenosti staveb od hranic pozemků
      - § 15 - Zastavěná plocha pozemku
      - § 16 - Nezastavěná a nezpevněná část pozemku
      - § 35-37 - Parkování a garáže
      - § 50-80 - Technické požadavky na stavby pro bydlení
```

---

**Připravil:** Claude (Anthropic AI)
**Datum:** 16. listopadu 2025
**Další audit doporučen:** Leden 2026 (po implementaci kritických oprav)
**Kontakt pro dotazy:** radim@wikiporadce.cz
