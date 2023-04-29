const setup = () => {
    let p = document.querySelectorAll("p");
    y = par.childNodes[0];
    par.removeChild(y)
    let textNode = document.createTextNode("Good job!");
    par.appendChild(textNode)
}
window.addEventListener("load", setup);