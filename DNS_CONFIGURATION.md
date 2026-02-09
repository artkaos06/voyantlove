# 🌐 Configuration DNS GoDaddy → Vercel

## ⚡ Configuration Rapide (Recommandée)

### Étape 1: Dans Vercel
1. Projet → Settings → Domains
2. Entrez: `voyantlove.fr`
3. Cliquez "Add"
4. Notez les enregistrements DNS affichés

### Étape 2: Dans GoDaddy

**URL**: https://dcc.godaddy.com/manage/voyantlove.fr/dns

**Enregistrements à ajouter:**

| Type | Name | Value | TTL | Action |
|------|------|-------|-----|--------|
| A | @ | `76.76.21.21` | 600 | ➕ Ajouter |
| CNAME | www | `cname.vercel-dns.com.` | 600 | ➕ Ajouter |

⚠️ **Note importante**: Le point final `.` après `vercel-dns.com` est important!

### Étape 3: Supprimer les anciens enregistrements

❌ **Supprimez ces enregistrements s'ils existent:**
- A record `@` pointant vers une autre IP
- CNAME `www` pointant ailleurs
- Parking page de GoDaddy

### Étape 4: Vérification

**Dans Vercel** (Settings → Domains):
- Statut devrait passer à "Valid Configuration" ✅
- Délai: 5 minutes à 48 heures (généralement 1-2h)

**Tester la propagation:**
- https://dnschecker.org/#A/voyantlove.fr
- https://dnschecker.org/#CNAME/www.voyantlove.fr

---

## 🔧 Configuration Alternative (A records uniquement)

Si CNAME ne fonctionne pas, utilisez uniquement des A records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `76.76.21.21` | 600 |
| A | www | `76.76.21.21` | 600 |

---

## 📊 Configuration Finale dans Vercel

### Redirections (Recommandé)

Dans **Vercel → Settings → Domains**:

✅ **Cochez**: "Redirect www.voyantlove.fr to voyantlove.fr"

Cela redirige automatiquement:
- `www.voyantlove.fr` → `voyantlove.fr`
- `http://voyantlove.fr` → `https://voyantlove.fr`

### SSL/HTTPS

**Automatique!** Vercel configure SSL gratuitement via Let's Encrypt 🔒

Rien à faire, votre site sera en HTTPS dans 5-10 minutes après configuration DNS.

---

## ⏰ Timeline de Déploiement

| Étape | Temps | Statut |
|-------|-------|--------|
| Deploy sur Vercel | 2-3 min | Instantané |
| Configuration DNS GoDaddy | 2 min | Manuel |
| Propagation DNS | 5 min - 48h | Variable |
| SSL Certificate | 5-10 min | Auto |
| **Total minimum** | **~15 min** | ⚡ |
| **Total maximum** | **48 heures** | 🐢 |

**Réalité**: Généralement 1-2 heures pour propagation complète.

---

## 🆘 Problèmes Courants

### "DNS not configured" après 2h

**Solution:**
1. Vérifiez TTL sur GoDaddy (devrait être 600)
2. Videz le cache DNS local:
   ```bash
   # macOS
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

   # Windows
   ipconfig /flushdns
   ```
3. Testez en navigation privée
4. Attendez encore 2-4h (propagation globale)

### "Too many redirects"

**Solution:**
1. Vercel → Settings → Domains
2. Décochez toutes les redirections
3. Attendez 5 min
4. Recochez uniquement "www → non-www"

### HTTPS ne fonctionne pas

**Solution:**
1. Vérifiez que DNS est configuré
2. Attendez 10-15 min pour SSL auto
3. Forcez renouvellement: Vercel → Settings → Domains → Refresh SSL

---

## ✅ Vérification Post-Configuration

Une fois DNS configuré, testez:

```bash
# Test DNS propagation
dig voyantlove.fr +short
# Devrait retourner: 76.76.21.21

dig www.voyantlove.fr +short
# Devrait retourner: cname.vercel-dns.com ou 76.76.21.21

# Test HTTPS
curl -I https://voyantlove.fr
# Devrait retourner: HTTP/2 200
```

**Ou utilisez ces outils en ligne:**
- DNS: https://dnschecker.org
- SSL: https://www.ssllabs.com/ssltest/
- Headers: https://securityheaders.com

---

## 📞 Support

**Vercel:**
- Docs: https://vercel.com/docs/concepts/projects/domains
- Support: https://vercel.com/help

**GoDaddy:**
- Docs DNS: https://www.godaddy.com/help/manage-dns-records-680
- Support: https://www.godaddy.com/contact-us

---

**Date**: 2026-02-09
**Domaine**: voyantlove.fr
**Hébergement**: Vercel
**Registrar**: GoDaddy
