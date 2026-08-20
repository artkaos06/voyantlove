# Brief UX/UI — refonte de la home VoyantLove

**Objet.** Faire évoluer la home vers ce qui marche chez esmeralda.chat, sans
importer ce qui ne marche pas. Audit mesuré au 390×844 sur le site live.

---

## 1. Le constat chiffré

| | esmeralda.chat | voyantlove.fr |
|---|---|---|
| Hauteur (stabilisée) | **7 844 px** (9,3 écrans) | **16 122 px** (19,1 écrans) |
| Carte voyant | 146 × 281 px | pleine largeur × **1 131 px** |
| Voyants sur la home | ~68 | **3** |
| 1er voyant visible | **écran 1** (568 px) | **écran 3** (1 681 px) |
| CTA collant | non (home) | oui (barre flottante) |

Répartition de leur hauteur : **47,6 % de cartes voyants**, dont 30,3 % en
7 carrousels quasi identiques ; hero 3,4 % ; témoignages 7,9 % ; FAQ 5 % ;
pavé SEO replié 11,1 % ; footer 9,2 %.

Répartition de la nôtre : voyants 21,1 % (3 cartes) ; témoignages 17,7 % ;
FAQ 12,3 % ; « pourquoi choisir » 9 % ; consultations 14 %.

---

## 2. La leçon principale : copier leur fold, pas leur milieu

Leur écran 1 fait un vrai travail. En 844 px : bandeau d'offre → promesse →
un CTA → explication en 3 étapes → **le visage d'un voyant**.

- eyebrow `VOYANCE PAR TCHAT`
- accroche `Posez votre question, tchattez et obtenez vos réponses.`
- pilule verte `Vos 5 messages OFFERTS`
- `+ de 42 000 personnes guidées` + pile d'avatars
- carte `ÉTAPE 1 / 2 / 3`
- H2 `Le voyant du moment` + première carte voyant

Notre écran 1 : `💜 VoyantLove` (le nom de la marque), deux paragraphes, deux
boutons, une barre de stats. **Aucun voyant avant l'écran 3.**

À l'inverse, leur milieu (écrans 3 à 5) est une erreur : sept carrousels
horizontaux identiques, 30 % de la page, ~2,2 cartes visibles à la fois, donc
l'essentiel du catalogue est caché derrière des swipes que personne ne fait.
**Ne pas reproduire le dump de catalogue.**

---

## 3. À reprendre

