const setup = () => {
    let start = new Date(); //system date
    console.log(start);

    // dag van de week
    console.log(start.getDay());
    // maand
    console.log(start.getMonth() + 1);
    //jaar
    console.log(start.getFullYear());
    // dag
    console.log(start.getDate());
    console.log(start.getDate() + "-" + (start.getMonth() + 1) + "-" + start.getFullYear()
        + " " + start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds());

    let datum = new Date(20004,11,31)

    console.log(datum)

    console.log((start - datum.getMilliseconds())/ (1000*60*60*24))
    console.log("toString " + event.toString());


    console.log("toISOString " + event.toISOString());

    console.log("toDateString " + event.toDateString());

    console.log("toTimeString " + event.toTimeString());

}
window.addEventListener("load", setup);