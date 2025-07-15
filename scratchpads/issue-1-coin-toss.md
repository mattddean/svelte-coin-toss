# Issue #1: 3D Coin Toss Implementation

**GitHub Issue**: https://github.com/mattddean/svelte-coin-toss/issues/1

## Requirements
- 3D coin in the middle of the page
- Click to flip with 3D animation
- Shows heads or tails result
- Can click again to flip again
- Built with Svelte 5 runes
- Pure CSS implementation (no images)
- Spacebar support for flipping
- White background

## Implementation Plan

### 1. Coin Component Design
- Use CSS transforms for 3D effect
- Two-sided coin with "HEADS" and "TAILS" text
- Metallic gradient styling
- Smooth flip animation using CSS transitions

### 2. State Management
- Coin states: idle, flipping, heads, tails
- Random result generation
- Animation timing control

### 3. Interactivity
- Click handler on coin
- Keyboard event listener for spacebar
- Disable interactions during animation

### 4. CSS 3D Technique
- `transform-style: preserve-3d` for container
- `rotateY()` transforms for flip animation
- Backface visibility control for two-sided effect

## Technical Notes
- Animation duration: ~1 second for realistic feel
- Random flip rotations (e.g., 1800deg + result offset)
- Use Svelte 5 `$state` for reactivity
- Clean, minimal design on white background