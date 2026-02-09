# Frontend Image Analysis Protocol

This document defines how an AI must analyze UI screenshots, designs, or references
before producing frontend code.

## 1. Goals

- Achieve pixel-level fidelity.
- Reverse engineer layout systems.
- Identify design tokens.
- Extract component boundaries.
- Infer responsive behavior.
- Prepare animation hooks.

---

## 2. Mandatory Breakdown Sections

Every analysis must include:

### A. Canvas & Grid
- Artboard size (estimate)
- Max-width container
- Column count (e.g., 12-col)
- Gutter size
- Outer padding
- Vertical rhythm unit
- Baseline grid

### B. Section Mapping
- Header region height
- Hero block
- Content sections
- Cards grids
- Footer
- Sticky areas
- Overlapping layers

### C. Spacing Measurements
- Horizontal padding in px
- Vertical gaps between sections
- Card internal padding
- Button padding
- Text spacing

Use relative mapping if absolute px cannot be read:
(e.g., 1x = 8px → scale all distances)

---

### D. Typography System

Extract:
- Font family
- Font weights
- Heading sizes
- Line heights
- Letter spacing
- Case rules
- Max line length
- Responsive typography shifts

---

### E. Color Extraction

Identify:
- Primary
- Secondary
- Accent
- Background
- Border
- Muted text
- Hover states
- Gradient directions

Include HEX + RGB + opacity.

---

### F. Elevation & Depth

- Shadow layers
- Blur radius
- Spread
- Z-index levels
- Backdrop blur
- Frosted glass effects

---

### G. Component Detection

Mark:
- Buttons
- Inputs
- Tabs
- Cards
- Chips
- Badges
- Avatars
- Icons
- Modals
- Tooltips
- Dropdowns

Each must include:
- Bounding box
- Alignment
- Variants
- States

---

### H. Responsiveness

Infer:
- Mobile stacking
- Tablet collapse
- Grid reduction
- Sticky removal
- Font scaling
- CTA priority

---

### I. Motion Clues

Look for:
- Depth hints
- Hover cues
- Blur usage
- Active states
- Scroll affordances
- Skeleton loaders