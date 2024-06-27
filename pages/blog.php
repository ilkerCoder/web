<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <?php
        include "../includes/db_connect.php";  // Veritabanı bağlantısı
        
        // SQL sorgusu ile içeriği seç
        $sql = "SELECT content FROM content WHERE id=1"; // id=1 varsayılan olarak kabul edildi
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // Veritabanından alınan verileri döngü ile göster
            while ($row = $result->fetch_assoc()) {
                echo "<h1 style='margin-left:600px'>" . htmlspecialchars($row["content"]) . "</h1>";
            }
        } else {
            echo "Henüz bir içerik belirlenmedi.";
        }

        $conn->close();
        ?>

    </body>

</html>