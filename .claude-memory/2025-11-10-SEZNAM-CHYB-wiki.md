# 🐛 SEZNAM CHYB A NEPŘESNOSTÍ VE WIKI - Mobilní domy

**Datum identifikace:** 10. listopadu 2025
**Kontroloval:** Radim (uživatel) + Claude AI
**Status:** 🔴 KRITICKÉ CHYBY NALEZENY

---

## 📊 EXECUTIVE SUMMARY

**Celkem nalezeno:**
- 🔴 **4 kritické chyby** (zavádějící informace)
- 🟡 **3 střední závažnosti** (neúplné informace)
- 🟢 **1 nízká závažnost** (rozporuplnost)
- ⚠️ **1 chybějící sekce** (vedlejší stavby)

**Dopad:** Články obsahují **zavádějící informace o stavebním povolení**, které mohou vést uživatele k:
- ❌ Nesprávnému pochopení legislativy
- ❌ Riziku pokut až 500 000 Kč
- ❌ Riziku nařízení odstranění stavby
- ❌ Problémům se stavebním úřadem

---

## 🔴 KRITICKÉ CHYBY

### CHYBA #1: "Do 55 m² stačí oznámení" (FAQ)

**Soubor:** `faq/faq-kompletni.md`
**Řádek:** 36
**Závažnost:** 🔴 KRITICKÁ

**Chybná informace:**
```markdown
NE! Mobilní dům do 55 m² nepotřebuje stavební povolení. Stačí:
- Oznámení stavby (podání na stavební úřad)
- Úřad má 15 dní na vyjádření
- Pokud neodpoví → můžete stavět
```

**Proč je to špatně:**
1. ❌ **Nerozlišuje REKREAČNÍ vs OBYTNÉ mobilní domy**
2. ❌ **Rekreační** mobilní domy do 55 m² **NEVYŽADUJÍ ANI OZNÁMENÍ** (podle Přílohy 1 zákona 283/2021)
3. ❌ **Obytné** mobilní domy vyžadují ohlášení **I POD 55 m²** (nelze považovat za drobné stavby)
4. ❌ **CHYBÍ kritická informace:** Pokud je mobilní dům připojen k sítím → stává se stavbou → potřebuje plné povolení

**Co by mělo být:**
```markdown
ZÁLEŽÍ NA ÚČELU A PŘIPOJENÍ!

A) Rekreační mobilní dům (do 55 m², do 4 m výšky):
   ✅ BEZ oznámení, BEZ povolení (Příloha 1 zákona)
   ⚠️ ALE: Musí být v souladu s územním plánem
   ⚠️ ALE: NESMÍ být trvale připojen k sítím (jinak → stavba)

B) Obytný mobilní dům (k trvalému bydlení):
   ❌ Vyžaduje OHLÁŠENÍ jednoduché stavby (i pod 55 m²!)
   ❌ Potřebuje projektovou dokumentaci
   ❌ Potřebuje kolaudaci a zápis do katastru

C) Mobilní dům PŘIPOJENÝ K SÍTÍM (trvalé připojení):
   ❌ Stává se STAVBOU SPOJENOU SE ZEMÍ = věc nemovitá
   ❌ Vyžaduje PLNÉ STAVEBNÍ POVOLENÍ
   ❌ Podléhá dani z nemovitostí
```

**Akce:** URGENTNÍ OPRAVA

---

### CHYBA #2: "Do 55 m² stačí oznámení" (Blog FAQ)

**Soubor:** `blog/23-faq-20-nejcastejsich-otazek.md`
**Řádky:** 30-35
**Závažnost:** 🔴 KRITICKÁ

**Chybná informace:**
```markdown
Odpověď: NE! (pokud je do 55 m²) ✅

Vysvětlení:
- Mobilní dům **do 55 m²** = "výrobek plnící funkci stavby"
- **Stačí oznámení** stavby (15 dní na odpověď úřadu)
- **Nad 55 m²** = klasická stavba → potřebujete územní + stavební povolení
```

**Proč je to špatně:**
1. ❌ Stejný problém jako CHYBA #1
2. ❌ Nerozlišuje rekreační vs obytné
3. ❌ Vynechává kritickou informaci o připojení k sítím
4. ❌ Používá zastaralý termín "výrobek plnící funkci stavby" (platný do 30.6.2024)

**Akce:** URGENTNÍ OPRAVA

---

### CHYBA #3: Falešné rozlišení 25-55 m² (Legislativní průvodce)

**Soubor:** `blog/19-legislativa-2025-kompletni-pruvodce.md`
**Řádky:** 82-125
**Závažnost:** 🔴 KRITICKÁ

