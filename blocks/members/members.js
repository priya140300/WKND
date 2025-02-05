export default function decorate(block) {
  // const membersWrap =  document.querySelector(".members");
  //  console.log(membersWrap);

  const members_titleWrap = block.querySelectorAll("div")[1];
 const members_title = members_titleWrap.querySelector("h2");
  const members_descWrap = block.querySelectorAll("div")[3];
  const members_desc = members_descWrap.querySelector("p");
  members_title.className="members-title";
  members_desc.className="members-desc";
  const member_line = document.createElement("div");
  member_line.className="adv-line";
  members_titleWrap.className="member-title-wrap";
  members_titleWrap.appendChild(member_line);

  //appending the horizontal line
  const member_separator = document.createElement("hr");
  members_desc.appendChild(member_separator);
  member_separator.className="arc-line";


  
   
}  