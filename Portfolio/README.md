# Portfolio Website

A modern, highly interactive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features
- **Responsive Design**: Works perfectly on mobile and desktop.
- **Glassmorphism UI**: Modern aesthetic with dark mode and gradients.
- **Animations**: Smooth scroll reveals and hover effects powered by Framer Motion.
- **Components**:
  - Hero Section
  - About Me
  - Skills
  - Projects (External Links)
  - Certificates (PDF Links)
  - Contact Form (UI only)

## Tech Stack
- **React JS** (Vite)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)

## Setup Instructions

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Locally**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser.

3.  **Build for Production**
    ```bash
    npm run build
    ```

## Customization Guide

### 1. Add Your Photo
- Place your photo image in `public/images/` (create the folder if needed) or just `public/`.
- Open `src/components/About.jsx`.
- Uncomment the `img` tag and update the `src` attribute:
  ```jsx
  <img src="/your-photo.jpg" alt="Profile" className="..." />
  ```

### 2. Update Certificates
- Place your PDF certificates in `public/certificates/`.
- Update `src/components/Certificates.jsx`:
  ```jsx
  const certificates = [
    { title: "React Cert", link: "/certificates/my-cert.pdf" },
    // ...
  ];
  ```

### 3. Update Social Links
- Update links in `src/components/Navbar.jsx` and `src/components/Contact.jsx`.

## Deployment to Netlify

1.  Push this code to GitHub.
2.  Log in to [Netlify](https://www.netlify.com/).
3.  Click **"Add new site"** -> **"Import from existing project"**.
4.  Connect GitHub and select your repository.
5.  **Build Settings**:
    - **Build Command**: `npm run build`
    - **Publish Directory**: `dist`
6.  Click **Deploy**.
