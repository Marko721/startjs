<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    



</body>
</html>

<script>

    // setTimeout("alert('isteklo ti je vreme');", 3000);


    // var boja = prompt("Unesi boju");


    // document.body.style.backgroundColor = boja;

    // var niz = [];


    // var telefon = window.location.search.replace("?","").split("=")[1];

    // var niz = [
    //     ["Iphone",1000],
    //     ["Blackberry",500],
    //     ["Nokia 8110",600]
    // ];


    // function nacrtaj() {

    //     document.body.innerHTML = '';

    //     for(var i=0; i<niz.length; i++) {

    //     document.write("<div style='border:1px solid red;"+ (i==telefon?"background-color:green":"") +"'><h3>" + niz[i][0] + "</h3>");
    //     document.write("<h3> Cena:" + niz[i][1] + "</h3></div>");

    //     }

    //     if(telefon++>niz.length-1) {
    //         telefon=0;
    //     }

    // }

    //setInterval('nacrtaj()', 100);

    //===============================================================
    //===============================================================

    var igra = {
        "naziv":"lastis",
        "igraci":["maric","popovic","mandic"]    
        };

    document.write("<h3>"+ igra.naziv + "</h3>");
    document.write("<ul>");

    for(var i=0; i<igra.igraci.length;i++) {
        document.write("<li>"+igra.igraci[i]+"</li>");
    }

    //===============================================================
    //===============================================================


    var telefon = window.location.search.replace("?","").split("=")[1];

    var niz = [
        ["Iphone",1000],
        ["Blackberry",500],
        ["Nokia 8110",600]
    ];


    function nacrtaj() {

        document.body.innerHTML = '';

        for(var i=0; i<niz.length; i++) {

        document.write("<div style='border:1px solid red;"+ (i==telefon?"background-color:green":"") +"'><h3>" + niz[i][0] + "</h3>");
        document.write("<h3> Cena:" + niz[i][1] + "</h3></div>");

        }

        if(telefon++>niz.length-1) {
            telefon=0;
        }

    }

    setInterval('nacrtaj()', 100);



    
    
    //x.ime = "vlada";







</script>