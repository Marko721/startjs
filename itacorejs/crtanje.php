<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

    <script>

        
    
        function crtaj(evt) {
            console.log(evt);
            var div = document.createElement("div");
            div.style.position = "absolute";
            div.style.top = evt.clientY + "px";
            div.style.left = evt.clientX + "px";
            div.style.width = "2px";
            div.style.height = "2px";
            div.style.backgroundColor = "red";
            document.body.appendChild(div);


        }

        window.onkeyup = crtaj;


    
    </script>



</body>
</html>