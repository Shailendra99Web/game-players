# 🎮 GamePlayers – Figma to Web (CMS Powered)

This project is a **pixel-perfect translation** of a free Figma design into a responsive website, with an added **JSON-powered CMS layer** for easy customization of navigation links, CTAs, and hero section content.  

The goal was to practice **front-end development, responsiveness, accessibility, and dynamic content loading**.

---

## 🚀 Tech Stack
- **HTML5** – semantic structure  
- **CSS3** (Flexbox, Grid, Animations, Media Queries) – layout & responsiveness  
- **JavaScript (ES6+)** – dynamic content updates, menu toggling  
- **JSON** – lightweight CMS configuration  

---

## 🎨 Design Source
- Original design: Figma Community (licensed under **CC BY 4.0**)  
- *Credit: [Diego Augusto Ferreira](https://www.figma.com/@dia) — design provided freely on Figma Community.* *[Click Here](https://www.figma.com/community/file/1201037092339951411/gameplayers-landing-page)*
- My role: **Web Development** (HTML, CSS, JS, CMS integration)  

---

## 📱 Features
- Pixel-perfect **Figma → Web** conversion  
- Fully **responsive** (desktop + mobile with hamburger menu)  
- **CMS-driven content** – all `href` links and hero texts are customizable via `cms.json`  
- Accessible navigation using `role`, `aria-label`, `aria-expanded`  
- Interactive hamburger menu with smooth open/close transitions  
- **Fallback UI** if CMS data fails to load  
- Lazy-loaded images (`loading="lazy"`)  

---

### My Additions
- Added hover effects for buttons (color & background transitions)  
- Implemented slide-in animations for hero section elements  
- Improved responsiveness with a mobile hamburger menu  
- Added footer with developer & designer credits  

---

## ⚙️ How the CMS Works
- A `cms.json` file holds customizable values (logo, nav links, CTAs, social links, etc.)  
- On page load, `main.js` fetches `cms.json` and updates the DOM dynamically  
- Example (cms.json):
```json
{
  "logoImage": "./assets/icons/logo.svg",
  "companyName": { "firstHalf": "GAME", "secondHalf": "PLAYERS" },
  "navItems": {
    "navLinks": [
      { "label": "Home", "url": "#" },
      { "label": "About", "url": "#about" },
      { "label": "Subscription", "url": "#subscription" }
    ],
    "navButtons": [
      { "label": "Dashboard", "url": "/dashboard" },
      { "label": "Download", "url": "#" }
    ]
  },
  "hero": {
    "title": { "firstHalf": "GAME", "secondHalf": "PLAYERS" },
    "description": "Are you tired of toxic players and trolls?...",
    "groupCTA": [
      { "label": "Download now", "url": "#" },
      { "label": "Or go to Dashboard", "url": "#" }
    ],
    "socialLinks": [
      { "platform": "discord", "url": "http://" },
      { "platform": "instagram", "url": "http://" },
      { "platform": "twitter", "url": "http://" },
      { "platform": "facebook", "url": "http://" }
    ]
  }
}