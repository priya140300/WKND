export default function decorate(block){
    const skyWrapperCont =  block.querySelector("div");
    console.log(skyWrapperCont);
    const skyWrapper = skyWrapperCont.querySelector("div");
    console.log(skyWrapper);
    skyWrapper.querySelector("h2").className = "descBox-h2";
    skyWrapper.querySelector("h4").className = "descBox-h4";
    skyWrapper.querySelector("p").className = "descBox-para1";
    skyWrapper.querySelectorAll("p")[1].className = "surfing-box";
    skyWrapper.querySelectorAll("p")[2].className = "descBox-para2";
    skyWrapper.querySelectorAll("p")[3].className = "descBox-h4";


    



}