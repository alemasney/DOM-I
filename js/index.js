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
// all images on page.
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"])

  let ctaImage = document.getElementById("cta-img");
  ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

  let middleImage = document.getElementById("middle-img");
  middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Header Section
  // Nav section
    let navItems = [
      siteContent.nav["nav-item-1"], 
      siteContent.nav["nav-item-2"], 
      siteContent.nav["nav-item-3"], 
      siteContent.nav["nav-item-4"], 
      siteContent.nav["nav-item-5"], 
      siteContent.nav["nav-item-6"]];

    let mainNavItems = document.querySelectorAll('nav a');
    for(let i =0; i < navItems.length; i++) {
      mainNavItems[i].style.color = 'green';
      mainNavItems[i].textContent = navItems[i];
    }

    let navMenu = document.querySelector('nav');

    let navBeforeItem = document.querySelector('a');
    navBeforeItem.textContent = 'Before';
    navMenu.prepend(navBeforeItem);

    let navAfterItem = document.createElement('a');
    navAfterItem.style.color = 'green';
    navAfterItem.textContent = 'After';
    navMenu.appendChild(navAfterItem);

// CTA Section
  let ctaHeading = document.querySelector('h1');
  ctaHeading.innerHTML = `DOM<br/>IS<br/>AWESOME`;

  let btn = document.querySelector('button');
  btn.textContent = "Get Started";

// h4 for each section.
  let h4Items = [
    siteContent['main-content']['features-h4'],
    siteContent['main-content']['about-h4'],
    siteContent['main-content']['services-h4'],
    siteContent['main-content']['product-h4'],
    siteContent['main-content']['vision-h4'],
    siteContent['contact']['contact-h4']];

  let h4Heading = document.querySelectorAll('h4');
  for (let i = 0; i < h4Items.length; i++) {
    h4Heading[i].textContent = h4Items[i];
  }

// Main-Content section
  // Top Content
    let featuresPTag = document.querySelector('.text-content p');
    featuresPTag.textContent = siteContent["main-content"]["features-content"];

    let aboutPTag = document.querySelector('.text-content:nth-child(2) p');
    aboutPTag.textContent = siteContent["main-content"]["about-content"];

  // Bottom Content
    let servicesPTag = document.querySelector('.bottom-content p');
    servicesPTag.textContent = siteContent["main-content"]["services-content"];

    let productPTag = document.querySelector('.bottom-content .text-content:nth-child(2) p');
    productPTag.textContent = siteContent["main-content"]["product-content"];

    let visionPTag = document.querySelector('.bottom-content .text-content:last-child p')
    visionPTag.textContent = siteContent["main-content"]["vision-content"];

// Contact section
  let contactSection = document.querySelector('.contact');
  contactSection.style.width = '200px';
  
  let contactP1 = document.querySelector('.contact p');
  contactP1.textContent = siteContent.contact.address;

  letcontactP2 = document.querySelector('.contact p:nth-child(3)');
  letcontactP2.textContent = siteContent.contact.phone;

  let contactP3 = document.querySelector('.contact p:last-child');
  contactP3.textContent = siteContent.contact.email;


// Footer section
  let footerContent = document.querySelector("footer p");
  footerContent.textContent = siteContent.footer.copyright;


// Stretch Goals
  //Events

  btn.addEventListener('click', (event) => event.target.style.backgroundColor = 'red');

