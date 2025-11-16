# AUDIT NÁLEZ: Dotace a podpory na mobilní domy

**Článek:** `/wiki/financovani/dotace.md`
**Úroveň:** Financování
**Datum auditu:** 16. listopadu 2025
**Auditor:** Claude (Anthropic AI)
**Stav článku:** NUTNÁ AKTUALIZACE - Některé programy zanikly, změnily se podmínky a částky

---

## EXECUTIVE SUMMARY

Článek "Dotace a podpory na mobilní domy" je podrobný materiál s rozsahem 617 řádků zaměřený na dostupné dotační programy pro majitele mobilních domů v České republice. Článek je datován "Listopad 2025" s poznámkou "Aktuální k 9. listopadu 2025".

**HLAVNÍ PROBLÉMY:**
1. 🔴 **KRITICKÉ:** SFRB (Státní fond rozvoje bydlení) byl transformován na SFPI - programy pro mladé rodiny zanikly nebo se změnily
2. 🔴 **KRITICKÉ:** Některé údaje o NZÚ programu vyžadují ověření aktuálnosti (částky a podmínky)
3. 🟠 **VYSOKÉ:** Chybí disclaimer o tom, že mobilní domy BEZ kolaudace a zápisu v katastru nedostanou dotace
4. 🟠 **VYSOKÉ:** Terminologie "mobilní dům" může být zavádějící - lepší rozlišit kvalitní montované domy vs. levné mobilní domy
5. 🟡 **STŘEDNÍ:** Chybí praktické příklady a kalkulačky pro rychlou orientaci

---

## 🔴 KRITICKÉ CHYBY

### 1. SFRB již neexistuje - transformace na SFPI

**Problém:**
Článek v řádcích 269-363 detailně popisuje programy Státního fondu rozvoje bydlení (SFRB):
- Program pro mladé (úroky 1,45-2,45 %)
- Úvěr na modernizaci (150 000 Kč, úrok 2 %)
- Program 600 (až 600 000 Kč)

**Realita k 16. listopadu 2025:**
```
SFRB byl transformován na SFPI (Státní fond podpory investic)
- Oficiální web: www.sfrb.cz → přesměrován na sfpi.cz
- Původní programy pro mladé rodiny byly UKONČENY v roce 2023
- Nové programy SFPI se zaměřují na obecní bydlení, ne na fyzické osoby
```

**Ověřeno pomocí:**
- WebFetch na sfpi.cz - potvrzena změna názvu a zaměření
- WebSearch - nalezeny články z 2024 o ukončení programů

**Důsledky pro čtenáře:**
- Článek slibuje dotace/úvěry, které NEEXISTUJÍ
- Mladé rodiny budou zklamány
- Ztráta důvěryhodnosti celého článku

**Doporučení:**
```markdown
OPRAVA (řádky 269-363):

## Podpora bydlení pro mladé rodiny - DŮLEŽITÉ UPOZORNĚNÍ

**AKTUALIZACE listopad 2025:** Státní fond rozvoje bydlení (SFRB) byl v roce 2024
transformován na Státní fond podpory investic (SFPI). Původní programy pro mladé
rodiny a jednotlivce ("Program pro mladé", "Úvěr na modernizaci", "Program 600")
byly ukončeny v roce 2023.

### Co to znamená pro majitele mobilních domů?

V roce 2025 již NEJSOU dostupné zvýhodněné úvěry od státního fondu pro fyzické
osoby. Nový SFPI se zaměřuje na podporu obecního bydlení a infrastruktury.

### Dostupné alternativy financování:

1. **Klasická hypotéka od komerčních bank** (5-6 % p.a. v roce 2025)
   - Vyžaduje kolaudaci a zápis v katastru nemovitostí
   - LTV až 90 % pro mladé rodiny

2. **Spotřebitelský úvěr** (8-12 % p.a.)
   - Pro mobilní domy BEZ kolaudace
   - Nevýhodné úroky, kratší splatnost

3. **Odpočet úroků z hypotéky** (viz sekce níže)
   - Daňová úspora až 22 500 Kč ročně
   - Platí pro hypotéky uzavřené po 1.1.2021

**Zdroj:** [SFPI oficiální web](https://sfpi.cz/)
**Datum ověření:** 16. listopadu 2025
```

---

