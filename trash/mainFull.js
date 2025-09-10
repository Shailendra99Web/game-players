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
        // showFallbackUI();
    });
});


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

// updateElement('.title', `<span class="firstHalf">${data.hero.title.firstHalf}</span><span class="secondHalf">${data.hero.title.secondHalf}</span>`, 'innerHTML');

// Function to update DOM elements
function updateDOM(data) {

    // const logoImage = $('.logoImage');
    // if (logoImage && data.logoImage) logoImage.src = data.logoImage;

    // Update company name
    // const companyNameFirstHalf = $('.companyName .firstHalf');
    // const companyNameSecondHalf = $('.companyName .secondHalf');
    // if (companyNameFirstHalf && companyNameSecondHalf && data.companyName) {
    //     companyNameFirstHalf.innerText = data.companyName.firstHalf;
    //     companyNameSecondHalf.innerText = data.companyName.secondHalf;
    // }

    // const navLinks = $('.navLinks');
    // if (navLinks && data.navItems && Array.isArray(data.navItems.navLinks)) {
    //     navLinks.innerHTML = '';
    //     data.navItems.navLinks.forEach((link) => {
    //         const li = document.createElement('li');
    //         const a = document.createElement('a');
    //         a.className = 'navLink';
    //         a.href = link.url || '#';
    //         a.textContent = link.label || '';
    //         li.appendChild(a);
    //         navLinks.appendChild(li);
    //     });
    // };

    // const navButtonsButton1Icon = $('.navButtons .button1 .button1Icon');
    // const navButtonsButton1IconHover = $('.navButtons .button1 .button1IconHover');
    // const navButtonsButton1IconAnchorTag = $('.navButtons .button1 .navBtnLink');
    // if (navButtonsButton1Icon && navButtonsButton1IconHover && navButtonsButton1IconAnchorTag && Array.isArray(data.navItems.navButtons)) {
    //     const navButton1Data = data.navItems.navButtons[0]
    //     navButtonsButton1Icon.src = navButton1Data.iconUrl
    //     navButtonsButton1IconHover.src = navButton1Data.iconUrlHover
    //     navButtonsButton1IconAnchorTag.innerText = navButton1Data.label
    //     navButtonsButton1IconAnchorTag.href = navButton1Data.url
    // }

    // const navButtonsButton2Icon = $('.navButtons .button2 .button2Icon');
    // const navButtonsButton2IconHover = $('.navButtons .button2 .button2IconHover');
    // const navButtonsButton2IconAnchorTag = $('.navButtons .button2 .navBtnLink');
    // if (navButtonsButton2Icon && navButtonsButton2IconHover && navButtonsButton2IconAnchorTag && Array.isArray(data.navItems.navButtons)) {
    //     const navButton2Data = data.navItems.navButtons[1]
    //     navButtonsButton2Icon.src = navButton2Data.iconUrl
    //     navButtonsButton2IconHover.src = navButton2Data.iconUrlHover
    //     navButtonsButton2IconAnchorTag.innerText = navButton2Data.label
    //     navButtonsButton2IconAnchorTag.href = navButton2Data.url
    // }

    // const mainTitle = $('.title');
    // if (mainTitle && data.hero.title) {
    //     mainTitle.innerHTML = `<span class="firstHalf">${data.hero.title.firstHalf}</span><span class="secondHalf">${data.hero.title.secondHalf}</span>`;
    // }
    // const mainTitleFirstHalf = $('.heroSection .title .firstHalf');
    // const mainTitleSecondHalf = $('.heroSection .title .secondHalf');
    // if (mainTitleFirstHalf && mainTitleSecondHalf && data.hero.title) {
    //     const heroTitle = data.hero.title
    //     mainTitleFirstHalf.innerText = heroTitle.firstHalf;
    //     mainTitleSecondHalf.innerText = heroTitle.secondHalf;
    // }

    // const mainDescription = $('.description');
    // if (mainDescription && data.hero.description) {
    //     mainDescription.textContent = data.hero.description;
    // }

    // const groupCTAButton1Icon = $('.groupCTA .ctaButton1 .ctaButton1Icon');
    // const groupCTAButton1IconHover = $('.groupCTA .ctaButton1 .ctaButton1IconHover');
    // const groupCTAButton1IconAnchorTag = $('.groupCTA .ctaButton1 .navBtnLink');
    // if (groupCTAButton1Icon && groupCTAButton1IconHover && groupCTAButton1IconAnchorTag && Array.isArray(data.hero.groupCTA)) {
    //     const groupCTAButton1Data = data.hero.groupCTA[0]
    //     groupCTAButton1Icon.src = groupCTAButton1Data.ctaIconUrl
    //     groupCTAButton1IconHover.src = groupCTAButton1Data.ctaIconUrlHover
    //     groupCTAButton1IconAnchorTag.innerText = groupCTAButton1Data.ctaText
    //     groupCTAButton1IconAnchorTag.href = groupCTAButton1Data.ctaUrl
    // }

    // // const groupCTAButton2Icon = $('.groupCTA .ctaButton2 .ctaButton2Icon');
    // const groupCTAButton2IconAnchorTag = $('.groupCTA .ctaButton2 .navBtnLink');
    // if (groupCTAButton2IconAnchorTag && Array.isArray(data.hero.groupCTA)) {
    //     const groupCTAButton2Data = data.hero.groupCTA[1]
    //     // groupCTAButton2Icon.src = groupCTAButton2Data.ctaIconUrl
    //     groupCTAButton2IconAnchorTag.innerText = groupCTAButton2Data.ctaText
    //     groupCTAButton2IconAnchorTag.href = groupCTAButton2Data.ctaUrl
    // }

    // const socialLink1 = $('.socialLink1');
    // const socialLink2 = $('.socialLink2');
    // const socialLink3 = $('.socialLink3');
    // const socialLink4 = $('.socialLink4');

    // if (socialLink1 && socialLink2 && socialLink3 && socialLink4 && Array.isArray(data.hero.socialLinks)) {
    //     const socialLinkArray = data.hero.socialLinks
    //     socialLink1.href = socialLinkArray[0].url;
    //     socialLink2.href = socialLinkArray[1].url;
    //     socialLink3.href = socialLinkArray[2].url;
    //     socialLink4.href = socialLinkArray[3].url;

    //     // Update social link images
    //     const socialLink1Img = socialLink1.querySelector('img');
    //     const socialLink2Img = socialLink2.querySelector('img');
    //     const socialLink3Img = socialLink3.querySelector('img');
    //     const socialLink4Img = socialLink4.querySelector('img');

    //     if (socialLink1Img && socialLinkArray[0].iconUrl) socialLink1Img.src = socialLinkArray[0].iconUrl;
    //     if (socialLink2Img && socialLinkArray[1].iconUrl) socialLink2Img.src = socialLinkArray[1].iconUrl;
    //     if (socialLink3Img && socialLinkArray[2].iconUrl) socialLink3Img.src = socialLinkArray[2].iconUrl;
    //     if (socialLink4Img && socialLinkArray[3].iconUrl) socialLink4Img.src = socialLinkArray[3].iconUrl;
    // }

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