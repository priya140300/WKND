import {
  buildBlock,
  loadHeader,
  loadFooter,
  decorateButtons,
  decorateIcons,
  decorateSections,
  decorateBlocks,
  decorateTemplateAndTheme,
  waitForFirstImage,
  loadSection,
  loadSections,
  loadCSS,
} from './aem.js';

/**
 * Builds hero block and prepends to main in a new section.
 * @param {Element} main The container element
 */
function buildHeroBlock(main) {
  const h1 = main.querySelector('h1');
  const picture = main.querySelector('picture');
  // eslint-disable-next-line no-bitwise
  if (h1 && picture && (h1.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING)) {
    const section = document.createElement('div');
    section.append(buildBlock('hero', { elems: [picture, h1] }));
    main.prepend(section);
  }
}

/**
 * load fonts.css and set a session storage flag
 */
async function loadFonts() {
  await loadCSS(`${window.hlx.codeBasePath}/styles/fonts.css`);
  try {
    if (!window.location.hostname.includes('localhost')) sessionStorage.setItem('fonts-loaded', 'true');
  } catch (e) {
    // do nothing
  }
}

/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
function buildAutoBlocks(main) {
  try {
    buildHeroBlock(main);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Auto Blocking failed', error);
  }
}
 //function to add shadow on scrolling
 
 const addShadowOnScroll = () => {
  window.addEventListener("scroll", function () {
    const topDiv = document.querySelector(".header"); // Adjust selector as needed
    const bottomDiv = document.querySelector(".carousel-wrapper"); // Adjust selector as needed

    if (!topDiv || !bottomDiv) return; // Ensure elements exist

    const bottomRect = bottomDiv.getBoundingClientRect();
    const topRect = topDiv.getBoundingClientRect();

    if (bottomRect.top <= topRect.bottom) {
      topDiv.classList.add("shadow");
    } else {
      topDiv.classList.remove("shadow");
    }
  });
}

const addShadowOnScrollMagz = () => {
  window.addEventListener("scroll", function () {
    const topDiv = document.querySelector(".header"); // Adjust selector as needed
    const bottomDiv = document.querySelector(".title-wrapper"); // Adjust selector as needed

    if (!topDiv || !bottomDiv) return; // Ensure elements exist

    const bottomRect = bottomDiv.getBoundingClientRect();
    const topRect = topDiv.getBoundingClientRect();

    if (bottomRect.top <= topRect.bottom) {
      topDiv.classList.add("shadow");
    } else {
      topDiv.classList.remove("shadow");
    }
  });
}

const addShadowOnScrollAbout = () => {
  window.addEventListener("scroll", function () {
    const topDiv = document.querySelector(".header"); // Adjust selector as needed
    const bottomDiv = document.querySelector(".guides-container"); // Adjust selector as needed

    if (!topDiv || !bottomDiv) return; // Ensure elements exist

    const bottomRect = bottomDiv.getBoundingClientRect();
    const topRect = topDiv.getBoundingClientRect();

    if (bottomRect.top <= topRect.bottom) {
      topDiv.classList.add("shadow");
    } else {
      topDiv.classList.remove("shadow");
    }
  });
}





/**
 * Decorates the main element.
 * @param {Element} main The main element
 */
// eslint-disable-next-line import/prefer-default-export
export function decorateMain(main) {
  // hopefully forward compatible button decoration
  decorateButtons(main);
  decorateIcons(main);
  buildAutoBlocks(main);
  decorateSections(main);
  decorateBlocks(main);
}

/**
 * Loads everything needed to get to LCP.
 * @param {Element} doc The container element
 */