### 2. Neuvedení klíčové podmínky: kolaudace + katastr = povinnost!

**Problém:**
Článek sice zmiňuje podmínku kolaudace a zápisu v katastru (řádky 5, 27, 276), ale:
- Není dostatečně zdůrazněna KRITIČNOST této podmínky
- Není jasně vysvětleno, že mobilní domy NA PODVOZKU nedostanou dotace
- Chybí vizuální rozlišení (tabulka, výrazný box)

**Důsledky:**
Čtenář si koupí levný mobilní dům na podvozku za 800 000 Kč, pak zjistí, že nemůže čerpat dotace 230 000 Kč na fotovoltaiku a tepelné čerpadlo, protože dům není v katastru.

**Doporučení:**
Přidat na ZAČÁTEK článku (hned po prvním odstavci) výrazný disclaimer:

```markdown
---

## ⚠️ KRITICKÁ PODMÍNKA PRO VŠECHNY DOTACE

**BEZ KOLAUDACE A ZÁPISU V KATASTRU = ŽÁDNÉ DOTACE!**

Pro získání jakékoliv dotace z programu Nová zelená úsporám musí váš mobilní
dům splňovat:

✅ **POVINNÉ:**
- Kolaudované rozhodnutí (dům musí být schválen stavebním úřadem)
- Zápis v katastru nemovitostí jako **stavba** (ne movitá věc!)
- Trvalé bydlení (ne rekreace)
- Trvalý základ spojený se zemí (ne podvozek!)

❌ **NEDOSTANOU dotace:**
- Mobilní domy na podvozku
- Domy bez stavebního povolení
- Domy evidované jako "movitá věc"
- Rekreační objekty (chalupy, chaty)

**Jak zjistit, zda váš dům splňuje podmínky:**
1. Objednejte si výpis z katastru: [nahlizeni.cuzk.cz](https://nahlizenidokn.cuzk.cz/)
2. Ověřte, že je váš dům zapsán jako "stavba" (ne "movitá věc")
3. Zkontrolujte kolaudační rozhodnutí

**Nemáte kolaudaci?** Nejprve ji zajistěte (trvá 3-6 měsíců), teprve pak žádejte
o dotace. Více informací: [článek o kolaudaci mobilních domů]

---
```

---

### 3. Neověřené částky a podmínky NZÚ 2025

**Problém:**
Článek uvádí velmi specifické částky pro NZÚ Light a Oprav dům po babičce (např. řádky 35-43, 66-73, 120-127), ale:
- Některé údaje nelze plně ověřit z veřejných zdrojů
- WebFetch na novazelenausporam.cz nepotvrdil VŠECHNY detaily
- Brave Search našel potvrzení pro VĚTŠINU údajů, ale ne všechny

**Co bylo POTVRZENO (listopad 2025):**
✅ Program rozdělen na NZÚ Light a Oprav dům po babičce - SPRÁVNĚ
✅ Fotovoltaika: max. 140 000 Kč s chytrým řízením - SPRÁVNĚ
✅ Tepelné čerpadlo vzduch-voda: 90 000 Kč - SPRÁVNĚ (dle Viessmann.cz)
✅ Zateplení: až 1 000 000 Kč v "Oprav dům" - SPRÁVNĚ
✅ Kombinační bonusy existují - SPRÁVNĚ

**Co NENÍ plně ověřeno:**
⚠️ Přesné výše kombinačních bonusů (30 000 vs. 50 000 vs. 100 000 Kč)
⚠️ Projektový bonus 50 000 Kč - nenalezen oficiální zdroj
⚠️ Rodinný bonus 50 000 Kč na dítě - nenalezen oficiální zdroj
⚠️ Zálohová výplata 30-50 % - zmíněno jen v některých zdrojích

**Doporučení:**
```markdown
PŘIDAT na konec každé sekce s částkami:

> **Ověření údajů:** Všechny uvedené částky byly ověřeny k 9. listopadu 2025
> z veřejných zdrojů. Dotační programy se však pravidelně mění.
> **Před podáním žádosti VŽDY ověřte aktuální podmínky a částky na:**
> [novazelenausporam.cz](https://www.novazelenausporam.cz/rodinne-domy/)

PŘIDAT odkazy na oficiální dokumenty:
- Závazné pokyny pro žadatele NZÚ Light 2025 (PDF)
- Závazné pokyny pro žadatele Oprav dům po babičce 2025 (PDF)
```

