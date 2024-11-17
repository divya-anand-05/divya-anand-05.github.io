// Function to show the spinner
function showSpinner() {
    document.getElementById('spinner').style.display = 'block';
}

// Function to hide the spinner
function hideSpinner() {
    document.getElementById('spinner').style.display = 'none';
}

// Function to handle errors
function showError(message) {
    const errorElement = document.getElementById('error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Function to clear error messages
function clearError() {
    const errorElement = document.getElementById('error');
    errorElement.textContent = '';
    errorElement.style.display = 'none';
}

// Function to fetch a random joke from an API
async function fetchJoke() {
    try {
        showSpinner();
        clearError();
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        if (!response.ok) throw new Error('Failed to fetch joke');
        const data = await response.json();
        return `${data.setup} - ${data.punchline}`;
    } catch (error) {
        showError(error.message);
        return null;
    } finally {
        hideSpinner();
    }
}

// Event listener for the button
document.getElementById('generateJoke').addEventListener('click', async function() {
    const joke = await fetchJoke();
    if (joke) {
        document.getElementById('joke').textContent = joke;
    }
});
