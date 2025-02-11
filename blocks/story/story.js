export default function decorate(block){
    const story_heading = block.querySelector("h5");
    story_heading.className="story-heading";
    //accessing the first ul
    const story_ul = block.querySelector("ul");
    const story_liItem1 = story_ul.querySelectorAll("li")[0];
    story_liItem1.className="story-liItem1";

    const story_liItem2 = story_ul.querySelectorAll("li")[1];
    story_liItem2.className="story-liItem2";
    // accessing next ul and applying the same class name
    const story_list2 = block.querySelectorAll("ul")[1];

   const story_listItem1 =  story_list2.querySelectorAll("li")[0];
   const story_listItem2 =  story_list2.querySelectorAll("li")[1];
   story_listItem1.className="story-liItem1";
   story_listItem2.className="story-liItem2";

   //accessing the ordered element;
    const storyOrder1 =  block.querySelectorAll("ol")[0];
    storyOrder1.className="story-ol";
    const storyOrder2 =  block.querySelectorAll("ol")[1];
    storyOrder2.className="story-ol";

    const story_olist1 = storyOrder1.querySelectorAll("li")[0];
    const story_olist2 = storyOrder1.querySelectorAll("li")[1];
    story_olist1.className="story_olist1";
    story_olist2.className="story_olist2";

    const story_olist3 = storyOrder2.querySelectorAll("li")[0];
    const story_olist4 = storyOrder2.querySelectorAll("li")[1];
    story_olist3.className="story_olist1";
    story_olist4.className="story_olist2";
    
  




    
}
