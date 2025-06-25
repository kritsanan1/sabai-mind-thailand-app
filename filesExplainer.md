
# MindfulThai Project File Structure

This document provides a comprehensive overview of the project's file structure, dependencies, and importance levels.

## Root Directory
```
mindful-thai/
├── 🟢 package.json - Project dependencies and scripts configuration
├── 🟢 tsconfig.json - TypeScript configuration for the entire project
├── 🟢 vite.config.ts - Vite build tool configuration and plugins
├── 🟢 tailwind.config.ts - Tailwind CSS configuration with custom theme
├── 🟡 components.json - shadcn/ui components configuration
├── 🟡 postcss.config.js - PostCSS configuration for CSS processing
├── 🟡 eslint.config.js - ESLint linting rules and configuration
├── 🔴 README.md - Project overview and setup instructions
└── 🔴 .gitignore - Git ignore patterns for version control
```

## Source Directory (`src/`)
```
src/
├── 🟢 main.tsx - Application entry point, renders root component
├── 🟢 App.tsx - Root component with routing and providers setup
├── 🟡 index.css - Global styles and CSS custom properties
└── 🔴 vite-env.d.ts - Vite environment type definitions
```

## Pages (`src/pages/`)
```
pages/
├── 🟢 Index.tsx - Main application shell with navigation and screen routing
└── 🟡 NotFound.tsx - 404 error page component
```

**Dependencies:** Index.tsx imports all screen components and navigation

## Components Directory (`src/components/`)

### Core UI Components (`src/components/ui/`)
**Importance:** 🟢 High - Foundation of the entire UI system
```
ui/
├── accordion.tsx - Collapsible content sections
├── alert-dialog.tsx - Modal confirmation dialogs
├── avatar.tsx - User profile pictures and placeholders
├── badge.tsx - Status indicators and labels
├── button.tsx - Primary interactive elements
├── card.tsx - Content containers and layouts
├── dialog.tsx - Modal windows and overlays
├── form.tsx - Form validation and input handling
├── input.tsx - Text input fields
├── progress.tsx - Progress bars and loading indicators
├── scroll-area.tsx - Custom scrollable containers
├── select.tsx - Dropdown selection components
├── toast.tsx - Notification system
├── tooltip.tsx - Hover information displays
└── [25+ other shadcn/ui components]
```

### Screen Components (`src/components/screens/`)
**Importance:** 🟢 High - Main application features
```
screens/
├── 🟢 HomeScreen.tsx - Dashboard with mood summary, tips, and meditation CTA
├── 🟢 ChatScreen.tsx - AI-powered mood analysis chat interface
├── 🟢 ContentScreen.tsx - Meditation library and breathing exercises
├── 🟢 TherapistScreen.tsx - Professional directory with booking system
└── 🟢 ProfileScreen.tsx - User progress, settings, and device connections
```

**Dependencies:** All screens depend on ui components and receive language props

### Navigation (`src/components/navigation/`)
```
navigation/
└── 🟢 BottomNavigation.tsx - Main app navigation with 5 tabs
```

### Smartwatch Integration (`src/components/smartwatch/`)
**Importance:** 🟡 Medium - New feature set
```
smartwatch/
├── 🟡 DeviceConnectionScreen.tsx - Smartwatch pairing and management
├── 🟡 StressLevelCard.tsx - Real-time stress monitoring display
└── 🟡 SleepSummaryChart.tsx - Sleep data visualization with charts
```

**Dependencies:** All depend on HealthDataService and recharts library

### Modal Components (`src/components/modals/`)
```
modals/
└── 🟡 PremiumUpgradeModal.tsx - Subscription conversion interface
```

### Form Components (`src/components/forms/`)
```
forms/
└── 🟡 FeedbackForm.tsx - User feedback collection interface
```

## Services (`src/services/`)
```
services/
└── 🟡 HealthDataService.ts - Smartwatch data management and privacy compliance
```

**Purpose:** Singleton service for health data operations, device connections, and data storage with PDPA/GDPR compliance

## Hooks (`src/hooks/`)
```
hooks/
├── 🟡 use-mobile.tsx - Mobile device detection utility
└── 🟡 use-toast.ts - Toast notification management
```

## Utilities (`src/lib/`)
```
lib/
└── 🟡 utils.ts - Common utility functions and class name merging
```

## Memory Files (`lovable-memories/`)
**Importance:** 🟡 Medium - Development context and documentation
```
lovable-memories/
├── feature-home-screen.md - Home screen design specifications and implementation
├── feature-smartwatch-integration.md - Smartwatch integration roadmap and status
├── navigation-structure.md - App navigation flow and user journey
├── project-overview.md - Core project requirements and design principles
└── ui-components.md - Design system and component specifications
```

## Public Assets (`public/`)
```
public/
├── 🔴 favicon.ico - Browser tab icon
├── 🔴 placeholder.svg - Placeholder image for development
└── 🔴 robots.txt - Search engine crawling instructions
```

## Configuration Files (Root Level)
- **🟢 High Importance:** package.json, tsconfig.json, vite.config.ts, tailwind.config.ts
- **🟡 Medium Importance:** components.json, postcss.config.js, eslint.config.js
- **🔴 Low Importance:** .gitignore, README.md, robots.txt

## Key Dependencies & Relationships

### Component Hierarchy
1. Index.tsx (root) → Screen components → UI components
2. All screens receive `language` prop for Thai/English support
3. Smartwatch components depend on HealthDataService
4. UI components follow shadcn/ui patterns with custom styling

### Data Flow
1. HealthDataService manages smartwatch data
2. Screen components handle local state
3. Context providers in App.tsx manage global state
4. React Query handles API calls and caching

### Styling Architecture
1. Tailwind CSS with custom theme in tailwind.config.ts
2. CSS custom properties in index.css
3. Component-specific styling using Tailwind classes
4. Responsive design with mobile-first approach

### Import Frequency Analysis
- **Most Imported:** UI components (button, card, dialog)
- **Frequently Imported:** Screen components, navigation
- **Moderately Imported:** Smartwatch components, services
- **Rarely Imported:** Configuration files, assets
