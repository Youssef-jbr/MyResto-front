==================================== SITE MY RESTO PROCEDURE D'INSTALLATION ==================================



------------------------ I. Partie fonctionelle : ----------------------------------

	1. Aller sur myresto.fr

	POUR LE GÉRANT :

		1. Se connecter avec les identifiants du gérant créer en amont 
		( email :  jeandupont@gmail.com | password )

		2. Pour consulter les commandes éffectuer par vos clients, rendez-vous dans l'espace "ADMINISTRATION"
		dans la barre de navigation en haut de votre écran.

	POUR VOS CLIENTS : 

		1. Les clients peuvent éffectuer des commandes en cliquant sur "JE COMMANDE !", ils peuvent choisir
		des produits ou des menus et composé leur commande de cet façon en cliquant juste sur les cartes.

		2. Dès qu'ils ont terminé leurs commande ils cliquent sur "PASSER AU PAIEMENT", cela leurs donnera
		un aperçu de leur commande ainsi que le total du prix à payer.

		3. Ils doivent ensuite remplir TOUS les champs concernant leur carte de crédit et cliquer sur
		"VALIDER" pour pouvoir passé leur commande.

		
------------------------ II. Partie technique: ----------------------------------
	PRÉREQUIS :
			1. Avoir un serveur permettant d'héberger deux solutions.
			2. Avoir installer git
			3. Avoir installer composer
			4. Avoir installer NodeJS
			5. Installer une base de données relationnelle sur le serveur.
		
	-- PARTIE BACKEND :

	1. Faites un "git clone https://github.com/KevinCeyland/ApiMyResto" afin de récupérer l'API votre serveur et attribué lui un nom de domaine. (ex : https://api.myresto.fr).

	2. Créer une base de données avec le nom "myresto" par exemple.

	3. Créer le fichier .env de Laravel avec la commande dans le terminal : "cp .env.example .env".

	7. Changer les données du fichier .env situé à la racine du projet avec les informations de la base de données fraichement créer.

	5. Utiliser la commande de Laravel grâce au terminal de commande dans le projet : "php artisan migrate" pour créer les tables dans la base de données "myresto"

	6. Faites la commande "php artisan key:generate" pour créer une clef dans l'API Laravel permettant d'utiliser celle-ci.

	7. Faites la commande "composer update" pour mettre à jour tous les packages installé dans le projet.

	8. Faites la commande "php artisan jwt:secret" afin de créer une clef pour le JSON Web Token pour l'authentification.


	-- PARTIE FRONTEND : 

	1. Faites un "git clone "https://github.com/KevinCeyland/VueMyResto" afin de récupérer la partie front également sur votre serveur 
	avec un nom de domaine différent de celui de l'api, il s'agit du lien accessible par les clients (ex: https://myresto.fr).

	2. Faites la commande "npm install" pour installer les librairies Javascript utilisées dans le projet.

	3. Faites un "npm run build" pour lancer la compilation du projet et pouvoir être accessible dans votre navigateur.




------------------------ IIi. Assistance: ----------------------------------

Si besoin vous pouvez retrouver le code source du site web sur les adresses git suivantes :

- https://github.com/KevinCeyland/ApiMyResto
- https://github.com/KevinCeyland/VueMyResto


Pour toutes informations supplémentaire veuillez nous contactez à l'adresse suivante : partiel@ensitech.eu




==================================== FIN ==================================







