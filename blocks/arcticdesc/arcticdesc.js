export default function decorate(block){
    const descWrapper = block.querySelector("div");
    const descBox = descWrapper.querySelector("div");
    descBox.querySelector("h2").className= "descBox-h2";
    descBox.querySelector("h4").className= "descBox-h4";
    const descBox_para1 = descBox.querySelectorAll("p")[0];
    descBox_para1.className="descBox-para1";
   const descBox_para2 =  descBox.querySelectorAll("p")[1];
     descBox_para2.className="descBox-para2";

     const finalPara = block.querySelectorAll("p")[4];
     if(finalPara){
      finalPara.className="descBox-para1";
     }

}