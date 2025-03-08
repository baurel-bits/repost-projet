// Déclarer les variables
let sp, btn_start, btn_stop, t, ms, s, mn, h;

// Fonction d'initialisation au chargement de la page
window.onload = function() {
    sp = document.querySelectorAll('span'); // Utilisez querySelectorAll pour récupérer tous les spans
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t = null; // Initialisez t à null
    ms = 0;
    s = 0;
    mn = 0;
    h = 0;

    // Ajoutez des gestionnaires d'événements directement ici (plus propre)
    btn_start.addEventListener('click', start);
    btn_stop.addEventListener('click', stop);
    document.getElementById('reset').addEventListener('click', reset); // Assurez-vous d'avoir un bouton avec l'id "reset"
};

// Fonction de mise à jour du chronomètre
function update_chrono() {
    ms++;
    if (ms === 10) {
        ms = 0; // Réinitialiser à 0, pas 1
        s++;
    }
    if (s === 60) {
        s = 0;
        mn++;
    }
    if (mn === 60) {
        mn = 0;
        h++;
    }

    // Insertion des valeurs dans les spans (plus efficace avec une boucle)
    const timeValues = [h, mn, s, ms];
    for (let i = 0; i < sp.length; i++) {
        sp[i].textContent = timeValues[i].toString().padStart(2, '0'); // Ajout de 0 pour les nombres < 10
    }
}

// Fonction du bouton start
function start() {
    if (!t) { // Empêcher de démarrer plusieurs fois
        t = setInterval(update_chrono, 100);
        btn_start.disabled = true;
        btn_stop.disabled = false; // Activer le bouton stop
    }
}

// Fonction du bouton stop
function stop() {
    clearInterval(t);
    t = null; // Réinitialiser t
    btn_start.disabled = false;
    btn_stop.disabled = false; // Désactiver le bouton stop
}

// Fonction du bouton reset
function reset() {
    clearInterval(t);
    t = null; // Réinitialiser t
    btn_start.disabled = false;
    btn_stop.disabled = true; // Désactiver le bouton stop
    ms = 0;
    s = 0;
    mn = 0;
    h = 0;

    // Insertion des valeurs dans les spans (plus efficace avec la boucle)
    const timeValues = [h, mn, s, ms];
    for (let i = 0; i < sp.length; i++) {
        sp[i].textContent = timeValues[i].toString().padStart(2, '0');
    }
}
