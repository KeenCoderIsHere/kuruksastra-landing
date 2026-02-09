# AI Frontend Build Rules

This file defines how AI coding agents must generate production UI.

---

## 1. Default Stack

- Framework: Next.js / React
- Styling: Tailwind
- Animations: Framer Motion
- Icons: Lucide
- Fonts via next/font

---

## 2. Output Discipline

- Typescript only.
- Functional components.
- No inline styles.
- Token driven.
- Responsive by default.

---

## 3. Must Generate

- Components folder
- Tokens file
- Motion helpers
- Layout primitives
- Accessibility hooks

---

## 4. Performance

- Memoize heavy lists.
- Lazy load routes.
- Image optimization.
- CSS containment.

---

## 5. Dark Mode

- CSS variables.
- data-theme attr.
- No duplicated classes.

---

## 6. Testing Hooks

- data-testid attributes.
- aria labels.

---

## 7. Prompt Format

When asked to build UI:

1. Read all files in /ai-specs
2. Analyze reference image
3. Produce layout spec
4. Generate tokens
5. Build components
6. Add motion
7. Output code
8. Explain assumptions

---

## 8. Forbidden

- Hardcoded pixel values unless required.
- Magic numbers.
- Inline animations.
- Accessibility shortcuts.
- Overly heavy DOM trees.