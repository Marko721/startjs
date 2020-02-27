<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

    <form>

    <select onchange="popuni(this)" name="naslov">
    </select>
    <br>
    Godina:<br>
    <input type="text" name="godina"><br>
    Cena:<br>
    <input type="text" name="cena"><br>

    </form>
    <a onclick="document.forms[0].submit()" href="">Posalji podatke</a>

    <script>
    
    var stripovi = {

        "Nasledstvo rok": {

            slika: "slika1",
            godina: 1975,
            cena: 150

        },

        "Sapunica": {

            slika: "slika2",
            godina: 1976,
            cena: 200

        },

        "Glasajte za tromba": {

            slika: "slika3",
            godina: 1977,
            cena: 100

        }

    }

    function popuni(kontrola) {

        var forma = kontrola.form;
        var kljuc = kontrola.value;
        forma.cena.value = stripovi[kljuc].cena;
        forma.godina.value = stripovi[kljuc].godina;

    }


    var target = document.forms[0].naslov;
    target.options.length = 0; 

    for( var i in stripovi ) {

        var opt = new Option(i,i);
        target.options.add(opt);


    }

    // var target = document.forms[0].naslov;

    // for( var i in stripovi ) {

    //     var opt = document.createElement("option");
    //     opt.innerHTML = i;
    //     target.appendChild(opt);


    // }






    </script>




</body>
</html>