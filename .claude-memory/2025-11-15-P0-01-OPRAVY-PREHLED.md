# P0-01: Přehled oprav novy-zakon-283-2021.md

**Datum:** 2025-11-15
**Soubor:** wiki/legislativa/stavebni-zakon/novy-zakon-283-2021.md (394 řádků)
**Celková velikost:** Zůstane ~400-450 řádků (přidáme ~50-60 řádků nového obsahu)
**Struktura:** Zachováme současnou strukturu (sekce, podnadpisy), jen doplníme chybějící info a opravíme faktické chyby

---

## 📊 PŘEHLED VŠECH OPRAV

| # | ČO JE ŠPATNĚ | PROČ TO VADÍ | JAK TO OPRAVÍME | DOPAD NA TEXT |
|---|--------------|--------------|-----------------|---------------|
| **🔴 KRITICKÉ** |
| 1 | **§ 103 odst. 1 písm. e) bod 16** (7x výskytů)<br>Řádky: 182, 210, 241, celý dokument | Tento paragraf byl ZRUŠEN novelou 1.8.2025<br>→ Zákazník ověří na zakonyprolidi.cz → NENAJDE<br>→ Ztráta důvěry ("lžou mi?") | `old: "§ 103 odst. 1 písm. e) bod 16"`<br>`new: "Příloha č. 1, oddíl 1), písm. a), bod 4"`<br>Replace_all=true (všech 7 výskytů) | **0 nových řádků**<br>Jen změna textu |
| 2 | **Metodika MMR z května 2022**<br>Řádek: 5, implicitní reference | Metodika 2022 NAHRAZENA verzí z **5.11.2025** (před 10 dny!)<br>→ Chybí KRITICKÉ pravidlo: "dodatečné úpravy mobilního domu (zateplení, změna velikosti) → PŘESTÁVÁ být výrobkem, STÁVÁ SE stavbou!"<br>→ Zákazník udělá zateplení → nelegální stavba! | Doplnit novou sekci před řádek 100:<br>```markdown<br>⚠️ **POZOR - Metodika MMR 11/2025:**<br>Pokud provedete dodatečné úpravy...<br>```<br>+ Aktualizovat zmínku o metodice na "5.11.2025" | **+8-10 řádků**<br>Nový boxed warning |
| 3 | **"Platný od 1.7.2024"**<br>Řádky: 3, 7, 390 | Dokument vypadá ZASTARALE<br>→ Je listopad 2025, ale mluví o "platnosti od 7/2024"<br>→ Zákazník neví jestli je info aktuální<br>→ 7 novel od 7/2024 není zmíněno! | Změnit na:<br>"Platný k 15.11.2025 (verze 11, účinná 1.10.2025-31.12.2025)"<br>Doplnit poznámku:<br>"Od 1.7.2024 prošel 7 novelami (poslední 249/2025 Sb.)" | **+3-5 řádků**<br>Poznámka pod čarou o novelách |
| 4 | **Jen "55 m²" bez rozlišení**<br>Řádky: 15, 25, 41 | ZAVÁDĚJÍCÍ - existují DVA limity!<br>→ Zákazník s RD neví že může mít jen **40 m²**<br>→ Koupí 55m² dům → nelze umístit na pozemek s RD → právní problém | Všude kde je "55 m²" změnit na:<br>"**40 m²** (pozemek s rod. domem/rekr. stavbou, max 5m výšky)"<br>"**55 m²** (pozemek pro rekreaci, max 4m výšky)" | **+15-20 řádků**<br>Rozšířit vysvětlení v sekci "Kategorizace" |
| 5 | **Rozpor: "stačí ohlášení" vs "není třeba ohlášení"**<br>Řádky: 3, 25, 59 | MATOUCÍ - někdy říká "ano", někdy "ne"<br>→ Zákazník neví jestli má/nemá podat ohlášení<br>→ Riziko zbytečného podání NEBO neplatného postupu | Jasně rozlišit:<br>"**Rekreační do 55m²:** NENÍ třeba ohlášení"<br>"**Trvalé bydlení:** JE třeba ohlášení (i do 40m²)" | **+10-12 řádků**<br>Nová jasná tabulka rekreace vs trvalé |
| 6 | **Územní rozhodnutí - VŮBEC NENÍ ZMÍNĚNO!**<br>Řádky: 0-394 (NIKDE!) | **ZÁSADNÍ CHYBA!**<br>→ Zákazník si myslí že mobilní dům do 55m² nepotřebuje NIC<br>→ Postaví bez územního souhlasu<br>→ **NELEGÁLNÍ STAVBA** → pokuta, demolice! | Doplnit novou sekci (po řádku 76):<br>```markdown<br>## ⚠️ VŽDY nutné územní povolení<br>I když mobilní dům NEVYŽADUJE stavební povolení,<br>VŽDY vyžaduje:<br>- Územní rozhodnutí NEBO<br>- Územní souhlas NEBO<br>- Veřejnoprávní smlouvu<br>```<br>Cross-reference: wiki/legislativa/uzemni-planovani.md | **+25-30 řádků**<br>NOVÁ SEKCE (největší přidání!) |
| 7 | **Chybí business realita - připojení sítí = ztráta mobility**<br>Řádky: 29-30, 96-107 (zmíněno obecně, ale NE v kontextu našich produktů) | Zákazník NEVÍ co kupuje!<br>→ Myslí že kupuje "mobilní dům" = lze převézt<br>→ Reálně: letniskowo.eu VŽDY dodává S PŘÍPOJKAMI<br>→ Po připojení elektřiny, vody, kanalizace = STAVBA/NEMOVITOST<br>→ Daň z nemovitosti, případně dodatečné povolení | Doplnit boxed warning v sekci "Připojení sítí":<br>```markdown<br>⚠️ **PRO NAŠE PRODUKTY:**<br>Všechny domy od dodavatele letniskowo.eu (20-69 m²)<br>jsou dodávány S PŘIPOJENÍM NA SÍTĚ.<br>Po připojení mobilní dům ZTRÁCÍ charakter mobilního objektu<br>a stává se STAVBOU podle judikatury.<br>```<br>Cross-reference: BUSINESS-CONTEXT.md | **+12-15 řádků**<br>Boxed warning v sekci Připojení sítí |
| 8 | **Portál stavebníka - info z léta 2024**<br>Řádky: 17, 81, 91 | Zmínka o výpadcích Portálu 7-8/2024<br>→ Teď je listopad 2025 (15 měsíců později!)<br>→ Dokument vypadá ZASTARALE | Odstranit zmínku o výpadcích<br>NEBO aktualizovat:<br>"K 11/2025 je systém stabilní, výpadky z léta 2024 vyřešeny" | **0 řádků**<br>(odstranění) NEBO **+2 řádky** (aktualizace) |
| **🟠 VYSOKÉ PRIORITY** |
| 9 | **Datum "9.11.2025" vs obsah ze 7-8/2024**<br>Řádek: 389 | Nesoulad: Dokument říká "aktualizováno 9.11.2025"<br>ALE obsahuje info z léta 2024 (výpadky Portálu)<br>→ Vypadá to že se nekontroluje obsah | Buď aktualizovat obsah na 11/2025<br>NEBO změnit datum na reálné (kdy byl text napsán) | **0 řádků**<br>Jen změna data |
| 10 | **Č.p. vs č.e. - chybí cenový dopad**<br>Řádek: 35 | Popisuje technický proces, ale NEZDŮRAZŇUJE:<br>→ Č.p. (trvalé bydlení) je o **STATISÍCE KČ** dražší než č.e.!<br>→ Zákazník se rozhodne ŠPATNĚ → zbytečně platí víc | Doplnit do sekce č.p./č.e.:<br>"💰 **Cenový rozdíl:**<br>Č.p. je o statisíce Kč dražší (stavební povolení, kolaudace, vyšší požadavky)" | **+5-7 řádků**<br>Nový odstavec o ceně |
| 11 | **Chybí "na klíč" služba**<br>Řádky: 59-76, 127-155 | Popisuje složitý právní proces (územní souhlas, dokumentace, kolaudace)<br>ALE neříká že MY to vyřídíme ZA ZÁKAZNÍKA!<br>→ Zákazník si myslí že musí vše sám → neobjedná | Doplnit boxed note v sekci "Postup při umisťování":<br>```markdown<br>✅ **NÁŠ SERVIS "NA KLÍČ":**<br>Vyřídíme celý právní proces za vás:<br>- Územní souhlas<br>- Dokumentace<br>- Kolaudace<br>Vy nemusíte řešit papírování!<br>```<br>+ Call-to-action: "Kontaktujte nás pro bezplatnou konzultaci" | **+10-12 řádků**<br>Boxed note + CTA |
| **🟡 STŘEDNÍ PRIORITY** |
| 12 | **Novely 2025 - nesmíněny**<br>Řádek: 15 | Říká "Nový zákon zavádí jasné limity" ale NEŘÍKÁ:<br>→ Novela 1.8.2025 změnila strukturu (mobilní domy přesunuto z § 103 do Přílohy)<br>→ Pro úplnost chybí zmínka | Doplnit poznámku pod čarou:<br>"*Od 1.8.2025 platí novela přinášející změny pro drobné a jednoduché stavby - mobilní domy nově definovány v Příloze č. 1*" | **+2-3 řádky**<br>Poznámka pod čarou |
| 13 | **Reference [5] - možná neplatná**<br>Řádky: 15, 215-217 | Reference [5] odkazuje na "Příloha 1 - Drobné stavby, body 2.1.2"<br>→ Může se změnit číslování bodů v Příloze<br>→ Ověřit že odpovídá aktuálnímu znění | Ověřit a případně opravit číslování bodu v Příloze | **0 řádků**<br>Jen změna čísla bodu |
| 14 | **Call-to-action - chybí**<br>Všude kde je složitý proces | Popisuje složité právní procesy<br>ALE žádný odkaz "Kontaktujte nás"<br>→ Zákazník se bojí složitosti → neobjedná | Doplnit na konci složitých sekcí:<br>"📞 **Potřebujete poradit?** Kontaktujte nás pro bezplatnou konzultaci!" | **+8-10 řádků**<br>3-4x CTA v dokumentu |

