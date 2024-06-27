<?php session_start(); ?>
<!-- SİDEBAR -->
<!-- /. NAV TOP  -->
<nav class="navbar-default navbar-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav" id="main-menu">
            <li>
                <div class="user-img-div">
                    <img src="assets/img/user.png" class="img-thumbnail" />

                    <div class="inner-text">
                        HOŞGELDİN <?php echo $_SESSION['admin_muh'] ?>
                        <br />
                        <small>Last Login : 2 Weeks Ago </small>
                    </div>
                </div>

            </li>


            <li>
                <a class="active-menu" href="index.php"><i class="fa fa-dashboard "></i>ANA SAYFA</a>
            </li>



        </ul>

    </div>

</nav>