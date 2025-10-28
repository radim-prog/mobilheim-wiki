# Zadání: Revize a přepis Wiki článků

**Datum:** 28. října 2025
**Kategorie:** obsah, kvalita, fact-checking
**Status:** Probíhá (13/23 článků hotovo)

---

## Problém se stávajícími články na GitHubu

Články na GitHubu (main branch) mají tyto problémy:

1. **Neověřená data** - zpracováno z neověřených zdrojů
2. **Zastarálé zákony** - citovány neplatné verze zákonů
3. **Doslovné citace zákonů** - místo odkazů jsou kopírovány celé paragrafy (zbytečně nafukuje obsah)
4. **Poznámkový formát** - heslovité body místo plynulého textu
5. **Emoji a dekorace** - 🏗️🧱 - nevhodné pro odborný článek
6. **Tabulky a bloky** - přehnaná struktura místo čtivého textu
7. **Encyklopedický styl** - suchý, nezajímavý

---

## Cíl revize

Přepsat každý článek do podoby **odborného magazínového článku**:

### Formát a styl:
- ✅ **Plynulý odborný text** - ne body, ne odrážky (výjimečně OK)
- ✅ **Komplexní odstavce** - každý odstavec je ucelená myšlenka
- ✅ **Bez emoji** - čistý profesionální text
- ✅ **Srozumitelný pro laiky** - ale fundovaný a detailní
- ✅ **Konkrétní data s kontextem** - ne jen "drahé", ale "20 000 Kč/m²"
- ✅ **Odkazy místo citací** - u zákonů jen odkaz + shrnutí relevantního

### Obsahová kvalita:
- ✅ **Prověřeno z 3+ nezávislých zdrojů** - ne jeden web, ale více důvěryhodných zdrojů
- ✅ **Aktuální informace** - platné zákony 2024/2025
- ✅ **Praktická relevance** - ne jen teorie, ale i reálné využití
- ✅ **Správné technické údaje** - tepelná vodivost, rozměry, ceny

### Délka:
- ✅ **Kratší než původní** (pokud byl nafouklý citacemi)
- ✅ **Ale obsahově bohatší** - každá věta má hodnotu
- ✅ **Cca 2000-3000 slov** pro hlavní články

---

## Proces přepisu článku

### 1. Prověření faktů (CRITICAL!)
- Načíst stávající článek
- Identifikovat všechna **tvrzení, čísla, zákony, technické údaje**
- Pro každé tvrzení:
  - Najít **3 nezávislé zdroje** (ne konkurenční weby!)
  - Relevantní zdroje: MMR, ČSN normy, odborné stavební weby, výrobci
  - Ověřit **aktuálnost** (platné verze zákonů/vyhlášek)
  - Pokud se zdroje neshodují → hledat dál nebo explicitně uvést rozpor

### 2. Identifikace zastarání
- **Zákony:** Ověřit na zakony.cz jestli je aktuální verze
- **Ceny:** Aktualizovat na rok 2024/2025
- **Technologie:** Moderní materiály a postupy

### 3. Přepis do článkového stylu
- Odstranit emoji, tabulky (pokud nejsou nutné)
- Spojit odrážky do plynulých odstavců
- Zachovat strukturu nadpisů (H2, H3)
- Doplnit kontext k číslům a faktům

### 4. Sekce článku
```markdown
# Název tématu

> **Krátký perex** - o čem článek je, 1-2 věty

---

## Úvod
Kontextový úvod, proč je téma důležité...

## Hlavní sekce 1
Plynulý text s detaily...

## Hlavní sekce 2
...

## Srovnání / Praktické tipy / Case study
...

## Závěr
Shrnutí, doporučení...

---

## Užitečné odkazy a normy
- Odkaz 1
- Odkaz 2

---

**Zpracováno:** DD. měsíce RRRR
**Autor:** Mobilheim Wiki
**Zdroje:** Konkrétní zdroje použité pro article
```

---

## Příklad PŘED → PO

### PŘED (GitHub - špatně):
```markdown
### Typické rozměry:

**Sloupky:**
- 60×140 mm (standard)
- 80×160 mm (lepší izolace)
- 100×200 mm (pasivní domy)

**Rozteč sloupků:**
- 625 mm (ideální pro minerální vlnu 600 mm)
- 415 mm (vyšší stabilita)
```

### PO (Lokální disk - správně):
```markdown
Volba průřezu sloupků nezávisí primárně na statickém zatížení konstrukce, neboť rámová konstrukce je ze své podstaty lehká a nevyžaduje masivní prvky pro přenesení zatížení. Rozhodující je spíše požadovaná tloušťka tepelné izolace, která musí odpovídat normovým požadavkům na součinitel prostupu tepla. Pro celoroční bydlení v klimatických podmínkách střední Evropy se doporučují sloupky o šířce minimálně 140 mm, které umožňují vložení minerální vlny o stejné tloušťce a dosažení součinitele prostupu tepla U kolem 0,25 W/m²K.
```

---

## Zbývající články k přepisu

**HOTOVO (13 článků):**
1. ✅ legislativa/judikatura/prehled-soudnich-rozhodnuti.md
2. ✅ legislativa/metodiky-mmr/metodika-mobilni-domy-2022.md
3. ✅ legislativa/stavebni-zakon/novy-zakon-283-2021.md
4. ✅ legislativa/stavebni-zakon/stary-zakon-183-2006.md
5. ✅ legislativa/vyhlášky/vyhlaska-501-2006.md
6. ✅ pripojeni-siti/elektrina.md
7. ✅ technicke-specifikace/energetika/energeticka-narocnost.md
8. ✅ technicke-specifikace/energetika/fotovoltaika-offgrid.md
9. ✅ technicke-specifikace/energetika/vytapeni.md
10. ✅ technicke-specifikace/izolace/tepelna-izolace.md
11. ✅ technicke-specifikace/konstrukce/konstrukcni-systemy.md
12. ✅ technicke-specifikace/materialy/prehled-materialu.md
13. ✅ (smazána) legislativa/vyhlášky/vyhlaska-268-2009.md - důvod: neplatná/irelevantní

**ZBÝVÁ (10 článků):**
1. ❌ financovani/dotace.md
2. ❌ financovani/hypoteky-a-uvery.md
3. ❌ legislativa/README.md
4. ❌ pripadove-studie/studie-1-mlada-rodina.md
5. ❌ pripadove-studie/studie-2-senior-chatova-oblast.md
6. ❌ pripadove-studie/studie-3-offgrid-dům.md
7. ❌ pripadove-studie/studie-4-docasne-bydleni.md
8. ❌ pripadove-studie/studie-5-airbnb-business.md
9. ❌ pripojeni-siti/kanalizace.md
10. ❌ pripojeni-siti/voda.md
11. ❌ udrzba/udrzba-a-zivotnost.md

---

## Důležitá pravidla

1. **VŽDY pracuj na lokálním disku** - nikdy neupdatuj GitHub bez schválení
2. **Commit po každém článku** - `git add . && git commit -m "Revize: [název článku]"`
3. **Prověřuj zdroje důsledně** - lepší zpomalit než psát blbosti
4. **Nesmaž původní pokud není jednoznačně špatný** - raději uprav
5. **Zachovej konzistentní styl** napříč všemi články

---

**Začátek revize:** 27. října 2025
**Očekáváno dokončení:** 30. října 2025
**Odpovědná osoba:** Claude AI + Radim (schválení)
