// Common function to create movie cards
function createMovieCard(movie) {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    
    const movieImage = document.createElement('div');
    movieImage.className = 'movie-image';
    movieImage.style.backgroundImage = `url(${movie.imageUrl})`;
    movieImage.setAttribute('loading', 'lazy'); // Add lazy loading
    
    const movieInfo = document.createElement('div');
    movieInfo.className = 'movie-info';
    movieInfo.style.color = 'black'; // Set text color to black
    
    const movieTitle = document.createElement('h3');
    movieTitle.textContent = movie.title;
    
    // Function to determine reliable text color based on background color
    function getReliableTextColor(bgColor) {
        const color = bgColor.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
        const brightness = Math.round(((parseInt(color[0]) * 299) +
                                      (parseInt(color[1]) * 587) +
                                      (parseInt(color[2]) * 114)) / 1000);
        return (brightness > 125) ? 'black' : 'white';
    }
    
    const bgColor = window.getComputedStyle(movieImage).backgroundColor;
    movieTitle.style.color = getReliableTextColor(bgColor); // Set title color based on background
    
    const movieMetadata = document.createElement('div');
    movieMetadata.className = 'movie-metadata';
    movieMetadata.textContent = `Released: ${movie.releaseDate}`;
    movieMetadata.style.color = 'black'; // Ensure release date is visible and black
    
    const moviePrice = document.createElement('div');
    moviePrice.className = 'movie-price';
    moviePrice.textContent = movie.price;
    moviePrice.style.color = 'black'; // Ensure price is visible and black
    
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
        imageUrl: "images/maker.jpg",
        view: "A heartwarming story of faith and miracles."
    },
    {
        title: "Journey of Faith",
        releaseDate: "June 8, 2022",
        price: "$14.99",
        imageUrl: "images/journey.jpg",
        view: "An inspiring journey of faith and perseverance."
    },
    {
        title: "Divine Intervention",
        releaseDate: "September 22, 2023",
        price: "$15.99",
        imageUrl: "images/divi.jpg",
        view: "A miraculous story of divine intervention."
    },
    {
        title: "Steadfast Hope",
        releaseDate: "January 12, 2024",
        price: "$16.99",
        imageUrl: "images/stead.jpg",
        view: "A story of unwavering hope and faith."
    },
    {
        title: "Redeeming Grace",
        releaseDate: "May 30, 2022",
        price: "$13.99",
        imageUrl: "images/rede.jpg",
        view: "A tale of grace and redemption."
    },
    {
        title: "Faithful Journey",
        releaseDate: "November 8, 2021",
        price: "$12.99",
        imageUrl: "images/ful.jpg",
        view: "A journey of faith and trust."
    },
    {
        title: "Beyond Belief",
        releaseDate: "March 25, 2024",
        price: "$17.99",
        imageUrl: "images/bey.png",
        view: "A story that goes beyond belief."
    },
    {
        title: "Heaven's Light",
        releaseDate: "July 14, 2023",
        price: "$15.99",
        imageUrl: "images/heaven.jpg",
        view: "A tale of divine light and guidance."
    },
    {
        title: "Walking by Faith",
        releaseDate: "October 5, 2022",
        price: "$14.99",
        imageUrl: "images/walk.jpg",
        view: "A journey of walking by faith."
    },
    {
        title: "Divine Purpose",
        releaseDate: "February 18, 2023",
        price: "$15.99",
        imageUrl: "images/pur.jpg",
        view: "A story of finding divine purpose."
    },
    {
        title: "Answered Prayers",
        releaseDate: "August 9, 2021",
        price: "$13.99",
        imageUrl: "images/prayers.jpg",
        view: "A tale of answered prayers."
    },
    {
        title: "The Chosen Path",
        releaseDate: "December 12, 2022",
        price: "$14.99",
        imageUrl: "images/path.jpg",
        view: "A journey on the chosen path."
    },
    {
        title: "Faith Unbroken",
        releaseDate: "April 16, 2024",
        price: "$16.99",
        imageUrl: "images/unbroken.jpg",
        view: "A story of unbroken faith."
    },
    {
        title: "Guided Light",
        releaseDate: "September 3, 2021",
        price: "$12.99",
        imageUrl: "images/li.jpg",
        view: "A tale of being guided by light."
    },
    {
        title: "Trust in Him",
        releaseDate: "November 27, 2023",
        price: "$15.99",
        imageUrl: "images/him.jpg",
        view: "A story of trust in Him."
    },
    {
        title: "The Shepherd's Way",
        releaseDate: "January 30, 2022",
        price: "$14.99",
        imageUrl: "images/she.jpg",
        view: "A journey on the shepherd's way."
    },
    {
        title: "The Prayer Circle",
        releaseDate: "June 5, 2023",
        price: "$15.99",
        imageUrl: "images/pra.jpg",
        view: "A story of the prayer circle."
    },
    {
        title: "Finding Grace",
        releaseDate: "March 21, 2024",
        price: "$16.99",
        imageUrl: "images/gra.jpg",
        view: "A journey of finding grace."
    },
    {
        title: "His Loving Hands",
        releaseDate: "August 19, 2022",
        price: "$13.99",
        imageUrl: "images/lo.jpg",
        view: "A tale of His loving hands."
    },
    {
        title: "Miracle of Faith",
        releaseDate: "October 15, 2021",
        price: "$12.99",
        imageUrl: "images/of.jpg",
        view: "A story of the miracle of faith."
    },
    {
        title: "Blessed Journey",
        releaseDate: "May 11, 2023",
        price: "$15.99",
        imageUrl: "images/jo.jpg",
        view: "A blessed journey of faith."
    }
];

