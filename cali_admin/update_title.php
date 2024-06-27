<?php
// Veritabanı bağlantısı
include "./includes/db_connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formdan gelen yeni başlık verisini al
    $new_title = $_POST['new_title'];

    // SQL sorgusu ile veriyi güncelle
    $sql_update = "UPDATE content SET content='$new_title' WHERE id=1"; // id=1 varsayılan olarak kabul edildi

    if ($conn->query($sql_update) === TRUE) {
        echo "Başlık başarıyla güncellendi.";
    } else {
        echo "Hata: " . $conn->error;
    }
}

$conn->close();
?>