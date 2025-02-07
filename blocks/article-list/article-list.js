export default async function decorate(block){
    //extracting json from dom
    //creating element for each article and populating it with the extracted daat
    const fetchContent = async () =>{

        try{
            const anchor_element = block.querySelector(".button-container a");
            const json_Url = anchor_element.href;
            const response = await fetch(json_Url);

            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);

            }
            const json = await response.json();
            console.log(json);
            return json;

        }
        catch(error){
            console.log("error fetching json");
        }

    }

      // Function to create and append article elements
  const displayArticles = (data) => {
    const articlesWrap = document.createElement("div");

    data.forEach((item) => {
      // Create a new div element for the article
      const articleDiv = document.createElement('a');
      
      console.log(articlesWrap);
      articleDiv.classList.add('article');
      articleDiv.href=item.path;

       // Create and append the image
       const imageElement = document.createElement('img');
       imageElement.src = item.image;
       imageElement.alt = item.title;
       imageElement.className="article_Img";
       articleDiv.appendChild(imageElement);

      // Create and append the title
      const titleElement = document.createElement('h2');
      titleElement.textContent = item.title;
      titleElement.className="artTitle";
      articleDiv.appendChild(titleElement);

      // Create and append the description
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = item.description;
      descriptionElement.className="art-desc";
      articleDiv.appendChild(descriptionElement);

      articlesWrap.appendChild(articleDiv);
 
      // Append the article div to the block
     
    });
     
   const articlelistContainer = document.querySelector(".articlelist");
   articlelistContainer.prepend(articlesWrap);
   console.log(articlesWrap);

   const articleBlock = block.querySelector("div");
   articleBlock.className = "articles-wrapper";
          
   

   

  };




    const fetchedData = await fetchContent();
    if (fetchedData && fetchedData.data) {
        displayArticles(fetchedData.data);
      }

    //   const articleBtn = articlelistContainer.querySelectorAll("div")[1];
    //   articleBtn.remove();
//    articleBtn.className="articleBtn";
//    console.log(articleBtn);

    
const articlelistContainer = document.querySelector(".articlelist");
console.log(articlelistContainer);
const articleBtn = articlelistContainer.querySelectorAll("div")[1];
console.log(articleBtn);
articleBtn.remove();
console.log(articlelistContainer);
articlesWrap.className="articles-wrapper";





} 