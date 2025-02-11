export default function decorate(block){
    const arcticLine = document.createElement("hr");
    arcticLine.className="arc-line";
    block.appendChild(arcticLine);
}