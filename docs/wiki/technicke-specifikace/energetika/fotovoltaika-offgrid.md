# Fotovoltaika a off-grid systémy

> **Kompletní průvodce** solárnými panely a samostatnými energetickými systémy
>
> **Aktualizováno:** Říjen 2025

---

## 🎯 Úvod do fotovoltaiky

### Co je fotovoltaika?

> **Fotovoltaika (FV)** = Přímá přeměna slunečního záření na elektrickou energii pomocí solárních panelů

### Proč FV pro mobilní domy?

1. **Nezávislost** - výroba vlastní elektřiny
2. **Úspora** - nižší účty za elektřinu
3. **Ekologie** - čistá energie
4. **Zvýšení hodnoty** - dům s FV je atraktivnější
5. **Off-grid možnost** - život bez sítí

---

## 📊 Typy fotovoltaických systémů

### 1. On-grid (připojené k síti)

**Princip:**
```
Solární panely → Střídač → Domácnost + Síť (přebytek)
```

**Výhody:**
- ✅ Nejlevnější (žádné baterie)
- ✅ Neomezená kapacita (síť jako záloha)
- ✅ Možnost prodeje přebytků

**Nevýhody:**
- ❌ Závislost na síti
- ❌ Při výpadku sítě nefunguje
- ❌ Nízká cena výkupu (50-150 Kč/MWh)

**Použití:** Mobilní domy s přípojkou elektřiny

---

### 2. Hybrid (s baterií + síť)

**Princip:**
```
Solární panely → Střídač → Baterie → Domácnost + Síť (záloha)
```

**Výhody:**
- ✅ Využití přebytků v noci (baterie)
- ✅ Záloha při výpadku
- ✅ Vyšší soběstačnost (70-90%)

**Nevýhody:**
- ❌ Dražší (baterie)
- ❌ Omezená kapacita baterie

**Použití:** Optimální pro celoroční bydlení

---

### 3. Off-grid (bez sítě)

**Princip:**
```
Solární panely → Baterie → Domácnost
(+ Generátor jako záloha)
```

**Výhody:**
- ✅ Úplná nezávislost
- ✅ Možnost umístění kdekoli
- ✅ Bez poplatků za elektřinu

**Nevýhody:**
- ❌ Nejdražší (velká baterie + panely)
- ❌ Nutný záložní generátor (zima)
- ❌ Omezená kapacita

**Použití:** Mobilní domy v lokalitách bez přípojky

---

## ☀️ Výpočet potřebného výkonu FV

### Spotřeba mobilního domu:

#### Běžná domácnost (50 m², 2 osoby):

| Spotřebič | Příkon [W] | Čas [h/den] | Spotřeba [kWh/den] |
|-----------|-----------|-------------|-------------------|
| **Lednice** | 150 | 24 | 3,6 |
| **Mrazák** | 100 | 24 | 2,4 |
| **Osvětlení (LED)** | 50 | 5 | 0,25 |
| **TV** | 80 | 4 | 0,32 |
| **Notebook** | 60 | 6 | 0,36 |
| **Pračka** | 2000 | 0,5 | 1,0 |
| **Varná konvice** | 2000 | 0,2 | 0,4 |
| **Mikrovlnka** | 1000 | 0,3 | 0,3 |
| **Router WiFi** | 10 | 24 | 0,24 |
| **Ostatní** | - | - | 1,0 |

**CELKEM:** ~10 kWh/den = **3650 kWh/rok**

---

### Dimenzování FV systému:

**Vzorec:**
```
Výkon FV [kWp] = Roční spotřeba [kWh] / (1000 × Sluneční svit [h/rok])

Pro ČR:
Sluneční svit = 900-1100 h/rok (efektivní)
```

**Příklad:**
```
Spotřeba: 3650 kWh/rok
Sluneční svit: 1000 h/rok
Výkon FV: 3650 / 1000 = 3,65 kWp

→ Doporučeno: 4-5 kWp (rezerva pro zimu)
```

---