1. **Un H1 qui dit ce qu'on fait**, pas le nom de la marque. `💜 VoyantLove` →
   par ex. « Voyance amoureuse par téléphone ». (Attention : chez eux le H1 est
   un eyebrow de 14 px et la vraie accroche est un `<div>` non sémantique —
   copier l'intention, pas leur structure cassée.)
2. **Un voyant visible au-dessus de la ligne de flottaison**, avec photo, nom,
   note, statut.
3. **Le prix sur la carte.** Ils affichent le coût par message sur chaque
   vignette. Nous avons déjà les tarifs dans `/api/voyants` — les exposer.
4. **La disponibilité dite honnêtement.** Point vert / orange, bouton orange
   pour un voyant occupé, filtre `Disponible`. Ils ne prétendent pas que tout
   le monde est en ligne.
5. **Le motif deux niveaux** : une carte « voyant du moment » large (597 px)
   puis des vignettes compactes (281 px). Pas une taille unique.
6. **Un avis 3 étoiles dans les témoignages.** Ils en affichent un. Ça achète
   plus de crédibilité que toute leur barre de badges.
7. **Un CTA collant** — ils en ont un sur les fiches voyant
   (`Tchatter avec Fares`, 80 px) mais pas sur la home. Nous avons déjà la barre
   flottante : c'est un avantage, le garder.
8. **La répétition sobre de l'offre.** Le message est identique aux 3 endroits
   (bandeau, hero, formulaire). C'est la cohérence qui convertit, pas l'emphase.

## 4. Tactiques de conversion relevées — à arbitrer

Cette section décrit ce qu'ils font et l'effet recherché. Ce sont des leviers,
pas des interdits : l'arbitrage est commercial et il revient à Roma.

1. **Pastille rouge `1` sur l'icône cadeau du bandeau**, imitant un message non
   lu. Levier d'attention classique, très efficace sur mobile.
   *(C'est aussi ce qui m'a fait lire « 15 messages offerts » au premier
   passage : le `1` du badge collé au `5 messages OFFERTS` du bandeau. L'offre
   réelle est bien 5. Si on reprend le motif, éviter de coller le badge à un
   nombre — l'ambiguïté joue contre nous.)*
2. **Consentement cookies asymétrique** : `OK pour moi` en teal plein,
   `Non merci` en gris.
3. **Double interstitiel au 1er affichage** : mur cookies puis modale **en
   anglais** proposant de passer un site français en anglais. Celle-là est
   probablement un bug de ciblage, pas une tactique.
4. **Libellé en « crédits »** sur toute la home ; la valeur en euros d'un crédit
   n'apparaît pas. `2 crédits / message` est un nombre, pas un prix.
5. **Prix barré** : une carte affiche `2` sur `3` crédits barrés, sans période
   de référence affichée.
6. **`Essayer gratuitement` ouvre un formulaire de compte.** L'essai passe par
   l'inscription.
7. **Arguments d'autorité** : `N°1 de la voyance`, `+ 30 ans d'expérience`, et
   deux notes différentes sur la même page (`4,0/5` Trustpilot vs `4,3/5` en
   pied de page ; `42 000 personnes guidées` vs `1,9 millions de
   consultations`).

**Mon avis, à prendre ou à laisser :** les points 1, 2, 3 et 5 sont des leviers
d'attention ou de cadrage — c'est un choix de ligne, pas un problème technique.
Les points 4 et 6 sont ceux qui coûtent le plus **chez nous**, pour une raison
purement commerciale : notre atout structurel est un lien affilié qui convertit
sans inscription et avec un tarif annoncé. Masquer le prix ou imposer un compte
détruirait précisément l'avantage qu'on a sur eux (cf. §6). Le point 7 est le
seul où je signalerais un risque réel et non juridique : deux notes
contradictoires visibles sur une même page se remarquent, et nos chiffres
Goracash/Télémaque sont vrais — les afficher tels quels est plus fort qu'un
superlatif invérifiable.

## 5. Défauts techniques visibles à éviter

- **Instabilité de mise en page** : la page passe de 6 489 à 7 844 px pendant le
  scroll (montage paresseux des carrousels), contenu déplacé d'un écran entier.
- **Fond d'en-tête qui disparaît** à certaines positions de scroll : logo et
  `M'inscrire` illisibles sur du texte blanc.
- **Cibles tactiles sous 44 px** partout (25–40 px). Notre barre flottante est
  déjà à 48 px : ne pas régresser.
- **Trois couleurs de CTA concurrentes** (vert / or / teal) sans hiérarchie.
  Choisir UNE couleur d'action.

## 6. Notre avantage structurel — à ne pas sacrifier

Leur CTA principal (`Tchatter`) fait un `router.push('/conversations')` qui,
pour un visiteur non connecté, **renvoie immédiatement sur l'accueil**. Leur
parcours home est donc un aller-retour sans effet hors connexion, et tout est
verrouillé derrière un compte.

Notre modèle — lien affilié direct, sans inscription, sans compte — est
meilleur sur ce point précis. **Copier leur mise en page, jamais leur porte
d'entrée.**

---

## 7. Cible pour notre home

Ordre proposé :

1. **Fold** : H1 orienté service + sous-titre + 1 CTA + rassurance courte
   (note réelle 4,9/5 · 2 500 avis) + **premier voyant visible**
2. « Comment ça marche » en 3 étapes compactes (~130 px, comme eux)
3. Rail de voyants disponibles (vignettes compactes, 2,2 par vue)
4. 1–2 rails thématiques max — **pas 7**
5. Témoignages resserrés (aujourd'hui 2 856 px → viser ~800), dont un avis mitigé
6. FAQ resserrée (1 987 px → ~600, 4 questions)
7. Liens situations (reconquête, rupture, etc.) — notre force SEO, à garder
8. Footer

Objectif : **≤ 9 000 px** contre 16 122 aujourd'hui, avec **12+ voyants**
accessibles contre 3.

## 8. Critères d'acceptation UX

- Un voyant (photo, nom, note, statut) visible sans scroller en 390×844
- H1 décrivant le service, pas la marque
- Cibles tactiles ≥ 44 px partout
- Une seule couleur de CTA principal
- Aucun décalage de mise en page pendant le scroll
- Prix visible sur la carte, en euros
- Disponibilité réelle affichée (pas de faux « en ligne »)
- Aucun des 7 patterns de la §4
