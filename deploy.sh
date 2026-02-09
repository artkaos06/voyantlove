#!/bin/bash

# 🚀 Script de Déploiement VoyantLove.fr
# Exécuter ligne par ligne pour lancer le site

echo "🚀 LANCEMENT DE VOYANTLOVE.FR"
echo "=============================="
echo ""

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# ÉTAPE 1: Vérifier que le build fonctionne
echo -e "${BLUE}ÉTAPE 1: Vérification du build...${NC}"
npm run build
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build réussi!${NC}"
else
    echo -e "${RED}❌ Erreur de build. Corrigez avant de déployer.${NC}"
    exit 1
fi

echo ""
echo -e "${BLUE}ÉTAPE 2: Initialisation Git...${NC}"
git init 2>/dev/null && echo -e "${GREEN}✅ Git initialisé${NC}" || echo "Git déjà initialisé"

# Créer .gitignore si n'existe pas
if [ ! -f .gitignore ]; then
    echo "Création de .gitignore..."
    cat > .gitignore << 'EOF'
# dependencies
/node_modules
/.pnp
.pnp.js

# next.js
/.next/
/out/
/build

# misc
.DS_Store
*.pem
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
/tmp
EOF
    echo -e "${GREEN}✅ .gitignore créé${NC}"
fi

echo ""
echo -e "${BLUE}ÉTAPE 3: Premier commit...${NC}"
git add .
git commit -m "Initial commit - VoyantLove.fr ready for deployment

- 32+ pages with SEO-optimized content
- MonSiteVoyance affiliate integration
- Internal linking structure
- Schemas and metadata
- Static export configuration

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>" 2>/dev/null

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Commit créé${NC}"
else
    echo -e "${GREEN}✅ Changements déjà commités${NC}"
fi

echo ""
echo "=============================="
echo -e "${GREEN}🎉 PRÉPARATION TERMINÉE!${NC}"
echo "=============================="
echo ""
echo "📋 PROCHAINES ÉTAPES:"
echo ""
echo "1️⃣  Créer un repository GitHub:"
echo "   → https://github.com/new"
echo "   → Nom: voyantlove"
echo "   → Privé ou Public"
echo ""
echo "2️⃣  Lier et pousser vers GitHub:"
echo "   ${BLUE}git remote add origin https://github.com/VOTRE_USERNAME/voyantlove.git${NC}"
echo "   ${BLUE}git branch -M main${NC}"
echo "   ${BLUE}git push -u origin main${NC}"
echo ""
echo "3️⃣  Déployer sur Vercel:"
echo "   → https://vercel.com/new"
echo "   → Import votre repository 'voyantlove'"
echo "   → Cliquez Deploy (Vercel détecte Next.js auto)"
echo ""
echo "4️⃣  Configurer le domaine:"
echo "   → Vercel: Settings → Domains → Ajouter 'voyantlove.fr'"
echo "   → GoDaddy: DNS → Ajouter les enregistrements Vercel"
echo ""
echo "📖 Guide complet: ./DEPLOYMENT_GUIDE.md"
echo ""
