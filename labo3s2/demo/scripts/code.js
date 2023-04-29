const setup = () => {
    let btnTry = document.getElementById("btnTry");


    // Event-based programming
    btnTry.addEventListener("mouseover", () => {
        document.getElementById("event").innerHTML += "Mouse Hovered!<br>";
    });
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);

    // eventListeners CSS
    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);

    document.getElementById("btnWithBullets").addEventListener("click", withBullets);

    //eventListeners difference between "textContent" and "innerHTML"

    document.getElementById("btnContent").addEventListener("click", changeContent);
}


//onClickFunction
const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse clicked!<br>";
}

//mouseOutFunction
const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse out!<br>";
}

//change CSS
const withoutBullets = () => {
    let listItems = document.getElementsByTagName("li");
    // listName is altijd een Array als je werkt via getElementsByTagName, dus vierkante haakjes.
    for (let i = 0; i < listItems.length; i++) {
        // 1ste manier:
        /* listItems[i].style.listStyleType = "none";
         listItems[i].style.backgroundColor = "red"; */
        // 2de manier, beter en overzichtelijker :
        //listItems[i].className = "listItemsStyleNone colorRed";
        // 3de manier :
        listItems[i].classList.remove("colorWhite");
        listItems[i].classList.remove("listItemsStyleDisc");
        listItems[i].classList.add("listItemsStyleNone");
        listItems[i].classList.add("colorRed");
        console.log("output" + listItems[i].className);

    }
}

const withBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
       /* listItems[i].style.listStyleType = "disc";

        listItems[i].style.backgroundColor = "white";
        listItems[i].className = "listItemsStyleNone colorRed"; */

        listItems[i].classList.add("listItemsStyleDisc");
        listItems[i].classList.add("colorWhite");
        console.log("output" + listItems[i].className);
    }
}

const changeContent = () => {
    // letterllijk de tekst overnemen, als er linken instaan deze niet uitvoeren maar gewoon als tekst overnemen.
    document.getElementById("textContent").textContent ="<a href='https://www.vives.be'>VIVES</a>";
    // als er linken instaan deze uitvoeren
    document.getElementById("innerHTML").innerHTML ="<a href='https://www.vives.be'>VIVES</a>";
}
window.addEventListener("load", setup);