**Chybná informace:**
```markdown
Mobilní dům (do 55 m²):
- ✅ **BEZ stavebního povolení** (jen oznámení)

Kdy potřebujete povolení:
- Do 25 m²: ŽÁDNÉ povolení (většinou!)
- 25-55 m²: OZNÁMENÍ stavebnímu úřadu  ⬅️ CHYBA!
- Nad 55 m²: klasická stavba, potřebujete stavební povolení
```

**Proč je to špatně:**
1. ❌ **Neexistuje rozdíl mezi 25-55 m²** pro REKREAČNÍ mobilní domy!
2. ❌ Podle nového zákona 283/2021 platí:
   - **Rekreační do 55 m²** = bez oznámení (Příloha 1)
   - **Obytné jakékoli velikosti** = s oznámením (nelze být drobná stavba)
3. ❌ Hranice 25 m² není relevantní pro mobilní domy (to je jiná kategorie)

**Co by mělo být:**
```markdown
Kdy potřebujete povolení? → ZÁLEŽÍ NA ÚČELU!

REKREAČNÍ mobilní domy:
- ✅ Do 55 m² + do 4 m výšky = BEZ povolení, BEZ oznámení
- ❌ Nad 55 m² = už to není mobilní dům → stavební povolení

OBYTNÉ mobilní domy (trvalé bydlení):
- ❌ Jakákoli velikost (i pod 55 m²!) = ohlášení jednoduché stavby
- ❌ Musí projít kolaudací, zápis do katastru

MOBILNÍ DOMY S TRVALÝM PŘIPOJENÍM K SÍTÍM:
- ❌ Stávají se STAVBOU → plné stavební povolení nutné
```

**Akce:** URGENTNÍ OPRAVA + REVIZE CELÉHO ČLÁNKU

---

### CHYBA #4: Rozporuplné informace v README

**Soubor:** `wiki/legislativa/README.md`
**Řádky:** 51-63
**Závažnost:** 🔴 KRITICKÁ

**Chybná informace:**
```markdown
Limity bez povolení:
| **Mobilní domy** | do 55 m² | do 5 m | min. 2 m |

Co NEVYŽADUJE stavební povolení:
✅ Mobilní dům jako **výrobek plnící funkci stavby** (§103 odst. 1 písm. e) bod 16)
- Jakákoli velikost  ⬅️ ROZPOR!
- Není třeba ohlášení
```

**Proč je to špatně:**
1. ❌ **ROZPOR:** Napřed říká "do 55 m²", pak "jakákoli velikost"
2. ❌ **Míchá STARÝ zákon** (§103 zákona 183/2006, platný do 30.6.2024) s **NOVÝM** (283/2021)
3. ❌ Podle nového zákona nad 55 m² to už **NENÍ mobilní dům**, ale klasická stavba!
4. ❌ Neuvádí rozdíl mezi rekreačním a obytným

**Co by mělo být:**
```markdown
Limity bez povolení (NOVÝ ZÁKON 283/2021 od 1.7.2024):

REKREAČNÍ mobilní domy (Příloha 1):
| Parametr | Hodnota | Poznámka |
|----------|---------|----------|
| Plocha | do 55 m² | Zastavěná plocha |
| Výška | do 4 m | Od upraveného terénu |
| Odstup | min. 2 m | Od hranice pozemku |
| Připojení | dočasné | Nesmí být trvale připojeno k sítím! |

OBYTNÉ mobilní domy:
- ❌ NELZE považovat za drobné stavby
- ❌ Vyžadují ohlášení i pod 55 m²

STAVBY NAD 55 m²:
- ❌ Už to není mobilní dům
- ❌ Klasická stavba → územní + stavební povolení
```

**Akce:** URGENTNÍ PŘEPIS CELÉ SEKCE

---

## 🟡 STŘEDNÍ ZÁVAŽNOST

### CHYBA #5: Chybí informace o připojení k sítím → věc nemovitá

**Soubory s chybějící informací:**
- `faq/faq-kompletni.md` - celý FAQ
- `blog/23-faq-20-nejcastejsich-otazek.md` - celý FAQ
- `blog/19-legislativa-2025-kompletni-pruvodce.md` - sekce o povolování

**Závažnost:** 🟡 STŘEDNÍ (info existuje v detailním článku, ale chybí v FAQ)