## 🔋 Bateriové systémy

### Kapacita baterie:

**Vzorec:**
```
Kapacita [kWh] = Denní spotřeba [kWh] × Počet dnů autonomie

Pro ČR: 2-3 dny autonomie (zimní podmínky)
```

**Příklad:**
```
Denní spotřeba: 10 kWh
Autonomie: 2 dny
Kapacita: 10 × 2 = 20 kWh
```

---

### Typy baterií:

#### A) Lithium-ion (Li-Ion)

**Výhody:**
- ✅ Vysoká hustota energie (lehké)
- ✅ Dlouhá životnost (5000-10000 cyklů)
- ✅ Vysoká účinnost (95%)
- ✅ Nízká samovybíjení (1-2 %/měsíc)

**Nevýhody:**
- ❌ Drahé (12 000 - 18 000 Kč/kWh)

**Výrobci:**
- Tesla Powerwall (13,5 kWh) - 320 000 Kč
- LG Chem RESU (10 kWh) - 250 000 Kč
- BYD Battery-Box (10 kWh) - 220 000 Kč
- Huawei LUNA (10 kWh) - 200 000 Kč

**Cena:** 12 000 - 18 000 Kč/kWh

---

#### B) Olověné (AGM/GEL)

**Výhody:**
- ✅ Levné (3000-5000 Kč/kWh)
- ✅ Osvědčené

**Nevýhody:**
- ❌ Těžké (20-30 kg/kWh)
- ❌ Krátká životnost (500-1500 cyklů)
- ❌ Nižší účinnost (80%)
- ❌ Nutná údržba (kontrola elektrolytu)

**Použití:** Off-grid systémy s nižším rozpočtem

**Cena:** 3 000 - 5 000 Kč/kWh

---

#### C) LiFePO4 (lithium železo-fosfát)

**Výhody:**
- ✅ Velmi dlouhá životnost (6000-12000 cyklů)
- ✅ Bezpečné (nehořlavé)
- ✅ Stabilní

**Nevýhody:**
- ❌ Nižší hustota než Li-Ion
- ❌ Drahé (10 000 - 15 000 Kč/kWh)

**Použití:** Prémiové off-grid systémy

**Cena:** 10 000 - 15 000 Kč/kWh

---

## 🌤️ Solární panely

### Typy panelů:

#### A) Monokrystalické (mono)

**Vlastnosti:**
- Účinnost: **18-22%**
- Životnost: 25-30 let
- Výkon: 350-450 Wp/panel

**Výhody:**
- ✅ Nejvyšší účinnost
- ✅ Zabírají nejméně místa
- ✅ Lepší výkon při nízké světelnosti

**Nevýhody:**
- ❌ Dražší (+20% oproti poly)

**Cena:** 3 500 - 5 000 Kč/panel (400 Wp)

---

#### B) Polykrystalické (poly)

**Vlastnosti:**
- Účinnost: **15-18%**
- Životnost: 20-25 let
- Výkon: 300-350 Wp/panel

**Výhody:**
- ✅ Levnější

**Nevýhody:**
- ❌ Nižší účinnost
- ❌ Více prostoru

**Cena:** 2 800 - 4 000 Kč/panel (350 Wp)

---

#### C) Half-cut (poloviční články)

**Vlastnosti:**
- Články rozřezané na polovinu
- Nižší vnitřní odpor
- Lepší výkon při zastínění

**Výhody:**
- ✅ Vyšší výkon (+5-10 Wp)
- ✅ Odolnější vůči zastínění

**Cena:** +10% oproti klasickým

---

### Výrobci panelů:

**Prémiová kvalita:**
- SunPower (USA) - 23% účinnost
- LG (Korea) - 22%
- Panasonic (Japonsko) - 21,5%

**Dobrá kvalita:**
- JA Solar (Čína) - 20%
- Longi Solar (Čína) - 20%
- Trina Solar (Čína) - 19,5%

**Ekonomická:**
- Canadian Solar - 18%
- Risen Energy - 18%

