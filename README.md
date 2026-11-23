# StudyHub ISET Nabeul

Site statique prêt pour GitHub Pages, conçu pour les étudiants de 1ère année Informatique Technologique.

## Lancer le site
- Ouvrir `index.html` dans un navigateur pour tester l'interface.
- Pour publier : créer un dépôt GitHub, envoyer `index.html`, `style.css`, `app.js` et ce README.
- Dans GitHub : **Settings → Pages → Deploy from a branch → main → / (root)**.

## Fonctionnalités incluses
- Tableau de bord et navigation responsive.
- Matières : Digital Skills, Fundamental IT, Système électrique, Algorithmique & C, Système d'exploitation, HTML/CSS et TP ISET.
- Résumés introductifs intégrés, recherche et filtre.
- Lecture vocale des résumés via la synthèse vocale du navigateur (la voix disponible dépend de l'appareil).
- Liens directs vers les 10 classes Google Classroom fournies.
- Import local de fichiers PDF et ouverture des documents dans le navigateur.

## Limites importantes
- L'import PDF de cette version est local au navigateur : les fichiers ne sont pas envoyés à GitHub et ne sont pas partagés entre appareils.
- Les liens Classroom ouvrent les classes, mais ne synchronisent pas automatiquement les fichiers.
- Les cartes vidéo sont des emplacements de ressources : aucune vidéo IA n'est fabriquée automatiquement par cette version.
- Les résumés fournis sont des exemples introductifs, pas les résumés des documents de cours officiels.

## Pour une vraie synchronisation Google Classroom
Il faut ajouter un backend sécurisé (par exemple Google Cloud Run), activer Google Classroom API et Google Drive API dans Google Cloud, configurer OAuth 2.0, définir les scopes nécessaires et demander l'autorisation de l'utilisateur. Ne jamais mettre un client secret ou une clé privée dans le code publié sur GitHub Pages.

## Génération IA de résumés, podcasts et vidéos
Une version complète doit envoyer les PDF au backend, extraire le texte, générer le résumé, produire l'audio avec un service TTS, puis créer une vidéo avec un service vidéo. Les clés API doivent rester côté serveur, dans des variables d'environnement ou un gestionnaire de secrets.
# portfolio-numerique