**Co chybí:**
> **KRITICKÁ INFORMACE:** Pokud je mobilní dům trvale připojen k inženýrským sítím (elektřina, voda, kanalizace) pomocí pevných přípojek vyžadujících stavební práce, **ZTRÁCÍ charakter mobilního objektu a stává se STAVBOU SPOJENOU SE ZEMÍ** podle § 506 občanského zákoníku. V tu chvíli:
> - ❌ Potřebuje PLNÉ STAVEBNÍ POVOLENÍ
> - ❌ Musí být zapsán v KATASTRU NEMOVITOSTÍ
> - ❌ Podléhá DANI Z NEMOVITOSTÍ
> - ⚠️ Hrozí pokuta až 500 000 Kč + nařízení odstranění

**Kde je to SPRÁVNĚ popsáno:**
- ✅ `wiki/legislativa/stavebni-zakon/novy-zakon-283-2021.md:93-108`
- ✅ `wiki/legislativa/registrace-kataster.md:295-301`
- ✅ `wiki/legislativa/judikatura/prehled-soudnich-rozhodnuti.md:123-148`

**Akce:** DOPLNIT do všech FAQ a průvodců

---

### CHYBA #6: Chybí výjimka o vedlejší stavbě

**Soubory:** VŠECHNY (nikde není zmíněna)
**Závažnost:** 🟡 STŘEDNÍ (pokud tato výjimka existuje)

**Co chybí:**
> **VÝJIMKA:** Pokud je na pozemku **hlavní stavba** (např. rodinný dům) a mobilní dům slouží pouze jako **stavba vedlejší**, **MAY** existovat zjednodušený režim povolování i při připojení k sítím.

**Status:** ⚠️ **NEPROKÁZÁNO** - výjimka NEBYLA nalezena v článcích
**Potřeba prověřit:**
- [ ] Vyhláška 501/2006 Sb. § 2 odst. 4 (definice vedlejších staveb)
- [ ] Vyhláška 146/2024 Sb. (nahradila 501/2006)
- [ ] Metodika MMR k mobilním domům
- [ ] Judikatura

**Akce:** DOHLEDAT a DOPLNIT (pokud existuje)

---

### CHYBA #7: Neúplný popis daňových důsledků

**Soubory:** FAQ, průvodce
**Závažnost:** 🟡 STŘEDNÍ

**Co chybí:**
- Kdy přesně vzniká daňová povinnost?
- Jak se daň z nemovitostí vypočítává pro mobilní domy?
- Jaké výjimky existují?
- Reference na zákon 338/1992 Sb., § 7

**Akce:** DOPLNIT sekci o daňových důsledcích

---

## 🟢 NÍZKÁ ZÁVAŽNOST

### CHYBA #8: Používání zastaralé terminologie

**Soubory:** Různé
**Závažnost:** 🟢 NÍZKÁ (ale matoucí)

**Problém:**
- Některé články používají termín **"výrobek plnící funkci stavby"**
- Tento termín byl **zrušen 1.7.2024** novým zákonem 283/2021
- Nově se používá **"drobné stavby"** (Příloha 1)

**Kde se vyskytuje:**
- `blog/23-faq-20-nejcastejsich-otazek.md:33`
- `wiki/legislativa/README.md:60`

**Akce:** AKTUALIZOVAT terminologii + přidat poznámku o historii

---

## ⚠️ CHYBĚJÍCÍ SEKCE

### CHYBĚJÍCÍ #1: Výjimka o vedlejší stavbě

**Status:** Nikde není popsána
**Důležitost:** VYSOKÁ (pokud existuje)

**Co by mělo být:**
- Definice "hlavní stavby" vs "vedlejší stavby"
- Podmínky pro aplikaci výjimky
- Jak žádat o povolení jako vedlejší stavba
- Jaké výhody to přináší

**Akce:** VYTVOŘIT NOVOU SEKCI (po dohledání informací)

---

## 📋 AKČNÍ PLÁN - PRIORITY

### PRIORITA 1 (URGENTNÍ):
- [ ] **Opravit CHYBU #1** - FAQ kompletní
- [ ] **Opravit CHYBU #2** - Blog FAQ
- [ ] **Opravit CHYBU #3** - Legislativní průvodce
- [ ] **Opravit CHYBU #4** - README legislativa

### PRIORITA 2 (VYSOKÁ):
- [ ] **Doplnit CHYBU #5** - Info o připojení k sítím do všech FAQ
- [ ] **Dohledat CHYBU #6** - Výjimka o vedlejší stavbě (vyhlášky, metodiky)
- [ ] **Vytvořit novou sekci** - "Připojení k sítím a změna na stavbu"

