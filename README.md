# 📚 Prompt Library

A modern, full-featured web application for discovering, organizing, and sharing AI prompts. Built with Next.js 16, React 19, and styled with Tailwind CSS and shadcn/ui.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- 🎯 **Browse AI Prompts** - Explore a curated collection of useful AI prompts across multiple categories
- 🏷️ **Category Organization** - Prompts organized by writing, coding, marketing, data, and more
- 🔥 **Trending Prompts** - Discover the most popular prompts by upvotes
- 🌙 **Dark Mode** - Seamless dark/light theme switching
- 📋 **Copy to Clipboard** - One-click copy functionality for prompt text
- 🔍 **Search & Filter** - Find prompts by category and tags
- 👥 **Author Info** - View prompt creators and their contributions
- ⭐ **Ratings System** - Upvote your favorite prompts
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Optimized with Next.js for quick loading

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm installed

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/prompt-library.git
cd prompt-library
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## 📖 Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── page.js         # Home page
│   ├── about/          # About page
│   ├── category/       # Categories page
│   └── prompts/        # Prompts listing and detail pages
├── components/          # Reusable React components
│   ├── hero/           # Hero section
│   ├── categories/     # Category components
│   ├── prompts/        # Prompt display components
│   ├── ui/             # shadcn/ui components
│   └── ...
├── lib/
│   ├── data.js         # Mock prompt data
│   └── utils.js        # Utility functions
└── app/
    └── globals.css     # Global styles
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)
- **Utilities**: [class-variance-authority](https://cva.style/), [clsx](https://github.com/lukeed/clsx)

## 📝 Features Overview

### Home Page
- Hero section with call-to-action
- Featured categories
- Trending prompts section
- Upcoming features preview
- About section

### Prompts Page
- Grid layout of all available prompts
- Prompt cards with title, description, and metadata
- Quick view and copy functionality
- Category badges and author information

### Categories
- Browse all available prompt categories
- Filter prompts by category
- View category-specific prompts

### Individual Prompt Detail
- Full prompt text and description
- Author information
- Related prompts
- Copy to clipboard functionality
- Upvote counter

## 🌙 Dark Mode

The application includes built-in dark mode support using `next-themes`. Users can toggle between light and dark themes with the theme switcher in the navigation.

## 📱 Responsive Design

The UI is fully responsive and optimized for:
- Desktop (1200px and above)
- Tablet (768px - 1199px)
- Mobile (below 768px)

## 🔄 Data Management

Currently, prompts are stored in `src/lib/data.js`. To add more prompts:

```javascript
{
  id: "unique-id",
  slug: "prompt-slug",
  title: "Prompt Title",
  description: "Brief description",
  prompt: "Full prompt text",
  category: "category-name",
  tags: ["tag1", "tag2"],
  author: "Author Name",
  createdAt: "2024-01-01",
  upvotes: 100
}
```

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import the repository to Vercel
3. Vercel will automatically detect Next.js and configure settings
4. Click "Deploy"

### Deploy on Other Platforms

- **Netlify**: Supported with Next.js functions
- **Docker**: Create a Dockerfile for containerized deployment
- **Self-hosted**: Build with `npm run build` and start with `npm start`

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact & Support

For questions, suggestions, or issues, please open an issue on GitHub or contact the maintainers.

---

Made with ❤️ using Next.js
