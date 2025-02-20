// Common function to create movie cards
function createMovieCard(movie) {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    
    const movieImage = document.createElement('div');
    movieImage.className = 'movie-image';
    movieImage.style.backgroundImage = `url(${movie.imageUrl})`;
    
    const movieInfo = document.createElement('div');
    movieInfo.className = 'movie-info';
    
    const movieTitle = document.createElement('h3');
    movieTitle.textContent = movie.title;
    
    const movieMetadata = document.createElement('div');
    movieMetadata.className = 'movie-metadata';
    movieMetadata.textContent = `Released: ${movie.releaseDate}`;
    
    const moviePrice = document.createElement('div');
    moviePrice.className = 'movie-price';
    moviePrice.textContent = movie.price;
    
    const movieButtons = document.createElement('div');
    movieButtons.className = 'movie-buttons';
    
    const buyButton = document.createElement('a');
    buyButton.href = `buy.html?title=${encodeURIComponent(movie.title)}&price=${encodeURIComponent(movie.price)}`;
    buyButton.className = 'btn btn-buy';
    buyButton.textContent = 'Buy';
    
    const viewButton = document.createElement('a');
    viewButton.href = '#';
    viewButton.className = 'btn btn-view';
    viewButton.textContent = 'View';
    viewButton.addEventListener('click', function(e) {
        e.preventDefault();
        alert(movie.view);
    });
    
    movieButtons.appendChild(buyButton);
    movieButtons.appendChild(viewButton);
    
    movieInfo.appendChild(movieTitle);
    movieInfo.appendChild(movieMetadata);
    movieInfo.appendChild(moviePrice);
    movieInfo.appendChild(movieButtons);
    
    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieInfo);
    
    return movieCard;
}

// Load movies based on the current page
function loadMovies() {
    const currentPage = window.location.pathname.split('/').pop();
    let movieData = [];
    let gridId = '';
    
    switch(currentPage) {
        case 'faith.html':
            movieData = faithMoviesData;
            gridId = 'faith-movies-grid';
            break;
        case 'thriller.html':
            movieData = thrillerMoviesData;
            gridId = 'thriller-movies-grid';
            break;
        case 'action.html':
            movieData = actionMoviesData;
            gridId = 'action-movies-grid';
            break;
        default:
            // If on home page or other page, no movies to load
            return;
    }
    
    const movieGrid = document.getElementById(gridId);
    if (!movieGrid) return;
    
    movieData.forEach(movie => {
        const movieCard = createMovieCard(movie);
        movieGrid.appendChild(movieCard);
    });
}