---

## 📏 CELKOVÝ DOPAD NA VELIKOST A STRUKTURU

### PŘED:
- **394 řádků**
- **Struktura:** Úvod → Co je nového → Kategorizace → Technické parametry → Postup → Digitalizace → Sítě → Sankce → Odkazy

### PO:
- **~440-460 řádků** (+50-60 řádků nového obsahu)
- **Struktura:** STEJNÁ (jen rozšířená):
  - Úvod → Co je nového → Kategorizace **(rozšířena - 40m² vs 55m²)**
  - Technické parametry → Postup **(nová sekce: Územní rozhodnutí VŽDY nutné!)**
  - **NOVÝ boxed warning:** Metodika MMR 11/2025
  - Digitalizace → Sítě **(rozšířena - business kontext letniskowo.eu)**
  - **NOVÝ boxed note:** Servis "na klíč"
  - Sankce → Odkazy

### ZMĚNY STRUKTURY:
✅ **Zachováváme:** Sekce, podnadpisy, flow dokumentu
✅ **Přidáváme:**
- 2 nové boxed warnings (metodika, business)
- 1 novou sekci (územní rozhodnutí)
- 1 boxed note (servis na klíč)
- 3-4 call-to-action

❌ **NEMĚNÍME:** Styl psaní, tón, úroveň detailu

