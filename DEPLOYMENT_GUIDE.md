# 🚀 Guide de Déploiement VoyantLove.fr

## 📋 Checklist Pré-Lancement

### ✅ Vérifications Techniques
- [x] Build réussi (32 routes)
- [x] Liens internes optimisés
- [x] CTAs liés aux voyants affiliés
- [x] Photos voyants configurées
- [x] Schemas SEO en place
- [x] Sitemap.xml présent
- [x] Robots.txt configuré

### ✅ Contenu
- [x] 30+ pages avec contenu 2,500+ mots
- [x] Intégration voyants MonSiteVoyance
- [x] Mentions légales et confidentialité

---

## ÉTAPE 1: Initialiser Git Repository

### 1.1 Créer le repository Git local

```bash
cd /Users/roma/Downloads/voyantlove

# Initialiser Git
git init

# Créer .gitignore
cat > .gitignore << 'EOF'
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/
/build

# production
/dist

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/
.idea/
*.swp
*.swo

# logs
*.log
/tmp
EOF

# Premier commit
git add .
git commit -m "Initial commit - VoyantLove.fr ready for deployment

- 32+ pages with SEO-optimized content
- MonSiteVoyance affiliate integration
- Internal linking structure
- Schemas and metadata
- Static export configuration"
```

### 1.2 Créer repository sur GitHub

1. Allez sur https://github.com/new
2. Nom du repository: `voyantlove` ou `voyantlove-fr`
3. **Privé** (recommandé) ou Public
4. Ne pas initialiser avec README (vous en avez déjà un)
5. Cliquez "Create repository"

### 1.3 Lier et pousser vers GitHub

```bash
# Remplacer VOTRE_USERNAME par votre username GitHub
git remote add origin https://github.com/VOTRE_USERNAME/voyantlove.git
git branch -M main
git push -u origin main
```

---

## ÉTAPE 2: Déployer sur Vercel

### 2.1 Créer un compte Vercel

1. Allez sur https://vercel.com/signup
2. Choisissez **"Continue with GitHub"**
3. Autorisez Vercel à accéder à vos repositories
4. Compte créé ✅

### 2.2 Importer le projet

1. Sur le dashboard Vercel, cliquez **"Add New Project"**
2. Sélectionnez votre repository `voyantlove`
3. Vercel détecte automatiquement Next.js ✅

### 2.3 Configuration du déploiement

**Framework Preset:** Next.js (auto-détecté)

**Build Settings:**
- Build Command: `npm run build`
- Output Directory: `out` (important pour static export!)
- Install Command: `npm install`

**Environment Variables:** Aucune nécessaire pour l'instant

### 2.4 Déployer

1. Cliquez **"Deploy"**
2. Attendez 2-3 minutes ⏳
3. Votre site est en ligne sur: `voyantlove.vercel.app` 🎉

---

## ÉTAPE 3: Configurer le Domaine GoDaddy

### 3.1 Obtenir les informations Vercel

Dans votre projet Vercel:
1. Allez dans **Settings** → **Domains**
2. Entrez votre domaine: `voyantlove.fr`
3. Cliquez **"Add"**

Vercel vous donnera les enregistrements DNS à configurer.

### 3.2 Configuration DNS sur GoDaddy

1. Connectez-vous à https://dcc.godaddy.com/manage/dns
2. Sélectionnez votre domaine `voyantlove.fr`
3. Allez dans **DNS Records** ou **Gérer la zone DNS**

### 3.3 Ajouter les enregistrements DNS

**Option A: Avec sous-domaine www (recommandé)**

Ajoutez ces enregistrements:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `76.76.21.21` | 600 |
| CNAME | www | `cname.vercel-dns.com` | 600 |

**Option B: Sans www (root domain uniquement)**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `76.76.21.21` | 600 |
| AAAA | @ | `2606:4700:4700::1111` | 600 |

### 3.4 Supprimer les anciens enregistrements

⚠️ **Important**: Supprimez ces enregistrements s'ils existent:
- Tout A record pointant vers une autre IP
- Tout CNAME pour @ ou www pointant ailleurs

### 3.5 Vérifier dans Vercel

Retournez dans Vercel → Settings → Domains:
1. Le statut devrait passer à **"Valid Configuration"** ✅
2. Cela peut prendre 24-48h max (souvent 1-2h)

---

## ÉTAPE 4: Configuration SSL (HTTPS)

