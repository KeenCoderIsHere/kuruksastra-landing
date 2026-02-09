# Layout & Page Architecture System

Defines how full pages must be structured.

---

## 1. Container System

- max-width tokens:
  - xl: 1280px
  - lg: 1140px
  - md: 960px
- Horizontal padding: 24px desktop / 16px mobile

---

## 2. Grid Rules

- 12 columns desktop
- 6 tablet
- 4 mobile
- Gutter = 24px

---

## 3. Section Rhythm

- Vertical spacing uses 8px scale.
- Sections separated by 96–160px.
- Headings separated by 24–32px.

---

## 4. Z-Index Layers

- base: 0
- header: 20
- overlay: 40
- modal: 80
- toast: 120

---

## 5. Sticky & Scroll

- Header sticky on desktop.
- Disable sticky on small devices.
- Scroll snap only when UX requires.

---

## 6. Page Templates

- Marketing landing
- SaaS dashboard
- Auth flow
- Settings
- Modal page
- Wizard flow

---

## 7. Responsive Strategy

- Mobile first.
- Collapse grids → stacks.
- Replace sidebars → drawers.
- Compress padding.
- Reduce shadows.