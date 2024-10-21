const express = require('express');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// POST route to handle the form submission
app.post('/send-order', (req, res) => {
    const { userName, userEmail, cartData } = req.body;

    // Prepare the email content
    const msg = {
        to: 'justmejuliag@gmail.com', // Email address of the website owner
        from: 'nugglemama@hotmail.com', // Your verified sender email
        subject: 'New Order Received',
        text: `Customer Name: ${userName}\nCustomer Email: ${userEmail}\n\nOrder Details:\n${cartData}`,
        html: `<p><strong>Customer Name:</strong> ${userName}</p>
               <p><strong>Customer Email:</strong> ${userEmail}</p>
               <h4>Order Details:</h4>
               <pre>${cartData}</pre>`,
    };

    // Send email using SendGrid
    sgMail.send(msg)
        .then(() => {
            res.status(200).json({ message: 'Order sent successfully!' });
        })
        .catch(error => {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Error sending email', error });
        });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
