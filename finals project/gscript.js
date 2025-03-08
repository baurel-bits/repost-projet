function getPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 16;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length); // Use chars.length
        password += chars.charAt(randomNumber);
    }

    document.getElementById('password').value = password;

    // Change button style (better to use CSS classes)
    document.getElementById('copy').classList.add('copied'); // Add a class
}

function copyMdp() {
    const passwordInput = document.getElementById('password');

    if (passwordInput.value.length === 16) { // Use === for strict equality
        passwordInput.select();
        alert('Mot de passe copié !');
        passwordInput.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(passwordInput.value); // Modern copy method

        // Change button style (better to use CSS classes)
        document.getElementById('copy').classList.remove('copied'); // Remove the class

        
    } else {
        alert('Veuillez générer un mot de passe');
    }
}

// Generate a password on load (optional)
getPassword();
