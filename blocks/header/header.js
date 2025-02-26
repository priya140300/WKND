import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

// media query match that indicates mobile/tablet width
const isDesktop = window.matchMedia('(min-width: 900px)');

function closeOnEscape(e) {
  if (e.code === 'Escape') {
    const nav = document.getElementById('nav');
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections);
      navSectionExpanded.focus();
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections);
      nav.querySelector('button').focus();
    }
  }
}

function closeOnFocusLost(e) {
  const nav = e.currentTarget;
  if (!nav.contains(e.relatedTarget)) {
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections, false);
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections, false);
    }
  }
}

function openOnKeydown(e) {
  const focused = document.activeElement;
  const isNavDrop = focused.className === 'nav-drop';
  if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
    const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
    // eslint-disable-next-line no-use-before-define
    toggleAllNavSections(focused.closest('.nav-sections'));
    focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
  }
}

function focusNavSection() {
  document.activeElement.addEventListener('keydown', openOnKeydown);
}

/**
 * Toggles all nav sections
 * @param {Element} sections The container element
 * @param {Boolean} expanded Whether the element should be expanded or collapsed
 */
function toggleAllNavSections(sections, expanded = false) {
  sections.querySelectorAll('.nav-sections .default-content-wrapper > ul > li').forEach((section) => {
    section.setAttribute('aria-expanded', expanded);
  });
}

/**
 * Toggles the entire nav
 * @param {Element} nav The container element
 * @param {Element} navSections The nav sections within the container element
 * @param {*} forceExpanded Optional param to force nav expand behavior when not null
 */
function toggleMenu(nav, navSections, forceExpanded = null) {
  const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
  const button = nav.querySelector('.nav-hamburger button');
  document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
  nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
  button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  // enable nav dropdown keyboard accessibility
  const navDrops = navSections.querySelectorAll('.nav-drop');
  if (isDesktop.matches) {
    navDrops.forEach((drop) => {
      if (!drop.hasAttribute('tabindex')) {
        drop.setAttribute('tabindex', 0);
        drop.addEventListener('focus', focusNavSection);
      }
    });
  } else {
    navDrops.forEach((drop) => {
      drop.removeAttribute('tabindex');
      drop.removeEventListener('focus', focusNavSection);
    });
  }

  // enable menu collapse on escape keypress
  if (!expanded || isDesktop.matches) {
    // collapse menu on escape press
    window.addEventListener('keydown', closeOnEscape);
    // collapse menu on focus lost
    nav.addEventListener('focusout', closeOnFocusLost);
  } else {
    window.removeEventListener('keydown', closeOnEscape);
    nav.removeEventListener('focusout', closeOnFocusLost);
  }
}

