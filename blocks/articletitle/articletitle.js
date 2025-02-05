export default function decorate(block){
   const articleTitle =  document.querySelector(".articletitle");
   console.log(articleTitle);
   
    const articlePara = articleTitle.querySelectorAll("div")[1];
    articlePara.className="article-para";
   const articleLine =  document.createElement("hr");
   articleLine.className="adv-line";
   articlePara.appendChild(articleLine);
//    const recentArticles = document.getElementById("recent-articles");
//    console.log(recentArticles);
const articleParaWrap = articlePara.querySelector("p");
articleParaWrap.className="art-heading";


} 