// Check if logged in
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'index.html';
}

const detailContent = document.getElementById('detailContent');

// Extract the character ID from the URL
const params = new URLSearchParams(window.location.search);
const characterId = params.get('id');

async function fetchCharacterDetails(id) {
    if (!id) {
        detailContent.innerHTML = '<p>Character not found. <a href="dashboard.html">Go back</a></p>';
        return;
    }

    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        
        if (data && data.name) {
            renderCharacterDetail(data);
        } else {
            detailContent.innerHTML = '<p>Error loading character details.</p>';
        }
    } catch (error) {
        console.error('Error fetching character details:', error);
        detailContent.innerHTML = '<p>Failed to connect to API.</p>';
    }
}

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

// Initial fetch based on the ID in the URL
fetchCharacterDetails(characterId);
