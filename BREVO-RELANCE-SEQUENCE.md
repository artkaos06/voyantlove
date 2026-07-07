# Brevo relance sequence — quiz email leads → Télémaque consultation

Leads captured by the quiz (`/lp/lecture-amour`) land in a Brevo list with
these attributes: `PRENOM`, `SIGNE_ASTRO`, `SITUATION`, `SOURCE`. Build a Brevo
**Automation** triggered on "contact added to list" that sends the emails below
on the schedule shown.

**Compliance:** divertissement + guidance, 18+, no guaranteed outcomes, no
health/death claims, no tariff claims (Télémaque handles tariff mentions on its
own pages). Brevo appends the unsubscribe link automatically — keep it.

**CTA / attribution:** each email's CTA is a phone call. Ideally reserve **one
dedicated Télémaque number for the email channel** (a 4th number) so email-driven
calls are attributable separately from the 3 native-angle numbers. Until then,
use one of your 3 numbers for email and accept the blend. Replace
`0XXXXXXXXX` below with the email-channel number.

Personalization tokens: `{{ contact.PRENOM }}`, `{{ contact.SIGNE_ASTRO }}`,
`{{ contact.SITUATION }}`.

---

## Email 0 — immediate (0 min): deliver the reading

**Subject:** {{ contact.PRENOM }}, votre lecture amoureuse est prête 🔮

Bonjour {{ contact.PRENOM }},

Merci d'avoir fait votre lecture. Voici ce que votre profil **{{ contact.SIGNE_ASTRO }}** met en lumière en ce moment.

Les personnes de votre signe traversent souvent une période où les sentiments deviennent plus intenses qu'ils n'y paraissent. Dans une situation « {{ contact.SITUATION }} », cela peut créer des signaux contradictoires : de l'espoir, des doutes, et beaucoup de questions restées sans réponse.

Ce que les astres suggèrent, c'est qu'un **tournant** se prépare — mais son sens dépend entièrement de votre histoire personnelle. Une lecture générale ne peut pas tout dire.

C'est exactement ce qu'une **consultation privée avec un voyant** permet d'éclaircir : poser VOTRE question, sur VOTRE situation, et recevoir une réponse claire.

👉 **Parlez à un voyant en privé, en toute confidentialité :**
📞 **0X XX XX XX XX**

À très vite,
L'équipe VoyantLove

*Divertissement et guidance personnelle. Réservé aux personnes majeures (18+).*

---

## Email 1 — J+1: deepen (build trust)

**Subject:** Ce que votre signe dit vraiment de vos sentiments, {{ contact.PRENOM }}

Bonjour {{ contact.PRENOM }},

Hier, votre lecture évoquait un tournant. Aujourd'hui, j'aimerais aller un peu plus loin.

Les {{ contact.SIGNE_ASTRO }} ont une manière bien à eux d'aimer : intensément, mais parfois en gardant leurs doutes pour eux. Résultat, on peut passer des semaines à se demander « et si… » sans jamais oser poser la vraie question.

Or c'est souvent **une seule réponse** qui débloque tout.

Nos voyants sont là pour ça — pas pour vous dire ce que vous voulez entendre, mais pour vous aider à y voir clair, avec bienveillance.

👉 **Une question vous pèse ? Posez-la maintenant :**
📞 **0X XX XX XX XX**

Prenez soin de vous,
L'équipe VoyantLove

*Divertissement et guidance personnelle. 18+.*

---

## Email 2 — J+3: social proof

**Subject:** « J'ai enfin osé poser la question qui me hantait »

Bonjour {{ contact.PRENOM }},

Beaucoup de femmes nous écrivent après leur première consultation. Ce qui revient le plus souvent, ce n'est pas « on m'a prédit l'avenir » — c'est **« j'ai enfin pu en parler à quelqu'un qui comprend »**.

> « Je tournais en rond depuis des mois. En 15 minutes, j'ai eu plus de clarté qu'en un an à ressasser. » — Sophie, 34 ans

Poser sa question à voix haute, à un voyant qui vous écoute vraiment, ça change souvent la façon de voir les choses.

Votre situation « {{ contact.SITUATION }} » mérite ce moment rien qu'à vous.

👉 **Votre consultation privée vous attend :**
📞 **0X XX XX XX XX**

L'équipe VoyantLove

*Témoignage authentique, prénom modifié. Divertissement et guidance, 18+.*

---

## Email 3 — J+5: clear offer push

**Subject:** {{ contact.PRENOM }}, votre voyant est disponible aujourd'hui

Bonjour {{ contact.PRENOM }},

Parfois, la seule chose qui manque pour avancer, c'est **une réponse claire à une seule question**.

Nos voyants experts sont disponibles **7j/7**. La consultation est **privée et confidentielle** — personne ne saura ce que vous demandez.

Vous êtes {{ contact.SIGNE_ASTRO }}, dans une période « {{ contact.SITUATION }} ». C'est précisément le genre de situation où un regard extérieur, sensible et expérimenté, fait toute la différence.

👉 **Appelez maintenant, un voyant vous répond :**
📞 **0X XX XX XX XX**

Avec toute notre attention,
L'équipe VoyantLove

*Divertissement et guidance personnelle. 18+.*

---

## Email 4 — J+9: re-engagement (last nudge)

**Subject:** Toujours sans réponse à votre question, {{ contact.PRENOM }} ?

Bonjour {{ contact.PRENOM }},

Je ne veux pas vous relancer inutilement — alors ce sera mon dernier message sur le sujet.

Si la question qui vous a amenée à faire votre lecture vous préoccupe toujours, sachez qu'un voyant peut vous aider à y voir clair, quand vous le souhaitez.

Et si tout va mieux : tant mieux, vraiment. 💫

👉 **Le jour où vous serez prête :**
📞 **0X XX XX XX XX**

Prenez soin de vous,
L'équipe VoyantLove

*Divertissement et guidance personnelle. 18+. Vous pouvez vous désinscrire à tout moment ci-dessous.*

---

## Notes for tuning

- **Send times:** morning (9–11h) or evening (19–21h) convert best for this audience.
- **Segment by SITUATION** later: « Après une rupture » wants reconquest/retour framing; « Célibataire » wants rencontre framing. Duplicate the sequence per segment once volume justifies it.
- **Watch:** Brevo open/click rates + the `/api/admin/quiz-funnel` readout (email capture rate) + Télémaque reversement on the email-channel number. That triangle tells you whether the list is monetizing.
