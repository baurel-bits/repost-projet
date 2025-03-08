let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent; // Use textContent

        switch (buttonText) {
            case '=':
                try {
                    string = eval(string); // Use try...catch for errors
                    input.value = string;
                } catch (error) {
                    input.value = "Error"; // Display error message
                    string = ""; // Reset string
                }
                break;
            case 'AC':
                string = "";
                input.value = string;
                break;
            case 'DEL':
                string = string.slice(0, -1); // More modern way to remove last char
                input.value = string;
                break;
            default:
                string += buttonText;
                input.value = string;
        }
    });
});