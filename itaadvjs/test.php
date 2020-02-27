<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<img id="slika" style="position:absolute; left:0px; top:0px; " src="https://heavyeditorial.files.wordpress.com/2019/04/got-logo-1-e1555108933945.jpg?quality=65&strip=all&w=780">

<script>

    var slika = document.getElementById("slika");
    var i = 0;

    function animate() {

        slika.style.left = (i++)+'px';
        requestAnimationFrame(animate);

    }
    
    
    



</script>





</body>
</html>