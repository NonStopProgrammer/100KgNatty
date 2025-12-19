# 100KG NATTY - AI Agent Development Guidelines

> ⚠️ **CRITICAL**: Read this document completely before making ANY changes to the codebase.

---

## 🚫 ABSOLUTE RESTRICTIONS (DO NOT CHANGE)

### Design Elements That MUST NOT Be Modified

| Element | Current Value | Status |
|---------|---------------|--------|
| **Primary Color** | Lime/ACID Green (`#84cc16`, `#a3e635`, `#ccff00`) | 🔒 LOCKED |
| **Secondary Colors** | Black, White, Neutral variants | 🔒 LOCKED |
| **Body Font** | Archivo (sans-serif) | 🔒 LOCKED |
| **Headline Font** | Kanit (italic, bold, black) | 🔒 LOCKED |
| **Font Sizes** | Existing size scale | 🔒 LOCKED |
| **Text Colors** | White/Neutral-200 (dark), Neutral-900 (light) | 🔒 LOCKED |
| **Background Colors** | Black (dark), White/Neutral-50 (light) | 🔒 LOCKED |

### Features That MUST NOT Be Removed or Altered

1. ❌ **DO NOT** remove any existing sections (Hero, About, Programs, Transformations, Pricing, Contact)
2. ❌ **DO NOT** change the navigation structure or menu items
3. ❌ **DO NOT** alter pricing amounts or tier names
4. ❌ **DO NOT** modify coach information or credentials
5. ❌ **DO NOT** change client testimonials or transformation data
6. ❌ **DO NOT** remove or modify the dark/light theme toggle functionality
7. ❌ **DO NOT** alter the email/contact form functionality
8. ❌ **DO NOT** remove existing animations or hover effects
9. ❌ **DO NOT** change the skewed aesthetic design language
10. ❌ **DO NOT** modify the Blog system functionality

---

## ✅ ALLOWED ENHANCEMENTS (ADD ONLY)

### What You CAN Do

1. ✅ **ADD** new sections between or after existing sections
2. ✅ **ADD** new components that complement existing design
3. ✅ **ADD** new animations that match existing animation style
4. ✅ **ADD** new interactive features (calculators, widgets, etc.)
5. ✅ **ADD** new pages (accessible via footer or nav additions)
6. ✅ **ADD** performance optimizations
7. ✅ **ADD** accessibility improvements
8. ✅ **ENHANCE** existing components with additional features
9. ✅ **ADD** new UI elements like badges, indicators, progress bars
10. ✅ **ADD** third-party integrations (calendars, chat widgets, analytics)

---

## 🎨 DESIGN CONSISTENCY RULES

### Color Usage

```typescript
// ALWAYS use these color patterns
const colors = {
  // Primary accent (use for CTAs, highlights, badges)
  primary: 'lime-500', // #84cc16
  primaryLight: 'lime-400', // #a3e635
  primaryDark: 'lime-600',
  primaryGlow: 'rgba(132, 204, 22, 0.5)',
  
  // Backgrounds - THEME DEPENDENT
  bgDark: 'black',
  bgLight: 'white', // or 'neutral-50'
  
  // Text - THEME DEPENDENT
  textDark: 'white', // or 'neutral-200'
  textLight: 'neutral-900',
  
  // Borders - THEME DEPENDENT
  borderDark: 'neutral-800', // or 'white/5', 'white/10'
  borderLight: 'neutral-200', // or 'black/5', 'black/10'
};
```

### Typography Rules

```typescript
// Headlines - Use Kanit
// className="font-sport font-black italic text-4xl uppercase tracking-tighter"

// Body text - Use Archivo (default)
// className="text-base" or "text-lg"

// Labels/badges - Use system
// className="text-xs font-black uppercase tracking-wider"
```

### Skewed Design Language

```css
/* Standard skew for buttons/badges */
.skew-style {
  transform: skewX(-12deg);
}

/* Counter-skew for text inside */
.skew-style span {
  transform: skewX(12deg);
}
```

---

## 🌓 THEME IMPLEMENTATION REQUIREMENTS

### MANDATORY: Dual Theme Support

**EVERY new component MUST support both dark and light themes.**

### Standard Theme Pattern