const thrillerMoviesData = [
    {
        title: "Silent Whisper",
        releaseDate: "February 12, 2023",
        price: "$15.99",
        imageUrl: "images/silent.jpg",
        view: "A suspenseful thriller that will keep you on the edge of your seat."
    },
    {
        title: "The Last Moment",
        releaseDate: "July 23, 2022",
        price: "$14.99",
        imageUrl: "images/moment.jpg",
        view: "A gripping tale of suspense and mystery."
    },
    {
        title: "Dark Corridor",
        releaseDate: "October 31, 2023",
        price: "$16.99",
        imageUrl: "images/dark.jpg",
        view: "A dark and thrilling journey through a mysterious corridor."
    },
    {
        title: "Vanishing Point",
        releaseDate: "March 17, 2024",
        price: "$17.99",
        imageUrl: "images/van.jpg",
        view: "A story of vanishing point."
    },
    {
        title: "Mind Games",
        releaseDate: "August 5, 2021",
        price: "$13.99",
        imageUrl: "images/mind.jpg",
        view: "A tale of mind games."
    },
    {
        title: "The Shadow Hand",
        releaseDate: "December 10, 2022",
        price: "$14.99",
        imageUrl: "images/shadow.jpg",
        view: "A story of the shadow knows."
    },
    {
        title: "Deadly Secrets",
        releaseDate: "April 28, 2023",
        price: "$15.99",
        imageUrl: "images/sec.jpg",
        view: "A tale of deadly secrets."
    },
    {
        title: "Midnight Caller",
        releaseDate: "September 9, 2021",
        price: "$13.99",
        imageUrl: "images/mid.jpg",
        view: "A story of the midnight caller."
    },
    {
        title: "The Perfect Alibi",
        releaseDate: "November 15, 2022",
        price: "$14.99",
        imageUrl: "images/ali.jpg",
        view: "A tale of the perfect alibi."
    },
    {
        title: "Cold Case",
        releaseDate: "January 20, 2024",
        price: "$16.99",
        imageUrl: "images/cold.jpg",
        view: "A story of a cold case."
    },
    {
        title: "The Informant",
        releaseDate: "June 14, 2023",
        price: "$15.99",
        imageUrl: "images/info.jpg",
        view: "A tale of the informant."
    },
    {
        title: "Paranoia",
        releaseDate: "May 27, 2021",
        price: "$12.99",
        imageUrl: "images/para.jpg",
        view: "A story of paranoia."
    },
    {
        title: "Broken Trust",
        releaseDate: "March 8, 2022",
        price: "$14.99",
        imageUrl: "images/trust.jpg",
        view: "A tale of broken trust."
    },
    {
        title: "The Final Hour",
        releaseDate: "August 19, 2023",
        price: "$15.99",
        imageUrl: "images/hour.jpg",
        view: "A story of the final hour."
    },
    {
        title: "Silent Witness",
        releaseDate: "February 2, 2024",
        price: "$16.99",
        imageUrl: "images/wit.jpg",
        view: "A tale of the silent witness."
    },
    {
        title: "Ticking Clock",
        releaseDate: "October 12, 2021",
        price: "$13.99",
        imageUrl: "images/clock.jpg",
        view: "A story of the ticking clock."
    },
    {
        title: "The Deception",
        releaseDate: "July 5, 2022",
        price: "$14.99",
        imageUrl: "images/dec.avif",
        view: "A tale of the deception."
    },
    {
        title: "Buried Truth",
        releaseDate: "April 11, 2023",
        price: "$15.99",
        imageUrl: "images/truth.jpg",
        view: "A story of the buried truth."
    },
    {
        title: "The Watcher",
        releaseDate: "December 5, 2022",
        price: "$14.99",
        imageUrl: "images/watcher.jpg",
        view: "A tale of the watcher."
    },
    {
        title: "Lethal Evidence",
        releaseDate: "September 28, 2023",
        price: "$15.99",
        imageUrl: "images/evi.jpg",
        view: "A story of lethal evidence."
    },
    {
        title: "Unknown Caller",
        releaseDate: "January 15, 2024",
        price: "$16.99",
        imageUrl: "images/call.jpg",
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