async function loadEager(doc) {
  document.documentElement.lang = 'en';
  decorateTemplateAndTheme();
  const main = doc.querySelector('main');
  if (main) {
    decorateMain(main);
    document.body.classList.add('appear');
    await loadSection(main.querySelector('.section'), waitForFirstImage);
  }

  try {
    /* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
    if (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) {
      loadFonts();
    }
  } catch (e) {
    // do nothing
  }
}

/**
 * Loads everything that doesn't need to be delayed.
 * @param {Element} doc The container element
 */

// here 
async function loadLazy(doc) {
  const main = doc.querySelector('main');
  await loadSections(main);

  const { hash } = window.location;
  const element = hash ? doc.getElementById(hash.substring(1)) : false;
  if (hash && element) element.scrollIntoView();

  loadHeader(doc.querySelector('header'));
  loadFooter(doc.querySelector('footer'));

  loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  loadFonts();

  addShadowOnScroll();
  addShadowOnScrollMagz();
  addShadowOnScrollAbout();

  const feature_cont = doc.querySelector(".section .default-content-wrapper");
  console.log(feature_cont);
  feature_cont.className="feature_cont";

  //accessing the para tag of the featured-article
  const feature_block = doc.querySelector(".feature_cont");
  const feature_image = feature_block.querySelectorAll("p")[3];
  feature_image.className="feature-img";

  // wrapping child elements into new single element
  const feature_desc = document.createElement("div");
  feature_desc.className="feature-desc";
  const children = [...feature_block.children];

  children.forEach((child) =>{
    if(!child.classList.contains("feature-img")){
      feature_desc.appendChild(child);
    }

  })
  
  feature_block.insertBefore(feature_desc, feature_block.firstChild);
  console.log(feature_desc);

  const featAction = feature_desc.querySelectorAll("p")[2];
  console.log(featAction);
  featAction.className="content_action";
  

  const featureDesc = doc.querySelector(".feature-desc"); // Define it before using

  if (featureDesc) {
    const desc_para = featureDesc.querySelector("p");
    const desc_para2 = featureDesc.querySelectorAll("p")[1];
    const desc_para3 = featureDesc.querySelectorAll("p")[2];
    
    desc_para2.className="desc-para2";
  console.log(desc_para2);

  desc_para3.className="content_action";

    if (desc_para) {
      desc_para.className = "desc-para";
      console.log(desc_para);
    } else {
      console.log("⚠️ No <p> found inside .feature-desc");
    }
  } 
  else {
    console.log("⚠️ .feature-desc not found");
  }

  const desc_title = doc.getElementById("camping-in-western-australia");
  desc_title.className="desc-title";

  const h2Element = document.getElementById("recent-articles"); 
  const article_heading  = h2Element.querySelector("strong"); 
  article_heading.className="art-heading";

  const art_span = document.createElement("span");
  art_span.className="art-heading";
 art_span.innerHTML=article_heading.innerHTML;
 article_heading.replaceWith(art_span);
  
  console.log(art_span);

  const artLine = document.createElement("hr");
  artLine.className="adv-line";
  h2Element.appendChild(artLine);

  //accessing the third section 
  const section2 = document.querySelectorAll(".section")[2];
  console.log(section2);
  const contentWrapper =  section2.querySelector(".default-content-wrapper");
  // console.log(section2_wrap);

  const firstHeading = contentWrapper.querySelector("h2"); 
  const newWrapper = document.createElement("div");
  newWrapper.className = "articles-wrapper"; 

  
  const articleChildren = [...contentWrapper.children]; 
  articleChildren.forEach((child) => {
    if (child !== firstHeading) {
      newWrapper.appendChild(child);
    }
  });

 
  contentWrapper.appendChild(newWrapper);

  //accessing imgs in the section
  const artWrap =  doc.querySelector(".articles-wrapper");
  const imgBlock = artWrap.querySelectorAll("picture");

  imgBlock.forEach((img) =>{
    img.className="article_Img";

  })

  const artTitle =  artWrap.querySelectorAll("p")[1];
  artTitle.className="artTitle";
  const skiTitle =  artWrap.querySelectorAll("p")[4];
  skiTitle.className="artTitle";
  const articTitle =  artWrap.querySelectorAll("p")[7];
  articTitle.className="artTitle";
  const surfTitle =  artWrap.querySelectorAll("p")[10];
  surfTitle.className="artTitle";


  //adding classname to the desc
  const guideDesc = artWrap.querySelectorAll("p")[2];
  guideDesc.className="art-desc"
  const skiDesc = artWrap.querySelectorAll("p")[5];
  skiDesc.className= "art-desc";
  const arcDesc = artWrap.querySelectorAll("p")[8];
  arcDesc.className="art-desc"
  const surfDesc = artWrap.querySelectorAll("p")[11];
  surfDesc.className="art-desc";


  const artAction = artWrap.querySelectorAll("p")[12];
  artAction.className="content_action";

  const arcLine = document.createElement("hr");
  arcLine.className="arc-line";
  artWrap.appendChild(arcLine);

  //accessing the heading element of third section
  const headBlock = document.querySelector("#next-adventures");
  console.log(headBlock);
  const titleBlock = headBlock.querySelector("strong");
  console.log(titleBlock);
  titleBlock.className="title-block";

  //appending the horizontal line
  const adventureLine = document.createElement("hr");
  adventureLine.className="adv-line";
  headBlock.appendChild(adventureLine);

  const section3 = document.querySelectorAll(".section")[3];
  const secImage = section3.querySelectorAll("p")[0];
  secImage.className="sec-img";

  const secDesc = section3.querySelectorAll("p")[1];
  const secAction = section3.querySelectorAll("p")[2];

  secDesc.className="secDesc";
  secAction.className="sec-action";
  console.log(secDesc);

//accessing 4th section

const section4 = document.querySelectorAll(".section")[4];
  console.log(section4);
  const contentWrapperPlaces =  section4.querySelector(".default-content-wrapper");
  // console.log(section2_wrap);

  const firstHeadingPlaces = contentWrapperPlaces.querySelector("h3"); 
  console.log(firstHeadingPlaces);

  const placesWrap = document.createElement("div");
  placesWrap.className = "articles-wrapper"; 
  console.log(placesWrap);

  
  const placesChildren = [...contentWrapperPlaces.children]; 
  console.log(placesChildren);
  placesChildren.forEach((child) => {
    if (child !== firstHeadingPlaces) {
      placesWrap.appendChild(child);
    }
  });

 
  contentWrapperPlaces.appendChild(placesWrap);
  console.log(contentWrapperPlaces);

  const placesWrapper = doc.querySelectorAll(".articles-wrapper")[1];
  placesWrapper.className="places-Wrapper";
  const placeYosemite = placesWrapper.querySelectorAll("p")[1];
  const placeYosemiteDesc = placesWrapper.querySelectorAll("p")[2];
  placeYosemiteDesc.className="art-desc";

  placeYosemite.className="artTitle";
  console.log(placeYosemite);
  const biking = placesWrapper.querySelectorAll("p")[4];
  const placeBikingDesc = placesWrapper.querySelectorAll("p")[5];
  placeBikingDesc.className="art-desc";

  biking.className="artTitle";
  const cycling = placesWrapper.querySelectorAll("p")[7];
  const placeCyclingDesc = placesWrapper.querySelectorAll("p")[8];
  placeCyclingDesc.className="art-desc";

  cycling.className="artTitle";
  const skiing = placesWrapper.querySelectorAll("p")[10];
  skiing.className="artTitle";
  const placeSkiingDesc = placesWrapper.querySelectorAll("p")[11];
  placeSkiingDesc.className="art-desc";

  const placeallWrap =  doc.querySelector(".places-Wrapper");
  const placeimgBlock = placeallWrap.querySelectorAll("picture");

  placeimgBlock.forEach((img) =>{
    img.className="article_Img";

  })
  const trip_action = placesWrapper.querySelectorAll("p")[12];
  trip_action.className="trip-action";

  const trip_section = document.createElement("hr");
  trip_section.className="arc-line";
  placesWrapper.appendChild(trip_section);


const featureDescription = document.querySelector(".feature-desc");
console.log(featureDescription);

//creating div for each item to style for dektop devices
document.addEventListener("DOMContentLoaded", () => {
  const articlesWrapper = document.querySelector(".articles-wrapper");
  const paragraphs = Array.from(articlesWrapper.querySelectorAll("p"));

  for (let i = 0; i < paragraphs.length; i += 3) {
    const wrapperDiv = document.createElement("div");
    wrapperDiv.className = "article-group";

    for (let j = i; j < i + 3 && j < paragraphs.length; j++) {
      wrapperDiv.appendChild(paragraphs[j]);
    }

    articlesWrapper.insertBefore(wrapperDiv, paragraphs[i]);
  }
});

  


}




/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
  // eslint-disable-next-line import/no-cycle
  window.setTimeout(() => import('./delayed.js'), 3000);
  // load anything that can be postponed to the latest here
}

async function loadPage() {
  await loadEager(document);
  await loadLazy(document);
  loadDelayed();
}

loadPage();
