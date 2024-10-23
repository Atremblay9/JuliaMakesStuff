const sgMail = require('@sendgrid/mail');

exports.handler = async function (event, context) {
  // Load the SendGrid API Key from environment variables
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  // Parse the request body (this will contain the user's details and cart data)
  const { userName, userEmail, cartData } = JSON.parse(event.body);

  // Define the email content
  const msg = {
    to: 'justmejuliag@gmail.com', // Website owner's email
    from: 'no-reply@justmejuliag.com', // The verified sender email
    subject: 'New Order from Your Website',
    text: `Customer Name: ${userName}\nCustomer Email: ${userEmail}\n\nOrder Details:\n${cartData}`,
    html: `<strong>Customer Name:</strong> ${userName}<br>
           <strong>Customer Email:</strong> ${userEmail}<br>
           <h4>Order Details:</h4>
           <pre>${cartData}</pre>`,
  };

  // Try to send the email
  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Order sent successfully!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email', error: error.message }),
    };
  }
};
