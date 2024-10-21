console.log("js connected");
const products = [
    {
        id: 1,
        name: "Crochet Earrings 1",
        type: "earrings",
        price: 20,
        size: "small",
        color: "red",
        yarn: "cotton",
        available: true
    },
    {
        id: 2,
        name: "Crochet Toy 1",
        type: "toys",
        price: 40,
        size: "medium",
        color: "blue",
        yarn: "wool",
        available: false
    }
];
const productList = document.getElementById("product-list");
const categoryFilter = document.getElementById("category");
const priceFilter = document.getElementById("price");
function displayProducts(filteredProducts) {
    productList.innerHTML = "";
    filteredProducts.forEach((product)=>{
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-item");
        productDiv.innerHTML = `<h3>${product.name}</h3>
                                <p>Price: $${product.price}</p>
                                <p>Available: ${product.available ? "In Stock" : "Out of Stock"}</p>`;
        productList.appendChild(productDiv);
    });
}
function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const maxPrice = priceFilter.value;
    const filteredProducts = products.filter((product)=>{
        return (selectedCategory === "all" || product.type === selectedCategory) && product.price <= maxPrice;
    });
    displayProducts(filteredProducts);
}
categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("input", filterProducts);
window.onload = ()=>{
    displayProducts(products);
};

//# sourceMappingURL=index.72be8890.js.map