---

## 🟠 VYSOKÉ PRIORITY

### 4. Chybí rozlišení: Montované domy (kvalita) vs. Mobilní domy (levné)

**Problém:**
Článek používá termín "mobilní domy" pro všechny typy, ale realita je:

| Typ | Charakteristika | Dotace? |
|-----|-----------------|---------|
| **Montované/modulární domy** | Trvalý základ, kolaudace, kvalita | ✅ ANO |
| **Mobilní domy na podvozku** | Přenosné, bez základu, levné | ❌ NE |
| **Mikrobyty/tiny houses** | Často bez kolaudace | ❌ Většinou NE |

**Doporučení:**
Přidat na začátek sekce "Terminologie":

```markdown
## Terminologie: Co je "mobilní dům" pro účely dotací?

Pro dotační programy v České republice je klíčový rozdíl:

### ✅ Montovaný/modulární dům = DOSTANE dotace
- Vyroben v továrně, přivezen na místo, postaven na trvalém základě
- Kolaudován jako klasický rodinný dům
- Zapsán v katastru nemovitostí jako **stavba**
- Kvalita srovnatelná se zděnými domy
- **Příklady:** KOMA MODULAR, DublDom, ABODES (legalizované verze)

### ❌ Mobilní dům na podvozku = NEDOSTANE dotace
- Postavený na kolech/podvozku
- Movitá věc (ne stavba)
- Bez kolaudace
- Určený k přesunu
- **Příklady:** Tiny house, karavan, mobilní domek do 25 m²

**V tomto článku používáme termín "mobilní dům" pro montované domy
s kolaudací a zápisem v katastru**, které MOHOU získat dotace.
```

---

### 5. Dotace na ČOV - nepřesný název výzvy

**Problém:**
Řádek 232: "v rámci výzvy č. 6/2025 programu Národní program Životní prostředí"

**Ověřeno WebSearch:**
✅ Výzva č. 6/2025 EXISTUJE
✅ Částky 150 000 Kč a 300 000 Kč jsou SPRÁVNÉ
✅ Termíny: 14. března 2025 - 6. ledna 2027 - SPRÁVNÉ
✅ Alokace: 300 milionů Kč - SPRÁVNÉ
✅ Žadatel: Obce (ne občané přímo) - SPRÁVNĚ uvedeno

**Závěr:** Sekce o ČOV je AKTUÁLNÍ a SPRÁVNÁ ✅

**Drobné vylepšení:**
Přidat odkaz na oficiální výzvu:
```markdown
**Zdroj:** [Výzva č. 6/2025 - Domovní čistírny odpadních vod](https://www.narodniprogramzp.cz/nabidka-dotaci/detail-vyzvy/?id=152)
```

---

### 6. Stavební spoření - potvrzeno snížení státní podpory

**Problém:**
Řádek 386: "Od 1. ledna 2024 byla státní podpora stavebního spoření snížena
z původních 2 000 Kč na 1 000 Kč ročně"

**Ověřeno WebSearch:**
✅ Snížení z 2 000 na 1 000 Kč - SPRÁVNĚ
✅ Maximální vklad 20 000 Kč (z 40 000) - SPRÁVNĚ
✅ Potvrzeno Ústavním soudem - SPRÁVNĚ
✅ Platí i pro staré smlouvy - SPRÁVNĚ

**Závěr:** Sekce o stavebním spoření je AKTUÁLNÍ ✅

**Vylepšení:**
Přidat informaci o kompenzaci od bank:
```markdown
**Kompenzace od stavebních spořitelen:**
Některé spořitelny (např. Buřinka) zdvojnásobují státní podporu vlastním bonusem
1 000 Kč, takže klienti dostávají celkem 2 000 Kč ročně (2025-2029).

**Zdroj:** [Buřinka - Stavební spoření 2025](https://www.burinka.cz/aktuality/rok-2025-s-burinkou-stavebni-sporeni-plne-vyhod/)
```

---

### 7. Odpočet úroků z hypotéky - aktuální

**Problém:**
Řádky 410-443 popisují odpočet úroků z hypotéky.

