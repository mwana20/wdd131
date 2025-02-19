// Global variables
const moviesPerPage = 20;
let currentPage = 1;
let currentCategory = 'all';
let allMovies = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Get the current page filename
    const currentPageFilename = window.location.pathname.split('/').pop();

    // Set the current category based on the page
    if (currentPageFilename === 'thriller.html') {
        currentCategory = 'thriller';
    } else if (currentPageFilename === 'action.html') {
        currentCategory = 'action';
    } else if (currentPageFilename === 'love.html') {
        currentCategory = 'love';
    } else if (currentPageFilename === 'faith.html') {
        currentCategory = 'faith';
    } else if (currentPageFilename === 'legendary.html') {
        currentCategory = 'legendary';
    }

    // Load movies from JSON
    loadMovies();
});

// Function to load movies from JSON file
async function loadMovies() {
    try {
        let jsonFile = `data/${currentCategory}.json`; // Use category name to determine JSON file

        console.log(`Fetching JSON file: ${jsonFile}`);

        const response = await fetch(jsonFile);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data);

        allMovies = data.items || [];
        renderMovies();
        setupPagination();
    } catch (error) {
        console.error('Error loading movies:', error);
        document.getElementById('movie-container').innerHTML = `
            <div class="error-message">
                <p>Sorry, we couldn't load the movies. Please try again later.</p>
                <p>Error: ${error.message}</p>
            </div>
        `;
    }
}

// Render movies on the page
function renderMovies() {
    const container = document.getElementById('movie-container');

    // Calculate start and end indices for pagination
    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = Math.min(startIndex + moviesPerPage, allMovies.length);

    // Get the current page of movies
    const currentMovies = allMovies.slice(startIndex, endIndex);

    if (currentMovies.length === 0) {
        container.innerHTML = '<p>No movies found in this category.</p>';
        return;
    }

    // Create the movie grid
    const movieGrid = document.createElement('div');
    movieGrid.className = 'movie-grid';

    // Add each movie card
    currentMovies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        movieGrid.appendChild(movieCard);
    });

    // Replace the container content
    container.innerHTML = '';
    container.appendChild(movieGrid);
}

// Create a single movie card
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';

    // Use placeholder image if missing
    const imageUrl = movie.image || 'images/placeholder.jpg';

    card.innerHTML = `
        <div class="movie-poster">
            <img src="${imageUrl}" alt="${movie.title} Poster" onerror="this.src='images/placeholder.jpg'">
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-year">${movie.year}</p>
            <p class="movie-description">${movie.description}</p>
            <p class="movie-price">$${movie.price ? movie.price.toFixed(2) : 'N/A'}</p>
            <div class="action-buttons">
                <button class="btn btn-primary">Add to Cart</button>
                <button class="btn btn-secondary">Details</button>
            </div>
        </div>
    `;

    return card;
}

// Set up pagination controls
function setupPagination() {
    const paginationContainer = document.getElementById('pagination');
    const totalPages = Math.ceil(allMovies.length / moviesPerPage);

    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }

    let paginationHTML = '';

    // Previous button
    paginationHTML += `
        <button onclick="changePage(${Math.max(1, currentPage - 1)})" 
                ${currentPage === 1 ? 'disabled' : ''}>
            &laquo; Previous
        </button>
    `;

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <button onclick="changePage(${i})" 
                    class="${currentPage === i ? 'active' : ''}">
                ${i}
            </button>
        `;
    }

    // Next button
    paginationHTML += `
        <button onclick="changePage(${Math.min(totalPages, currentPage + 1)})" 
                ${currentPage === totalPages ? 'disabled' : ''}>
            Next &raquo;
        </button>
    `;

    paginationContainer.innerHTML = paginationHTML;
}

// Change to a specific page
function changePage(pageNumber) {
    currentPage = pageNumber;
    renderMovies();
    setupPagination();

    // Scroll to the top of the movie container
    document.getElementById('movie-container').scrollIntoView({ behavior: 'smooth' });
}
