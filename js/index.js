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

// --- Header ---
document.getElementById("logo-img").src = siteContent["nav"]["img-src"];

// Nav Links
document.querySelectorAll("nav a").forEach((link, index) => {
  link.textContent = siteContent["nav"][`nav-item-${index + 1}`];
  link.style.color = 'green';
});
// Added Links
const nav = document.querySelector("nav");
const addLinks = ["Demo", "Quote"];
addLinks.forEach((link, index) => {
  const newLink = document.createElement("a");
  newLink.textContent = link;
  newLink.style.color = "green";
  return index === 0 ? nav.prepend(newLink) : nav.append(newLink);
});

// CTA
document.querySelector(".cta-text h1").textContent = siteContent["cta"]["h1"];
document.querySelector(".cta-text button").textContent = siteContent["cta"]["button"];
document.getElementById("cta-img").src = siteContent["cta"]["img-src"];

// --- Main Content ---
// Top
document.querySelectorAll(".text-content h4")[0].textContent = siteContent["main-content"]["features-h4"];
document.querySelectorAll(".text-content p")[0].textContent = siteContent["main-content"]["features-content"];

document.querySelectorAll(".text-content h4")[1].textContent = siteContent["main-content"]["about-h4"];
document.querySelectorAll(".text-content p")[1].textContent = siteContent["main-content"]["about-content"];

// Image
document.getElementById("middle-img").src = siteContent["main-content"]["middle-img-src"];

// Bottom
document.querySelectorAll(".text-content h4")[2].textContent = siteContent["main-content"]["services-h4"];
document.querySelectorAll(".text-content p")[2].textContent = siteContent["main-content"]["services-content"];

document.querySelectorAll(".text-content h4")[3].textContent = siteContent["main-content"]["product-h4"];
document.querySelectorAll(".text-content p")[3].textContent = siteContent["main-content"]["product-content"];

document.querySelectorAll(".text-content h4")[4].textContent = siteContent["main-content"]["vision-h4"];
document.querySelectorAll(".text-content p")[4].textContent = siteContent["main-content"]["vision-content"];

// --- Contact ---
document.querySelector(".contact h4").textContent = siteContent["contact"]["contact-h4"];
document.querySelectorAll(".contact p")[0].textContent = siteContent["contact"]["address"];
document.querySelectorAll(".contact p")[1].textContent = siteContent["contact"]["phone"];
document.querySelectorAll(".contact p")[2].textContent = siteContent["contact"]["email"];

// --- Footer ---

document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];
