// Check if user is logged in
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'index.html';
}

const characterGrid = document.getElementById('characterGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

/**
 * Fetch characters from the Rick and Morty API
 * @param {string} name - Optional name filter for characters
 */
async function fetchCharacters(name = '') {
    const url = name ? `https://rickandmortyapi.com/api/character/?name=${name}` : 'https://rickandmortyapi.com/api/character';
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.results) {
            renderCharacters(data.results);
        } else {
            characterGrid.innerHTML = '<p>No characters found.</p>';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        characterGrid.innerHTML = '<p>Error loading characters. Please try again later.</p>';
    }
}

/**
 * Render character list to the grid in the DOM
 * @param {Array} characters - List of character objects
 */
function renderCharacters(characters) {
    characterGrid.innerHTML = '';
    
    characters.forEach(char => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${char.image}" alt="${char.name}">
            <div class="card-info">
                <h3>${char.name}</h3>
            </div>
        `;
        
        // Add click event to navigate to detail page
        card.addEventListener('click', () => {
            window.location.href = `detail.html?id=${char.id}`;
        });
        
        characterGrid.appendChild(card);
    });
}

// Initial data fetch
fetchCharacters();

// Search functionality on button click
searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    fetchCharacters(searchTerm);
});

// Search functionality on Enter key press
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value.trim();
        fetchCharacters(searchTerm);
    }
});
