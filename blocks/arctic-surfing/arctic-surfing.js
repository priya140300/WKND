export default function decorate(block){
   const surfingWrap =  block.querySelector("div");
   const surfingBox = surfingWrap.querySelectorAll("div")[0];
   surfingBox.className="surfing-box";
   console.log("checking");
   const surfingHeading = surfingWrap.querySelectorAll("div")[1];
   surfingHeading.querySelector("h2").className="surfing-heading";
   const surfingParaWrap = surfingWrap.querySelectorAll("div")[2];
   surfingParaWrap.className="surfing-paraWrap";

   const skyWrap = block.querySelectorAll("div")[4];
   skyWrap.className="sky-wrap";
   const skyBox = skyWrap.querySelectorAll("div")[0];
   skyBox.className="sky-box";
   const skyBoxImg = skyWrap.querySelectorAll("div")[1];
   skyBoxImg.className="skyBoxImg";
   const skyBoxPara = skyWrap.querySelectorAll("div")[2];
   skyBoxPara.className="skyBoxPara";
  
   const northernLightWrap  = block.querySelectorAll("div")[8];
   northernLightWrap.className="northernLightWrap";
  const northernLightHeading =  northernLightWrap.querySelectorAll("div")[0];
  northernLightHeading.className="north-lightHeading";
  const northernLightPara =  northernLightWrap.querySelectorAll("div")[1];
  northernLightPara.className="northernLightPara";
  const northernLightImg =  northernLightWrap.querySelectorAll("div")[2];
  northernLightImg.className = "northernLightImg";
  // const northernLightPara =  northernLightWrap.querySelectorAll("div")[3];
    
  const arcticLine = document.createElement("hr");
  northernLightWrap.appendChild(arcticLine);
  arcticLine.className="arc-line";




   



  
}