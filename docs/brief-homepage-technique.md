# Brief technique — refonte de la home VoyantLove

**Objet.** Faire évoluer la home vers le modèle esmeralda.chat : afficher beaucoup
plus de voyants, dans beaucoup moins de hauteur, sans casser la conversion
actuelle ni le modèle d'affiliation.

**Références mesurées** (390×844, build de prod, 2026-08-18) :

| | esmeralda.chat | voyantlove.fr |
|---|---|---|
| Hauteur de page | 6 489 px au 1er paint → **7 844 px stabilisé** (9,3 écrans) | **16 122 px (19,1 écrans)** |
| Carte voyant (mobile) | **146 × 281 px** | pleine largeur × **1 131 px** |
| Cartes par écran | 2,2 (rail horizontal) | 1 (pile verticale) |
| Voyants sur la home | **59** (8 rails) | **3** |
| Premier voyant visible | écran 1 | **écran 3** (section à 1 681 px) |

Le point central : **notre section voyants seule (3 394 px) fait 43 % de la hauteur
totale de leur site entier.** Leur page grossit de 6 489 à 7 844 px pendant
qu'on la scrolle (chargement paresseux des carrousels) — instabilité de mise en
page à ne PAS reproduire.

---

## 1. Refondre `components/VoyantCard.tsx` en carte compacte

Aujourd'hui la carte empile : header dégradé + avatar 64px, grille de 3 stats,
tags services, bloc tarifs, dernier avis (`line-clamp-3`), barre de score de
confiance, CTA, ligne de réassurance. D'où les 1 131 px.

Cible : **~146 × 281 px en mobile, ~212 × 361 px en desktop**, avec seulement :

- photo (hauteur fixe 200 px mobile / 280 px desktop, `object-fit:cover`)
- pastille de statut (point de couleur + `aria-label` « Disponible » / « Occupé »)
- prénom
- **une** spécialité (une seule chaîne, pas la liste des services)
- note sur 1 décimale
- pastille prix
- CTA icône

Tout le reste (avis client, score de confiance, tarifs détaillés, réassurance)
descend sur la fiche voyant, pas sur la carte.

**Attention — régression connue à ne pas réintroduire :** la carte actuelle a été
corrigée pour aligner les hauteurs (`h-full flex flex-col` sur la racine,
`flex-1` sur le corps, `mt-auto` sur le CTA). Sur une carte à hauteur fixe le
problème disparaît, mais si une ligne de texte peut passer sur 2 lignes, la
raggedness revient. Toutes les lignes doivent être mono-ligne (`truncate`).

## 2. Passer d'une pile verticale à des rails horizontaux à scroll-snap

Pas de librairie. CSS natif, comme eux :

```css
.rail{display:flex;overflow-x:auto;gap:var(--gap,12px);
      scroll-snap-type:x mandatory;scroll-behavior:smooth;
      scrollbar-width:none;scroll-padding-left:var(--pad,16px);
      padding:20px var(--pad,16px) 1rem}
.rail>*{flex-shrink:0;scroll-snap-align:start;
        width:calc((100% - var(--gap)*(var(--spv) - 1))/var(--spv))}
```

Slides-per-view en custom property inline : `--spv:2.2` mobile, `3` ≥768,
`5` ≥1024. **Le `.2` est délibéré** : le demi-carte qui dépasse est ce qui
signale que ça défile. À reprendre tel quel.

Ajouter les flèches prev/next ≥768 px uniquement.

## 3. Passer de 3 voyants à N rails thématiques

Eux : 8 rails (« Top 10 des meilleurs voyants », « Les plus consultés »,
« Les nouveaux », puis par métier : Astrologues, Médiums, Voyants,
Numérologues, Tarologues).

Nous n'avons que **8 voyants** dans `/api/voyants`, donc on ne peut pas faire 8
rails de 10. **Décision produit requise** (voir §7) : soit on élargit le
catalogue côté fournisseur, soit on fait 2–3 rails thématiques sur le même
petit pool, avec doublons assumés — eux dupliquent aussi le même voyant dans
plusieurs rails.

Rails réalistes à catalogue constant : « Disponibles maintenant »,
« Spécialistes reconquête », « Les mieux notés ».

## 4. Lazy-mount des rails sous la ligne de flottaison

Chez eux, 4 rails / 33 cartes au chargement, 8 rails / 59 après scroll.
À reproduire avec un IntersectionObserver.

