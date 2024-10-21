import { products } from './products.js'; // Importing the products from the external file


const productGrid = document.getElementById('product-grid');
const categoryFilter = document.getElementById('category');
const availabilityFilter = document.getElementById('availability');

// Function to generate product cards with Bootstrap carousel
function displayProducts(filteredProducts) {
    productGrid.innerHTML = ''; // Clear previous products
    filteredProducts.forEach(product => {

        // Create the carousel items based on the product's images
        const carouselItems = product.images.map((image, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${image}" class="d-block w-100" alt="${product.name}">
            </div>
        `).join(''); // Join the array of carousel items into a single string

        const productCard = `
        <div class="col-md-6 col-lg-4 mb-4 ">
            <div class="card h-100 w-100 d-flex flex-column" >
                
                <div id="carouselProduct${product.id}" class="carousel slide carousel-fade" data-ride="carousel">
                    <div class="carousel-inner">
                        ${carouselItems}
                    </div>
                    <a class="carousel-control-prev" href="#carouselProduct${product.id}" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselProduct${product.id}" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </a>
                </div>
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">Price: ${product.price}</p>
                        <p class="card-text">Available: ${product.available}</p>
                        <p class="card-text">Notes: ${product.notes}</p>
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary d-block mx-auto">Add Request</button>
                    </div>
                </div>
            </div>
        </div>`;

        productGrid.innerHTML += productCard;
    });
}

// Filtering logic (same as before)
function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const selectedAvailability = availabilityFilter.value;

    const filteredProducts = products.filter(product => {
        const matchesCategory = (selectedCategory === 'all' || product.type === selectedCategory);
        const matchesAvailability = (
            selectedAvailability === 'all' || product.available === selectedAvailability);

        return matchesCategory && matchesAvailability;
    });
    displayProducts(filteredProducts);
}

// Event listeners for filters (same as before)
categoryFilter.addEventListener('change', filterProducts);
availabilityFilter.addEventListener('change', filterProducts);


// Initial load
window.onload = () => {
    displayProducts(products); // Display all products on load
};
