<?php include "header.php"; ?>
<?php include "sidebar.php"; ?>
<?php
session_start();
if (!isset($_SESSION["admin_muh"])) {
    header("Location: login.php");

}

?>
<div id="page-wrapper">
    <div id="page-inner">
        <div class="row">
            <div class="col-md-12">
                <h1 class="page-head-line">ÇALI PİDE ADMİN PANELİNE HOSGELDİNİZ</h1>
                <h1 class="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>

                <form method="POST" action="update_title.php">
                    <label for="new_title">Yeni Başlık:</label><br>
                    <input type="text" id="new_title" name="new_title"><br><br>
                    <input type="submit" value="Başlığı Güncelle">
                </form>

            </div>
        </div>
    </div>
    <!-- /. PAGE INNER  -->
</div>

<?php include "footer.php"; ?>