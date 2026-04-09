// Redirect to login if not authenticated
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'index.html';
}

const detailContent = document.getElementById('detailContent');

// Retrieve character ID from query parameters
const params = new URLSearchParams(window.location.search);
const characterId = params.get('id');

/**
 * Fetch character details by ID from the API
 * @param {string} id - The character's unique ID
 */
async function fetchCharacterDetails(id) {
    if (!id) {
        detailContent.innerHTML = '<p>Character not found. <a href="dashboard.html">Return to Dashboard</a></p>';
        return;
    }

    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        
        if (data && data.name) {
            renderCharacterDetail(data);
        } else {
            detailContent.innerHTML = '<p>Error loading character details. Character might not exist.</p>';
        }
    } catch (error) {
        console.error('Network or API Error:', error);
        detailContent.innerHTML = '<p>Failed to connect to the character service.</p>';
    }
}

/**
 * Build the character detail view in the DOM
 * @param {Object} character - Data object for a single character
 */
function renderCharacterDetail(character) {
    detailContent.innerHTML = `
        <div class="detail-container">
            <div class="detail-img">
                <img src="${character.image}" alt="${character.name}">
            </div>
            <div class="detail-content">
                <h2>${character.name}</h2>
                <p><span class="label">Status:</span> ${character.status}</p>
                <p><span class="label">Species:</span> ${character.species}</p>
                <p><span class="label">Gender:</span> ${character.gender}</p>
                <p><span class="label">Origin:</span> ${character.origin.name}</p>
                <p><span class="label">Location:</span> ${character.location.name}</p>
            </div>
        </div>
    `;
}

// Initial fetch based on character ID
fetchCharacterDetails(characterId);
