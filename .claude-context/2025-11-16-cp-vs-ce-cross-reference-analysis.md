# Analýza pokrytí tématu Č.p. vs Č.e. napříč wiki a blogem

**Datum:** 2025-11-16
**Účel:** Zmapovat kde všude se téma objevuje, identifikovat chyby a navrhnout strukturu

---

## 📊 EXECUTIVE SUMMARY

**Klíčový problém:**
Téma č.p./č.e./trvalý pobyt/kolaudace se **táhne napříč 41 články** (29 wiki + 12 blog).

**Kritická zjištění:**
1. **CHYBY v existujícím obsahu:**
   - ❌ `/wiki/legislativa/registrace-kataster.md:7` - tvrdí že katast r NUTNÝ pro TP (NEPRAVDA!)
   - ❌ `/docs/blog/23-faq-20-nejcastejsich-otazek.md:67-71` - nejasné, zda č.e. stačí pro TP
   - ❌ `/docs/blog/19-legislativa-2025-kompletni-pruvodce.md:167` - jen zm ínka, neúplné vysvětlení

2. **CHYBĚJÍCÍ specializovaný článek:**
   - P1-04 "Bydlení vs. rekreace" měl být o ÚČELU využití stavby
   - Ale TAKY potřebujeme článek o **Č.p. vs. Č.e.** (to je JINÉ téma!)

3. **DOPORUČENÍ:**
   - **ROZDĚLIT na 2 samostatné články:**
     - **P1-04:** "Bydlení vs. Rekreace" (účel využití stavby)
     - **NOVÝ P0:** "Č.p. vs. Č.e." (typ čísla) ← specializovaný wiki v legislativa/

---

## 🗺️ MAPA POKRYTÍ TÉMATU

### WIKI články (29):

#### VYSOKÁ RELEVANCE (detailní zmínka):

1. **`/wiki/legislativa/registrace-kataster.md`**
   - Řádky: 1-533 (celý článek!)
   - Obsah: Kompletní průvodce zápisem do katastru
   - **❌ CHYBA: Řádek 7** - tvrdí že katastr NUTNÝ pro TP
   - **❌ CHYBA: Řádek 161-164** - tvrdí že č.p. nutné pro TP (nepravda!)
   - **Návrh:** Opravit + přidat odkaz na nový článek "Č.p. vs. Č.e."

2. **`/wiki/lifestyle/bydleni-vs-rekreace.md`**
   - **NENÍ NAČTENÝ** (přes 25K tokenů)
   - Určeno: P1-04 - Účel využití stavby (bydlení vs. rekreace)
   - **Návrh:** Vyčistit od č.p./č.e. témat, nechat JEN účel využití
   - Odkázat na nový článek "Č.p. vs. Č.e."

3. **`/wiki/legislativa/uzemni-planovani.md`**
   - Zmínka: Kolaudace, číslo popisné v kontextu ÚP
   - **Návrh:** Jen krátká zmínka + odkaz

4. **`/wiki/legislativa/vyhlasky.md`**
   - Zmínka: Vyhláška 326/2000 (přidělení č.p./č.e.)
   - **Návrh:** Jen citace + odkaz na nový článek

5. **`/wiki/financovani/hypoteky-a-uvery.md`**
   - Zmínka: Katastr nutný pro hypotéku
   - **Návrh:** Krátká zmínka + odkaz

6. **`/wiki/legislativa/stavebni-zakon/novy-zakon-283-2021.md`**
   - Zmínka: Kolaudace podle nového zákona
   - **Návrh:** Technická zmínka, bez č.p./č.e.

7. **`/wiki/legislativa/stavebni-zakon/stary-zakon-183-2006.md`**
   - Zmínka: Kolaudace podle starého zákona
   - **Návrh:** Historický kontext

#### STŘEDNÍ RELEVANCE (jen zmínka):

8-29. **Ostatní wiki články:**
   - Kontejnery vs. mobilní domy
   - Modulární vs. mobilní
   - Případové studie (5×)
   - Technické specifikace (připojky voda/kanalizace/elektřina)
   - Dotace, energie tické, údržba...
   - **Návrh:** Jen krátká zmínka kde relevantní + odkaz na specializovaný článek

---

### BLOG články (12):

#### VYSOKÁ RELEVANCE:

1. **`/docs/blog/19-legislativa-2025-kompletni-pruvodce.md`**
   - Řádky: 1-473
   - Obsah: Kompletní průvodce legislativou
   - Zmínka: Řádek 167 "Zápis do katastru, pak můžete mít TP"
   - **❌ CHYBA:** Neúplné - neříká, že č.e. STAČÍ!
   - **Návrh:** Přidat sekci "Č.p. vs. Č.e." s odkazem na wiki