### PRIORITA 3 (STŘEDNÍ):
- [ ] **Doplnit CHYBU #7** - Daňové důsledky
- [ ] **Opravit CHYBU #8** - Aktualizovat terminologii
- [ ] **Vytvořit varování** - V každém FAQ přidat "🚨 POZOR NA PŘIPOJENÍ K SÍTÍM!"

---

## 📁 PŘESNÉ LOKACE CHYB

### Soubor: `faq/faq-kompletni.md`
```
Řádek 33-40:
### 1.2 Potřebuji stavební povolení?

**Odpověď:**
NE! Mobilní dům do 55 m² nepotřebuje stavební povolení. Stačí:  ⬅️ CHYBA
- Oznámení stavby (podání na stavební úřad)                      ⬅️ CHYBA
- Úřad má 15 dní na vyjádření                                    ⬅️ CHYBA
- Pokud neodpoví → můžete stavět                                 ⬅️ CHYBA
```

### Soubor: `blog/23-faq-20-nejcastejsich-otazek.md`
```
Řádek 28-42:
### 1. Potřebuji stavební povolení na mobilní dům?

**Odpověď:** NE! (pokud je do 55 m²) ✅                          ⬅️ ZJEDNODUŠUJÍCÍ

**Vysvětlení:**
- Mobilní dům **do 55 m²** = "výrobek plnící funkci stavby"     ⬅️ ZASTARALÉ
- **Stačí oznámení** stavby (15 dní na odpověď úřadu)           ⬅️ CHYBA
- **Nad 55 m²** = klasická stavba → potřebujete územní + stavební povolení
```

### Soubor: `blog/19-legislativa-2025-kompletni-pruvodce.md`
```
Řádek 82-86:
Mobilní dům (do 55 m²):
- ✅ **BEZ územního rozhodnutí** (pokud je v souladu s územním plánem)
- ✅ **BEZ stavebního povolení** (jen oznámení)                 ⬅️ CHYBA
- ✅ Kolaudace zjednodušená (nebo souhlas s užíváním)

Řádek 98-124:
#### ✅ **Do 25 m²:**                                            ⬅️ IRELEVANTNÍ
**→ ŽÁDNÉ povolení (většinou!)**                                ⬅️ CHYBA

#### ⚠️ **25-55 m²:**                                            ⬅️ CHYBA!
**→ OZNÁMENÍ stavebnímu úřadu**                                 ⬅️ CHYBA!
```

### Soubor: `wiki/legislativa/README.md`
```
Řádek 51-63:
Limity bez povolení:
| **Mobilní domy** | do 55 m² | do 5 m | min. 2 m |            ⬅️ Výška je 4 m ne 5 m!

Co NEVYŽADUJE stavební povolení:
✅ Mobilní dům jako **výrobek plnící funkci stavby** (§103 odst. 1 písm. e) bod 16)
- Jakákoli velikost                                              ⬅️ ROZPOR!
- Není třeba ohlášení                                            ⬅️ CHYBA
- Není třeba kolaudace                                           ⬅️ CHYBA
```

---

## 🔗 SOUVISEJÍCÍ DOKUMENTY

1. **Analýza nálezu:**
   - `.claude-memory/2025-11-10-KRITICKY-NALEZ-pripojeni-siti-vec-nemovita.md`

2. **Správné zdroje v projektu:**
   - `wiki/legislativa/stavebni-zakon/novy-zakon-283-2021.md:93-108` ✅
   - `wiki/legislativa/registrace-kataster.md:295-301` ✅
   - `wiki/legislativa/judikatura/prehled-soudnich-rozhodnuti.md:123-148` ✅

3. **Zákony k prostudování:**
   - Zákon č. 283/2021 Sb., stavební zákon (nový)
   - Zákon č. 89/2012 Sb., občanský zákoník § 498, § 506
   - Zákon č. 338/1992 Sb., o dani z nemovitých věcí § 7
   - Vyhláška č. 146/2024 Sb., o požadavcích na výstavbu
   - Vyhláška č. 501/2006 Sb. (archiv, platná do 30.6.2024)

---

## 📞 KONTAKT A SCHVÁLENÍ

**Identifikoval:** Claude AI + Radim (uživatel)
**Datum:** 10. listopadu 2025
**Status:** ⏳ ČEKÁ NA SCHVÁLENÍ OPRAV

**Před opravami je třeba:**
1. ✅ Schválit tento seznam chyb
2. [ ] Dohledat informace o výjimce vedlejší stavby
3. [ ] Určit prioritu oprav
4. [ ] Začít s opravami podle priority

---

**Poznámka:** Tento seznam byl vytvořen automatickou analýzou. Před provedením změn je důležité ověřit všechny nálezy a dohledat chybějící informace o výjimkách.
