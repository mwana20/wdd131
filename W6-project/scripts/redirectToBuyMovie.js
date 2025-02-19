document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-movie-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'buyMovie.html';
        });
    });
});
