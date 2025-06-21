# 🎨 Modern Portfolio Website

A beautiful, responsive portfolio website built with Next.js 15, TypeScript, and SCSS. Features modular, maintainable styling with BEM methodology and responsive design patterns.

![Portfolio Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=Portfolio+Preview)

## ✨ Features

- 🦊 **Animated Background**: Cute animals roaming around the screen
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🎯 **Modern Design**: Clean and professional UI/UX
- ⚡ **Fast Performance**: Built with Next.js 15 and optimized for speed
- 🎭 **Smooth Animations**: Beautiful transitions and hover effects
- 📧 **Contact Form**: Functional contact form with validation
- 🔍 **SEO Optimized**: Meta tags and structured data
- 🎨 **Easy Customization**: Well-structured code and data files

## 🏗️ Project Structure

```
portfolio/
├── app/                     # Next.js 15 app directory
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── animations/         # Animation components
│   │   └── AnimatedBackground.tsx
│   ├── sections/           # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                 # UI components
│       ├── Navigation.tsx
│       └── Footer.tsx
├── data/                   # Data files for easy customization
│   ├── personal.ts         # Personal information
│   ├── skills.ts          # Skills and technologies
│   ├── experience.ts      # Work experience
│   └── projects.ts        # Project portfolio
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/               # Custom styles
    └── custom.css        # Additional CSS
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Edit `data/personal.ts` to update your personal details:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Full Stack Developer",
  email: "your.email@example.com",
  // ... more fields
};
```

### Skills
Update your skills in `data/skills.ts`:

```typescript
export const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 90 },
      // ... more skills
    ]
  }
];
```

### Projects
Add your projects in `data/projects.ts`:

```typescript
export const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    technologies: ['React', 'Node.js'],
    // ... more fields
  }
];
```

### Experience
Update your work experience in `data/experience.ts`:

```typescript
export const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: '2020 - Present',
    // ... more fields
  }
];
```

## 🎨 Customizing Animations

### Background Animals
The animated background features cute animals roaming around. You can customize them in `components/animations/AnimatedBackground.tsx`:

```typescript
const cuteAnimals = ['🐱', '🐶', '🐰', '🐻', '🐼', '🦊', '🐨', '🐸', '🐹', '🐧'];
```

### Animation Speed
Adjust animation speeds by modifying the interval and speed values:

```typescript
speed: 0.5 + Math.random() * 1, // Animal movement speed
const interval = setInterval(animateAnimals, 50); // Animation update frequency
```

## 🔧 Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: SCSS with modular architecture
- **Animations**: CSS animations and transitions
- **Icons**: Emoji icons (easily replaceable with icon libraries)
- **Deployment**: Vercel (recommended)

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🎯 Performance Features

- ⚡ Server-side rendering with Next.js
- 🖼️ Optimized images and assets
- 📦 Code splitting and lazy loading
- 🔄 Efficient re-renders with React
- 💨 Fast page transitions

## 📧 Contact Form

The contact form includes:
- ✅ Form validation
- 📨 Email integration ready
- 🔄 Loading states
- ✨ Success/error messages

To connect a real backend, update the form submission logic in `ContactSection.tsx`.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms
- **Netlify**: `npm run build` and deploy the `out` folder
- **GitHub Pages**: Enable in repository settings
- **Custom Server**: Build and serve the `out` folder

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Cute animal emojis for the animated background
- SCSS for the beautiful, modular styling
- Next.js team for the amazing framework

## 📞 Support

If you have any questions or need help customizing your portfolio:

- 📧 Email: your.email@example.com
- 💬 Create an issue in this repository
- 🐦 Twitter: @yourusername

---

**Made with ❤️ and lots of ☕**

Show some love by giving this project a ⭐ if it helped you!