⚠️ **Le composant est monté dans le layout ou en haut de page : tout hook doit
être appelé inconditionnellement, avant tout `return null`.** Une violation des
Rules of Hooks dans un composant de layout a mis tout le site hors ligne le
2026-08-08 (`b833fa9`). `next build` ne l'attrape pas — voir §8.

## 5. Images

Eux : `next/image` + optimizer, AVIF, `q=85`, source distante avec un paramètre
`version={YYYY-MM-DD}` par voyant qui sert de cache-buster. **À copier.**

Leur erreur à **ne pas** copier : `srcset` en DPR (`w=640 1x, w=1080 2x`) sans
`sizes`. Une carte de 146 px télécharge un asset de 1080 px. Chez nous :
`sizes="(max-width:767px) 45vw, (max-width:1023px) 30vw, 20vw"`.

Autre erreur à ne pas copier : **toutes** leurs images sont `loading="lazy"`,
y compris le hero et le premier rail — pénalité LCP qu'ils s'infligent seuls.
Chez nous : `priority` sur les 2–3 premières cartes, `lazy` ensuite.

Réserver la place (hauteur fixe) pour garder le CLS à zéro, comme eux.

## 6. API — adopter la projection de champs

Leur `/api/psychics?wantedProperties=["id","name","chatStatus","rating",…]`
renvoie exactement les champs demandés. Bon pattern : une seule route, plusieurs
poids de payload selon l'écran.

Shape utile à répliquer côté carte :

```json
{ "id":"35409", "name":"Fares", "rating":4.7,
  "pictureUrl":"…?voyant_id=35409&version=2025-10-22",
  "domain":"Conseiller en gestion de conflits",
  "chatStatus":2,                  // 2 disponible, 1 occupé
  "baseChatCreditPrice":4, "chatCreditPrice":4,   // 2e prix barré si <
  "commentsNumber":113,
  "grade":{"enum":"PREMIUM","title":"Premium","color":"#D3B04F"} }
```

Notre `/api/voyants` expose déjà `ID, VOYANT, STAR, EVAL, CONSULT, ETAT, TEL,
CHAT, MAIL, T_TEL…`. Le mapping est direct : `ETAT==='1'` ↔ `chatStatus:2`,
`STAR` ↔ `rating`, `EVAL` ↔ `commentsNumber`.

Rendu : **RSC d'abord** (première peinture sans JS, comme eux), puis
rafraîchissement client du statut. Aujourd'hui nos cartes sont 100 % client via
`useVoyants()` : si l'API ne répond pas ou qu'aucun voyant n'est en ligne, la
home n'affiche **aucun** voyant. C'est un point de fragilité à corriger.

## 7. Filtres rapides

Barre collante avec 2 cases : « Disponible », « Premium ». 100 % client,
zéro requête réseau, pas de changement d'URL. Simple et efficace — à reprendre.
(Leur prédicat est buggé : cocher « Disponible » passe de 59 à 38 cartes mais
laisse des « Occupé » dans le Top 10. Faire mieux : filtre strict.)

## 8. Prérequis qualité — à faire AVANT ce chantier

Le repo n'a **aucune config ESLint** ; `npm run lint` tombe sur le setup
interactif de `next lint` et ne s'exécute jamais. `next build` ne vérifie que
les types. C'est exactement le trou par lequel est passée la panne du 8 août.

Installer `eslint` + `eslint-plugin-react-hooks` et activer `rules-of-hooks`
avant de toucher à des composants montés haut dans l'arbre.

---

## Critères d'acceptation

- Carte voyant ≤ 300 px de haut en mobile, ≤ 380 px en desktop
- Home ≤ 9 000 px en mobile (aujourd'hui 16 122)
- Au moins 1 voyant visible **au-dessus de la ligne de flottaison** (aujourd'hui : écran 3)
- ≥ 12 voyants atteignables sans quitter la home (aujourd'hui : 3)
- Aucun décalage de mise en page (CLS ≈ 0) sur la section voyants
- Poids images de la première vue < 200 Ko
- Vérification sur **build de production** (`npm run build && npm run start`),
  pas sur dev server : console vide, hydratation OK, aucune régression sur
  `/lp/*`

## Angle mort relevé chez eux

Leur CTA « Tchatter » fait `router.push('/conversations')`, qui pour un visiteur
non connecté renvoie immédiatement sur `/`. Le CTA principal de leur home est
donc **un aller-retour sans effet** hors connexion. Notre modèle (lien affilié
direct, sans inscription) est structurellement meilleur sur ce point : ne pas
le sacrifier en copiant leur parcours.