---

### Umístění panelů na mobilním domě:

#### A) Střecha:

**Optimální:**
- Orientace: Jih (±30°)
- Sklon: 30-40° (pro ČR)

**Plocha střechy mobilního domu 50 m²:**
```
Využitelná plocha: ~35 m² (po odečtení okrajů)
Počet panelů (400 Wp, 2 m²): 35 / 2 = 17 panelů
Výkon: 17 × 0,4 kWp = 6,8 kWp ✅
```

**Montáž:**
- Hliníkové profily
- Kotvení do střešní konstrukce
- Vodotěsnost (střešní háky)

---

#### B) Pozemek (zemní pole):

**Výhody:**
- ✅ Optimální úhel (měnitelný)
- ✅ Snadná údržba (sníh, čištění)
- ✅ Chlazení (vyšší výkon)

**Nevýhody:**
- ❌ Zabírá prostor zahrady
- ❌ Dražší konstrukce

**Použití:** Pokud střecha není vhodná (stín, orientace)

---

## 🔌 Střídače (invertory)

### Typy střídačů:

#### A) String inverter (řetězový)

**Princip:**
- Všechny panely v sérii → 1 střídač

**Výhody:**
- ✅ Levné
- ✅ Jednoduché

**Nevýhody:**
- ❌ Zastínění 1 panelu = snížení výkonu všech

**Cena:** 20 000 - 40 000 Kč (5 kW)

---

#### B) Hybrid inverter

**Princip:**
- Střídač + řízení baterie v jednom

**Výhody:**
- ✅ Vše v jednom
- ✅ Řízení toků energie
- ✅ Záloha při výpadku

**Cena:** 50 000 - 100 000 Kč (5 kW + baterie)

---

#### C) Mikro-měniče

**Princip:**
- Každý panel má vlastní mikro-měnič

**Výhody:**
- ✅ Zastínění neovlivní ostatní
- ✅ Monitorování každého panelu

**Nevýhody:**
- ❌ Nejdražší (+50%)

**Cena:** 4 000 - 6 000 Kč/ks

---

## 💰 Cena fotovoltaiky

### On-grid systém (bez baterie):

**Mobilní dům 50 m², 5 kWp:**

| Položka | Cena |
|---------|------|
| **Panely** (13× 400 Wp) | 50 000 Kč |
| **Střídač** (5 kW) | 35 000 Kč |
| **Konstrukce + montáž** | 35 000 Kč |
| **Kabeláž, jističe** | 15 000 Kč |
| **Revize, projekt** | 10 000 Kč |
| **CELKEM** | **145 000 Kč** |

**Výroba:** 4500-5500 kWh/rok

**Úspora:** 4500 kWh × 6 Kč = **27 000 Kč/rok**

**Návratnost:** 145 000 / 27 000 = **5,4 let** ✅

---

### Hybrid systém (s baterií):

**Mobilní dům 50 m², 5 kWp + 10 kWh baterie:**

| Položka | Cena |
|---------|------|
| On-grid základ | 145 000 Kč |
| **Baterie** (10 kWh Li-Ion) | +150 000 Kč |
| **Hybrid střídač** | +30 000 Kč |
| **CELKEM** | **325 000 Kč** |

**Soběstačnost:** 70-85%

**Úspora:** ~32 000 Kč/rok

**Návratnost:** 325 000 / 32 000 = **10,2 let**

---

### Off-grid systém:

**Mobilní dům 50 m², 7 kWp + 20 kWh baterie:**

| Položka | Cena |
|---------|------|
| **Panely** (18× 400 Wp) | 70 000 Kč |
| **Baterie** (20 kWh LiFePO4) | 250 000 Kč |
| **Off-grid střídač** (8 kW) | 80 000 Kč |
| **Konstrukce + montáž** | 50 000 Kč |
| **Záložní generátor** (5 kW) | 35 000 Kč |
| **Kabeláž, rozvaděč** | 25 000 Kč |
| **CELKEM** | **510 000 Kč** |

