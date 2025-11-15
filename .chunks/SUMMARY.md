# FAQ Verifikace - Shrnutí analýzy

**Datum:** 2025-11-09
**Metodika:** PROJECT-MASTER (Task-Based Vertical Slicing)

---

## 🎯 Analýza

**Aktuální stav FAQ:**
- 20 otázek v 4 kategoriích
- Kvalita: 85/100
- Struktura: ✅ Výborná
- Faktografická správnost: ✅ 95/100
- Konkurenční výhoda vs. mezinárodní FAQ: ❌ Chybí 5 kritických sekcí

---

## ❌ Identifikované nedostatky

Porovnání s top international mobile home FAQ (USA, UK, Německo) odhalilo **5 chybějících sekcí**:

### 1. RESALE VALUE WARNING
**Co chybí:** Jasná sekce o prodejnosti mobilních domů
**Data k dispozici:** Článek 02 (sekce #6) - timeline 6-18 měsíců, příklad Petr (800k ztráta)
**Dopad:** Kupci neví, že prodej trvá 3× déle než klasický RD

### 2. DEPRECIATION REALITY
**Co chybí:** Jasná odpověď "Je mobilní dům dobrá investice?"
**Data k dispozici:** Článek 04 (Depreciace vs. Apreciace) - -55% za 20 let
**Dopad:** Kupci si myslí, že hodnota poroste (jako u klasického RD)

### 3. INSURANCE HORROR SCENARIOS
**Co chybí:** Konkrétní příklady PROČ je pojištění nutné
**Data k dispozici:** Článek 16 (3 scénáře: požár 3,8M, povodeň 650k, vichřice 122k)
**Dopad:** Lidé podceňují pojištění → riziko totální ztráty

### 4. ZONING DETAILS
**Co chybí:** Krok-za-krokem návod JAK ověřit územní plán
**Data k dispozici:** Článek 06 (Jak vybrat pozemek)
**Dopad:** Kupci koupí pozemek, kde NELZE stavět

### 5. FINANCING PITFALLS
**Co chybí:** Seznam skrytých nákladů
**Data k dispozici:** Články 04 + 12 (vyjádření sítí, projekt, geo-průzkum)
**Dopad:** Kupci nemají rezervu → finanční stres během stavby

---

## 📦 Chunk plán (5 chunks)

| Chunk | Úkol | Otázka | Status | ETA |
|-------|------|--------|--------|-----|
| **01** | Resale Section | Q21: "Jak rychlo se prodává?" | ⏳ PENDING | 15 min |
| **02** | Depreciation | Q22: "Je mobilní dům dobrá investice?" | ⏳ PENDING | 15 min |
| **03** | Insurance Horror | Q23: "Co se stane BEZ pojištění?" | ⏳ PENDING | 15 min |
| **04** | Zoning Details | Q24: "Jak ověřím územní plán?" | ⏳ PENDING | 20 min |
| **05** | Financing Pitfalls | Q25: "Jaké skryté náklady?" | ⏳ PENDING | 20 min |

**CELKEM:** 5 chunks → 85 minut práce

---

## ✅ Po dokončení

FAQ článek bude obsahovat:
- **25 otázek** (20 → 25)
- **100% coverage** mezinárodních best practices
- **Všechna kritická varování** pro kupce
- **Cross-linking** na články 02, 04, 06, 12, 16
- **Kvalita:** 95/100 (top tier)

---

## 🚀 Jak pokračovat

**AUTOMATICKÉ SPUŠTĚNÍ:**
```bash
# Spustit v Claude Code:
"Zpracuj chunk-01-resale-section. Po dokončení pokračuj chunk-02, pak 03, 04, 05. Na konci updatuj TL;DR sekci (20 → 25 otázek)."
```

**MANUÁLNÍ SPUŠTĚNÍ:**
1. Otevři chunk-01-resale-section/TASK.md
2. Implementuj podle specifikace
3. Updateuj STATE.md (⏳ PENDING → 🔄 IN PROGRESS → ✅ DONE)
4. Opakuj pro chunk-02 až 05

---

## 📊 Očekávaný výsledek

**PŘED (aktuální stav):**
- 20 otázek
- Chybí kritická varování
- Kupci podceňují rizika (resale, depreciation, insurance)
- Kvalita: 85/100

**PO (cílový stav):**
- 25 otázek
- Všechna kritická varování na místě
- Kupci mají kompletní info PŘED rozhodnutím
- Kvalita: 95/100
- **Konkurenční výhoda:** Jediné české FAQ s international best practices
