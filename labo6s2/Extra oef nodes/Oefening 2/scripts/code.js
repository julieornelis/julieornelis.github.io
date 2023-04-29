const setup = () => {

    let items = document.getElementsByTagName('li');
    for(var i = 0; i<items.length;i++){
        items[i].setAttribute("class", "listItem");
    }

    let myPic = document.createElement('img');
    myPic.setAttribute("src", 'http')
}
window.addEventListener("load", setup);