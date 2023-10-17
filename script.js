//Oppgave 1--------------------------------------------------------------------------------------------------------------------------

Fkonvert = () => {
    var Celsius = document.getElementById("cf").value;
    var Fahrenheit = (Celsius * 1.8) + 32;
    document.getElementById("cf").value = (Fahrenheit + "°F");
}

Ckonvert = () => {
    var Fahrenheit = document.getElementById("cf").value;
    var Celsius = (Fahrenheit - 32) / 1.8;
    document.getElementById("cf").value = (Celsius + "°C");
}

//Oppgave 2--------------------------------------------------------------------------------------------------------------------------

Sjekktall = () => {
    var Tall1 = document.getElementById("tall1").value;
    var Tall2 = document.getElementById("tall2").value;

    if (Tall1 > Tall2) {
        document.getElementById("svar").value = (Tall1 + ' er større enn ' + Tall2)
    } else if (Tall1 < Tall2) {
        document.getElementById("svar").value = (Tall1 + ' er mindre enn ' + Tall2)
    } else if (Tall1 == Tall2) {
        document.getElementById("svar").value = (Tall1 + ' er lik ' + Tall2)
    }
}

//Oppgave 3--------------------------------------------------------------------------------------------------------------------------

Palindrom = () => {
    var Tekst = document.getElementById("tekst").value;
    var Palindrom = Tekst.split("").reverse().join("");

    if (Tekst === Palindrom) {
        document.getElementById("svar2").value = Tekst + ' er et Palindrom'
    } else {
        document.getElementById("svar2").value = Tekst + ' er ikke et Palindrom'
    }
}

//Oppgave 4--------------------------------------------------------------------------------------------------------------------------

Skiftfarge = (Farge) => {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");

    if (Farge === "rød") {
        div1.style.backgroundColor = "red";
        div2.style.backgroundColor = "white";
    } else if (Farge === "blå") {
        div1.style.backgroundColor = "white";
        div2.style.backgroundColor = "blue";
    } else {
        var tilfeldigFarge = fåTilfeldigFarge();
        div3.style.backgroundColor = tilfeldigFarge;
    }
}

fåTilfeldigFarge = () => {
    var bokstaver = "0123456789ABCDEF";
    var Farge = "#";
    for (var i = 0; i < 6; i++) {
        Farge += bokstaver[Math.floor(Math.random() * 16)];
    }
    return Farge;
}

//Oppgave 5--------------------------------------------------------------------------------------------------------------------------

gjemDiv = (tilstand) => {
var DivVis = document.getElementById("divVis");

    if (tilstand === "gjem") {
        DivVis.style.visibility = "Hidden";
    } else if (tilstand === "vis") {
        DivVis.style.visibility = "Visible";
    } else {
    }
}

//Klarer ikke den tredje knappen

//-----------------------------------------------------------------------------------------------------------------------------------