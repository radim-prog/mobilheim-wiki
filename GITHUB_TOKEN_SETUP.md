# 🔑 Jak nastavit GitHub token pro poznámky

Poznámky se automaticky odesílají jako **GitHub Issues**. Potřebujete jen jednou nastavit GitHub token.

---

## 📝 Rychlý návod (2 minuty)

### 1. Vytvořit GitHub Personal Access Token

1. **Přihlaste se na GitHub**
2. Jděte na: **https://github.com/settings/tokens**
3. Klikněte **"Generate new token"** → **"Generate new token (classic)"**
4. Vyplňte:
   - **Note:** `Mobilheim Wiki Annotations`
   - **Expiration:** `No expiration` (nebo jak dlouho chcete)
   - **Zaškrtněte:** `repo` (Full control of private repositories)
     - Tím získáte práva vytvářet Issues

5. Klikněte **"Generate token"** (zelené tlačítko dole)
6. **ZKOPÍRUJTE TOKEN** (zobrazí se jen jednou!)
   - Vypadá jako: `ghp_abc123def456...`

---

### 2. Vložit token do webu

1. Otevřete web: **https://radim-prog.github.io/mobilheim-wiki/**
2. Klikněte na tlačítko **"⚙️ GitHub"** (vpravo dole)
3. Vložte zkopírovaný token
4. Klikněte OK

✅ **Hotovo!** Token je uložen v prohlížeči.

---

## 🎯 Jak to pak funguje?

### Sekretářka napíše poznámku:

1. Označí text na stránce
2. Napíše poznámku do popupu
3. Klikne "Uložit poznámku"

### Automaticky se vytvoří GitHub Issue:

**Název:** `📝 Poznámka: Kolik stojí mobilní dům`

**Obsah:**
```
## Poznámka ze dne 24.10.2025 14:35:12

**Stránka:** Kolik stojí mobilní dům - Mobilheim Wiki
**URL:** https://radim-prog.github.io/mobilheim-wiki/blog/04-kolik-stoji-mobilni-dum/
**Sekce:** Průměrné ceny v roce 2025

---

**Označený text:**
> Průměrná cena mobilního domu je 850 000 Kč

**Poznámka:**
Tady je chyba - je to 750 000 Kč ne 850 000!

---

*Automaticky vytvořeno systémem poznámek*
```

**Labels:** `poznámka`, `auto-generated`

---

## 📊 Co s tím můžete dělat?

✅ **Vidíte všechny poznámky** na GitHubu v Issues
✅ **Zavíráte je** po opravení (Close issue)
✅ **Diskutujete** pod nimi (komentáře)
✅ **Filtrujete** podle labelů
✅ **Dostáváte email notifikace** při nové poznámce
✅ **Můžete je assignovat** na členy týmu

---

## 🔒 Bezpečnost

- ✅ Token je uložený **jen v prohlížeči sekretářky** (localStorage)
- ✅ **Nikam se neposílá** kromě GitHub API
- ✅ Token má přístup **jen k vašemu repozitáři**
- ✅ Můžete token kdykoliv **zrušit** na github.com/settings/tokens

---

## ❓ Časté problémy

### "Bad credentials" chyba
→ Token je neplatný nebo vypršel. Vytvořte nový.

### "Resource not accessible by integration"
→ Token nemá práva na `repo`. Vytvořte nový s `repo` scope.

### Poznámka se neuložila
→ Zkontrolujte token tlačítkem "⚙️ GitHub"

---

**Hotovo!** Poznámky se nyní automaticky posílají na GitHub jako Issues. 🎉
