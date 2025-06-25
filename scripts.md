
# NPM Scripts Documentation

This document provides detailed information about all available npm scripts in the MindfulThai project.

## 📋 Available Scripts

### Development Scripts

#### `npm run dev`
**Purpose**: Starts the development server with hot reload
**Functionality**: 
- Launches Vite development server
- Enables hot module replacement (HMR)
- Provides TypeScript type checking
- Serves the app with source maps for debugging

**Usage**:
```bash
npm run dev
# or
yarn dev
```

**Expected Output**:
```
  VITE v4.4.5  ready in 1234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.1.100:5173/
  ➜  press h to show help
```

**Common Use Cases**:
- Primary development workflow
- Testing changes in real-time
- Component development and styling
- API integration testing

**Environment Variables Required**: None (uses defaults)

---

#### `npm run dev:mobile`
**Purpose**: Starts development server optimized for mobile testing
**Functionality**:
- Exposes server on all network interfaces
- Enables mobile device access via IP
- Includes mobile-specific debugging tools

**Usage**:
```bash
npm run dev:mobile
```

**Expected Output**:
```
  Development server accessible on mobile devices
  ➜  Mobile:   http://192.168.1.100:5173/
  ➜  QR Code: [QR CODE FOR MOBILE ACCESS]
```

**Required Environment Variables**: None

---

### Build Scripts

#### `npm run build`
**Purpose**: Creates optimized production build
**Functionality**:
- Compiles TypeScript to JavaScript
- Bundles and minifies assets
- Generates optimized CSS
- Creates source maps for production debugging
- Performs tree shaking to reduce bundle size

**Usage**:
```bash
npm run build
```

**Expected Output**:
```
vite v4.4.5 building for production...
✓ 1234 modules transformed.
dist/index.html                   0.45 kB │ gzip:  0.30 kB
dist/assets/index-abc123.css     12.34 kB │ gzip:  3.45 kB
dist/assets/index-def456.js     123.45 kB │ gzip: 45.67 kB
✓ built in 12.34s
```

**Common Use Cases**:
- Preparing for production deployment
- Performance testing with optimized code
- Bundle size analysis
- CI/CD pipeline builds

**Environment Variables Required**:
- `VITE_API_BASE_URL` (production API endpoint)
- `VITE_AI_CHAT_API_KEY` (production API key)

---

#### `npm run build:analyze`
**Purpose**: Builds project and analyzes bundle size
**Functionality**:
- Creates production build
- Generates bundle analyzer report
- Identifies large dependencies
- Provides optimization suggestions

**Usage**:
```bash
npm run build:analyze
```

**Expected Output**:
Opens browser with interactive bundle analyzer showing:
- Module sizes and dependencies
- Chunk analysis
- Optimization opportunities

---

### Preview Scripts

#### `npm run preview`
**Purpose**: Serves the production build locally
**Functionality**:
- Serves built files from `dist/` directory
- Simulates production environment
- Tests optimized build before deployment

**Usage**:
```bash
npm run preview
```

**Expected Output**:
```
  ➜  Local:   http://localhost:4173/
  ➜  Network: http://192.168.1.100:4173/
```

**Common Use Cases**:
- Final testing before deployment
- Performance validation
- Production environment simulation

---

### Testing Scripts

#### `npm run test`
**Purpose**: Runs all unit tests
**Functionality**:
- Executes Jest test runner
- Runs React Testing Library tests
- Provides coverage reports
- Validates component behavior

**Usage**:
```bash
npm run test
```

**Expected Output**:
```
 PASS  src/components/screens/HomeScreen.test.tsx
 PASS  src/services/HealthDataService.test.ts
 PASS  src/components/smartwatch/StressLevelCard.test.tsx

Test Suites: 15 passed, 15 total
Tests:       67 passed, 67 total
Snapshots:   0 total
Time:        5.432 s
```

---

#### `npm run test:watch`
**Purpose**: Runs tests in watch mode
**Functionality**:
- Continuously monitors file changes
- Re-runs affected tests automatically
- Provides interactive testing experience

**Usage**:
```bash
npm run test:watch
```

**Common Use Cases**:
- Test-driven development (TDD)
- Continuous testing during development
- Debugging failing tests

---

#### `npm run test:coverage`
**Purpose**: Runs tests and generates coverage report
**Functionality**:
- Executes all tests
- Generates HTML coverage report
- Provides coverage metrics
- Identifies untested code

**Usage**:
```bash
npm run test:coverage
```

**Expected Output**:
```
=============================== Coverage Summary ===============================
Statements   : 85.67% ( 456/532 )
Branches     : 78.90% ( 123/156 )
Functions    : 90.12% ( 89/99 )
Lines        : 86.34% ( 445/515 )
================================================================================
```

---

### Linting & Formatting Scripts

#### `npm run lint`
**Purpose**: Runs ESLint to check code quality
**Functionality**:
- Analyzes TypeScript and JavaScript files
- Checks for code style violations
- Identifies potential bugs
- Enforces coding standards

**Usage**:
```bash
npm run lint
```

**Expected Output**:
```
✨ All files pass linting rules
```

Or with errors:
```
src/components/HomeScreen.tsx
  23:5  error  'console.log' statements not allowed  no-console
  45:2  warning  Missing dependency in useEffect hook  react-hooks/exhaustive-deps
```

---

#### `npm run lint:fix`
**Purpose**: Automatically fixes linting errors
**Functionality**:
- Runs ESLint with auto-fix enabled
- Corrects fixable issues automatically
- Reports unfixable issues