// Movie data sets
const faithMoviesData = [
    {
        title: "The Miracle Maker",
        releaseDate: "March 15, 2021",
        price: "$12.99",
        imageUrl: "/api/placeholder/280/400?text=The+Miracle+Maker",
        view: "A heartwarming story of faith and miracles."
    },
    {
        title: "Journey of Faith",
        releaseDate: "June 8, 2022",
        price: "$14.99",
        imageUrl: "/api/placeholder/280/400?text=Journey+of+Faith",
        view: "An inspiring journey of faith and perseverance."
    },
    {
        title: "Divine Intervention",
        releaseDate: "September 22, 2023",
        price: "$15.99",
        imageUrl: "/api/placeholder/280/400?text=Divine+Intervention",
        view: "A miraculous story of divine intervention."
    },
    {
        title: "Steadfast Hope",
        releaseDate: "January 12, 2024",
        price: "$16.99",
        imageUrl: "/api/placeholder/280/400?text=Steadfast+Hope",
        view: "A story of unwavering hope and faith."
    },
    {
        title: "Redeeming Grace",
        releaseDate: "May 30, 2022",
        price: "$13.99",
        imageUrl: "/api/placeholder/280/400?text=Redeeming+Grace",
        view: "A tale of grace and redemption."
    },
    {
        title: "Faithful Journey",
        releaseDate: "November 8, 2021",
        price: "$12.99",
        imageUrl: "/api/placeholder/280/400?text=Faithful+Journey",
        view: "A journey of faith and trust."
    },
    {
        title: "Beyond Belief",
        releaseDate: "March 25, 2024",
        price: "$17.99",
        imageUrl: "/api/placeholder/280/400?text=Beyond+Belief",
        view: "A story that goes beyond belief."
    },
    {
        title: "Heaven's Light",
        releaseDate: "July 14, 2023",
        price: "$15.99",
        imageUrl: "/api/placeholder/280/400?text=Heaven's+Light",
        view: "A tale of divine light and guidance."
    },
    {
        title: "Walking by Faith",
        releaseDate: "October 5, 2022",
        price: "$14.99",
        imageUrl: "/api/placeholder/280/400?text=Walking+by+Faith",
        view: "A journey of walking by faith."
    },
    {
        title: "Divine Purpose",
        releaseDate: "February 18, 2023",
        price: "$15.99",
        imageUrl: "/api/placeholder/280/400?text=Divine+Purpose",
        view: "A story of finding divine purpose."
    },
    {
        title: "Answered Prayers",
        releaseDate: "August 9, 2021",
        price: "$13.99",
        imageUrl: "/api/placeholder/280/400?text=Answered+Prayers",
        view: "A tale of answered prayers."
    },
    {
        title: "The Chosen Path",
        releaseDate: "December 12, 2022",
        price: "$14.99",
        imageUrl: "/api/placeholder/280/400?text=The+Chosen+Path",
        view: "A journey on the chosen path."
    },
    {
        title: "Faith Unbroken",
        releaseDate: "April 16, 2024",
        price: "$16.99",
        imageUrl: "/api/placeholder/280/400?text=Faith+Unbroken",
        view: "A story of unbroken faith."
    },
    {
        title: "Guided Light",
        releaseDate: "September 3, 2021",
        price: "$12.99",
        imageUrl: "/api/placeholder/280/400?text=Guided+Light",
        view: "A tale of being guided by light."
    },
    {
        title: "Trust in Him",
        releaseDate: "November 27, 2023",
        price: "$15.99",
        imageUrl: "/api/placeholder/280/400?text=Trust+in+Him",
        view: "A story of trust in Him."
    },
    {
        title: "The Shepherd's Way",
        releaseDate: "January 30, 2022",
        price: "$14.99",
        imageUrl: "/api/placeholder/280/400?text=The+Shepherd's+Way",
        view: "A journey on the shepherd's way."
    },
    {
        title: "The Prayer Circle",
        releaseDate: "June 5, 2023",
        price: "$15.99",
        imageUrl: "/api/placeholder/280/400?text=The+Prayer+Circle",
        view: "A story of the prayer circle."
    },
    {
        title: "Finding Grace",
        releaseDate: "March 21, 2024",
        price: "$16.99",
        imageUrl: "/api/placeholder/280/400?text=Finding+Grace",
        view: "A journey of finding grace."
    },
    {
        title: "His Loving Hands",
        releaseDate: "August 19, 2022",
        price: "$13.99",
        imageUrl: "/api/placeholder/280/400?text=His+Loving+Hands",
        view: "A tale of His loving hands."
    },
    {
        title: "Miracle of Faith",
        releaseDate: "October 15, 2021",
        price: "$12.99",
        imageUrl: "/api/placeholder/280/400?text=Miracle+of+Faith",
        view: "A story of the miracle of faith."
    },
    {
        title: "Blessed Journey",
        releaseDate: "May 11, 2023",
        price: "$15.99",
        imageUrl: "/api/placeholder/280/400?text=Blessed+Journey",
        view: "A blessed journey of faith."
    }
];

