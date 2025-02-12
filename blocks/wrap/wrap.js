export default function decorate(block){
   const title =  document.querySelector(".title-container");
   console.log(title);
  const content = title.nextElementSibling;
  
  content.className = "content-home";
  console.log(content);
  

  const origin = document.querySelector(".articletitle-container.article-list-container");
console.log(origin);

const membersBlock = document.querySelector(".members-container");
console.log(membersBlock);
const adventBlock =  document.querySelector(".adventure-container");
console.log(adventBlock);

//wrapping all the elements inside the block
block.appendChild(title);
block.appendChild(content);
block.appendChild(origin);
block.appendChild(membersBlock);
block.appendChild(adventBlock);
console.log(block);

}