let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button'); // utilisez querySelectorAll pour récupérer tous les boutons

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
        string = eval(string);
        input.value = string;
    } else if (e.target.innerHTML == 'AC') {
        string = "";
        input.value = string;
    } else if (e.target.innerHTML == 'DEL') { // corrigez la syntaxe
      string = string.substring(0, string.length - 1); // corrigez la syntaxe
        input.value = string;
    } else {
        string += e.target.innerHTML;
        input.value = string;
    }
    });
});