const thrillerMoviesData = [
    {
        title: "Silent Whisper",
        releaseDate: "February 12, 2023",
        price: "$15.99",
        imageUrl: "/api/placeholder/280/400?text=Silent+Whisper",
        view: "A suspenseful thriller that will keep you on the edge of your seat."
    },
    {
        title: "The Last Moment",
        releaseDate: "July 23, 2022",
        price: "$14.99",
        imageUrl: "/api/placeholder/280/400?text=The+Last+Moment",
        view: "A gripping tale of suspense and mystery."
    },
    {
        title: "Dark Corridor",
        releaseDate: "October 31, 2023",
        price: "$16.99",
        imageUrl: "/api/placeholder/280/400?text=Dark+Corridor",
        view: "A dark and thrilling journey through a mysterious corridor."
    },
    {
        title: "Vanishing Point",
        releaseDate: "March 17, 2024",
        price: "$17.99",
        imageUrl: "/api/placeholder/280/400?text=Vanishing+Point",
        view: "A story of vanishing point."
    },
    {
        title: "Mind Games",
        releaseDate: "August 5, 2021",
        price: "$13.99",
        imageUrl: "/api/placeholder/280/400?text=Mind+Games",
        view: "A tale of mind games."
    },
    {
        title: "The Shadow Knows",
        releaseDate: "December 10, 2022",
        price: "$14.99",
        imageUrl: "/api/placeholder/280/400?text=The+Shadow+Knows",
        view: "A story of the shadow knows."
    },
    {
        title: "Deadly Secrets",
        releaseDate: "April 28, 2023",
        price: "$15.99",
        imageUrl: "/api/placeholder/280/400?text=Deadly+Secrets",
        view: "A tale of deadly secrets."
    },
    {
        title: "Midnight Caller",
        releaseDate: "September 9, 2021",
        price: "$13.99",
        imageUrl: "/api/placeholder/280/400?text=Midnight+Caller",
        view: "A story of the midnight caller."
    },
    {
        title: "The Perfect Alibi",
        releaseDate: "November 15, 2022",
        price: "$14.99",
        imageUrl: "/api/placeholder/280/400?text=The+Perfect+Alibi",
        view: "A tale of the perfect alibi."
    },
    {
        title: "Cold Case",
        releaseDate: "January 20, 2024",
        price: "$16.99",
        imageUrl: "/api/placeholder/280/400?text=Cold+Case",
        view: "A story of a cold case."
    },
    {
        title: "The Informant",
        releaseDate: "June 14, 2023",
        price: "$15.99",
        imageUrl: "/api/placeholder/280/400?text=The+Informant",
        view: "A tale of the informant."
    },
    {
        title: "Paranoia",
        releaseDate: "May 27, 2021",
        price: "$12.99",
        imageUrl: "/api/placeholder/280/400?text=Paranoia",
        view: "A story of paranoia."
    },
    {
        title: "Broken Trust",
        releaseDate: "March 8, 2022",
        price: "$14.99",
        imageUrl: "/api/placeholder/280/400?text=Broken+Trust",
        view: "A tale of broken trust."
    },
    {
        title: "The Final Hour",
        releaseDate: "August 19, 2023",
        price: "$15.99",
        imageUrl: "/api/placeholder/280/400?text=The+Final+Hour",
        view: "A story of the final hour."
    },
    {
        title: "Silent Witness",
        releaseDate: "February 2, 2024",
        price: "$16.99",
        imageUrl: "/api/placeholder/280/400?text=Silent+Witness",
        view: "A tale of the silent witness."
    },
    {
        title: "Ticking Clock",
        releaseDate: "October 12, 2021",
        price: "$13.99",
        imageUrl: "/api/placeholder/280/400?text=Ticking+Clock",
        view: "A story of the ticking clock."
    },
    {
        title: "The Deception",
        releaseDate: "July 5, 2022",
        price: "$14.99",
        imageUrl: "/api/placeholder/280/400?text=The+Deception",
        view: "A tale of the deception."
    },
    {
        title: "Buried Truth",
        releaseDate: "April 11, 2023",
        price: "$15.99",
        imageUrl: "/api/placeholder/280/400?text=Buried+Truth",
        view: "A story of the buried truth."
    },
    {
        title: "The Watcher",
        releaseDate: "December 5, 2022",
        price: "$14.99",
        imageUrl: "/api/placeholder/280/400?text=The+Watcher",
        view: "A tale of the watcher."
    },
    {
        title: "Lethal Evidence",
        releaseDate: "September 28, 2023",
        price: "$15.99",
        imageUrl: "/api/placeholder/280/400?text=Lethal+Evidence",
        view: "A story of lethal evidence."
    },
    {
        title: "Unknown Caller",
        releaseDate: "January 15, 2024",
        price: "$16.99",
        imageUrl: "/api/placeholder/280/400?text=Unknown+Caller",
        view: "A tale of the unknown caller."
    }
];

