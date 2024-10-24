import { products } from './products.js'; // Importing the products from the external file

const productGrid = document.getElementById('product-grid');
const categoryFilter = document.getElementById('category-select');
const availabilityFilter = document.getElementById('availability');

const cartItemsContainer = document.querySelector('.cart-items');
const cartForm = document.getElementById('cart-form');

// Function to generate product cards with Bootstrap carousel
function displayProducts(filteredProducts) {
    productGrid.innerHTML = ''; // Clear previous products

    filteredProducts.forEach(product => {
        const carouselItems = product.images.map((image, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${image}" class="d-block w-100" alt="${product.name}">
            </div>
        `).join('');

        const carouselControls = product.images.length > 1 ? `
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselProduct${product.id}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselProduct${product.id}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        ` : ''; // Show controls only if there is more than one image

        const productCard = `
        <div class="col-md-6 col-lg-4 mb-4 product-card">
            <div class="card h-100 w-100 d-flex flex-column">
                <div id="carouselProduct${product.id}" class="carousel slide" data-ride="false" data-interval="false">
                    <div class="carousel-inner">
                        ${carouselItems}
                    </div>
                    ${carouselControls}
                </div>
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">Price: ${product.price}</p>
                        <p class="card-text">Available: ${product.available}</p>
                        <p class="card-text">Notes: ${product.notes}</p>
                    </div>
                    <div class="mt-2">
                        <button class="btn btn-primary d-block mx-auto add-to-cart" data-product-id="${product.id}">Add Request</button>
                    </div>
                </div>
            </div>
        </div>`;

        productGrid.innerHTML += productCard;
    });
    setupAddToCartListeners(); // Setup listener for add-to-cart button
}

// Filtering logic
function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const selectedAvailability = availabilityFilter.value;

    const filteredProducts = products.filter(product => {
        const matchesCategory = (selectedCategory === 'all' || product.type === selectedCategory);
        const matchesAvailability = (selectedAvailability === 'all' || product.available === selectedAvailability);
        return matchesCategory && matchesAvailability;
    });
    displayProducts(filteredProducts);
}

// Event listeners for filters
categoryFilter.addEventListener('change', filterProducts);
availabilityFilter.addEventListener('change', filterProducts);

// Function to handle empty cart check
function checkIfCartIsEmpty() {
    const cartItems = document.querySelectorAll('.cart-item');
    if (cartItems.length === 0) {
        alert('Please add items to the cart before submitting your request.');
        return true;
    }
    return false;
}

function setupAddToCartListeners() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-product-id');
            addItemToCart(productId);
        });
    });
}

// Function to add item to cart
function addItemToCart(productId) {
    const product = products.find(p => p.id == productId);

    if (product) {
        const cartItemHTML = `
        <div class="card rounded-3 mb-4 cart-item">
            <div class="card-body p-4">
                <div class="row d-flex justify-content-between align-items-center cart-items-box">
                    <div class="col-md-2 col-lg-1 col-xl-1 cart-img-box">
                        <img src="${product.images[0]}" class="img-fluid rounded-3 cart-img" alt="${product.name}">
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                        <p class="lead fw-normal mb-2 item-name">${product.name}</p>
                        <p><span class="text-muted">Price: </span><span class="item-price">${product.price}</span></p>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <p><span class="text-muted">Availability: </span>${product.available}</p>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" class="text-danger remove-from-cart"><i class="fas fa-trash fa-lg"></i></a>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12 col-lg-12 col-xl-12">
                        <label for="details-${product.id}">Details / Comments:</label>
                        <textarea id="details-${product.id}" class="form-control details-input" rows="2" placeholder="Please enter details such as size, colours, materials and any questions you may have."></textarea>
                    </div>
                </div>
            </div>
        </div>`;

        cartItemsContainer.innerHTML += cartItemHTML;
        setupRemoveFromCartListeners(); // Setup listener for remove button
    }
}

// Function to handle removing an item from the cart
function setupRemoveFromCartListeners() {
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', function () {
            this.closest('.cart-item').remove();
            checkIfCartIsEmpty(); // Check if cart is empty after removing an item
        });
    });
}

// Handle form submission
cartForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Check if the cart is empty
    if (!cartItemsContainer.children.length) {
        alert('Your cart is empty! Please add items before submitting.');
        return;
    }

    // Gather the cart data for all items in the cart
    let cartContent = '';
    const cartItems = document.querySelectorAll('.cart-item');

    // Loop through each cart item and concatenate its details
    cartItems.forEach((item, index) => {
        const itemName = item.querySelector('.item-name').textContent;
        const itemPrice = item.querySelector('.item-price').textContent;
        const itemComment = item.querySelector('textarea').value || 'No comments';

        // Concatenate each item's details in a readable format
        cartContent += `Item ${index + 1}:\n`;
        cartContent += `Name: ${itemName}\n`;
        cartContent += `Price: ${itemPrice}\n`;
        cartContent += `Comments: ${itemComment}\n\n`;
    });

    // Inject the cart data into a hidden field
    let cartDataInput = document.getElementById('cart-data');
    if (!cartDataInput) {
        // If the hidden input doesn't exist, create it
        cartDataInput = document.createElement('input');
        cartDataInput.type = 'hidden';
        cartDataInput.id = 'cart-data';
        cartDataInput.name = 'cartData';
        cartForm.appendChild(cartDataInput);
    }

    // Set the value of the hidden input to the concatenated cart content
    cartDataInput.value = cartContent;

    // Submit the form (Netlify will handle the backend part)
    cartForm.submit();
});

// Initial load
window.onload = () => {
    // Display all products on load (assuming displayProducts is already defined elsewhere)
    displayProducts(products); 

    // Get the current URL and extract the category parameter
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    // If a category is present in the URL
    if (category) {
        // Find the select element
        const selectElement = document.getElementById('category-select');

        // Check if the select element exists
        if (selectElement) {
            // Set the selected option based on the category
            selectElement.value = category;

            // Optionally trigger any change event handlers for the select element if needed
            selectElement.dispatchEvent(new Event('change'));
        } else {
            console.error("Category select element not found");
        }
    }
};