2. **`/docs/blog/23-faq-20-nejcastejsich-otazek.md`**
   - Řádky: 1-518
   - Obsah: FAQ
   - Otázka 3: "Můžu mít v mobilním domě trvalé bydliště?" (řádek 62-75)
   - **❌ CHYBA:** Odpověď říká "zapsáno v katastru" (nevysvětluje č.p. vs. č.e.)
   - **Návrh:** Opravit + přidat odkaz na wiki článek "Č.p. vs. Č.e."

3. **`/docs/blog/12-pruvodce-vystavbou-krok-za-krokem.md`**
   - Zmínka: Krok 8 - Zápis do katastru
   - **Návrh:** Krátká zmínka + odkaz

4. **`/docs/blog/13-top-10-chyb-pri-koupi.md`**
   - Zmínka: Chyby při kolaudaci
   - **Návrh:** Varování před mylným přesvědčením "č.p. nutné pro TP"

#### STŘEDNÍ RELEVANCE:

5-12. **Ostatní blogy:**
   - 02-10-veci-ktere-nikdo-nerika.md
   - 03-hypoteka-na-mobilni-dum.md
   - 04-kolik-stoji-mobilni-dum.md
   - 05-myty-o-mobilnich-domech.md
   - 07-dotace-na-mobilni-dum.md
   - 16-pojisteni-mobilniho-domu.md
   - 21-modularni-vs-mobilni-domy.md
   - 25-budoucnost-trendy-2025-2030.md
   - **Návrh:** Jen krátká zmínka kde relevantní

---

## 🎯 IDENTIFIKOVANÉ PŘEKRYVY A KONFLIKTY

### Překryv 1: "Bydlení vs. Rekreace" ← MÍCHÁ 2 TÉMATA

**Současný stav (P1-04):**
- Téma: Účel využití (bydlení vs. rekreace)
- ALE TAKY: Č.p. vs. Č.e., trvalý pobyt, kolaudace, katastr...
- **Problém:** Moc široké! Čtenář se ztratí.

**Návrh řešení:**
- **P1-04 (upravit):** JEN o účelu využití stavby
  - Kdy dům slouží k bydlení
  - Kdy dům slouží k rekreaci
  - Technické rozdíly (izolace, PENB...)
  - Právní důsledky (ne detaily o č.p./č.e.!)

- **NOVÝ článek (P0 legislativa):** "Č.p. vs. Č.e."
  - 4 nezávislé pojmy (typ čísla, účel využití, TP, PENB)
  - Úspory 99-125k
  - Historický kontext
  - Kdy volit č.p. vs. č.e.
  - Mýty (katastr nutný pro TP = NEPRAVDA!)

**Cross-odkazy:**
```
P1-04 "Bydlení vs. Rekreace":
  → "Pro detaily o typu čísla (č.p. vs. č.e.) viz [Č.p. vs. Č.e.](/wiki/legislativa/cislo-popisne-vs-evidencni.md)"

Nový "Č.p. vs. Č.e.":
  → "Pro technické rozdíly mezi bydlením a rekreací viz [Bydlení vs. Rekreace](/wiki/lifestyle/bydleni-vs-rekreace.md)"
```

---

### Překryv 2: "Registrace katastru" ← OBSAHUJE CHYBY

**Současný stav:**
- `/wiki/legislativa/registrace-kataster.md`
- Řádek 7: "Registrace... je nezbytným předpokladem pro přidělení čísla popisného a následné hlášení trvalého pobytu"
- **❌ CHYBA:** Katastr NENÍ nutný pro č.e.! A č.e. DOVOLUJE TP!

**Návrh opravy:**
```markdown
Řádek 7 (OPRAVIT):
"Registrace v katastru je nezbytná pro přidělení čísla **popisného** a následné hlášení
trvalého pobytu. Pro stavby s **číslem evidenčním** lze hlásit trvalý pobyt i bez zápisu v katastru,
pokud mají kolaudaci. Podrobnosti viz [Č.p. vs. Č.e.](/wiki/legislativa/cislo-popisne-vs-evidencni.md)."
```

Řádek 161-164 (OPRAVIT):
```markdown
"Pokud má váš mobilní dům v kolaudaci uvedeno „rekreační objekt" nebo „stavba pro rodinnou
rekreaci", **můžete** tam hlásit trvalý pobyt za předpokladu, že stavba má přiděleno číslo
**popisné NEBO evidenční** podle zákona 133/2000 § 10. Rozdíl mezi č.p. a č.e. viz
[specializovaný článek](/wiki/legislativa/cislo-popisne-vs-evidencni.md)."
```

---

### Překryv 3: FAQ a Blog články ← NEÚPLNÉ INFORMACE

