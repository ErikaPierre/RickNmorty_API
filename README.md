# Brandify - Test Technique

## Description

Ce projet est une application web front-end qui consomme l'API Rick and Morty pour afficher une liste paginée de personnages avec des filtres et une recherche par nom. Les utilisateurs peuvent également afficher les détails de chaque personnage. Ce projet a été réalisé en JavaScript avec React et Bootstrap pour la mise en page et le style, et il est déployable localement via Vite.

## Fonctionnalités

### Page d'Accueil (Index)

    - Liste des Personnages : Affichage des personnages de la série Rick and Morty avec pagination.
    - Filtrage : Boutons pour filtrer les personnages selon leur statut (Vivant, Mort).
    - Recherche : Champ de recherche pour filtrer les personnages par nom.
    - Affichage des Informations des Personnages :
        * Nom
        * Image
        * Statut (Vivant, Mort)
        * Page Détail du Personnage
    - Informations Affichées :
        * Image du personnage
        * Nom
        * Statut
        * Espèce, genre, lieu d'origine, dernière localisation
        * Liste des épisodes dans lesquels le personnage apparaît
    - Bouton de Retour : Retour à la page d'accueil.

### Fonctionnalités Techniques

    - Routage : Utilisation de react-router-dom pour la navigation entre la page d'accueil et les pages de détail sans rechargement complet.
    - Responsivité : L'application est entièrement responsive grâce à l'utilisation de Bootstrap.
    - Paginated API Calls : Appels API paginés pour charger les personnages et limiter la quantité de données chargées à chaque fois.

### Technologies Utilisées

    - React : Pour le développement de l'interface utilisateur.
    - React Router : Pour le routage des pages de détail des personnages.
    - Bootstrap : Pour la mise en page responsive et les composants préconstruits (boutons, cartes, etc.).
    - Rick and Morty API : API publique utilisée pour récupérer les données des personnages et des épisodes.
    - Vite : Serveur de développement pour lancer l'application localement.

## Prérequis

    - Node.js (version 14 ou supérieure) doit être installé sur votre machine.

## Installation

1 - Clonez ce dépôt sur votre machine locale : ` git clone <URL_DU_DEPOT_GITHUB>`

2 - Accédez au dossier du projet : `cd brandify-test`

3 - Installez les dépendances du projet : `npm install`

4 - Lancez l'application avec Vite : `npm run dev`

=> Ouvrir le navigateur et accédez à l'adresse indiquée dans la console (généralement http://localhost:5173).

## Ressources Utiles

- Documentation de l'API Rick and Morty
- React Documentation
- Bootstrap Documentation
- Déploiement

L'application est conçue pour être exécutée en local via le serveur de développement `Vite`.

## Contributeurs

Développé par Pierre Erika dans le cadre du test technique pour Brandify.
