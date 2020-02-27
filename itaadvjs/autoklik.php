<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

Auto 1: <span id="a1"></span>
Auto 2: <span id="a2"></span>

<div id="auti">
</div>
    


<script>

function Auto(model, slika) {

    this.model = model ? model : "";
    this.slika = slika ? slika : "";


    var nesto = this;
    this.onRemove = function() {}


    this.nacrtaj = function() {

        var crtez = document.createElement("img");

        //var vrednost = this.model;

        crtez.src = this.slika;
        crtez.width = 100;
        document.getElementById("auti").appendChild(crtez);
        console.log("Crtam auto: " + this.model);

        crtez.onclick = function() {

            document.getElementById("auti").removeChild(crtez);
            nesto.onRemove();

        };

    }

}

var komada = {

    auto1:0,
    auto2:0

}

var auto1 = new Auto("Audi Quattro","https://pluspng.com/img-png/top-view-of-a-car-png-road-jpg-car-png-510.png");
var auto2 = new Auto("Bmw 320i","https://img.pngio.com/car-png-jpg-transparent-car-jpgpng-images-pluspng-png-car-from-above-381_800.jpg");

for(var i=0; i<10;i++) {

    komada.auto1++;
    komada.auto2++;

    auto1.nacrtaj();
    auto2.nacrtaj();

}

document.getElementById("a1").innerHTML = komada.auto1;
document.getElementById("a2").innerHTML = komada.auto2;


auto1.onRemove = function() {
    komada.auto1--;
    document.getElementById("a1").innerHTML = komada.auto1;
}
auto2.onRemove = function() {
    komada.auto2--;
    document.getElementById("a2").innerHTML = komada.auto1;
}

</script>


















</body>
</html>