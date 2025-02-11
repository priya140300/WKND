export default function decorate(block){
   const detailWrap =  block.querySelector("div");
   detailWrap.className="detail-wrap";
  const details =  detailWrap.querySelector("div");
  details.className="details";
  const detailLinksWrap =  block.querySelectorAll("div")[2];
  detailLinksWrap.className="details-link-wrap"
  // detailLinksWrap.querySelector("div h2").className="links-heading";
  const detailBox = detailLinksWrap.querySelector("div");
  console.log(detailBox);
   const detailBoxHeading = detailBox.querySelector("h2");
   if(detailBoxHeading){
     detailBoxHeading.className="links-heading";
     details.querySelector("picture").className="pic-var";

   }
  const detailBoxHeadingVar = detailBox.querySelector("h5");
  console.log(detailBoxHeadingVar);
  if(detailBoxHeadingVar){
    detailBoxHeadingVar.className="links-heading";
    details.querySelector("picture").className="pic-var2";
  }

const detailTitle =  detailBox.querySelector("h6");
detailTitle.className="links-title";
 
  // detailLinksWrap.querySelector("div h5").className="links-heading";

  // detailLinksWrap.querySelector("div h6").className="links-title";
  detailLinksWrap.querySelector("p").className="links-paragraph";
//   const linkPara = block.querySelector(".links-paragraph");
//   linkPara.className=
const info = block.querySelectorAll("div")[3];
const infoWrap = document.createElement("div");

infoWrap.appendChild(block.querySelector(".links-heading"));
infoWrap.appendChild(block.querySelector(".links-title"));
const infoPara = block.querySelector(".links-paragraph");
info.innerHTML="";
info.appendChild(infoWrap);
infoWrap.className="info-wrap";
info.appendChild(infoPara);





  

}