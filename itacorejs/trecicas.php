<html>

<div id="vlada" style='border:1px solid red; width:50px;height:50px;background-color:red'>marko</div>

<script>

    var x = 100;
    var y = 100;
    var spd = 2;
    var an = 1.5;

    function crtaj(evt){

        if(keyPool[37]) {
            an+=.2;
        }
        if(keyPool[39]) {
            an-=.2;
        }

        x += spd * Math.cos(an);
        y += spd * Math.sin(an);
        div.style.transform = "rotate("+an+"rad)";
        div.style.top = x + "px";
        div.style.left = y + "px";

    }
    setInterval('crtaj()',16);

    var keyPool = {};

    window.onkeyup = function(evt) {
        delete keyPool[evt.keyCode];
        console.log(keyPool);
    }
    window.onkeydown = function(evt){
        keyPool[evt.keyCode] = true;
        console.log(keyPool);
    }

    var div = document.createElement("div");
    div.style.position = "absolute";

    div.style.width = "30px";
    div.style.height = "30px";
    div.style.transformOrigin = "0.5 0.5";

    div.style.backgroundColor = "red";
    document.body.appendChild(div);




</script>

</html>