---

## 🎯 IMPLEMENTAČNÍ PLÁN

### KROK 1: Replace_all opravy (bez změny struktury)
```bash
Edit #1: old="§ 103 odst. 1 písm. e) bod 16"
         new="Příloha č. 1, oddíl 1), písm. a), bod 4"
         replace_all=true

Edit #2: old="od 1. července 2024"
         new="platný k 15.11.2025 (verze 11, účinná 1.10.2025-31.12.2025)"
         replace_all=false (jen první výskyt v úvodu)

Edit #3: old="Poslední aktualizace: 9. listopadu 2025"
         new="Poslední aktualizace: 15. listopadu 2025"
```

### KROK 2: Doplnění chybějícího obsahu (rozšíření struktury)
```bash
Edit #4: Sekce "Kategorizace mobilních domů" (řádek ~21-37)
         Rozšířit vysvětlení 40m² vs 55m² (+ tabulka rekreace vs trvalé)

Edit #5: PO řádku 76 - NOVÁ SEKCE
         "## ⚠️ VŽDY nutné územní povolení"
         (25-30 nových řádků)

Edit #6: Sekce "Připojení k inženýrským sítím" (řádek ~96-107)
         Doplnit boxed warning o letniskowo.eu produktech
         (12-15 nových řádků)

Edit #7: Sekce "Postup při umisťování" (řádek ~59-76)
         Doplnit boxed note "Náš servis na klíč"
         (10-12 nových řádků)

Edit #8: Před řádek 100
         Doplnit boxed warning "Metodika MMR 11/2025"
         (8-10 nových řádků)
```

### KROK 3: Call-to-action (kosmetické)
```bash
Edit #9: Na konci složitých sekcí (3-4 místa)
         Doplnit: "📞 Potřebujete poradit? Kontaktujte nás..."
         (8-10 nových řádků celkem)
```

---

## ✅ VÝSLEDEK

**Před:**
- 394 řádků
- Právně NEPLATNÉ odkazy (§ 103)
- Zastaralá metodika (2022)
- CHYBÍ kritické info (územní rozhodnutí)
- CHYBÍ business kontext (letniskowo.eu)
- Žádná call-to-action

**Po:**
- ~440-460 řádků (+15% delší)
- Právně PLATNÉ odkazy (Příloha č. 1)
- Aktuální metodika (5.11.2025)
- ÚPLNÉ info (územní rozhodnutí vždy!)
- Business kontext (připojení sítí = ztráta mobility)
- Služba "na klíč" zmíněna
- 3-4x call-to-action

---

**Připraveno k implementaci:** ANO
**Počet Edit operací:** 8-9
**Estimace času:** 5-10 minut
**Git commit:** Připravená zpráva v P0-01-NALEZ.md
