# 🤝 Contributing to React Developer Assignment

Thank you for your interest in contributing to the React Developer Assignment project! This document provides guidelines and information for contributors.

## 📋 Table of Contents
- [Code of Conduct](#-code-of-conduct)
- [Getting Started](#-getting-started)
- [Development Setup](#-development-setup)
- [Contributing Process](#-contributing-process)
- [Coding Standards](#-coding-standards)
- [Project Structure](#-project-structure)
- [Testing Guidelines](#-testing-guidelines)
- [Performance Guidelines](#-performance-guidelines)
- [Accessibility Guidelines](#-accessibility-guidelines)
- [Documentation](#-documentation)
- [Getting Help](#-getting-help)

## 🌟 Code of Conduct

This project adheres to a code of conduct that ensures a welcoming environment for everyone. By participating, you agree to:

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other community members

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0.0 or higher
- npm 9.0.0 or higher
- Git
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Quick Start
```bash
# Clone the repository
git clone https://github.com/username/react-developer-assignment.git
cd react-developer-assignment

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

## 🛠️ Development Setup

### Environment Setup
1. **Fork** the repository on GitHub
2. **Clone** your fork locally
3. **Add** the upstream remote:
   ```bash
   git remote add upstream https://github.com/original/react-developer-assignment.git
   ```
4. **Install** dependencies: `npm install`
5. **Create** a new branch for your feature: `git checkout -b feature/your-feature-name`

### Available Scripts
```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run type-check   # TypeScript type checking

# Testing
npm test             # Run tests
npm run test:ui      # Run tests with UI
npm run test:coverage # Run tests with coverage

# Analysis
npm run analyze      # Bundle size analysis
npm run size         # Check bundle size limits
```

## 🔄 Contributing Process

### 1. Planning
- Check existing [issues](https://github.com/username/react-developer-assignment/issues) and [discussions](https://github.com/username/react-developer-assignment/discussions)
- For new features, create an issue first to discuss the approach
- For bug fixes, reference the existing issue or create one

### 2. Development
1. Create a new branch from `main`:
   ```bash
   git checkout main
   git pull upstream main
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following our [coding standards](#-coding-standards)

3. Test your changes:
   ```bash
   npm run type-check
   npm run lint
   npm test
   npm run build
   ```

### 3. Submission
1. **Commit** your changes with a descriptive message:
   ```bash
   git commit -m "feat: add property search functionality"
   ```

2. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create** a Pull Request using our [PR template](.github/pull_request_template.md)

4. **Respond** to feedback and make necessary changes

### Commit Message Format
We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Test additions or updates
- `chore`: Maintenance tasks

**Examples:**
```
feat: add dark mode toggle to property cards
fix: resolve search filter reset issue
docs: update installation instructions
style: improve glass morphism effects
```

## 📏 Coding Standards

### TypeScript
- Use TypeScript for all new code
- Define proper interfaces and types
- Avoid `any` type - use specific types or `unknown`
- Use proper generics where applicable

```typescript
// Good
interface PropertyFilter {
  type: 'apartment' | 'villa' | 'house'
  priceRange: { min: number; max: number }
  location: string
}

// Avoid
const filter: any = { ... }
```

### React
- Use functional components with hooks
- Implement proper error boundaries
- Use React.memo for performance optimization when needed
- Follow the hooks rules of React

```typescript
// Good
const PropertyCard: React.FC<PropertyCardProps> = React.memo(({ property }) => {
  const { isDarkMode } = useTheme()
  
  return (
    <div className={`property-card ${isDarkMode ? 'dark' : ''}`}>
      {/* component content */}
    </div>
  )
})

// Component naming
PropertyCard.displayName = 'PropertyCard'
```

### Styling
- Use inline styles for component-specific styling
- Maintain consistent design system
- Follow glass morphism design patterns
- Ensure responsive design principles

```typescript
// Consistent styling approach
const cardStyles = {
  background: isDarkMode 
    ? 'rgba(15, 23, 42, 0.8)' 
    : 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(20px) saturate(180%)',
  borderRadius: '20px',
  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)'
}
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── PropertyCard.tsx
│   ├── PropertyModal.tsx
│   └── Navbar.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── PropertyListing.tsx
│   └── TemplateSelector.tsx
├── contexts/           # React contexts
│   ├── PropertyContext.tsx
│   ├── PortfolioContext.tsx
│   └── ThemeContext.tsx
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── index.css           # Global styles
```

### Component Guidelines
- One component per file
- Use descriptive file names
- Export default at the bottom
- Include proper TypeScript interfaces

```typescript
// components/PropertyCard.tsx
import React from 'react'
import { Property } from '../contexts/PropertyContext'

interface PropertyCardProps {
  property: Property
  onViewDetails: (property: Property) => void
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onViewDetails }) => {
  // Component implementation
}

export default PropertyCard
```

## 🧪 Testing Guidelines

### Writing Tests
- Write tests for new features and bug fixes
- Use descriptive test names
- Test both happy paths and edge cases
- Mock external dependencies

```typescript
// Example test structure
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import PropertyCard from '../PropertyCard'

describe('PropertyCard', () => {
  const mockProperty = {
    id: '1',
    name: 'Test Property',
    // ... other properties
  }

  it('should display property information correctly', () => {
    const onViewDetails = vi.fn()
    
    render(<PropertyCard property={mockProperty} onViewDetails={onViewDetails} />)
    
    expect(screen.getByText('Test Property')).toBeInTheDocument()
  })

  it('should call onViewDetails when view button is clicked', () => {
    const onViewDetails = vi.fn()
    
    render(<PropertyCard property={mockProperty} onViewDetails={onViewDetails} />)
    
    fireEvent.click(screen.getByText('View Details'))
    expect(onViewDetails).toHaveBeenCalledWith(mockProperty)
  })
})
```

### Testing Checklist
- [ ] Unit tests for utility functions
- [ ] Component tests for UI behavior
- [ ] Integration tests for user workflows
- [ ] Accessibility tests
- [ ] Performance tests for critical paths

## ⚡ Performance Guidelines

### Best Practices
- Use React.memo for expensive components
- Implement proper code splitting
- Optimize images and assets
- Minimize bundle size
- Use proper loading states

```typescript
// Lazy loading for better performance
const PropertyListing = React.lazy(() => import('./pages/PropertyListing'))
const PortfolioBuilder = React.lazy(() => import('./pages/PortfolioBuilder'))

// Component with Suspense
<Suspense fallback={<LoadingSpinner />}>
  <PropertyListing />
</Suspense>
```

### Performance Monitoring
- Monitor bundle size with `npm run analyze`
- Check lighthouse scores
- Test on different devices and network conditions
- Use React DevTools Profiler

## ♿ Accessibility Guidelines

### Requirements
- Follow WCAG 2.1 AA standards
- Ensure keyboard navigation
- Provide proper ARIA labels
- Maintain color contrast ratios
- Test with screen readers

```typescript
// Good accessibility practices
<button
  onClick={handleSubmit}
  aria-label="Submit property listing form"
  disabled={isSubmitting}
>
  {isSubmitting ? 'Submitting...' : 'Submit'}
</button>

<input
  type="text"
  id="property-name"
  aria-describedby="property-name-help"
  required
/>
<div id="property-name-help">
  Enter a descriptive name for your property
</div>
```

## 📚 Documentation

### Code Documentation
- Add JSDoc comments for complex functions
- Document component props with TypeScript interfaces
- Include usage examples for reusable components
- Keep README files up to date

```typescript
/**
 * Formats a price value using Indian currency notation
 * @param price - The price in rupees
 * @returns Formatted price string (e.g., "₹1.5 Cr", "₹50 L")
 */
const formatPrice = (price: number): string => {
  // Implementation
}
```

### Component Documentation
```typescript
/**
 * PropertyCard - Displays property information in a card format
 * 
 * Features:
 * - Glass morphism design
 * - Dark mode support
 * - Hover animations
 * - Responsive layout
 * 
 * @example
 * <PropertyCard 
 *   property={propertyData} 
 *   onViewDetails={(property) => openModal(property)} 
 * />
 */
```

## 🆘 Getting Help

### Resources
- 📚 [Project Documentation](./README.md)
- 🐛 [Report Issues](https://github.com/username/react-developer-assignment/issues)
- 💬 [GitHub Discussions](https://github.com/username/react-developer-assignment/discussions)
- 📧 [Contact Maintainers](mailto:maintainers@project.com)

### Community
- Be patient and respectful
- Search existing issues before creating new ones
- Provide minimal, reproducible examples
- Include relevant system information

### Development Issues
If you encounter problems:

1. **Check the console** for error messages
2. **Verify Node.js version** (18.0.0+)
3. **Clear node_modules** and reinstall: `rm -rf node_modules package-lock.json && npm install`
4. **Check for conflicting global packages**
5. **Review recent changes** that might have caused issues

## 🎉 Recognition

Contributors will be recognized in:
- GitHub contributors list
- Project README
- Release notes
- Community showcases

Thank you for contributing to make this project better! 🚀

---

*This contributing guide is a living document. Please suggest improvements via issues or pull requests.* 