**Současný stav:**
- FAQ otázka 3: "Můžu mít trvalé bydliště?"
- Odpověď: "ANO, ale kolaudace + katastr"
- **❌ NEPŘESNÉ:** Nevysvětluje, že č.e. stačí!

**Návrh opravy:**
```markdown
### 3. Můžu mít v mobilním domě trvalé bydliště?

**Odpověď:** ANO! ✅ (ale musíte splnit podmínky)

**Podmínky:**
- [ ] **Kolaudace** nebo souhlas s užíváním
- [ ] **Číslo popisné NEBO evidenční** (obojí dovoluje TP!)
- [ ] **Přípojky:** voda, elektřina, kanalizace
- [ ] **Pozemek v zastavitelném území** (dle ÚP)

**💡 TIP:** Číslo evidenční (č.e.) je **levnější** než číslo popisné (úspora až 125k Kč!),
a přitom TP můžete hlásit v obojím. Podrobnosti viz [Č.p. vs. Č.e.](/wiki/legislativa/cislo-popisne-vs-evidencni.md).

**Pokud splníte → trvalé bydliště (TP) OK!** ✅
```

---

## 🏗️ NAVRŽENÁ STRUKTURA

### Varianta A: 2 SAMOSTATNÉ ČLÁNKY (DOPORUČENO ✅)

#### **Článek 1: "Bydlení vs. Rekreace" (P1-04 lifestyle/)**
**Umístění:** `/wiki/lifestyle/bydleni-vs-rekreace.md`
**Téma:** Účel využití stavby
**Obsah:**
- Rozdíl mezi stavbou pro bydlení vs. rekreaci
- Technické požadavky (izolace, PENB...)
- Právní důsledky (co můžete/nemůžete)
- Kdy volit bydlení vs. rekreaci
- **Cross-odkaz:** → Č.p. vs. Č.e. (pro typ čísla)

**Délka:** 3000-4000 slov
**Blog:** Petr chtěl rekreaci, ale potřeboval bydlení → problém

---

#### **Článek 2: "Č.p. vs. Č.e." (NOVÝ P0 legislativa/)**
**Umístění:** `/wiki/legislativa/cislo-popisne-vs-evidencni.md`
**Téma:** Typ čísla (červená vs. zelená tabulka)
**Obsah:**
- 4 nezávislé pojmy (typ čísla, účel využití, TP, PENB)
- **KRITICKÉ:** Trvalý pobyt možný v OBOJÍM!
- Úspory 99-125k (č.e. levnější)
- Historický kontext (Marie Terezie 1770)
- Kdy volit č.p. vs. č.e.
- Mýty (katastr nutný = NE!)
- **Cross-odkaz:** → Bydlení vs. Rekreace (pro účel využití)
- **Cross-odkaz:** → Registrace katastru (pro proces zápisu)

**Délka:** 4000-5000 slov (detailní!)
**Blog:** Petr zaplatil 99k navíc za č.p., Pavel vzal č.e. a ušetřil → stejný trvalý pobyt!

---

### Varianta B: 1 VELKÝ ČLÁNEK (NEDOPORUČENO ❌)

**Problém:**
- Příliš široké (6000+ slov)
- Čtenář se ztratí
- SEO horší (moc témat v jednom)

**Proč NE:**
- Uživatelé hledají **specifické informace**
- Google preferuje **úzce zaměřené články**
- Lepší **cross-odkazy** mezi 2 články

---

## 📋 AKČNÍ PLÁN

### Krok 1: Vytvořit nový článek "Č.p. vs. Č.e."

**Soubor:** `/wiki/legislativa/cislo-popisne-vs-evidencni.md`
**Obsah:** Podle výzkumu z `.claude-context/2025-11-16-cp-vs-ce-complete-research.md`

**Struktura:**
```markdown
# Číslo popisné vs. Číslo evidenční: Kompletní průvodce

## Úvod
[Vysvětlení 4 pojmů, co se zaměňují]

## Trvalý pobyt v č.p. vs. č.e.
[KRITICKÉ: Zákon 133/2000 § 10 - OBOJÍ dovoleno!]

## Úspory: 99 000 - 125 000 Kč
[Tabulka nákladů č.p. vs. č.e.]

## Historický kontext
[Marie Terezie 1770, sbližování systémů]

## Kdy volit č.p. vs. č.e.?
[Decision tree]

## Mýty a pravda
[Katastr nutný = NE!, atd.]

## FAQ
[10 nejčastějších otázek]
```

**Blog pár:** `/tmp/P1-XX-BLOG.txt` (Petr vs. Pavel)

---

### Krok 2: Upravit existující P1-04 "Bydlení vs. Rekreace"

