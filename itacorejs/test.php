<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<form action="">

<select name="pesme">
</select><br>

Autor:
<input type="text" name="autor"><br>
Naziv:
<input type="text" name="naziv"><br>

</form>

<script>

var pesme = {

    simphonyOfDestruction : {
        naslov: "Symphony of Destruction",
        autor: "Megadeth",
        link: "pesma"
    },
    paranoid : {
        naslov: "Paranoid",
        autor: "Black Sabbath",
        link: "pesma1"
    },
    beatIt : {
        naslov: "Beat it",
        autor: "Michael Jackson",
        link: "pesma3"
    }

}


function popuni() {

    var target = document.forms[0].pesme;
    target.options.length = 0;

    for (var i in pesme) {

        var naslov = pesme[i].naslov;
        var option = new Option(naslov, i);
        target.options.add(option);

    }

    target.onchange = function() {

        var x = this.value;
        var autor = pesme[x].autor;
        var naslov = pesme[x].naslov;
        this.form.autor.value = autor;
        this.form.naziv.value = naslov;


    }





}






























function popuni1() {

    var target = document.forms[0].pesme //ubacuje iz prve forme na strani atribut koji ima name pesme u ovom slucaju select kontrola
    target.options.length = 0; //brisemo sve 

    for (var i in pesme) {

        var naslov = pesme[i].naslov; //u promenljivu cuvamo naslov iz niza
        var option = new Option(naslov, i); // dodajemo novu opciju u promenljivu option
        target.options.add(option); // dodaje u select opcije 

    }

    target.onchange = function() { // kada se selektuje neka opcija 

        var x = this.value; // uzima trenutno selektovanu vrednost iz selecta i cuva u promenljivu
        var odabranaPesma = pesme[x];
        this.form.autor.value = odabranaPesma.autor;
        this.form.naziv.value = odabranaPesma.naslov;

        }
    

}

popuni();













</script>


















</body>
</html>