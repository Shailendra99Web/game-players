// DOM Manipulation Helpers
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

document.addEventListener('DOMContentLoaded', () => {
    // Fetch and process CMS data
    const cmsData = fetch('cms.json').then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json()
    }).then(data => {
        if (!data) throw new Error(`CMS data is empty or invalid`);
        // Update DOM elements with data
        updateDOM(data);
    }).catch(error => {
        console.error('Failed to fetch CMS data:', error);
        // show fallback UI
        showFallbackUI();
    });

    // Hamburger toggle
    const nav = document.querySelector('nav');
    const navItems = document.querySelector('.navItems');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelectorAll('.navLinks a, .navButtons a');

    if (hamburger && navItems) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navItems.classList.toggle('openMenu');
        })

    }
});

// If CMS content failed to load
function showFallbackUI() {
    const fallbackHTML = `
        <div class="errorMessage">
            <h2>Failed to Load Content</h2>
            <p>Please try again later.</p>
            <button class='customButton1' onclick="location.reload()">Reload</button>
        </div>
    `;
    document.querySelector('.mainContainer').innerHTML = fallbackHTML;
}


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

// Function to update DOM elements
function updateDOM(data) {
    updateElement('.logoImage', data.logoImage, 'src');
    updateElement('.companyName .firstHalf', data.companyName.firstHalf, 'innerText');
    updateElement('.companyName .secondHalf', data.companyName.secondHalf, 'innerText');

    const navLinksArray = data.navItems.navLinks;
    updateElement('.navLink.home', navLinksArray[0].url, 'href');
    updateElement('.navLink.about', navLinksArray[1].url, 'href');
    updateElement('.navLink.subscription', navLinksArray[2].url, 'href');

    const navButtonsArray = data.navItems.navButtons;
    updateElement('.navButton.button1 .navBtnLink', navButtonsArray[0].url, 'href');
    updateElement('.navButton.button2 .navBtnLink', navButtonsArray[1].url, 'href');

    updateElement('.title .firstHalf', data.hero.title.firstHalf, 'innerText');
    updateElement('.title .secondHalf', data.hero.title.secondHalf, 'innerText');

    updateElement('.description', data.hero.description, 'innerText');

    const groupCTAArray = data.hero.groupCTA;
    updateElement('.ctaButton.ctaButton1 .navBtnLink', groupCTAArray[0].url, 'href');
    updateElement('.ctaButton.ctaButton2 .navBtnLink', groupCTAArray[1].url, 'href');

    const socialLinksArray = data.hero.socialLinks
    updateElement('.socialLink1', socialLinksArray[0].url, 'href');
    updateElement('.socialLink2', socialLinksArray[1].url, 'href');
    updateElement('.socialLink3', socialLinksArray[2].url, 'href');
    updateElement('.socialLink4', socialLinksArray[3].url, 'href');
}