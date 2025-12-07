# 🚀 Portfolio Website - Hemanth Pothineni

A modern, responsive portfolio website built with Next.js 16, featuring dynamic theming, smooth animations, and SEO optimization. This portfolio showcases professional experience, projects, and skills with an elegant, interactive user interface.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://hemanth-portfolio-app.web.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.0.6-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38bdf8)](https://tailwindcss.com/)

## ✨ Features

### 🎨 **Dynamic Theming System**
- **5 Color Themes**: Blue, Red, Orange, Pink, and Grey
- **Persistent Theme Selection**: User preferences saved in localStorage
- **Smooth Theme Transitions**: Elegant color switching with CSS transitions
- **Interactive Mouse Gradient**: Radial gradient that follows cursor movement

### 📱 **Responsive Design**
- Mobile-first approach with breakpoints for all devices
- Adaptive layouts for tablets, desktops, and large screens
- Touch-friendly navigation and interactions

### 🎯 **Interactive Navigation**
- Smooth scroll to sections with animated transitions
- Active section highlighting based on scroll position
- Sticky header with theme picker on desktop
- Mobile-optimized navigation menu

### 🔍 **SEO Optimized**
- Structured data with JSON-LD schema (Person, BreadcrumbList)
- Meta tags for social media sharing (Open Graph)
- Semantic HTML5 elements
- Sitemap and robots.txt generation
- Optimized for search engine crawlers

### 📧 **Contact Form**
- Integrated with EmailJS for direct email submissions
- Form validation with user feedback
- Success/error notifications
- Professional email templates

### ⚡ **Performance**
- Static site generation with Next.js export
- Optimized images and assets
- Minimal JavaScript bundle size
- Fast page load times

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 16.0.6** - React framework with App Router
- **React 19.2.0** - UI library with latest features
- **TailwindCSS 4** - Utility-first CSS framework

### **UI Components & Icons**
- **Lucide React** - Beautiful, consistent icon set
- Custom React components with reusable design patterns

### **Email Integration**
- **EmailJS** - Client-side email service for contact form

### **Development Tools**
- **ESLint 9** - Code linting and quality
- **Babel React Compiler** - Optimized React compilation
- **PostCSS** - CSS processing and optimization

### **Deployment**
- **Firebase Hosting** - Fast, secure static hosting
- **GitHub** - Version control and CI/CD

## 📂 Project Structure

```
my_portfolio/
├── app/
│   ├── components/          # React components
│   │   ├── AboutSection.js
│   │   ├── ContactSection.js
│   │   ├── ExperienceItem.js
│   │   ├── ExperienceSection.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Navigation.js
│   │   ├── ProjectItem.js
│   │   ├── ProjectsSection.js
│   │   ├── SEOHead.js
│   │   └── ThemePicker.js
│   ├── constants/           # App constants
│   │   └── themes.js        # Theme color configurations
│   ├── hooks/               # Custom React hooks
│   │   ├── useActiveSection.js
│   │   ├── useMousePosition.js
│   │   └── useTheme.js
│   ├── utils/               # Utility functions
│   │   └── navigation.js
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   ├── metadata.js          # SEO metadata & schemas
│   ├── page.js              # Main page component
│   ├── robots.js            # Robots.txt generation
│   └── sitemap.js           # Sitemap generation
├── public/                  # Static assets
│   ├── images/              # Image assets
│   ├── DE Resume.pdf        # Resume file
│   ├── og-image.jpg         # Open Graph image
│   └── manifest.json        # PWA manifest
├── .firebase/               # Firebase cache
├── firebase.json            # Firebase configuration
├── next.config.mjs          # Next.js configuration
├── tailwind.config.js       # Tailwind configuration
└── package.json             # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ph0923/my_portfolio.git
   cd my_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   Get your EmailJS credentials from [EmailJS Dashboard](https://dashboard.emailjs.com/)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deploy

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

### Deploy to Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase (if not already done)**
   ```bash
   firebase init hosting
   ```

4. **Build and deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ph0923/my_portfolio)

1. Click the "Deploy" button above
2. Connect your GitHub account
3. Configure environment variables
4. Deploy!

## 🎨 Customization

### Modify Theme Colors

Edit `app/constants/themes.js`:

```javascript
export const themes = {
  yourTheme: {
    bg: '#your-background-color',
    gradient: 'rgba(r, g, b, 0.15)',
    accent: '#your-accent-color',
    accentHover: '#your-hover-color',
    accentRgb: 'r, g, b'
  }
};
```

### Update Personal Information

1. **Metadata**: Edit `app/metadata.js`
2. **About Section**: Edit `app/components/AboutSection.js`
3. **Experience**: Edit `app/components/ExperienceSection.js`
4. **Projects**: Edit `app/components/ProjectsSection.js`

### Add New Sections

1. Create a new component in `app/components/`
2. Import and add it to `app/page.js`
3. Update navigation in `app/components/Navigation.js`

## 📊 Key Components

### Custom Hooks

- **`useTheme`**: Manages theme selection with localStorage persistence
- **`useActiveSection`**: Tracks active section based on scroll position
- **`useMousePosition`**: Tracks cursor position for gradient effect

### Reusable Components

- **`ExperienceItem`**: Individual experience card with timeline
- **`ProjectItem`**: Project showcase card with links
- **`ThemePicker`**: Theme selector with color swatches
- **`Navigation`**: Smooth scroll navigation with active indicators

## 🔧 Configuration Files

### `next.config.mjs`
```javascript
const nextConfig = {
  output: 'export',        // Static site generation
  reactCompiler: true,     // React compiler optimization
};
```

### `firebase.json`
```json
{
  "hosting": {
    "public": "out",       // Deploy from out/ directory
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
```

## 📈 Performance Optimizations

- ✅ Static site generation (SSG)
- ✅ Code splitting and lazy loading
- ✅ Optimized images with Next.js Image component
- ✅ Minimal CSS with Tailwind purging
- ✅ React 19 compiler optimizations
- ✅ Efficient re-renders with custom hooks

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Hemanth Pothineni**
- Portfolio: [hemanth-portfolio-app.web.app](https://hemanth-portfolio-app.web.app)
- GitHub: [@ph0923](https://github.com/ph0923)
- LinkedIn: [hp09](https://www.linkedin.com/in/hp09/)
- Email: hemanthpothineni@outlook.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Hosting by [Firebase](https://firebase.google.com/)

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact me via email
- Connect on LinkedIn

---

**⭐ If you like this project, please give it a star on GitHub!**

Made with ❤️ using Next.js and React
