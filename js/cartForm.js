const cartForm = document.getElementById('cart-form');

// Handle form submission to send the order
cartForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Gather the cart data
    const cartItems = document.querySelectorAll('.cart-item');
    let cartContent = '';
    
    cartItems.forEach(item => {
        const itemName = item.querySelector('strong').textContent;
        const itemPrice = item.querySelector('p:nth-of-type(2)').textContent;
        const itemComment = item.querySelector('textarea').value || 'No comments';
        
        cartContent += `Item: ${itemName}\nPrice: ${itemPrice}\nComments: ${itemComment}\n\n`;
    });

    // Prepare form data to send
    const formData = {
        userName: document.getElementById('user-name').value,
        userEmail: document.getElementById('user-email').value,
        cartData: cartContent
    };

    // Send the cart data to the backend
    fetch('http://localhost:5000/send-order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // Show a success message
        cartForm.reset(); // Reset the form after submission
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an issue sending your order via email.');
    });
});
