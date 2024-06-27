<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GİRİŞ YAP</title>

        <!-- BOOTSTRAP STYLES-->
        <link href="assets/css/bootstrap.css" rel="stylesheet" />
        <!-- FONTAWESOME STYLES-->
        <link href="assets/css/font-awesome.css" rel="stylesheet" />
        <!-- GOOGLE FONTS-->
        <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />

        <style>
        </style>
    </head>

    <body
        style="background-image :url(../resimler/background.jpeg); background-size:cover; background-repeat:no-repeat; color:white; font-size:2rem">
        <div class="container">
            <div class="row text-center " style="padding-top:100px;">
                <div class="col-md-12">
                    <img src="../resimler/logo.jpeg" width="25%" height="25%" style="border-radius:30%" />
                </div>
            </div>
            <div class="row ">

                <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">

                    <div class="panel-body">
                        <form action="./includes/giris.php" method="POST">
                            <hr />
                            <h2>LÜTFEN GİRİŞ YAPIN</h2>
                            <?php
                            if ($_GET["login"] == "no") {
                                echo "<div class='alert alert-danger text-center' role='alert'>
                                         KULLANICI ADI VEYA ŞİFRE HATALI
                                        </div>";
                            }

                            ?>
                            <hr>
                            <br />
                            <div class="form-group input-group">
                                <span class="input-group-addon"><i class="fa fa-tag"></i></span>
                                <input type="text" class="form-control" name="admin_muh" required
                                    placeholder="KULLANICI ADI " />
                            </div>
                            <div class="form-group input-group">
                                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                                <input type="password" name="admin_sifre" class="form-control" required
                                    placeholder="ŞİFRE" />
                            </div>
                            <div class="form-group">
                                <label class="checkbox-inline">
                                    <input type="checkbox" /> Beni hatırla
                                </label>
                                <span class="pull-right">
                                    <a href="../index.html">Forget password ? </a>
                                </span>
                            </div>
                            <?php



                            ?>
                            <button type="submit" name="login" class="btn btn-primary ">Giriş Yap</button>
                            <hr />
                            Not register ? <a href="index.html">click here </a> or go to <a href="index.html">Home</a>
                        </form>
                    </div>

                </div>


            </div>
        </div>

    </body>

</html>