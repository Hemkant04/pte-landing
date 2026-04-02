# PTE Nepal - PTE Academic Preparation Platform

A modern, responsive landing page for PTE (Pearson Test of English) Academic preparation services in Nepal. Features dark/light mode, AI chatbot assistant, and comprehensive service information.

![PTE Nepal Landing Page](https://img.shields.io/badge/Live%20Site-GitHub%20Pages-blue)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss)

## 🌟 Features

- **Modern UI/UX** - Clean, professional design with glassmorphism effects
- **Dark/Light Mode** - Seamless theme switching with persistent preference
- **AI Chatbot** - Rule-based chat assistant for instant customer support
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Framer Motion powered scroll and hover animations
- **Fast Performance** - Vite-powered development and optimized builds
- **SEO Ready** - Proper meta tags and semantic HTML structure

## 📦 Services Offered

1. **Mock Test Package** - Rs. 2,350
   - Unlimited scored mock tests
   - Real PTE exam simulation
   - AI-powered scoring
   - 1 month access

2. **Date Booking Service** - Rs. 27,000
   - PTE exam date booking
   - Test center selection
   - Complete booking assistance

3. **Combo Package** - Rs. 27,799
   - Mock tests + Date booking
   - Priority support
   - Save Rs. 300

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/pte-landing.git

# Navigate to project
cd pte-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** GitHub Pages

## 📁 Project Structure

```
pte-landing/
├── .github/workflows/    # GitHub Actions deployment
├── public/              # Static assets (logo, images)
├── src/
│   ├── components/      # React components
│   │   ├── Benefits.jsx
│   │   ├── ChatWidget.jsx
│   │   ├── FAQs.jsx
│   │   ├── FinalCTA.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pricing.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── ui/
│   │       └── GradientButton.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🌙 Dark/Light Mode

The site features a comprehensive theme system:
- Toggle button in the navbar
- Automatic OS preference detection
- Persistent theme storage
- Smooth transitions across all components

## 💬 Chatbot

Built-in AI assistant that can answer:
- Pricing and package questions
- Mock test details
- Booking procedures
- Contact information
- Common PTE preparation FAQs

All responses include clickable WhatsApp buttons for instant contact.

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages.

### Setup Steps:

1. **Create GitHub Repository**
   - Go to GitHub → New Repository
   - Name: `pte-landing`
   - Make it Public

2. **Push Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/pte-landing.git
   git push -u origin main
   ```



### Automatic Deployments

Every push to the `main` branch triggers automatic rebuild and deployment.

## 📱 Contact

- **WhatsApp:** +977 9762419564
- **Email:** info.pte4u@gmail.com
- **Location:** Lalitpur, Nepal

## 📝 License

MIT License - feel free to use this template for your own projects.

## 🙏 Credits

- Built with [Vite](https://vitejs.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons by [Lucide](https://lucide.dev)
- Animations by [Framer Motion](https://www.framer.com/motion)

---


