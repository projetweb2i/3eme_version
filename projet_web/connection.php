<?php
/**
 * Created by PhpStorm.
 * User: pierre-louis
 * Date: 10/05/18
 * Time: 21:15
 */
    include_once "./config.php";
    include_once "./modele.php";
    include_once "./maLibUtils.php";

    $mail= valider("mail");
    $password= valider("pass");
    $test=verifUser($mail,$password);
    if($test == TRUE)
    {
        session_start();
        $_SESSION["connecte"] = true;
        $_SESSION["id"] = id($mail);
        $_SESSION["nom"] = nom($mail);
        $_SESSION["prenom"] = prenom($mail);
        $_SESSION["mail"] = $mail;
        $_SESSION["grade"] = grade($mail);
        rediriger("./Accueil_2.html");
    }
    else
    {
        rediriger("./Accueil_1bis.html");
    }
?>