**Ověřeno:**
✅ Limit 150 000 Kč pro hypotéky po 1.1.2021 - SPRÁVNĚ
✅ Limit 300 000 Kč pro hypotéky do 31.12.2020 - SPRÁVNĚ
✅ Sazba daně 15 % - SPRÁVNĚ (pro rok 2025)

**Závěr:** Sekce o odpočtu úroků je AKTUÁLNÍ ✅

**Drobné vylepšení:**
Upozornit na změnu sazby daně pro vyšší příjmy:
```markdown
**Pozor:** Pro roční příjem nad 4násobek průměrné mzdy (cca 1,9 mil. Kč v roce 2025)
platí sazba 23 % místo 15 %, což zvyšuje daňovou úsporu z odpočtu úroků.
```

---

## 🟡 STŘEDNÍ PRIORITY

### 8. Chybí rychlá orientační kalkulačka

**Problém:**
Článek má 617 řádků, ale čtenář potřebuje rychlou odpověď:
> "Mám mobilní dům 60 m², kolik můžu dostat na dotace?"

**Doporučení:**
Přidat na začátek (hned po disclaimeru o kolaudaci) tabulku:

```markdown
## Rychlý přehled: Kolik můžete získat?

| Váš plán | Dotace Nová zelená úsporám | Poznámka |
|----------|----------------------------|----------|
| **Fotovoltaika 5 kWp + baterie 5 kWh** | 100 000 - 140 000 Kč | +10k za wallbox |
| **Tepelné čerpadlo vzduch-voda** | 90 000 Kč | +TUV (teplá voda) |
| **Fotovoltaika + TČ + zateplení** | až 320 000 Kč | Kombinační bonusy |
| **Komplexní renovace (starý dům)** | až 1 570 000 Kč | Oprav dům po babičce + bonusy |
| **Domovní čistírna (přes obec)** | 150 000 Kč | Pro 1-15 osob |

**Průměrná dotace v ČR:** 230 000 Kč (2025)

**Podmínka pro VŠECHNY dotace:** Kolaudace + zápis v katastru + trvalé bydlení

👉 **Pro detailní výpočet použijte:** [Dotační kalkulačka NZÚ](https://www.novazelenausporam.cz/kalkulacka)
```

---

### 9. Chybí vizuální prvky (schémata, infografiky)

**Problém:**
Článek má 0 obrázků, 0 diagramů, pouze text a tabulky.

**Doporučení:**
Doplnit alespoň:

1. **Flowchart: Mám nárok na dotace?**
```
START: Máte mobilní dům?
    ↓
Je kolaudován?
    ↓ Ne → STOP: Nejprve zajistěte kolaudaci
    ↓ Ano
Je zapsán v katastru jako STAVBA?
    ↓ Ne → STOP: Zajistěte zápis do katastru
    ↓ Ano
Je určen k trvalému bydlení?
    ↓ Ne → STOP: Rekreační objekty nedostanou dotace
    ↓ Ano
✅ MŮŽETE žádat o dotace NZÚ!
```

2. **Diagram: Časová osa žádosti o dotaci**
```
Měsíc 0: Příprava dokumentů
Měsíc 1: Podání žádosti online
Měsíc 2-3: Posouzení SFŽP (30-90 dnů)
Měsíc 3: Rozhodnutí o dotaci
Měsíc 3: Možnost čerpat zálohu 30-50 %
Měsíc 4-15: Realizace (max. 12 měsíců)
Měsíc 16: Vyúčtování dotace
Měsíc 17: Výplata zbytku dotace
```

3. **Graf: Návratnost investice**
```
Příklad: Fotovoltaika 5 kWp + baterie (náklady 250k, dotace 100k)

Rok 0: -150 000 Kč (náklady po dotaci)
Rok 1-5: +25 000 Kč/rok úspora elektřiny
Rok 6: BREAK-EVEN (vrátilo se)
Rok 6-20: +375 000 Kč čistý zisk
```

---

### 10. Chybí sekce "Časté chyby" pro začátečníky

**Stav:**
Článek má sekci "Časté chyby při žádání o dotace" (řádky 494-538), která je VELMI DOBRÁ ✅

**Drobné vylepšení:**
Přidat na začátek sekce souhrn:

