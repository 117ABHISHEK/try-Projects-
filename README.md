# ThalaAI - Thalassemia Web App

A comprehensive, responsive React web application dedicated to supporting individuals and families affected by Thalassemia. Built with modern web technologies and a focus on accessibility and user experience.

## 🎨 Design Features

### Color Palette
- **Deep Red** (#c0392b) - Primary accent color
- **Sage Green** (#2ecc71) - Positive CTA buttons
- **Serenity Blue** (#5d9cec) - Secondary CTA buttons
- **Soft Gold** (#f1c40f) - Highlight and hover effects
- **Charcoal Grey** (#34495e) - Headings and footer
- **Body Light Grey** (#ecf0f1) - Background color
- **White** (#ffffff) - Card backgrounds and text areas

### Layout Components

#### 1. Header
- Full-width navigation with responsive design
- Logo "ThalaAI" on the left
- Navigation links: Home, About, Causes, Donate, Contact
- Login/Signup button with sage green background
- Mobile hamburger menu for responsive navigation

#### 2. Hero Section
- Full-screen hero with gradient background
- Compelling headline and subtitle
- Two CTA buttons: "Donate Now" and "Learn More"
- Animated scroll indicator

#### 3. Features Section
- Three feature cards: Blood Donor, Chat Bot, Hospital Finder
- Responsive grid layout (3 columns on desktop, stacked on mobile)
- Hover animations and modern card design

#### 4. Campaigns Section
- Grid layout of donation campaign cards
- Progress bars with deep red color
- Campaign details with raised/target amounts
- Donate buttons with sage green background

#### 5. About Section
- Two-column layout with image and content
- Statistics display (Patients Helped, Partner Hospitals, etc.)
- CTA buttons for engagement

#### 6. Footer
- Comprehensive footer with multiple sections
- Social media icons with hover effects
- Contact information and quick links
- Copyright and legal links

## 🛠️ Technical Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach
- **Semantic HTML** - Accessible markup
- **Modern Animations** - Smooth transitions and hover effects

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd thalassemia-web-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile devices** (320px and up)
- **Tablets** (768px and up)
- **Desktop** (1024px and up)
- **Large screens** (1280px and up)

## 🎯 Key Features

- ✅ **Fully Responsive** - Works perfectly on all devices
- ✅ **Modern UI/UX** - Clean, professional design
- ✅ **Accessible** - Semantic HTML and ARIA labels
- ✅ **Fast Performance** - Optimized components and assets
- ✅ **SEO Friendly** - Proper meta tags and structure
- ✅ **Cross-browser Compatible** - Works on all modern browsers

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation component
│   ├── Hero.js            # Hero section
│   ├── Features.js        # Feature cards
│   ├── Campaigns.js       # Donation campaigns
│   ├── About.js           # About section
│   └── Footer.js          # Footer component
├── App.js                 # Main application component
├── index.js              # Application entry point
└── index.css             # Global styles and Tailwind imports

public/
├── index.html            # HTML template
└── hero.jpg              # Hero background image (placeholder)
```

## 🎨 Customization

### Colors
All colors are defined in `tailwind.config.js` and can be easily modified:
```javascript
colors: {
  'deep-red': '#c0392b',
  'sage-green': '#2ecc71',
  'serenity-blue': '#5d9cec',
  'soft-gold': '#f1c40f',
  'charcoal-grey': '#34495e',
  'body-light-grey': '#ecf0f1',
}
```

### Components
Each component is modular and can be easily customized:
- Modify content in the component files
- Update styles using Tailwind classes
- Add new sections by creating new components

## 📄 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions:
- Email: info@thalaai.org
- Phone: +91 98765 43210
- Location: Mumbai, India

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ for the Thalassemia community**
