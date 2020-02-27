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

var target = document.getElementById("target");

for ( var i = 0; i < 5; i++) {

    var div = document.createElement("div");
    div.innerHTML = i;
    div.vrednost = i;
    div.onclick = function() {
        alert(this.vrednost);
    }
    target.appendChild(div);

}







</script>






</body>
</html>