const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src' ,siteContent["main-content"]["middle-img-src"]);

const navLinks = document.querySelectorAll("a");
navLinks.forEach((cb, a) => cb.textContent = siteContent["nav"][`nav-item-${a+1}`]);
navLinks.forEach(cb => cb.style.color = 'red');

const ctaText = document.querySelector('.cta-text').children;
ctaText[0].textContent = siteContent["cta"]["h1"];
ctaText[1].textContent = siteContent["cta"]['button'];

const topContent = document.querySelector('.top-content').children;
const topText1 = topContent[0].children;
const topText2 = topContent[1].children;
topText1[0].textContent = siteContent['main-content']['features-h4'];
topText1[1].textContent = siteContent['main-content']['features-content'];
topText2[0].textContent = siteContent['main-content']['about-h4'];
topText2[1].textContent = siteContent['main-content']['about-content'];

const bottomContent = document.querySelector('.bottom-content').children;
const bottomText1 = bottomContent[0].children;
const bottomText2 = bottomContent[1].children;
const bottomText3 = bottomContent[1].children;
bottomText1[0].textContent = siteContent['main-content']['services-h4'];
bottomText1[1].textContent = siteContent['main-content']['services-content'];
bottomText2[0].textContent = siteContent['main-content']['product-h4'];
bottomText2[1].textContent = siteContent['main-content']['product-content'];
bottomText3[0].textContent = siteContent['main-content']['vision-h4'];
bottomText3[1].textContent = siteContent['main-content']['vision-content'];


const contact = document.querySelector('.contact').children;
contact[0].textContent = siteContent['contact']['contact-h4'];
contact[1].textContent = siteContent['contact']['address'];
contact[2].textContent = siteContent['contact']['phone'];
contact[3].textContent = siteContent['contact']['email'];

const footer = document.querySelector('footer').children;
footer[0].textContent = siteContent['footer']['copyright']

const newNav1 = document.createElement('a');
const newNav2 = document.createElement('a');
const header = document.querySelector('nav');

newNav1.textContent = "Help";
newNav2.textContent = "Yeet";

header.prepend(newNav1);
header.appendChild(newNav2);