```tsx
interface MyComponentProps {
  theme: 'dark' | 'light';
  // ... other props
}

export const MyComponent: React.FC<MyComponentProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  
  return (
    <div className={`
      ${isDark ? 'bg-black text-white' : 'bg-white text-neutral-900'}
      ${isDark ? 'border-neutral-800' : 'border-neutral-200'}
    `}>
      {/* Component content */}
    </div>
  );
};
```

### Common Theme-Aware Class Patterns

```tsx
// Backgrounds
className={isDark ? 'bg-black' : 'bg-white'}
className={isDark ? 'bg-neutral-900' : 'bg-neutral-50'}
className={isDark ? 'bg-neutral-900/50' : 'bg-neutral-100'}

// Text
className={isDark ? 'text-white' : 'text-neutral-900'}
className={isDark ? 'text-neutral-400' : 'text-neutral-600'}
className={isDark ? 'text-neutral-300' : 'text-neutral-700'}

// Borders
className={isDark ? 'border-neutral-800' : 'border-neutral-200'}
className={isDark ? 'border-white/5' : 'border-black/5'}
className={isDark ? 'border-white/10' : 'border-black/10'}

// Hover States
className={isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'}
className={isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'}

// Cards/Containers
className={`${isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'}`}

// Gradients
className={isDark ? 'from-black' : 'from-white'}
className={isDark ? 'from-black/80' : 'from-white/80'}
```

### Testing Requirements

Before submitting ANY component:
1. ✅ Test in dark theme (default)
2. ✅ Test in light theme
3. ✅ Check all text is readable in both themes
4. ✅ Verify all borders are visible in both themes
5. ✅ Confirm hover states work in both themes
6. ✅ Test on mobile viewport in both themes

---

## 📁 PROJECT STRUCTURE

```
100KgNatty/
├── App.tsx                 # Main app with routing logic
├── index.html              # HTML entry with Tailwind config
├── index.tsx               # React entry point
├── index.css               # Custom styles
├── components/
│   ├── Navbar.tsx          # Navigation header
│   ├── Hero.tsx            # Hero carousel
│   ├── About.tsx           # About section with stats
│   ├── Programs.tsx        # Programs grid
│   ├── ProgramDetails.tsx  # Program detail page
│   ├── Transformations.tsx # Testimonials carousel
│   ├── Pricing.tsx         # Pricing tiers
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer section
│   ├── Blogs.tsx           # Blog listing
│   ├── BlogDetail.tsx      # Blog article page
│   ├── PrivacyPolicy.tsx   # Privacy policy page
│   ├── TermsOfService.tsx  # Terms of service page
│   ├── Reveal.tsx          # Scroll reveal animation wrapper
│   ├── Logo.tsx            # Logo component
│   └── ui/                 # Reusable UI components (empty)
├── data/
│   └── blogData.ts         # Blog post data
└── public/
    └── assets/images/      # All images
```

### Where to Add New Components

1. **New sections for homepage**: Add to `components/` and import in `App.tsx`
2. **Reusable UI components**: Add to `components/ui/`
3. **New standalone pages**: Add to `components/` with proper routing in `App.tsx`
4. **Data files**: Add to `data/`

---

## 🔧 COMPONENT CREATION CHECKLIST

When creating a new component:

- [ ] File named in PascalCase (e.g., `MyNewComponent.tsx`)
- [ ] Interface defined for props with `theme` property
- [ ] Uses `isDark` constant for theme checks
- [ ] All colors are theme-aware
- [ ] Uses Kanit (`font-sport`) for headlines
- [ ] Uses skewed design for CTAs/badges where appropriate
- [ ] Uses `<Reveal>` wrapper for scroll animations
- [ ] Mobile responsive (test at 375px width)
- [ ] Uses existing animation classes where possible
- [ ] No hardcoded colors that ignore theme
- [ ] Follows existing component patterns
- [ ] Has proper TypeScript types

---

## 🎬 ANIMATION GUIDELINES

### Available Animations

```javascript
// From Tailwind config in index.html
'fade-in-up'     // Fade in from below
'fade-in-right'  // Fade in from left
'slide-in-left'  // Slide in from right
'marquee'        // Horizontal scroll
'float'          // Gentle up-down floating
'pulse-slow'     // Slow pulse (4s duration)
'shine'          // Shine sweep effect
'spin-slow'      // Slow rotation (12s)
'logo-pulse'     // Logo glow pulse
```

### Using Reveal Component

```tsx
import { Reveal } from './Reveal';

// Basic usage
<Reveal>
  <div>Your content</div>
</Reveal>

// With delay (for staggered animations)
<Reveal delay={0.2}>
  <div>Delayed content</div>
</Reveal>

// Full width (for grid items)
<Reveal delay={0.1} width="100%">
  <div>Full width item</div>
</Reveal>
```

### Hover Animation Patterns

```tsx
// Standard hover lift
className="hover:-translate-y-2 transition-all duration-300"

// Hover with glow
className="hover:shadow-[0_0_30px_rgba(132,204,22,0.2)]"

// Hover with border highlight
className="hover:border-lime-500"

// Hover with scale
className="hover:scale-105 transition-transform"

// Complex hover (combine multiple)
className="hover:-translate-y-2 hover:border-lime-500 hover:shadow-[0_0_20px_rgba(132,204,22,0.3)] transition-all duration-300"
```

---

## 📱 RESPONSIVE DESIGN RULES

### Breakpoints (Tailwind defaults)

```
sm: 640px   // Small tablets
md: 768px   // Tablets
lg: 1024px  // Laptops
xl: 1280px  // Desktops
```

### Mobile-First Patterns

```tsx
// Grid columns
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Text sizing
className="text-4xl sm:text-5xl lg:text-6xl"

// Spacing
className="px-4 sm:px-6 lg:px-8"

// Hide/show
className="hidden lg:flex"  // Hide on mobile
className="lg:hidden"       // Show only on mobile
```

---

## 🔐 IMPORTANT PATTERNS

### Smooth Scroll Navigation

```tsx
const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};
```

### Form Submission Pattern

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError(false);
  
  try {
    // API call
    setIsSubmitting(false);
    setSubmitted(true);
  } catch (err) {
    setIsSubmitting(false);
    setError(true);
  }
};
```

