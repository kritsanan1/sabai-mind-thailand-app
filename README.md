
# MindfulThai - Mental Health Mobile App

A culturally-sensitive mental health application designed specifically for Thai users, featuring AI-powered mood analysis, guided meditation, therapist booking, and smartwatch integration.

## 🎯 Project Overview

MindfulThai is a comprehensive mental health platform that combines modern technology with traditional Thai Buddhist mindfulness practices. The app provides personalized mental health support through AI chat, guided meditations, professional therapist connections, and real-time health monitoring via smartwatch integration.

### Key Features

- **🤖 AI-Powered Chat**: Conversational mood analysis and personalized recommendations
- **🧘 Guided Meditation**: 5, 10, and 15-minute sessions with Thai and English narration
- **👩‍⚕️ Therapist Booking**: Professional directory with integrated scheduling system
- **⌚ Smartwatch Integration**: Real-time stress monitoring and sleep tracking
- **🌍 Bilingual Support**: Full Thai and English language support
- **🔒 Privacy-First**: PDPA and GDPR compliant data handling
- **💎 Freemium Model**: Core features free with premium upgrades

## 🛠 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** (version 8.0 or higher) or **yarn** (version 1.22 or higher)
- **Git** for version control

### System Requirements

- **Development**: macOS, Windows, or Linux
- **Mobile Testing**: iOS 12+ or Android 8.0+
- **Browser Support**: Chrome 90+, Safari 14+, Firefox 88+

## 📦 Installation

### 1. Clone the Repository

```bash
git clone <YOUR_GIT_URL>
cd mindful-thai
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# App Configuration
VITE_APP_NAME=MindfulThai
VITE_APP_VERSION=1.0.0

# API Configuration
VITE_API_BASE_URL=https://api.mindful-thai.com
VITE_AI_CHAT_API_KEY=your_ai_api_key_here

# Smartwatch APIs
VITE_HEALTHKIT_ENABLED=true
VITE_SAMSUNG_HEALTH_ENABLED=true
VITE_FITBIT_ENABLED=true

# Payment Configuration
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
VITE_PAYMENT_ENABLED=true

# Analytics & Monitoring
VITE_ANALYTICS_ID=your_analytics_id
VITE_SENTRY_DSN=your_sentry_dsn

# Privacy & Compliance
VITE_PRIVACY_MODE=strict
VITE_DATA_RETENTION_DAYS=30
```

### 4. Start Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 🚀 Local Development Setup

### Development Workflow

1. **Hot Reload**: Changes are automatically reflected in the browser
2. **TypeScript**: Full type checking during development
3. **Tailwind CSS**: Utility-first styling with custom theme
4. **Component Library**: shadcn/ui components with custom styling

### Mobile Development

For mobile development and testing:

```bash
# Install Capacitor CLI globally
npm install -g @capacitor/cli

# Add mobile platforms
npm run cap:add:ios
npm run cap:add:android

# Run on device/simulator
npm run cap:run:ios
npm run cap:run:android
```

### Code Structure

```
src/
├── components/          # Reusable UI components
│   ├── screens/        # Main application screens
│   ├── smartwatch/     # Smartwatch integration components
│   ├── modals/         # Modal dialog components
│   └── ui/             # shadcn/ui component library
├── services/           # Business logic and API integration
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── pages/              # Application pages and routing
```

## 🧪 Testing

### Unit Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Integration Tests

```bash
# Run integration tests
npm run test:integration

# Run mobile integration tests
npm run test:mobile
```

### E2E Tests

```bash
# Install Playwright (first time only)
npx playwright install

# Run E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui
```

### Manual Testing Checklist

- [ ] **Navigation**: All 5 tabs functional
- [ ] **Language Toggle**: Thai/English switching
- [ ] **Responsive Design**: Mobile and tablet layouts
- [ ] **Smartwatch**: Device connection and data sync
- [ ] **Premium Features**: Upgrade flow and restrictions
- [ ] **Privacy**: Data consent and deletion

## 🚀 Deployment

### Production Build

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

### Deployment to Lovable

1. Click the **Publish** button in the Lovable editor
2. Configure custom domain (Premium feature)
3. Set environment variables in project settings

### Manual Deployment

For deployment to other platforms:

```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod --dir=dist

# Deploy to Firebase
firebase deploy
```

### Environment Variables for Production

Ensure the following environment variables are set in your deployment platform:

- `VITE_API_BASE_URL`
- `VITE_AI_CHAT_API_KEY`
- `VITE_STRIPE_PUBLIC_KEY`
- `VITE_ANALYTICS_ID`
- Privacy and compliance settings

## 🤝 Contributing

We welcome contributions to MindfulThai! Please follow these guidelines:

### Development Process

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Code Standards

- **TypeScript**: Strict mode enabled, no `any` types
- **ESLint**: Follow configured linting rules
- **Prettier**: Code formatting enforced
- **Conventional Commits**: Use conventional commit messages

### Pull Request Requirements

- [ ] All tests pass
- [ ] Code coverage maintained above 80%
- [ ] Documentation updated
- [ ] Cultural sensitivity reviewed
- [ ] Privacy compliance verified
- [ ] Mobile responsiveness tested

### Code Review Process

1. Automated checks must pass
2. Two team member approvals required
3. Cultural sensitivity review for Thai content
4. Privacy officer approval for data handling changes

## 📝 Documentation

### API Documentation

- [Health Data Service API](./docs/health-data-service.md)
- [Privacy Compliance Guide](./docs/privacy-compliance.md)
- [Smartwatch Integration](./docs/smartwatch-integration.md)

### Design Documentation

- [Design System](./docs/design-system.md)
- [Cultural Guidelines](./docs/cultural-guidelines.md)
- [Accessibility Standards](./docs/accessibility.md)

## 🔒 Security & Privacy

### Data Protection

- **Encryption**: All health data encrypted at rest and in transit
- **Retention**: Automatic data deletion after 30 days
- **Consent**: Granular user consent for all data collection
- **Anonymization**: Personal data anonymized for analytics

### Compliance

- **PDPA**: Thai Personal Data Protection Act compliance
- **GDPR**: European General Data Protection Regulation compliance
- **Health Data**: Special category data handling procedures
- **Audit Trail**: Complete audit log for data access and modifications

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

### Community Support

- **Discord**: [MindfulThai Community](https://discord.gg/mindful-thai)
- **GitHub Issues**: [Report bugs and request features](https://github.com/mindful-thai/issues)
- **Documentation**: [docs.mindful-thai.com](https://docs.mindful-thai.com)

### Professional Support

For enterprise support and custom implementations:
- **Email**: support@mindful-thai.com
- **Website**: [mindful-thai.com](https://mindful-thai.com)

## 🙏 Acknowledgments

- **Buddhist Teaching Centers** in Thailand for mindfulness guidance
- **Thai Mental Health Association** for cultural consultation
- **Privacy Rights Organizations** for compliance guidance
- **Open Source Community** for the amazing tools and libraries

---

Built with ❤️ for the Thai mental health community