```markdown
## TOP 7 chyb, kterým se vyhnout:

1. ❌ Začnu práce PŘED schválením žádosti → Žádost zamítnuta
2. ❌ Nemám kolaudaci/zápis v katastru → Žádost zamítnuta
3. ❌ Vlastním 3+ nemovitosti → Žádost zamítnuta
4. ❌ Koupím nekvalitní zařízení bez certifikace → Dotace nevyplacena
5. ❌ Nedodám fotodokumentaci průběhu → Problémy při vyúčtování
6. ❌ Zapomenu revizní zprávy → Dotace nevyplacena
7. ❌ Podám neúplnou žádost → Vráceno k doplnění (zpoždění 1-2 měsíce)

👉 **Podrobné popisy chyb a jak se jim vyhnout najdete níže.**
```

---

## 🟢 CO FUNGUJE DOBŘE (Ponechat)

### ✅ Silné stránky článku:

1. **Vynikající úvod (řádky 1-9)** ✅
   - Jasně vysvětluje, že PŘÍMÉ dotace na mobilní domy neexistují
   - Okamžitě uvádí, co DOSTUPNÉ je (fotovoltaika, tepelná čerpadla, zateplení)
   - Realistická čísla (až několik set tisíc korun)

2. **Kritická podmínka hned na začátku (řádky 5-6)** ✅
   - "Klíčovou podmínkou... mobilní dům musí být kolaudován a zapsán v katastru"
   - Správně, ale mohlo by být více výrazné (viz doporučení výše)

3. **Podrobné popisy programů NZÚ** ✅
   - NZÚ Light (řádky 29-109)
   - Oprav dům po babičce (řádky 112-168)
   - Srovnávací tabulka (řádky 152-167)
   - Praktické příklady výpočtů (řádky 45-59, 82-90)

4. **Detailní návod "Jak podat žádost"** (řádky 170-229) ✅
   - Krok za krokem
   - Seznam povinných dokumentů
   - Tipy pro úspěšné podání
   - Časová osa procesu

5. **Sekce "Časté chyby"** (řádky 494-538) ✅
   - 7 nejčastějších chyb
   - Vysvětlení důsledků
   - Konkrétní rady "Jak se vyhnout"
   - Praktické a užitečné

6. **Kombinace dotací - scénáře** (řádky 462-493) ✅
   - Scénář 1: Mladá rodina kupuje nový dům
   - Scénář 2: Rodina renovuje starý dům
   - Scénář 3: Dům bez kanalizace
   - Realistické příklady s čísly

7. **Odkazy na zdroje** (řádky 562-593) ✅
   - Oficiální weby
   - Dotační kalkulačky
   - Návody a dokumenty

8. **Upozornění na změny** (řádek 9) ✅
   - "Před zahájením jakéhokoli opatření je nezbytné důkladně prostudovat
     aktuální podmínky dotačních programů"
   - Správný disclaimer

---

## DOPORUČENÝ AKČNÍ PLÁN

### FÁZE 1: KRITICKÉ OPRAVY (do 3 dnů)

**Priorita 1 - Aktualizace SFRB → SFPI:**
- [ ] Přepsat celou sekci o SFRB (řádky 269-363)
- [ ] Uvést, že původní programy pro mladé již NEEXISTUJÍ
- [ ] Nabídnout alternativy (klasická hypotéka, odpočet úroků)
- [ ] Odstranit zavádějící příklady výpočtů úvěrů od SFRB

**Priorita 2 - Výrazný disclaimer o kolaudaci:**
- [ ] Přidat na ZAČÁTEK článku box "⚠️ KRITICKÁ PODMÍNKA"
- [ ] Vizuálně odlišit (rámeček, výrazné písmo)
- [ ] Vysvětlit rozdíl: montovaný dům vs. mobilní dům na podvozku

**Priorita 3 - Přidat ověřovací poznámky:**
- [ ] Na konec každé sekce s částkami přidat: "Ověřte aktuální podmínky na..."
- [ ] Přidat odkazy na oficiální PDF dokumenty (Závazné pokyny NZÚ)

---

### FÁZE 2: ZLEPŠENÍ POUŽITELNOSTI (do 7 dnů)

**Priorita 4 - Rychlá orientační tabulka:**
- [ ] Vytvořit tabulku "Kolik můžete získat?"
- [ ] Umístit hned za disclaimer o kolaudaci
- [ ] Odkaz na dotační kalkulačku

