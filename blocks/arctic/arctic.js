export default function decorate(block){
    const arcticImgWrap = block.querySelectorAll("div")[0];
    arcticImgWrap.className="arctic-imgWrap";
    arcticImgWrap.querySelector("div").className="arctic-imgWrap"
    arcticImgWrap.querySelector("picture").className="arctic-picture"
    arcticImgWrap.querySelector("img").className="arctic-img"

    //selecting the second child for styling ul
    const list = block.querySelector("ul");
    list.className="arctic-list";
    const li_item1 = list.querySelectorAll("li")[0];
    li_item1.className="arctic-li1";
    li_item1.innerHTML="";

    const arcticAnchor = document.createElement("a");
    arcticAnchor.textContent="MAGAZINE";
    arcticAnchor.addEventListener("click", () =>{
        window.location.href="https://main--wknd--priya140300.aem.page/magazine/magazine";
    })

    li_item1.appendChild(arcticAnchor);
    console.log(arcticAnchor);
    console.log(li_item1);

    list.querySelectorAll("li")[1].className="arctic-li2";
    list.querySelectorAll("li")[2].className="arctic-li3";




}