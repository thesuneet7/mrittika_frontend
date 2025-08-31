# Mrittika - AI Assistant for Indian Farmers

A modern, responsive web application that provides AI-powered agricultural assistance specifically designed for Indian farmers. Built with React, TypeScript, and Tailwind CSS.

## 🌾 Features

- **🤖 AI Chat Interface** - Conversational agricultural advice in Hindi and English
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **🎨 Modern UI** - Built with shadcn/ui components and Tailwind CSS
- **🌐 Multi-language Support** - Hindi and English interface
- **⚡ Fast Performance** - Optimized with Vite and modern React patterns
- **🔒 No Backend Required** - Pure frontend application with mock AI responses

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Mrittika_frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
Mrittika_frontend/
├── client/                 # Frontend source code
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── lib/           # Utilities and API client
│   │   ├── types/         # TypeScript type definitions
│   │   └── ...
│   └── public/            # Static assets
├── dist/                  # Production build output
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── vercel.json           # Vercel deployment configuration
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **State Management**: TanStack Query (React Query)
- **Routing**: Wouter
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 🤖 AI Features

The application includes realistic agricultural advice responses in Hindi:

- **Crop Management**: Planting schedules, variety selection, spacing
- **Disease Control**: Identification and treatment recommendations
- **Fertilizer Guidance**: NPK ratios and application methods
- **Weather Integration**: Seasonal farming advice
- **Soil Health**: pH management and nutrient optimization
- **Pest Control**: Natural and chemical treatment options

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically - no configuration needed!

The `vercel.json` file is already configured for optimal deployment.

### Other Platforms

This is a static frontend application that can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 📱 Usage

1. **Open the application** in your web browser
2. **Start chatting** with the AI assistant
3. **Ask questions** about:
   - Crop diseases and treatments
   - Fertilizer recommendations
   - Weather-based farming advice
   - Soil health management
   - Pest control methods

## 🎨 Customization

### Adding New AI Responses

Edit `client/src/lib/mockApi.ts` to add more agricultural advice responses:

```typescript
const mockAIResponses = [
  "Your new agricultural advice here...",
  // Add more responses
];
```

### Styling

The application uses Tailwind CSS with a custom design system. Modify `tailwind.config.ts` to customize colors, fonts, and other design tokens.

### Components

All UI components are in `client/src/components/` and use the shadcn/ui design system for consistency.

## 📄 License

MIT License - feel free to use this project for your own agricultural applications.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please open an issue in the GitHub repository.

---

**Built with ❤️ for Indian farmers** 🌾