### Section Layout Pattern

```tsx
<section className={`py-24 ${isDark ? 'bg-black' : 'bg-white'} relative overflow-hidden transition-colors duration-500`}>
  {/* Background effects */}
  <div className="absolute ..."></div>
  
  {/* Content container */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section header */}
    <Reveal>
      <h2 className={`font-sport font-black italic text-4xl sm:text-5xl uppercase tracking-tighter ${isDark ? 'text-white' : 'text-neutral-900'} mb-6 text-center`}>
        Section <span className="text-lime-500">Title</span>
      </h2>
    </Reveal>
    
    {/* Section content */}
    <div className="...">
      {/* Content here */}
    </div>
  </div>
</section>
```

---

## 📋 COMMON MISTAKES TO AVOID

1. ❌ Using `bg-gray-*` instead of `bg-neutral-*`
2. ❌ Forgetting theme support (hardcoding dark mode colors)
3. ❌ Using color names other than lime/green for accents
4. ❌ Not using `font-sport` for headlines
5. ❌ Missing the skew effect on CTAs
6. ❌ Forgetting mobile responsiveness
7. ❌ Not wrapping content in `<Reveal>` for scroll animations
8. ❌ Using regular font-weight instead of `font-black italic` for headlines
9. ❌ Missing `uppercase tracking-tighter` on headlines
10. ❌ Not testing in both themes

---

## 🧪 TESTING CHECKLIST

Before considering any feature complete:

### Visual Testing
- [ ] Renders correctly in dark mode
- [ ] Renders correctly in light mode
- [ ] All text is readable (sufficient contrast)
- [ ] Animations play smoothly
- [ ] Hover states work properly
- [ ] No layout shifts or glitches

### Responsive Testing
- [ ] Mobile (375px) - Complete functionality
- [ ] Tablet (768px) - Proper layout
- [ ] Desktop (1280px) - Full feature set
- [ ] No horizontal overflow at any breakpoint

### Functional Testing
- [ ] All buttons/links work
- [ ] Forms validate correctly
- [ ] No console errors
- [ ] No TypeScript errors

---

## 📚 REFERENCE: See SPECS.md

For feature ideas and detailed descriptions of what to build, see the `SPECS.md` file which contains:
- Complete website overview
- List of ~30 enhancement suggestions
- Prioritized implementation order
- Technical considerations

---

## 💡 QUICK START FOR NEW FEATURES

1. Read the feature description in `SPECS.md`
2. Create new component file in `components/`
3. Follow the component creation checklist above
4. Implement theme support from the start
5. Use existing animation patterns
6. Test in both themes
7. Test on mobile
8. Integrate into `App.tsx` if needed

---

*Last Updated: December 2024*
*Version: 1.0*
