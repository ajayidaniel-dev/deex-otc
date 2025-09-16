# DeeX Desk - OTC Crypto Trading Platform

A fully responsive, production-ready OTC Crypto Web App built with modern technologies and designed as a Progressive Web App (PWA).

## 🚀 Features

### Core Functionality

- **Dashboard**: Animated metric cards with real-time data visualization
- **Transactions**: Comprehensive transaction management with filtering and pagination
- **Capture Transaction**: Form to capture new cryptocurrency transactions
- **Deposit System**: QR code-based deposit flow with multiple currency support
- **Settings**: User preferences and security settings
- **Rates**: Real-time exchange rate monitoring
- **API Keys**: API key management for integrations

### Technical Features

- **Progressive Web App (PWA)**: Full offline support and mobile app-like experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS Grid
- **Dark Theme**: Professional dark mode interface
- **Animations**: Smooth Framer Motion animations throughout the UI
- **Real-time Data**: React Query for efficient data fetching and caching
- **Type Safety**: Full TypeScript support
- **Modern UI**: Shadcn UI components for consistent design

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI + Radix UI
- **Animations**: Framer Motion
- **State Management**: React Query (TanStack Query)
- **Notifications**: Sonner
- **PWA**: next-pwa
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard page
│   ├── transactions/      # Transactions page
│   ├── capture-transaction/ # Capture transaction form
│   ├── settings/          # Settings page
│   ├── rates/            # Exchange rates page
│   ├── profile/          # User profile page
│   └── api-keys/         # API keys management
├── components/            # Reusable UI components
│   ├── ui/               # Shadcn UI components
│   ├── layout/           # Layout components (Header, Navigation)
│   ├── dashboard/        # Dashboard-specific components
│   ├── transactions/     # Transaction-related components
│   ├── forms/            # Form components
│   ├── modals/           # Modal components
│   └── settings/         # Settings components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and types
├── store/                # State management (React Query)
└── styles/               # Global styles and Tailwind config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd deex-desk
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 📱 PWA Features

- **Offline Support**: App works without internet connection
- **Installable**: Can be installed on mobile devices and desktops
- **Push Notifications**: Real-time transaction updates
- **Background Sync**: Syncs data when connection is restored

## 🎨 Design System

### Color Palette

- **Primary**: Blue (#3b82f6)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)
- **Background**: Dark (#1a1a1a)
- **Surface**: Card Dark (#2c2c2c)

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APP_NAME="DeeX Desk"
NEXT_PUBLIC_API_URL="your-api-url"
```

### PWA Configuration

The PWA is configured in `next.config.ts` with:

- Service worker registration
- Offline caching strategies
- Background sync
- Push notification support

## 📊 Mock Data

The application includes comprehensive mock data for:

- Dashboard metrics
- Transaction history
- Exchange rates
- User profiles
- Volume and rate history

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Mobile Experience

- **Responsive Design**: Optimized for all screen sizes
- **Touch Gestures**: Swipe navigation and touch interactions
- **Mobile-First**: Designed primarily for mobile devices
- **PWA Installation**: One-tap installation on mobile devices

## 🔒 Security Features

- **Input Validation**: All forms include proper validation
- **Type Safety**: Full TypeScript implementation
- **Secure Headers**: Security headers configured
- **CSRF Protection**: Built-in CSRF protection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**DeeX Desk** - Professional OTC Cryptocurrency Trading Platform
