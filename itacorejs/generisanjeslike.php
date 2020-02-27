<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <div id="target"></div>



    <script>
    
        var stripovi = {

            "nasledstvo rok":"slika1",
            "sapunica" : "slika2",
            "glasajte" : "slika3"


        };

        var target = document.getElementById("target");
        var currentSlika;

        function handler() {

            if(currentSlika) {

                document.body.removeChild(currentSlika);

            }

            var slika = document.createElement("img");
            slika.src = this.slika;
            slika.width = 200;
            document.body.appendChild(slika);
            currentSlika = slika;
            //alert(this.slika);

        }



        function prikazivanje() {

            target.innerHTML = "";

            for(var i in stripovi) {

                var div = document.createElement("div");
                div.style.cssText = "border: 1px solid red; padding: 4px; ";
                div.innerHTML = i;
                div.slika = stripovi[i];
                div.onclick = handler;

                target.appendChild(div);

            }

        }


    </script>



</body>
</html>