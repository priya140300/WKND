import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);
  const footer_section = block.querySelector(".footer div");
  footer_section.className="footer-section";
  const footer_wrap = block.querySelector(".footer-section div");
  footer_wrap.className="footer-wrap";
  //selecting the section for styling the footer content
  const footer_content = block.querySelector(".footer-wrap div");
  const footer_imageWrap = footer_content.querySelector("p");
  footer_imageWrap.className="footer-imageWrap";
  //accessing the ul list of footer
  const footer_ul = footer_content.querySelector("ul");
  footer_ul.className="footer-ul";
  const footer_navWrap = document.createElement("div");
  footer_navWrap.className="footer-navWrap";
  footer_navWrap.appendChild(footer_imageWrap);
  footer_navWrap.appendChild(footer_ul);

  footer_content.prepend(footer_navWrap);

  const footer_para = footer_content.querySelectorAll("p")[1];
  footer_para.className = "footer-para";
  
    const footer_socialLink = footer_content.querySelectorAll("p")[2];
    footer_socialLink.className="footer-socialLink";

    const mediaWrap = document.createElement("div");
    mediaWrap.className="media-wrap";
    
    const facebookImg = footer_socialLink.querySelectorAll("picture")[0];
    const twitterImg = footer_socialLink.querySelectorAll("picture")[1];
    const instaImg = footer_socialLink.querySelectorAll("picture")[2];

    mediaWrap.appendChild(facebookImg);
    mediaWrap.appendChild(twitterImg);
    mediaWrap.appendChild(instaImg);
    console.log(mediaWrap);

    footer_socialLink.prepend(mediaWrap);
    const mediaContent =  document.createElement("div");
    mediaContent.className="media-content";
    const socialElements =[... footer_socialLink.childNodes];
    socialElements.forEach((ele) =>{
      if (ele.nodeType === 1 && !ele.classList.contains("media-wrap")) {
      
        mediaContent.appendChild(ele);
    } else if (ele.nodeType === 3 && ele.textContent.trim() !== "") {
       
        mediaContent.appendChild(ele);
    }
    })
    console.log(mediaContent);
   
    footer_socialLink.appendChild(mediaContent);
    
    const footer_shop = footer_content.querySelectorAll("p")[3];
    footer_shop.className="footer-shop";

}
