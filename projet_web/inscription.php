<?php
/**
 * Created by PhpStorm.
 * User: pierre-louis
 * Date: 09/05/18
 * Time: 23:28
 */
include_once "./config.php";
include_once "./modele.php";
include_once "./maLibUtils.php";

$nom= valider("nom");
$prenom= valider("prenom");
$passe= valider("pass");
$mail= valider("mail");
if (isset($_GET['newsletter']) == TRUE)
{

    $newsletter="oui";
}
else
{
    $newsletter="non";
}
$date_j= valider("date_j");
$date_m= valider("date_m");
$date_annee= valider("date_annee");
$date="$date_annee-$date_m-$date_j";
echo "$date";
mkUser($nom,$prenom,$passe,$mail,$date,$newsletter);
rediriger("./Accueil_1.html");
?>