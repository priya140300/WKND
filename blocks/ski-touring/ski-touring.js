export default function decorate(block){
   
        const skyWrapperCont =  block.querySelector("div");
        console.log(skyWrapperCont);
        const skyWrapper = skyWrapperCont.querySelector("div");
        console.log(skyWrapper);
        skyWrapper.querySelector("p").className="skyBoxPara"
 skyWrapperCont.querySelectorAll("div")[1].className="skyBoxImg";
 const skyParaCont = block.querySelectorAll("p");
 console.log(skyParaCont);
 skyParaCont.forEach((sky) => {
    sky.className="skyBoxPara";
    block.querySelectorAll("div")[5].className="skyBoxImg"
    block.querySelectorAll("div")[8].className="skyBoxImg"


    console.log(block.querySelectorAll("div")[5]);

 })
 const arcticLine = document.createElement("hr");
 arcticLine.className="arc-line";
 block.appendChild(arcticLine);



}