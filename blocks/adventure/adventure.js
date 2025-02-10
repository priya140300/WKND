export default function decorate(block){

    const 
    adventureFirst = block.querySelector("div");

    console.log(adventureFirst);
    adventureFirst.className="advntr-first";
    //SELECTING THE OTHER DIV OF ADVENTURE BLOCK
    const amazonBlock = adventureFirst.nextElementSibling;
    console.log(amazonBlock);
    amazonBlock.className="amazon-block";

   
   const alaskanWrap =   block.querySelectorAll("div")[0];
   const alaskanAdvent = alaskanWrap.querySelector("div");
   alaskanAdvent.className="alaskan-adventure";

   const alaskanHeading = alaskanWrap.querySelector("h2");
   console.log(alaskanHeading);
   alaskanHeading.className="alaskan-heading";

   const alaskanPara = alaskanWrap.querySelector("p");
   console.log(alaskanPara);
   alaskanPara.className="alaskan-para";
 


   const alaskanAction = alaskanWrap.querySelectorAll("div")[1];
   alaskanAction.className="alaskan-action";

   const alaskanImg = alaskanWrap.querySelectorAll("div")[2];
   alaskanImg.className="alaskan-img";


   //accessing the second section of adventure
   const amazonWrap =   block.querySelectorAll("div")[4];
   const amazonAdvent = amazonWrap.querySelector("div");
   amazonAdvent.className="alaskan-adventure";

   const amazonHeading = amazonWrap.querySelector("h2");
   console.log(amazonHeading);
   amazonHeading.className="amazon-heading";

   const amazonPara = amazonWrap.querySelector("p");
   console.log(amazonPara);
   amazonPara.className="amazon-para";

   const amazonAction = amazonWrap.querySelectorAll("div")[1];
   amazonAction.className="alaskan-action";

   const amazonImg = amazonWrap.querySelectorAll("div")[2];
   amazonImg.className="alaskan-img";




}