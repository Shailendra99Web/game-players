// DOM Manipulation Helpers
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Update element with new attribute
function updateElement(selector, content, attribute = 'textContent') {
    const element = $(selector);
    if (element && content) {
        if (attribute === 'innerHTML') {
            element.innerHTML = content;
        } else if (attribute === 'src') {
            element.src = content;
        } else if (attribute === 'href') {
            element.href = content;
        } else {
            element[attribute] = content;
        }
    }
}

class GamePlayersApp {
    constructor() {
        this.cmsData = null;
        this.init();
    }

    async init() {
        try {
            await this.loadCMSData();
            this.updateDOM();
        } catch (error) {
            this.handleError(error);
        }
    }

    async loadCMSData() {
        const response = await fetch('cms.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        this.cmsData = await response.json();
    }

    updateDOM() {
        if (!this.cmsData) return;

        this.updateLogo();
        this.updateCompanyName();
        this.updateNavItems();
        this.updateHeroSection();
        this.updateSocialLinks();
    }

    updateLogo() {
        updateElement('.logoImage', this.cmsData.logoImage, 'src');
    }
}

// document.addEventListener('DOMContentLoaded', () => {
//     new GamePlayersApp();
// });