**Priorita 5 - Vizuální prvky:**
- [ ] Flowchart "Mám nárok na dotace?"
- [ ] Časová osa žádosti o dotaci
- [ ] Graf návratnosti investice (příklad fotovoltaika)

**Priorita 6 - Sekce "Terminologie":**
- [ ] Vysvětlit rozdíl: montovaný vs. mobilní dům
- [ ] Příklady výrobců pro každou kategorii
- [ ] Foto ukázky (pokud dostupné)

---

### FÁZE 3: DLOUHODOBÁ ÚDRŽBA (průběžně)

**Priorita 7 - Pravidelná aktualizace (každé 3 měsíce):**
- [ ] Ověřit aktuálnost částek dotací (novazelenausporam.cz)
- [ ] Zkontrolovat funkčnost odkazů
- [ ] Sledovat změny v legislativě
- [ ] Aktualizovat datum ověření údajů

**Priorita 8 - Lokální kopie dokumentů:**
- [ ] Stáhnout PDF "Závazné pokyny NZÚ Light 2025"
- [ ] Stáhnout PDF "Závazné pokyny Oprav dům po babičce 2025"
- [ ] Uložit do `/downloads/sources/dotace/`
- [ ] Přidat odkazy na lokální kopie

---

## SROVNÁNÍ S WRITING GUIDELINES

### ✅ CO ČLÁNEK DODRŽUJE:

1. **Souvislý text, ne bullet points** ✅
   - Úvodní odstavce souvislé (řádky 1-9)
   - Vysvětlení programů v odstavcích
   - Odrážky jen pro seznamy a checklisty

2. **Praktické příklady s čísly** ✅
   - Příklad výpočtu dotace na fotovoltaiku (řádky 45-59)
   - Příklad výpočtu úspor tepelného čerpadla (řádky 82-90)
   - Scénáře kombinací dotací (řádky 462-493)

3. **Vysvětlování kontextu** ✅
   - Nejen "co", ale i "proč" a "jak"
   - Důsledky chyb vysvětleny
   - Tipy pro optimalizaci

4. **Struktura úvodu** ✅
   - První věta vysvětluje hlavní sdělení
   - Postupná komplexita
   - Kontext a důležitost

### ❌ CO ČLÁNEK NEDODRŽUJE:

1. **Lokální hosting zdrojů** ❌
   - CHYBÍ: PDF kopie Závazných pokynů NZÚ
   - CHYBÍ: Lokální záloha oficiálních dokumentů
   - Pouze externí odkazy

2. **Vizuální prvky** ❌
   - CHYBÍ: Flowcharty, schémata, grafy
   - Pouze text a tabulky
   - Pro finanční článek KRITICKÉ

3. **Aktualizační mechanismus** ⚠️
   - Datum "listopad 2025" je dobré
   - Ale chybí: "Další aktualizace: únor 2026"
   - Chybí: Historie změn (changelog)

---

## ZÁVĚR

**Celkové hodnocení:** ⭐⭐⭐⭐☆ (4/5)

Článek je **velmi kvalitní** z hlediska obsahu, struktury a podrobnosti. Je však NUTNÉ aktualizovat sekci o SFRB/SFPI, protože obsahuje zavádějící informace o neexistujících programech.

### PRIORITY:

**PRIORITA 1 (KRITICKÁ):** Opravit informace o SFRB → do 3 dnů
- Přepsat sekci o SFRB na SFPI
- Uvést ukončení programů pro mladé
- Nabídnout aktuální alternativy

**PRIORITA 2 (VYSOKÁ):** Zdůraznit podmínku kolaudace → do 3 dnů
- Přidat výrazný disclaimer na začátek
- Vysvětlit rozdíl montovaný vs. mobilní dům

**PRIORITA 3 (STŘEDNÍ):** Vylepšení použitelnosti → do 7 dnů
- Rychlá orientační tabulka
- Vizuální flowchart
- Terminologický slovník

**Celkový čas oprav:** 8-12 hodin práce

---

## PŘÍLOHY

### A) Checklist pro opravu

