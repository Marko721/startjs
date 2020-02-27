<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<a href="?pg=1">Naslovna</a>
<a href="?pg=2">O nama</a>
<a href="?pg=peralozac">Kontakt</a>

<br> 

<?php
    
    $strane = [
        "1" => "naslovna.php",
        "2" => "onama.php",
        "peralozac" => "kontakt.php"
    ];
    
    include $strane[$_GET['pg']];
?>





</body>
</html>