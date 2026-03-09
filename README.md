# Ineza Foundation Website Clone

A modern, responsive website clone built with React, TypeScript, and Tailwind CSS.

## Features

- 📱 Fully responsive design
- ⚡ Built with Vite for fast development
- 🎨 Styled with Tailwind CSS
- 📝 TypeScript for type safety
- 🧩 Component-based architecture

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
ineza-front-end/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Programs.tsx
│   │   ├── Impact.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Components

- **Header**: Navigation bar with responsive menu
- **Hero**: Landing section with call-to-action
- **About**: Foundation mission and statistics
- **Programs**: Overview of foundation programs
- **Impact**: Success metrics and testimonials
- **Contact**: Contact form and information
- **Footer**: Site footer with links

## Customization

You can easily customize:
- Colors in `tailwind.config.js`
- Content in each component file
- Images (replace emoji placeholders with actual images)

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- PostCSS
