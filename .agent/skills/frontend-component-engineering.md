# Component Engineering Specification

Defines how the AI must translate designs into reusable frontend components.

---

## 1. Component Philosophy

- Atomic-first.
- Fully controlled props.
- Accessible by default.
- Themeable.
- Responsive.
- Motion-ready.

---

## 2. Required Fields Per Component

Each component spec must include:

- Name
- Responsibility
- DOM structure
- Props API
- Variants
- Visual states
- Responsive behavior
- ARIA attributes
- Keyboard navigation
- Performance notes

---

## 3. State Matrix

For every interactive element:

| State | Trigger | Visual Change |
|------|-------|------------|
| Default | idle | base style |
| Hover | pointer | elevation + tint |
| Active | click | scale + darken |
| Focus | keyboard | outline |
| Disabled | blocked | opacity |
| Loading | async | spinner |

---

## 4. Variant Strategy

- size: sm / md / lg
- tone: primary / ghost / danger
- layout: stacked / inline
- density: compact / relaxed

---

## 5. Folder Pattern

/components
  /Button
    Button.tsx
    button.styles.ts
    button.motion.ts
    button.types.ts

---

## 6. Accessibility Rules

- All icons have labels.
- Color contrast ≥ WCAG AA.
- Focus visible.
- Reduced motion support.
- Semantic tags only.

---

## 7. Performance Rules

- No layout thrash.
- Avoid rerenders.
- Memoize heavy lists.
- Lazy load offscreen.
- SVG icons inline.

---

## 8. Naming Conventions

- PascalCase components.
- camelCase props.
- Variant names via enums.