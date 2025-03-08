const MAX_NOMBRE = 11;
const scoreElement = document.querySelector('.score');

let random1, random2, score = 0;

function genererNombres() {
  random1 = Math.random() * MAX_NOMBRE << 0;
  random2 = Math.random() * MAX_NOMBRE << 0;
    document.querySelector('.nb1').innerHTML = random1;
    document.querySelector('.nb2').innerHTML = random2;
}

function verifier() {
    const reponse = document.querySelector('.res').value;
    if (random1 + random2 == reponse) {
    afficherMessage('Bien joué!');
    score++;
    scoreElement.innerHTML = `Score: ${score}`;
    genererNombres();
    } else {
    afficherMessage('Dommage!');
    }
}

function afficherMessage(message) {
    const messageElement = document.querySelector('.Message');
    messageElement.style.background = message === 'Bien joué!' ? 'green' : 'red';
    messageElement.innerHTML = message;
}

genererNombres();