const error = document.querySelector('.error_message');
const longLink = document.querySelector('.long_link');
const short = document.querySelector('.result');

async function shortLinkFunct() {
    // Verification input (more robust check)
    if (longLink.value.trim() === "") { // Check for empty or whitespace-only input
        error.textContent = "Veuillez remplir le champ !"; // Use textContent
        short.textContent = ""; // Clear previous result
        return; // Stop execution
    }

    error.textContent = ""; // Clear any previous error message

    // Connection API (replace with your actual API endpoint)
    const apiUrl = `YOUR_API_ENDPOINT_HERE?long_url=${encodeURIComponent(longLink.value)}`; // Construct URL with encoded long link

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Handle API errors
        }
        const data = await response.json();

        if (data.result && data.result.short_link) { // Check if data.result and data.result.short_link exist
            short.textContent = data.result.short_link;
        } else if (data.error) { //check for error message from the api
            short.textContent = data.error;
        }else{
             short.textContent = "Lien non valide ou erreur lors du raccourcissement."; // Generic error message
        }

    } catch (error) {
        console.error("Error fetching short link:", error);
        short.textContent = "Une erreur s'est produite. Veuillez réessayer plus tard."; // User-friendly error message
    }
}