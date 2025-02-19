document.addEventListener('DOMContentLoaded', () => {
    const viewButtons = document.querySelectorAll('.view-button');
    viewButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const itemId = event.target.dataset.itemId;
            const category = event.target.dataset.category;
            console.log(`View button clicked: itemId=${itemId} (type: ${typeof itemId}), category=${category}`); // Debugging log
            displayItemContent(itemId, category);
        });
    });
});

function displayItemContent(itemId, category) {
    // Determine the correct JSON file based on the category
    const jsonFile = `/data/${category}.json`;

    // Fetch the item data from the appropriate JSON file
    fetch(jsonFile)
        .then(response => {
            console.log(`Response status: ${response.status}`); // Debugging log
            return response.json();
        })
        .then(data => {
            console.log(`Fetched data for category ${category}:`, data); // Debugging log
            console.log(`Data structure:`, JSON.stringify(data, null, 2)); // Debugging log
            const item = data.items.find(item => item.id == itemId); // Convert itemId to the appropriate type
            if (item) {
                // Display the item content
                const itemContent = `
                    <h2>${item.title}</h2>
                    <p><strong>Year:</strong> ${item.year}</p>
                    <p><strong>Rating:</strong> ${item.rating}</p>
                    <p><strong>Duration:</strong> ${item.duration}</p>
                    <p><strong>Description:</strong> ${item.description}</p>
                    <img src="${item.image}" alt="${item.title}">
                    <p><strong>Tags:</strong> ${item.tags.join(', ')}</p>
                    <p><strong>Views:</strong> ${item.views}</p>
                    <p><strong>Price:</strong> ${item.price} Ugx</p>
                `;
                document.querySelector('#item-content').innerHTML = itemContent;
            } else {
                console.error(`Item with id ${itemId} not found`); // Debugging log
            }
        })
        .catch(error => console.error('Error fetching item data:', error));
}