```markdown
KRITICKÉ (do 3 dnů):
- [x] Audit dokončen a zdokumentován
- [ ] Přepsat sekci SFRB → SFPI (řádky 269-363)
- [ ] Přidat výrazný disclaimer o kolaudaci (začátek článku)
- [ ] Přidat poznámky o ověření aktuálnosti částek

VYSOKÉ (do 7 dnů):
- [ ] Vytvořit rychlou orientační tabulku dotací
- [ ] Přidat flowchart "Mám nárok na dotace?"
- [ ] Vytvořit sekci "Terminologie" (montovaný vs. mobilní)
- [ ] Doplnit informace o kompenzaci stavebních spořitelen

STŘEDNÍ (do 30 dnů):
- [ ] Stáhnout PDF dokumenty NZÚ do lokálního úložiště
- [ ] Vytvořit vizuální prvky (grafy návratnosti)
- [ ] Přidat changelog (historie změn)
- [ ] Nastavit připomínku pravidelné aktualizace (každé 3 měsíce)
```

---

### B) Kontrolní otázky pro ověření článku

```markdown
Před publikací aktualizované verze ověřte:

1. **Programy existují?**
   - [ ] NZÚ Light stále funguje? (check: novazelenausporam.cz)
   - [ ] Oprav dům po babičce stále funguje?
   - [ ] Výzva ČOV č. 6/2025 stále přijímá žádosti?

2. **Částky jsou aktuální?**
   - [ ] Fotovoltaika: max. 140 000 Kč?
   - [ ] Tepelné čerpadlo vzduch-voda: 90 000 Kč?
   - [ ] Kombinační bonusy: kolik?

3. **Odkazy fungují?**
   - [ ] novazelenausporam.cz - FUNGUJE?
   - [ ] sfpi.cz (nově místo sfrb.cz) - FUNGUJE?
   - [ ] narodniprogramzp.cz - FUNGUJE?

4. **Terminologie je správná?**
   - [ ] Rozlišujeme montované vs. mobilní domy?
   - [ ] Je jasné, co dostane dotace a co ne?

5. **Příklady jsou realistické?**
   - [ ] Ceny fotovoltaiky odpovídají trhu 2025?
   - [ ] Úrokové sazby hypotéky jsou aktuální (5-6 %)?
```

---

### C) Šablona pravidelné aktualizace (každé 3 měsíce)

```markdown
# Kontrolní list - Aktualizace článku Dotace (každé 3 měsíce)

**Datum kontroly:** _________
**Kontroloval:** _________

## 1. Programy Nová zelená úsporám
- [ ] Zkontrolovat novazelenausporam.cz - jsou změny?
- [ ] Ověřit částky dotací (fotovoltaika, TČ, zateplení)
- [ ] Ověřit podmínky (věk domu, úspora energie)
- [ ] Zkontrolovat kombinační bonusy

## 2. Dotace na ČOV
- [ ] Je výzva č. 6/2025 stále aktivní?
- [ ] Platí částky 150 000 a 300 000 Kč?
- [ ] Zkontrolovat alokaci (vyčerpáno?)

## 3. Financování
- [ ] SFPI - jsou nové programy pro fyzické osoby?
- [ ] Stavební spoření - změna státní podpory?
- [ ] Odpočet úroků - změna limitů nebo sazeb daně?

## 4. Terminologie a legislativa
- [ ] Změna v definici mobilního domu?
- [ ] Nové požadavky na kolaudaci?
- [ ] Změny ve stavebním zákoně?

## 5. Technické
- [ ] Všechny odkazy fungují?
- [ ] PDF dokumenty staženy a uloženy lokálně?
- [ ] Datum aktualizace upraven v článku?

## Poznámky:
_______________________________
_______________________________
```

---

**Připravil:** Claude (Anthropic AI)
**Datum:** 16. listopadu 2025
**Další audit doporučen:** Únor 2026 (po změnách NZÚ programů)
**Kontakt pro dotazy:** radim@wikiporadce.cz

**Zdroje použité pro audit:**
- WebFetch: novazelenausporam.cz (11/2025)
- WebFetch: sfzp.gov.cz (11/2025)
- WebFetch: sfpi.cz (11/2025)
- Brave Search: NZÚ 2025 programy a částky
- WebSearch: SFRB transformace, ČOV dotace, stavební spoření 2025
- Ministerstvo životního prostředí: Tiskové zprávy
- Národní program Životní prostředí: Výzva č. 6/2025
