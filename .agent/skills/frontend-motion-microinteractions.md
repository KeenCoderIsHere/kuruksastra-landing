# Motion & Micro-Interaction System

Defines animation discipline.

---

## 1. Motion Principles

- Fast but soft.
- No jank.
- Subtle first.
- Physics-based.
- Respect prefers-reduced-motion.

---

## 2. Timing Tokens

| Token | Duration |
|------|--------|
| fast | 120ms |
| base | 220ms |
| slow | 360ms |

---

## 3. Easing Curves

- ease-out-cubic
- ease-in-out
- spring(0.6, 0.8)

---

## 4. Entry Patterns

- Fade + translateY(8px)
- Scale(0.96 → 1)
- Blur → sharp
- Stagger children 40ms

---

## 5. Hover Patterns

- Elevate shadow
- Lift 2px
- Saturate color
- Cursor feedback

---

## 6. Scroll Motion

- Parallax light only.
- Progress bars.
- Reveal on intersect.

---

## 7. Gesture Rules (Mobile)

- Swipe cards.
- Pull refresh.
- Drag sheets.

---

## 8. Libraries

Preferred:
- Framer Motion
- GSAP
Fallback:
- CSS transitions