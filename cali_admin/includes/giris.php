<?php
session_start();
// db_connect.php dosyasını dahil ediyoruz
include "./db_connect.php";
// Formdan gönderilen verileri alıyoruz
if (isset($_POST['login'])) {
    $admin_muh = $_POST['admin_muh'];
    $admin_sifre = $_POST['admin_sifre'];
    // Veritabanında kullanıcı adı ve şifreye göre sorgu yapıyoruz
    $sql = "SELECT * FROM login WHERE admin_muh='$admin_muh' AND admin_sifre='$admin_sifre'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $_SESSION["admin_muh"] = $admin_muh;
        // Kullanıcı bulunduysa giriş başarılı
        $row = $result->fetch_assoc();

        echo "Hoş geldiniz, " . $row["admin_muh"] . "! Giriş başarılı.";
        header("Location: ../index.php");

        exit;
        // Burada oturum açma işlemleri yapılabilir
        // Örneğin session_start() ile oturum başlatılabilir veya başka işlemler yapılabilir
    } else {
        // Kullanıcı bulunamadıysa giriş başarısız
        echo "Kullanıcı adı veya şifre hatalı.";
        header("Location: ../login.php?login=no");
        exit;
    }
}
?>