/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // load nav as fragment
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);


 console.log(block);
 


  // decorate nav DOM
  block.textContent = '';
  //creating the black horizontal div
  const layoutElement = document.createElement("div");
  layoutElement.className="header-layout";
  block.appendChild(layoutElement);
  //creating two child elements inside the layoutElement
  //1st div
  const sign = document.createElement("div");
  sign.className="header-signIn";
  sign.textContent="SIGN IN";
  layoutElement.appendChild(sign);

    //2nd div
  const lang = document.createElement("div");
  lang.className="header-lang"; 
  const img = document.createElement("img");
  img.className="lang-img";
  img.src="https://wknd.site/etc.clientlibs/wknd/clientlibs/clientlib-site/resources/images/country-flags/US.svg";
  img.alt="us-flag";
  
  lang.appendChild(img);
  
  layoutElement.appendChild(lang);
  
  console.log(layoutElement);

  // console.log(block);
  
  
  
  
  const nav = document.createElement('nav');
  nav.id = 'nav';
  while (fragment.firstElementChild) nav.append(fragment.firstElementChild);
  
  const classes = ['brand', 'sections', 'tools'];
  classes.forEach((c, i) => {
    const section = nav.children[i];
    if (section) section.classList.add(`nav-${c}`);
  });
  
  const navBrand = nav.querySelector('.nav-brand');
  const brandLink = navBrand.querySelector('.button');
  if (brandLink) {
    brandLink.className = '';
    brandLink.closest('.button-container').className = '';
  }
  
  const navSections = nav.querySelector('.nav-sections');
  if (navSections) {
    navSections.querySelectorAll(':scope .default-content-wrapper > ul > li').forEach((navSection) => {
      if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
      navSection.addEventListener('click', () => {
        if (isDesktop.matches) {
          const expanded = navSection.getAttribute('aria-expanded') === 'true';
          toggleAllNavSections(navSections);
          navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        }
      });
    });
  }
  
  // hamburger for mobile
  const hamburger = document.createElement('div');
  hamburger.classList.add('nav-hamburger');
  hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
  <span class="nav-hamburger-icon"> </span>
  </button>`;
  // hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
  nav.prepend(hamburger);
  nav.setAttribute('aria-expanded', 'false');
  // prevent mobile nav behavior on window resize
  toggleMenu(nav, navSections, isDesktop.matches);
  isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));
  
  const navWrapper = document.createElement('div');
  navWrapper.className = 'nav-wrapper';
  navWrapper.append(nav);
  block.append(navWrapper);
  
  //creating search 

  const navtools = block.querySelector(".nav-tools");
  console.log(navtools);

 
  navtools.innerHTML="";
 


  const navContainer = document.createElement("div");
navContainer.className = "nav-container"; 


const navinput = document.createElement("input");
navinput.className = "nav-input";
navinput.placeholder = "SEARCH";


const icon = document.createElement("i");
icon.className = "nav-icon";


navContainer.appendChild(navinput);
navContainer.appendChild(icon);


navtools.appendChild(navContainer);


  const navInput =  block.querySelector(".nav-input");
  console.log(navInput);
  navInput.addEventListener("keydown",(event) => {
    if (event.key === "Enter") {
      window.location.href = "https://www.google.com";
    }

  })

  //accessing li elements for hover effect
  const navItemsWrap = navSections.querySelector("ul");
  const navItems = navItemsWrap.querySelectorAll("li");
  console.log(navItems);

  navItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.classList.add("nav_action");
    });
    item.addEventListener("mouseout", () => {
      item.classList.remove("nav_action");
    });
  });

  const navItem1 = navItemsWrap.querySelectorAll("li")[0];
  
  const navItem2 = navItemsWrap.querySelectorAll("li")[3];

  navItem1.addEventListener('click', () => {
    
    window.location="https://main--wknd--priya140300.aem.page/magazine/magazine";
  });
  
  navItem2.addEventListener('click', () => {
    
    window.location.href = 'https://main--wknd--priya140300.aem.page/about/about';
  });

  // const body_container = document.querySelector(".appear");

  // const nav_slide = document.createElement("div");
  // body_container.prepend(nav_slide);
  // nav_slide.className="nav-slide";
  // console.log(navItems);
  //targeting the grid icon
  // const navIcon =  block.querySelector(".nav-hamburger");
  
  // const nav_slide = document.createElement("div");
  // body_container.prepend(nav_slide);
  // nav_slide.className="nav-slide";
  // console.log(navItems);
  //targeting the grid icon
  const navIcon =  block.querySelector(".nav-hamburger");
  // navIcon.addEventListener(('click'),()=>{
  //   nav_slide.className="nav-slideOpen";

  // })

  const sideMenu = document.createElement("div");
  sideMenu.className="sideMenu";
  document.body.prepend(sideMenu);

  const menuList = document.createElement("ul");
  menuList.innerHTML = `
  <li><a href="https://main--wknd--priya140300.aem.page/">Home</a></li>
  <li><a href="https://main--wknd--priya140300.aem.page/magazine/magazine">Magazine</a></li>
  <li><a href="/adventures">Adventures</a></li>
  <li><a href="/faqs">FAQs</a></li>
  <li><a href="https://main--wknd--priya140300.aem.page/about/about">About Us</a></li>
`;
    sideMenu.innerHTML = "";
    sideMenu.appendChild(menuList);

  navIcon.addEventListener("click" ,() => {

      
    sideMenu.classList.toggle("show-sideMenu");
    baseBlock.classList.toggle("shift-base");
  })
  
  //Wrapping the header,main,footer to apply translate

  
    const baseBlock = document.createElement("div");

  const headerBlock = document.querySelector("header");
  const mainBlock = document.querySelector("main");
  const footerBlock = document.querySelector("footer");

  baseBlock.appendChild(headerBlock);
  baseBlock.appendChild(mainBlock);
  baseBlock.appendChild(footerBlock);

  document.body.appendChild(baseBlock);
  baseBlock.className="base-block";

  
  

  
  
}