const actionMoviesData = [
    {
        title: "Tactical Force",
        releaseDate: "May 18, 2023",
        price: "$15.99",
        imageUrl: "images/force.jpg",
        view: "An action-packed adventure with explosive force."
    },
    {
        title: "High-Speed Chase",
        releaseDate: "November 7, 2022",
        price: "$14.99",
        imageUrl: "images/high.jpg",
        view: "A high-speed chase that will leave you breathless."
    },
    {
        title: "Last Stand",
        releaseDate: "July 21, 2023",
        price: "$15.99",
        imageUrl: "images/stand.jpg",
        view: "A thrilling last stand against overwhelming odds."
    },
    {
        title: "Urban Warrior",
        releaseDate: "March 15, 2024",
        price: "$17.99",
        imageUrl: "images/urban.webp",
        view: "A story of an urban warrior."
    },
    {
        title: "Rogue Agent",
        releaseDate: "September 3, 2021",
        price: "$13.99",
        imageUrl: "images/rogue.jpg",
        view: "A tale of a rogue agent."
    },
    {
        title: "Combat Zone",
        releaseDate: "January 28, 2022",
        price: "$14.99",
        imageUrl: "images/combat.jpg",
        view: "A story of a combat zone."
    },
    {
        title: "Strike Back",
        releaseDate: "June 10, 2023",
        price: "$15.99",
        imageUrl: "images/strike.jpg",
        view: "A tale of a deadly strike."
    },
    {
        title: "Street Fighter",
        releaseDate: "December 1, 2022",
        price: "$14.99",
        imageUrl: "images/street.jpg",
        view: "A story of a street fighter."
    },
    {
        title: "Ultimate Mission",
        releaseDate: "August 18, 2021",
        price: "$12.99",
        imageUrl: "images/ultimate.jpg",
        view: "A tale of the ultimate mission."
    },
    {
        title: "Rapid Assault",
        releaseDate: "February 9, 2024",
        price: "$16.99",
        imageUrl: "images/rapid.jpg",
        view: "A story of a rapid assault."
    },
    {
        title: "The Demolisher",
        releaseDate: "October 25, 2023",
        price: "$15.99",
        imageUrl: "images/the.jpg",
        view: "A tale of the demolisher."
    },
    {
        title: "Elite Squad",
        releaseDate: "April 6, 2022",
        price: "$14.99",
        imageUrl: "images/elite.webp",
        view: "A story of the elite squad."
    },
    {
        title: "Iron Fist",
        releaseDate: "July 12, 2021",
        price: "$12.99",
        imageUrl: "images/fist.jpg",
        view: "A tale of the iron fist."
    },
    {
        title: "Renegade",
        releaseDate: "November 30, 2022",
        price: "$14.99",
        imageUrl: "images/ren.jpg",
        view: "A story of a renegade."
    },
    {
        title: "War Zone",
        releaseDate: "March 22, 2023",
        price: "$15.99",
        imageUrl: "images/war.jpg",
        view: "A tale of a war zone."
    },
    {
        title: "Bulletproof",
        releaseDate: "September 14, 2022",
        price: "$14.99",
        imageUrl: "images/proof.jpg",
        view: "A story of being bulletproof."
    },
    {
        title: "Maximum Impact",
        releaseDate: "January 10, 2024",
        price: "$16.99",
        imageUrl: "images/max.jpg",
        view: "A tale of maximum impact."
    },
    {
        title: "Unstoppable",
        releaseDate: "June 28, 2023",
        price: "$15.99",
        imageUrl: "images/un.jpg",
        view: "A story of being unstoppable."
    },
    {
        title: "Battle Ground",
        releaseDate: "December 15, 2021",
        price: "$13.99",
        imageUrl: "images/battle.jpg",
        view: "A tale of a battle ground."
    },
    {
        title: "Strike Force",
        releaseDate: "May 3, 2022",
        price: "$14.99",
        imageUrl: "images/st.jpg",
        view: "A story of a strike force."
    },
    {
        title: "Urban Takedown",
        releaseDate: "August 9, 2023",
        price: "$15.99",
        imageUrl: "images/ut.jpg",
        view: "A tale of an urban takedown."
    }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadMovies();

    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('change', function() {
        if (menuToggle.checked) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
});