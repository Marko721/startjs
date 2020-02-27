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
    target.onchange = function() {
        var x = this.value;
        var odabranaPesma = pesme[x];
        this.form.autor.value = odabranaPesma.autor;
        this.form.naziv.value = odabranaPesma.naslov;
    }

    for( var i in pesme) {

        var naslov = pesme[i].naslov;
        var option = new Option(naslov, i);
        target.options.add(option);

    }



}

popuni();















</script>


















</body>
</html>