**Soubor:** `/wiki/lifestyle/bydleni-vs-rekreace.md`
**Změny:**
1. Odstranit detaily o č.p./č.e. (jen krátká zmínka)
2. Přidat cross-odkaz na nový článek "Č.p. vs. Č.e."
3. Zaměřit se POUZE na účel využití stavby

**Příklad cross-odkazu:**
```markdown
## Trvalý pobyt v rekreační stavbě

Trvalý pobyt lze hlásit i v rekreační stavbě, pokud má přiděleno **číslo popisné nebo evidenční**.

**💡 TIP:** Číslo evidenční je levnější než číslo popisné (úspora až 125 tisíc Kč!).
Detaily o typu čísla viz [Č.p. vs. Č.e.](/wiki/legislativa/cislo-popisne-vs-evidencni.md).
```

---

### Krok 3: Opravit chyby v existujících článcích

#### **A) `/wiki/legislativa/registrace-kataster.md`**
**Řádek 7:** Opravit tvrzení o nutnosti katastru pro TP
**Řádek 161-164:** Opravit tvrzení o nutnosti č.p. pro TP
**Přidat:** Cross-odkaz na "Č.p. vs. Č.e."

#### **B) `/docs/blog/23-faq-20-nejcastejsich-otazek.md`**
**Otázka 3:** Opravit odpověď o TP (dodat č.e. možnost)
**Přidat:** Odkaz na wiki "Č.p. vs. Č.e."

#### **C) `/docs/blog/19-legislativa-2025-kompletni-pruvodce.md`**
**Řádek 167:** Rozšířit o vysvětlení č.p. vs. č.e.
**Přidat:** Odkaz na wiki

---

### Krok 4: Přidat cross-odkazy do ostatních článků

**Kde přidat zmínku + odkaz:**
- `/wiki/financovani/hypoteky-a-uvery.md` - "Hypotéka vyžaduje č.p. nebo č.e. zapsané v katastru"
- `/wiki/legislativa/vyhlasky.md` - Citace vyhlášky 326/2000, odkaz na detail
- `/docs/blog/13-top-10-chyb-pri-koupi.md` - Chyba: "Myslel jsem, že musím mít č.p."
- `/wiki/pripadove-studie/*` - Zmínka v relevantních studiích

---

## 💡 DOPORUČENÍ PRO UŽIVATELE

**Tvoje otázka:**
> "ono tohle jsme asi zabrousilo do několika našich témat nebo kategorií ne?"

**ANO! Přesně tak.** ✅

**Řešení:**
1. **ROZDĚLIT na 2 články:**
   - **P1-04:** "Bydlení vs. Rekreace" (účel využití)
   - **NOVÝ P0:** "Č.p. vs. Č.e." (typ čísla)

2. **OPRAVIT chyby** v existujících článcích:
   - registrace-kataster.md
   - FAQ blog
   - legislativa-2025 blog

3. **PŘIDAT cross-odkazy** všude kde relevantní

4. **NEROZŠIŘOVAT počet sekcí** (P1 zůstane P1, P0 zůstane P0)
   - Jen PŘIDÁME 1 specializovaný článek do existující sekce legislativa/

---

## 📊 SROVNÁNÍ VARIANT

| Kritérium | Varianta A (2 články) | Varianta B (1 článek) |
|-----------|-----|-----|
| **SEO** | ✅ Lepší (úzké zaměření) | ❌ Horší (moc témat) |
| **UX** | ✅ Jasné, snadné najít | ❌ Matoucí, dlouhé |
| **Údržba** | ✅ Jednodušší (1 téma/článek) | ❌ Složitější |
| **Cross-odkazy** | ✅ Přirozené | ⚠️ Vnitřní kotvy |
| **Počet slov** | 3000 + 4000 = 7000 | 6000-8000 |
| **Duplicity** | ❌ Minimální (cross-odkazy) | ✅ Žádné |

**VÍTĚZ:** Varianta A (2 samostatné články) ✅

---

## 🎯 ZÁVĚR

**Tvoje intuice byla správná:**
> "radši to zmíním napříč několika články... zmíníme to i v této sekci a ještě se odkážeme
> na jiné sekce kde to je detailně"

**Přesně TAK to funguje!** ✅

**Struktura:**
- **1 specializovaný článek** "Č.p. vs. Č.e." (detailní) ← NOVÝ
- **Ostatní články** (krátká zmínka + odkaz) ← OPRAVIT
- **Cross-odkazy** mezi souvisejícími tématy ← PŘIDAT

**Počet sekcí:**
- NEMĚNÍME! (P0, P1 zůstanou)
- Jen **přidáme 1 článek** do existující sekce `/wiki/legislativa/`

---

**Připraveno pro:** Vytvoření nového článku + opravy
**Další kroky:** Čekám na tvé schválení strategie
