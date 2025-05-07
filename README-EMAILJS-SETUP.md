# EmailJS Setup for Booking Form

## Overview
The booking form in this project uses EmailJS to send form submissions via email. This README provides instructions on how to set up EmailJS for your project.

## Installation

First, install the EmailJS browser package:

```bash
npm install --save @emailjs/browser
```

## EmailJS Account Setup

1. **Create an EmailJS Account**:
   - Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account
   - The free tier allows 200 emails per month

2. **Create an Email Service**:
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service" and connect your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps
   - Note the **Service ID** that is generated

3. **Create an Email Template**:
   - Go to "Email Templates" in your dashboard
   - Click "Create New Template"
   - Design your email template using the variables from the form:
     - `{{name}}` - Customer's name
     - `{{email}}` - Customer's email
     - `{{phone}}` - Customer's phone
     - `{{service}}` - Selected service
     - `{{date}}` - Preferred date
     - `{{time}}` - Preferred time
     - `{{message}}` - Additional information
   - Save the template and note the **Template ID**

4. **Get Your Public Key**:
   - Go to "Account" > "API Keys"
   - Copy your **Public Key**

## Update the BookingForm Component

Open `src/components/BookingForm.js` and update the following constants with your EmailJS credentials:

```javascript
// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'your_service_id'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'your_template_id'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS public key
```

## Testing the Form

After setting up EmailJS and updating the credentials:

1. Start your development server: `npm start` or `npm run dev`
2. Navigate to the contact section
3. Fill out the booking form and submit
4. You should receive an email with the form data

## Troubleshooting

If emails are not being sent:

1. Check the browser console for any errors
2. Verify that your EmailJS credentials are correct
3. Make sure your email service is properly connected in EmailJS
4. Check your EmailJS dashboard for any failed email attempts

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Examples](https://www.emailjs.com/docs/examples/reactjs/)