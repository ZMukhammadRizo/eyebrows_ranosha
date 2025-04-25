# Eyebrows by Ranosha

A beautiful, modern, and responsive website for an eyebrow salon with online booking functionality. The website features a professional design with stunning animations and Google Calendar integration for appointment booking.

## Features

- Responsive design that works on all devices (mobile, tablet, desktop)
- Beautiful animations using Framer Motion
- Smooth scrolling navigation
- Online booking system with Google Calendar integration
- SEO optimized with React Helmet
- Image gallery with category filtering
- Contact section with map integration
- Modern UI with elegant styling using Styled Components

## Tech Stack

- ReactJS
- Styled Components for styling
- Framer Motion for animations
- React Scroll for smooth navigation
- React Helmet for SEO optimization
- Google OAuth/Calendar API for booking integration

## Installation and Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/eyebrows-by-ranosha.git
cd eyebrows-by-ranosha
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Google OAuth Client ID:
```
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
```

4. Start the development server:
```bash
npm start
```

## Google Calendar Integration

The booking system uses Google Calendar API to create appointments. To set this up:

1. Create a project in [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the Google Calendar API
3. Create OAuth credentials for a web application
4. Add the Client ID to your .env file

## Deployment

The site can be deployed using Vercel, Netlify, or any other hosting service:

1. Build the production version:
```bash
npm run build
```

2. Deploy the `build` folder to your hosting service.

## Customization

- Replace the placeholder images with real high-quality photos of your work
- Update contact information and address in the Contact.js component
- Modify service offerings and prices in the Services.js component
- Update social media links in Header.js and Footer.js
- Change color scheme in GlobalStyles.js

## Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── HeroSection.js
│   ├── Services.js
│   ├── Gallery.js
│   ├── BookingForm.js
│   ├── Contact.js
│   └── Footer.js
├── styles/
│   └── GlobalStyles.js
├── App.js
├── index.js
```

## License

MIT

## Credits

This project was created with React and is intended to showcase a professional eyebrow salon website with booking functionality. All placeholder images are from Unsplash.

---

Made with ❤️ for Eyebrows by Ranosha
