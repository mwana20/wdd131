document.addEventListener('DOMContentLoaded', function() {
    // Set the last modified date
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }

    // Set the current date
    const currentDateElement = document.getElementById('currentDate');
    if (currentDateElement) {
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        currentDateElement.textContent = currentDate.toLocaleDateString(undefined, options);
    }
});
