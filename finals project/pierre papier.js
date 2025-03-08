const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur'); 
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');

let choixUtilisateur;
let choixOrdinateur;
let resultat;

// Événement 'click' sur les boutons
choixPossibles.forEach(choix => choix.addEventListener('click', (e) => {

    // Récupération de l'ID du bouton cliqué
    choixUtilisateur = e.target.id;

    // Ajout de l'image correspondant au choix de l'utilisateur
    contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisateur}.png" alt="${choixUtilisateur}">`; // Template literal et alt

    genererChoixOrdinateur();
    determinerGagnant(); // Appel de la fonction pour déterminer le gagnant
}));

// Fonction pour générer le choix de l'ordinateur
function genererChoixOrdinateur() {
    const random = Math.floor(Math.random() * 3); // Génère un nombre entre 0 et 2

    // Utilisation d'un tableau pour les choix
    const options = ["pierre", "papier", "ciseaux"];
    choixOrdinateur = options[random];

    // Ajout de l'image correspondant au choix de l'ordinateur
    contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.png" alt="${choixOrdinateur}">`; // Template literal et alt
}

// Fonction pour déterminer le gagnant
function determinerGagnant() {
    if (choixUtilisateur === choixOrdinateur) {
        resultat = "Égalité !";
    } else if (
        (choixUtilisateur === "pierre" && choixOrdinateur === "ciseaux") ||
        (choixUtilisateur === "papier" && choixOrdinateur === "pierre") ||
        (choixUtilisateur === "ciseaux" && choixOrdinateur === "papier")
    ) {
        resultat = "Vous avez gagné !";
    } else {
        resultat = "L'ordinateur a gagné !";
    }

    contenantResultat.textContent = resultat; // Utilisation de textContent pour le texte
}
