<?php
// Veritabanı bağlantı bilgileri
$servername = "localhost";
$username = "root";
$password = "ilker";
$dbname = "cali_admin";

// Bağlantı oluşturma
$conn = new mysqli($servername, $username, $password, $dbname);

// Bağlantıyı kontrol et
if ($conn->connect_error) {
    echo "<script>console.log('baglantı başarısız' );</script>";
} else {
    echo "<script>console.log('baglantı başarılı' );</script>";
}
?>