const setup = () => {

    let namen = ["caro", "chloe", "seppe", "julie", "saar"];
    console.log(namen.length);
    console.log(namen[0]);
    console.log(namen[2]);
    console.log(namen[4]);

    function VoegNaamToe(arr, naam){
        arr.push(naam);
    }

    let extraNaam = prompt("Voer een extra naam in: ");

    VoegNaamToe(namen, extraNaam);
    console.log("Nieuwe array met namen: ", namen);

    let namenString = namen.join(", ");
    console.log("Namen als string: ", namenString);
}
window.addEventListener("load", setup);