Vercel active automatiquement SSL (Let's Encrypt) pour votre domaine.

**Rien à faire!** Votre site sera accessible en HTTPS automatiquement 🔒

---

## ÉTAPE 5: Configuration Finale

### 5.1 Mettre à jour next.config.mjs

```bash
# Ouvrir next.config.mjs et vérifier
```

Assurez-vous que `assetPrefix` et `basePath` sont commentés ou vides:

```javascript
const nextConfig = {
  output: 'export',
  // assetPrefix: '', // Laisser vide pour Vercel
  // basePath: '',    // Laisser vide pour Vercel
  images: {
    unoptimized: true,
  },
  // ... reste de la config
};
```

### 5.2 Redirections www → non-www (ou inverse)

Dans Vercel → Settings → Domains:
- Si vous voulez `voyantlove.fr` (sans www): Cochez "Redirect www to non-www"
- Si vous voulez `www.voyantlove.fr`: Cochez "Redirect non-www to www"

**Recommandation SEO:** Choisissez `voyantlove.fr` (sans www) et redirectez www vers non-www.

### 5.3 Mettre à jour les URLs canoniques

Une fois le domaine configuré, mettez à jour les URLs dans le code:

```bash
# Chercher toutes les occurrences de https://voyantlove.fr
# et vérifier qu'elles sont correctes
grep -r "https://voyantlove.fr" app/
```

Normalement elles sont déjà bonnes ✅

---

## ÉTAPE 6: Vérifications Post-Déploiement

### 6.1 Tester le site

Visitez:
- ✅ https://voyantlove.fr
- ✅ https://www.voyantlove.fr (redirection?)
- ✅ https://voyantlove.fr/sitemap.xml
- ✅ https://voyantlove.fr/robots.txt
- ✅ https://voyantlove.fr/reconquete/ex-qui-revient

### 6.2 Tester les liens affiliés

Cliquez sur plusieurs CTAs pour vérifier:
- ✅ Liens vers MonSiteVoyance fonctionnent
- ✅ Paramètre `partner=936` présent
- ✅ Photos voyants s'affichent

### 6.3 Google Search Console

1. Allez sur https://search.google.com/search-console
2. Ajoutez la propriété `voyantlove.fr`
3. Vérifiez avec méthode DNS (TXT record)
4. Soumettez le sitemap: `https://voyantlove.fr/sitemap.xml`

### 6.4 Analytics (optionnel)

Ajoutez Google Analytics 4:
1. Créez une propriété GA4
2. Copiez le code de suivi
3. Ajoutez-le dans `app/layout.tsx`

---

## ÉTAPE 7: Déploiements Futurs

### 7.1 Workflow de mise à jour

```bash
# 1. Faire des modifications localement
# 2. Tester en local
npm run dev

# 3. Build de vérification
npm run build

# 4. Commit et push
git add .
git commit -m "Description des changements"
git push origin main

# 5. Vercel déploie automatiquement! 🎉
```

**Vercel déploie automatiquement** à chaque push sur `main` ✨

### 7.2 Rollback en cas de problème

Dans Vercel:
1. Allez dans **Deployments**
2. Trouvez le dernier déploiement qui fonctionnait
3. Cliquez **"Promote to Production"**

---

## 📊 MONITORING POST-LANCEMENT

### Semaine 1
- [ ] Vérifier tous les liens fonctionnent
- [ ] Surveiller Google Search Console (erreurs 404)
- [ ] Vérifier tracking MonSiteVoyance (conversions)
- [ ] Tester sur mobile

### Semaine 2-4
- [ ] Analyser pages les plus visitées
- [ ] Optimiser pages avec fort trafic
- [ ] Ajouter plus de contenu si besoin
- [ ] A/B test CTAs voyants

---

## 🆘 TROUBLESHOOTING

### "Domain not found" sur Vercel
→ Vérifiez les DNS sur GoDaddy, attendez 1-2h

### "404 Not Found" sur certaines pages
→ Vérifiez que `output: 'export'` est dans next.config.mjs
→ Rebuild le site sur Vercel

### Images voyants ne s'affichent pas
→ Vérifiez les URLs: `https://www.monsitevoyance.com/vignettephoto/{ID}.jpg`
→ Testez une URL directement dans le navigateur

### Redirections ne fonctionnent pas
→ Vérifiez Settings → Domains dans Vercel
→ Attendez propagation DNS (24-48h max)

---

## ✅ CHECKLIST FINALE DE LANCEMENT

- [ ] Code pushé sur GitHub
- [ ] Déployé sur Vercel avec succès
- [ ] Domaine GoDaddy configuré
- [ ] DNS propagé (tester sur https://dnschecker.org)
- [ ] HTTPS actif (cadenas vert)
- [ ] Sitemap soumis à Google Search Console
- [ ] Liens affiliés testés et fonctionnels
- [ ] Site testé sur desktop et mobile
- [ ] Analytics configuré (optionnel)
- [ ] Backup du code fait

---

## 🎉 FÉLICITATIONS!

Votre site VoyantLove.fr est maintenant en ligne! 🚀

**Prochaines étapes:**
1. Monitorer les conversions affiliées
2. Analyser le trafic avec Analytics
3. Optimiser les pages les plus visitées
4. Ajouter du contenu régulièrement

**Support:**
- Vercel: https://vercel.com/docs
- Next.js: https://nextjs.org/docs
- GoDaddy DNS: https://www.godaddy.com/help

---

Date de création: 2026-02-09
Version: 1.0
