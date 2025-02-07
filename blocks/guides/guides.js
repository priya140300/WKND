export default function decorate(block) {
    
    console.log(block);
    
      const guideWrap = block.querySelectorAll("div");
      guideWrap.forEach((guide) =>{
        guide.className="details-wrap";

      })

      //accessing the first div of guide block

      const guidesBlock1 = block.querySelectorAll(".details-wrap")[0];
      const guideImg = guidesBlock1.querySelectorAll("div")[0];
      //accessing the img
    guideImg.className="details-img";
    
    const guideDesc = guidesBlock1.querySelectorAll("div")[1];
    guideDesc.className="guide-desc";

    const guideLinks = guidesBlock1.querySelectorAll("div")[2];
    guideLinks.className="social-link";


      //accessing the second div of guide block

      const guidesBlock2 = block.querySelectorAll(".details-wrap")[1];
      const guideImg2 = guidesBlock2.querySelectorAll("div")[0];
      //accessing the img
    guideImg2.className="details-img";
    
    const guideDesc2 = guidesBlock2.querySelectorAll("div")[1];
    guideDesc2.className="guide-desc";

    const guideLinks2 = guidesBlock2.querySelectorAll("div")[2];
    guideLinks2.className="social-link";

    //accessing the third div of guide block
    const guidesBlock3 = block.querySelectorAll(".details-wrap")[2];
      const guideImg3 = guidesBlock3.querySelectorAll("div")[0];
      //accessing the img
    guideImg3.className="details-img";
    
    const guideDesc3 = guidesBlock3.querySelectorAll("div")[1];
    guideDesc3.className="guide-desc";

    const guideLinks3 = guidesBlock3.querySelectorAll("div")[2];
    guideLinks3.className="social-link";

    const guideContainer = document.querySelector(".guides-container");
    // guideContainer.classList.add("guide-cont");
    guideContainer.id="guide-cont";

      


}