**Usage**:
```bash
npm run lint:fix
```

---

#### `npm run format`
**Purpose**: Formats code using Prettier
**Functionality**:
- Formats TypeScript, JavaScript, CSS, and Markdown files
- Ensures consistent code style
- Follows project formatting rules

**Usage**:
```bash
npm run format
```

---

### Mobile Development Scripts

#### `npm run cap:add:ios`
**Purpose**: Adds iOS platform to Capacitor project
**Functionality**:
- Initializes iOS project structure
- Installs iOS-specific dependencies
- Sets up Xcode project files

**Usage**:
```bash
npm run cap:add:ios
```

**Prerequisites**:
- macOS development environment
- Xcode installed
- iOS development certificates

---

#### `npm run cap:add:android`
**Purpose**: Adds Android platform to Capacitor project
**Functionality**:
- Initializes Android project structure
- Installs Android-specific dependencies
- Sets up Android Studio project files

**Usage**:
```bash
npm run cap:add:android
```

**Prerequisites**:
- Android Studio installed
- Android SDK configured
- Java Development Kit (JDK)

---

#### `npm run cap:sync`
**Purpose**: Synchronizes web assets with mobile platforms
**Functionality**:
- Copies built web assets to mobile projects
- Updates native project dependencies
- Synchronizes Capacitor plugins

**Usage**:
```bash
npm run cap:sync
```

**When to Use**:
- After adding new Capacitor plugins
- After building web assets
- Before running on mobile devices

---

#### `npm run cap:run:ios`
**Purpose**: Builds and runs the app on iOS simulator/device
**Functionality**:
- Builds the web assets
- Synchronizes with iOS project
- Launches iOS simulator or connected device

**Usage**:
```bash
npm run cap:run:ios
```

**Prerequisites**:
- iOS platform added (`npm run cap:add:ios`)
- Xcode and iOS simulator available

---

#### `npm run cap:run:android`
**Purpose**: Builds and runs the app on Android emulator/device
**Functionality**:
- Builds the web assets
- Synchronizes with Android project
- Launches Android emulator or connected device

**Usage**:
```bash
npm run cap:run:android
```

**Prerequisites**:
- Android platform added (`npm run cap:add:android`)
- Android emulator or device connected

---

### Health Data & Privacy Scripts

#### `npm run health:test`
**Purpose**: Tests smartwatch integration and health data APIs
**Functionality**:
- Validates HealthKit integration (iOS)
- Tests Samsung Health SDK (Android)
- Verifies Fitbit API connections
- Checks data privacy compliance

**Usage**:
```bash
npm run health:test
```

**Environment Variables Required**:
- `VITE_HEALTHKIT_ENABLED=true`
- `VITE_SAMSUNG_HEALTH_ENABLED=true`
- `VITE_FITBIT_ENABLED=true`

---

#### `npm run privacy:audit`
**Purpose**: Audits privacy compliance and data handling
**Functionality**:
- Checks PDPA/GDPR compliance
- Validates data encryption
- Reviews consent mechanisms
- Generates privacy report

**Usage**:
```bash
npm run privacy:audit
```

---

### Deployment Scripts

#### `npm run deploy:staging`
**Purpose**: Deploys to staging environment
**Functionality**:
- Builds optimized version
- Deploys to staging server
- Runs smoke tests
- Notifies team of deployment status

**Usage**:
```bash
npm run deploy:staging
```

**Environment Variables Required**:
- `STAGING_API_URL`
- `STAGING_DEPLOY_KEY`

---

#### `npm run deploy:production`
**Purpose**: Deploys to production environment
**Functionality**:
- Creates production build
- Runs full test suite
- Deploys to production servers
- Performs health checks

**Usage**:
```bash
npm run deploy:production
```

**Environment Variables Required**:
- `PRODUCTION_API_URL`
- `PRODUCTION_DEPLOY_KEY`
- `PRODUCTION_ANALYTICS_ID`

---

## 🔧 Custom Script Configuration

### Adding New Scripts

To add custom scripts, update `package.json`:

```json
{
  "scripts": {
    "custom:task": "your-command-here"
  }
}
```

### Environment-Specific Scripts

Scripts can be configured for different environments:

```json
{
  "scripts": {
    "dev:local": "vite --mode development",
    "dev:staging": "vite --mode staging",
    "build:prod": "vite build --mode production"
  }
}
```

### Script Chaining

Combine multiple scripts using `&&` (sequential) or `&` (parallel):

```json
{
  "scripts": {
    "build:full": "npm run lint && npm run test && npm run build",
    "dev:all": "npm run dev & npm run test:watch"
  }
}
```

## 📊 Performance Monitoring

### Build Performance

Monitor build times and optimize as needed:
- **Target**: Build time under 30 seconds
- **Bundle Size**: Keep main bundle under 500KB
- **Chunks**: Optimize code splitting

### Development Performance

- **Hot Reload**: Should complete within 200ms
- **Type Checking**: TypeScript compilation under 5 seconds
- **Test Execution**: Unit tests under 30 seconds

## 🚨 Troubleshooting Common Issues

### Build Failures
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

### Mobile Build Issues
```bash
# Reset Capacitor
npx cap clean
npm run cap:sync
```

### Type Errors
```bash
# Restart TypeScript server
# In VS Code: Cmd/Ctrl + Shift + P > "TypeScript: Restart TS Server"
```

---

*Last updated: [Current Date]*
*For more information, see the [main README.md](./README.md)*
