const setup = () => {
    var gemeenten = [];

    function voegGemeenteToe() {
        var inputElement = document.getElementById("gemeente-input");
        var gemeente = inputElement.value;

        if (gemeente !== "") {
            gemeenten.push(gemeente);
            gemeenten.sort();

            inputElement.value = "";

            updateGemeenteLijst();
        }
    }

    function stopInvoer() {
        var inputElement = document.getElementById("gemeente-input");
        var gemeente = inputElement.value;

        if (gemeente.toLowerCase() === "stop") {
            updateGemeenteLijst();
        } else {
            voegGemeenteToe();
            stopInvoer();
        }
    }

    function updateGemeenteLijst() {
        var selectElement = document.getElementById("gemeente-lijst");
        selectElement.innerHTML = "";

        gemeenten.forEach(function (gemeente) {
            var optionElement = document.createElement("option");
            optionElement.value = gemeente;
            optionElement.text = gemeente;

            selectElement.appendChild(optionElement);
        });
    }
}
window.addEventListener("load", setup);