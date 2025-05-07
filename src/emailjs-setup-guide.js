// EmailJS Setup Guide

/*
 * This file provides instructions on how to set up EmailJS for the booking form.
 * 
 * STEP 1: Install EmailJS
 * Run the following command in your project directory:
 * npm install --save @emailjs/browser
 * 
 * STEP 2: Create an EmailJS Account
 * - Go to https://www.emailjs.com/ and sign up for a free account
 * - The free tier allows 200 emails per month
 * 
 * STEP 3: Create an Email Service
 * - In your EmailJS dashboard, go to "Email Services"
 * - Click "Add New Service" and connect your email provider (Gmail, Outlook, etc.)
 * - Follow the authentication steps
 * - Note the Service ID that is generated
 * 
 * STEP 4: Create an Email Template
 * - Go to "Email Templates" in your dashboard
 * - Click "Create New Template"
 * - Design your email template using the variables from the form:
 *   - {{name}} - Customer's name
 *   - {{email}} - Customer's email
 *   - {{phone}} - Customer's phone
 *   - {{service}} - Selected service
 *   - {{date}} - Preferred date
 *   - {{time}} - Preferred time
 *   - {{message}} - Additional information
 * - Save the template and note the Template ID
 * 
 * STEP 5: Get Your Public Key
 * - Go to "Account" > "API Keys"
 * - Copy your Public Key
 * 
 * STEP 6: Update the BookingForm Component
 * - Open src/components/BookingForm.js
 * - Update the following constants with your EmailJS credentials:
 *   const EMAILJS_SERVICE_ID = 'your_service_id';
 *   const EMAILJS_TEMPLATE_ID = 'your_template_id';
 *   const EMAILJS_PUBLIC_KEY = 'your_public_key';
 * 
 * That's it! Your booking form should now be able to send emails through EmailJS.
 */

// You can delete this file after setting up EmailJS