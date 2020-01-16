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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let anchor = document.getElementsByTagName('a')
anchor[0].append(siteContent['nav']["nav-item-1"])
anchor[1].append(siteContent['nav']["nav-item-2"])
anchor[2].append(siteContent['nav']["nav-item-3"])
anchor[3].append(siteContent['nav']["nav-item-4"])
anchor[4].append(siteContent['nav']["nav-item-5"])
anchor[5].append(siteContent['nav']["nav-item-6"])


document.querySelectorAll('h1')[0].innerText = siteContent["cta"]["h1"]
document.getElementsByTagName('button')[0].innerText = siteContent["cta"]["button"]


let img2 = document.getElementById('cta-img');
img2.setAttribute('src',siteContent["cta"]["img-src"] )

let main = siteContent["main-content"]


document.querySelectorAll('h4')[0].innerText = main["features-h4"]
document.querySelectorAll('p')[0].innerText =  main["features-content"]
document.querySelectorAll('h4')[1].innerText = main["about-h4"]
document.querySelectorAll('p')[1].innerText =  main["about-content"]

let img3 = document.getElementById("middle-img");
img3.setAttribute('src', main["middle-img-src"])

document.querySelectorAll('h4')[2].innerText = main["services-h4"]
document.querySelectorAll('p')[2].innerText = main["services-content"]
document.querySelectorAll('h4')[3].innerText = main["product-h4"]
document.querySelectorAll('p')[3].innerText = main["product-content"]
document.querySelectorAll('h4')[4].innerText = main["vision-h4"]
document.querySelectorAll('p')[4].innerText = main["vision-content"]


let contact = siteContent["contact"]
document.getElementsByClassName('contact')[0].children[0].innerText= contact["contact-h4"]
document.getElementsByClassName('contact')[0].children[1].innerText= contact["address"]
document.getElementsByClassName('contact')[0].children[2].innerText= contact["phone"]
document.getElementsByClassName('contact')[0].children[3].innerText= contact["email"]
document.getElementsByTagName('footer')[0].children[0].innerText = siteContent["footer"]["copyright"]