**Soběstačnost:** 95-100%

**Úspora:** 50 000 Kč/rok (vs. přípojka + provoz)

**Návratnost:** 10-12 let

---

## 🏡 Příklad off-grid mobilního domu

### Parametry:

- **Plocha:** 50 m²
- **Umístění:** Chatová oblast bez elektřiny
- **Obyvatelé:** 2 osoby (víkendy + dovolená)

---

### Spotřeba:

**Víkendový provoz (2 dny/týden):**
```
Denní spotřeba: 8 kWh
Týdenní: 8 × 2 = 16 kWh
Roční: 16 × 52 = 832 kWh
```

---

### Dimenzování:

**Panely:**
```
Výkon: 832 / 1000 = 0,8 kWp
→ Instalováno: 3 kWp (rezerva pro zimu)
= 8 panelů × 400 Wp
```

**Baterie:**
```
Kapacita: 8 kWh × 3 dny = 24 kWh
→ Instalováno: 10 kWh (víkendový provoz, nižší nároky)
```

---

### Cena:

| Položka | Cena |
|---------|------|
| **Panely** (8× 400 Wp) | 30 000 Kč |
| **Baterie** (10 kWh LiFePO4) | 120 000 Kč |
| **Off-grid střídač** (3 kW) | 40 000 Kč |
| **Konstrukce** | 20 000 Kč |
| **Generátor** (záloha) | 25 000 Kč |
| **CELKEM** | **235 000 Kč** |

---

### Provoz:

**Léto (duben-září):**
- Soběstačnost: 100%
- Generátor: 0 h

**Zima (říjen-březen):**
- Soběstačnost: 60-80%
- Generátor: 5-10 h/měsíc (přiložení 1-2 kWh)

**Roční náklady:**
- Benzín do generátoru: 500 Kč
- Údržba: 1000 Kč
- **CELKEM: 1500 Kč**

---

## ✅ Checklist instalace FV

### Před instalací:

- [ ] Zjistit orientaci a sklon střechy
- [ ] Spočítat spotřebu elektřiny
- [ ] Vybrat typ systému (on-grid / hybrid / off-grid)
- [ ] Získat nabídky od 3 firem
- [ ] Zkontrolovat certifikace (EN, IEC)

### Během instalace:

- [ ] Kotvení do nosné konstrukce
- [ ] Vodotěsnost (střešní háky)
- [ ] Správné zapojení (polarita!)
- [ ] Uzemnění

### Po instalaci:

- [ ] Revize elektro (povinné!)
- [ ] Vyfocení instalace
- [ ] Zaškolení obsluhy
- [ ] Registrace do distribuce (on-grid)
- [ ] Monitorování výkonu (app)

---

## 🌞 Optimalizace výroby

### Tipy pro vyšší výkon:

1. **Orientace JIH** - optimální
2. **Sklon 35°** - pro ČR ideální
3. **Bez stínu** - stromy, komín, anténa
4. **Čistota** - mytí 1-2× ročně (+5% výkon)
5. **Chlazení** - větraná mezera pod panely
6. **Zimní údržba** - odstraňování sněhu

---

## 🔗 Související články

- [Energetická náročnost (PENB)](./energeticka-narocnost.md)
- [Vytápění mobilních domů](./vytapeni.md)
- [Elektroinstalace](../../pripojeni-siti/elektrina.md)

---

## 📚 Legislativa a dotace

**Dotace:**
- **Nová zelená úsporám** - až 180 000 Kč
- **Program Efekt** - pro municipality

**Podmínky:**
- Certifikované panely (CE, IEC)
- Autorizovaný instalatér
- Revizní zpráva

**Odkazy:**
- [Nová zelená úsporám](https://www.novazelenausporam.cz)
- [SFŽP](https://www.sfzp.cz/)

---

**Zpracováno:** 20. října 2025
**Autor:** Mobilheim Wiki
**Zdroje:** Výrobci FV systémů, TZB-info, praktické projekty
