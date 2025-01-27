# Introduction 

Cette application a été créée dans le cadre d'un test de compétences proposé par la société Ubudu.

C'est donc une application *Web* de quiz développée appelée "Quizzy" avec React, Node.js et MongoDB.

# Par où commencer ? 

Vous trouverez tout le nécessaire pour lancer l'application dans le dossier back-end, qui contient le serveur Node.js ainsi que le fichier `index.html` généré par React. 

Pour lancer l'application, allez dans le dossier back-end, puis executez les commandes suivantes :

`npm install`

puis

`npm run start`

Et voilà, il ne vous suffira qu'à ouvrir votre navigateur et taper l'url suivante :

`http://localhost:9000`

## Et la base de données ?

Pour éviter de vous demander d'installer MongoDB, j'ai préféré utiliser la version Cloud de MongoDB, à savoir MongoDB Atlas pour ce test.

Si vous avez un problème au niveau de la connexion MongoDB (le message "connecting to database..." en boucle), c'est surement dû à un bug connu de MongoDB Atlas, que vous pouvez résoudre en changeant le DNS principal de votre carte réseau, et en mettant le DNS public de Google, à savoir 8.8.8.8.