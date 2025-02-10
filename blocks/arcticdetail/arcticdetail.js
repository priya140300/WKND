export default function decorate(block){
   const detailWrap =  block.querySelector("div");
   detailWrap.className="detail-wrap";
  const details =  detailWrap.querySelector("div");
  details.className="details";
  const detailLinksWrap =  block.querySelectorAll("div")[2];
  detailLinksWrap.querySelector("div h2").className="links-heading";
  detailLinksWrap.querySelector("div h6").className="links-title";
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