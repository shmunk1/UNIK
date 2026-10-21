# UNIK — contexte du projet

Site web d'un projet scolaire : un stand mode (défilés, animations, créateurs). Il présente les évènements à venir ET passés (archives). Il contient aussi le portfolio noté de l'année du projet.
Public : visiteurs, créateurs et mannequins à recruter, partenaires, école.
Équipe technique : 2 personnes qui travaillent en parallèle. Le propriétaire du dépôt débute en code : explique simplement, sans jargon inutile.

## Choix techniques (décidés, ne pas les remettre en cause)
- HTML / CSS / JS pur. Pas de framework, pas de bundler.
- Le contenu n'est jamais écrit en dur dans les pages : il vit dans `js/data/` (`events.js`, `creators.js`, et plus tard `timeline.js`, `team.js`, `editions.js`, `stats.js`). Ajouter un contenu = ajouter un bloc de données.
- Un évènement passe tout seul de « À venir » à « Archives » selon sa date. Ne pas gérer ça à la main.
- Le site doit marcher en ouvrant `index.html` directement, sans serveur. Donc pas de `fetch` sur des fichiers JSON locaux.
- Mobile d'abord, accessible (contrastes, texte alternatif sur les images, navigation au clavier).
- Hébergement prévu : GitHub Pages.

## Structure du site
Voir `docs/arborescence.md` (v1, en cours de validation). Un seul site, deux zones : Vitrine et « Le projet » (portfolio). Ne pas créer de pages hors de cette liste sans demander.
Les wireframes et maquettes viennent des designers digitaux : ne pas inventer un design qui les contredit. En attendant, applique la charte ci-dessous.

## Charte graphique (obligatoire)
Couleurs :
- Noir `#000000`, blanc `#FFFFFF`, bordeaux `#92172B` (couleur signature).
- Chrome = texture d'accent (`#B2B2B2` en référence), jamais une couleur de fond principale.
- Déclinaisons d'opacité 80 / 60 / 40 % du noir et du bordeaux, réservées aux éléments graphiques (fonds, zones secondaires), jamais au logo.
Polices (Google Fonts) :
- Archivo Black : titres, chiffres, mots-clés. Jamais pour un texte long.
- Poppins : paragraphes, sous-titres, légendes, infos pratiques.
Logo :
- Toujours en couleur pleine (noir, blanc ou bordeaux), jamais déformé, jamais d'autre couleur.
- Version chrome = secondaire, usage ponctuel.
- Monogramme U pour favicon et petits formats.
Interdits : chrome sur blanc, chrome sur bordeaux, logo blanc sur chrome, tout contraste faible.
Matières (chrome, zèbre, cuir, dentelle) : décoratives et ponctuelles (textures, découpes, détails dans un titre). Ne pas en abuser.
Motif récurrent : découpe diagonale inspirée du K du logo.

## Règles de travail Git
- Ne jamais commiter sur `main`. Une branche par tâche (`git switch -c nom-de-la-tache`), tâche courte.
- Toujours `git switch main` puis `git pull` avant de créer une branche.
- Une tâche = une pull request relue par l'autre personne avant fusion.
- Répartition des fichiers pour éviter les conflits : une personne sur le design (`css/`, structure HTML), l'autre sur le contenu et la logique (`js/`, `data/`). Prévenir avant de toucher un fichier de l'autre.
- Petits commits, messages clairs en français.

## Façon de travailler avec le propriétaire
- Une chose à la fois : on fait, on teste, on passe à la suite. Pas dix améliorations d'un coup.
- Modifie directement les fichiers, ne montre pas le code en disant « tu pourrais faire ».
- Après une modification, relis les fichiers impactés et vérifie que les pages marchent encore.
- Réponses courtes. Si tu n'es pas sûr d'un choix qui engage la suite, dis-le avant de coder.
- Ne jamais inventer de contenu réel (noms de créateurs, dates, chiffres). Utilise des exemples clairement marqués « à remplacer ».
