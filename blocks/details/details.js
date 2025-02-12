export default function decorate(block) {
   const detailsWrap = block.querySelector(".details div");
   detailsWrap.className="details-wrap";
   const detailsImgWrap = detailsWrap.querySelector(".details-wrap div");
   detailsImgWrap.className="details-img";
   const artistName = detailsWrap.querySelectorAll("div")[1];
   artistName.className="artist-name";
   const artistDomain = detailsWrap.querySelectorAll("div")[2];
   artistDomain.className="artist-domain";
   const socialLinks = detailsWrap.querySelectorAll("div")[3];
   socialLinks.className="social-link";

   const detailsBlock1 = block.querySelectorAll(".details div")[5];
   detailsBlock1.className="details-wrap";
   const detailsBlock2 = block.querySelectorAll(".details div")[10];
   detailsBlock2.className="details-wrap";
   const detailsBlock3 = block.querySelectorAll(".details div")[15];
   detailsBlock3.className="details-wrap";
   //selecting the second div class name details-wrap and accessing its elements
   const detailsWrapper2 = block.querySelectorAll(".details-wrap")[1];
   detailsWrapper2.querySelectorAll("div")[0].className="details-img";
   detailsWrapper2.querySelectorAll("div")[1].className="artist-name";
   detailsWrapper2.querySelectorAll("div")[2].className="artist-domain";
   detailsWrapper2.querySelectorAll("div")[3].className="social-link";

    //selecting the third div class name details-wrap and accessing its elements
    const detailsWrapper3 = block.querySelectorAll(".details-wrap")[2];
    detailsWrapper3.querySelectorAll("div")[0].className="details-img";
    detailsWrapper3.querySelectorAll("div")[1].className="artist-name";
    detailsWrapper3.querySelectorAll("div")[2].className="artist-domain";
    detailsWrapper3.querySelectorAll("div")[3].className="social-link";
 
     //selecting the fourth div class name details-wrap and accessing its elements
     const detailsWrapper4 = block.querySelectorAll(".details-wrap")[3];
     detailsWrapper4.querySelectorAll("div")[0].className="details-img";
     detailsWrapper4.querySelectorAll("div")[1].className="artist-name";
     detailsWrapper4.querySelectorAll("div")[2].className="artist-domain";
     detailsWrapper4.querySelectorAll("div")[3].className="social-link";
     
     //creating element for yellow underline
     const detailsLine = document.createElement("div");
     const wkndGuides =  document.querySelector("#wknd-guides");
     console.log(wkndGuides);
     wkndGuides.appendChild(detailsLine);
     detailsLine.className="adv-line";

     const contentPara = wkndGuides.nextElementSibling;
     console.log(contentPara);
    //  const contentPara = contentDetails.querySelector("p");
      contentPara.className="content-para";


  console.log(block );

     const aboutBlock = document.querySelector(".section.details-container.guides-container");
console.log(aboutBlock);
aboutBlock.className="about-block";






      // })



    
      





   





}