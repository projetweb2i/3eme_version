<?php

/*
Dans ce fichier, on définit diverses fonctions permettant de récupérer des données utiles pour notre TP d'identification. Deux parties sont à compléter, en suivant les indications données dans le support de TP
*/


/********* PARTIE 1 : prise en main de la base de données *********/


// inclure ici la librairie faciliant les requêtes SQL
include_once("./maLibSQL.pdo.php");

function listerUtilisateurs($classe = "both")
{
    // Cette fonction liste les utilisateurs de la base de données
    // et renvoie un tableau d'enregistrements.
    // Chaque enregistrement est un tableau associatif contenant les champs
    // id,pseudo,blacklist,connecte,couleur

    // Lorsque la variable $classe vaut "both", elle renvoie tous les utilisateurs
    // Lorsqu'elle vaut "bl", elle ne renvoie que les utilisateurs blacklistés
    // Lorsqu'elle vaut "nbl", elle ne renvoie que les utilisateurs non blacklistés

    $SQL = "SELECT * FROM client";
    if ($classe == "bl") $SQL .= " WHERE blacklist=1";
    if ($classe == "nbl") $SQL .= " WHERE blacklist=0";

    return parcoursRs(SQLSelect($SQL));
    /*
        $resultat_Mysql = SQLSelect($SQL);
        // un resultat_Mysql est un objet complexe

        // la fonction parcoursRs transforme un résultat mysql en un tableau php
        $tab = parcoursRs($resultat_Mysql);

        // que l'on renvoie comme résultat de la fonction listerUtilisateurs
        return $tab;
    */
}

function verifUserBdd($mail,$password)
{
    // Vérifie l'identité d'un utilisateur
    // dont les identifiants sont passes en paramètre
    // renvoie faux si user inconnu
    // renvoie l'id de l'utilisateur si succès

    $SQL="SELECT id FROM client WHERE mail='$mail' AND password='$password'";

    return SQLGetChamp($SQL);
    // si on avait besoin de plus d'un champ
    // on aurait du utiliser SQLSelect
}

function id($mail)
{
    // vérifie si l'utilisateur est un administrateur
    $SQL ="SELECT id FROM client WHERE mail='$mail'";
    return SQLGetChamp($SQL);
}

function grade($mail)
{
    // vérifie si l'utilisateur est un administrateur
    $SQL ="SELECT grade FROM client WHERE mail='$mail'";
    return SQLGetChamp($SQL);
}

function nom($mail)
{
    // vérifie si l'utilisateur est un administrateur
    $SQL ="SELECT nom FROM client WHERE mail='$mail'";
    return SQLGetChamp($SQL);
}

function prenom($mail)
{
    // vérifie si l'utilisateur est un administrateur
    $SQL ="SELECT prenom FROM client WHERE mail='$mail'";
    return SQLGetChamp($SQL);
}

/********* PARTIE 2 *********/

function mkUser($nom, $prenom, $pass, $mail, $date, $newsletter, $grade=1)
{
    $SQL="INSERT INTO client(nom,prenom,grade,mail,password,newsletter,date_naissance) VALUES ('$nom','$prenom','$grade','$mail','$pass','$newsletter','$date')";
    return SQLInsert($SQL);
}

function supprimerUtilisateur($idUser)
{
    $SQL = "DELETE FROM client WHERE id='$idUser'";
    SQLDelete($SQL);
}

function dev_admin($idUser)
{
    // cette fonction affecte le booléen "connecte" à vrai pour l'utilisateur concerné
    $SQL="UPDATE client SET grade=3 WHERE id='$idUser'";
    SQLUpdate($SQL);
}

function dev_moderateur($idUser)
{
    // cette fonction affecte le booléen "connecte" à vrai pour l'utilisateur concerné
    $SQL="UPDATE client SET grade=2 WHERE id='$idUser'";
    SQLUpdate($SQL);
}

function simple_utilisateur($idUser)
{
    // cette fonction affecte le booléen "connecte" à faux pour l'utilisateur concerné
    $SQL="UPDATE client SET grade=1 WHERE id='$idUser'";
    SQLUpdate($SQL);
}

function changerPasse($idUser,$passe)
{
    $SQL ="UPDATE client SET password='$passe' WHERE id='$idUser'";
    SQLUpdate($SQL);
}

function changerPseudo($idUser,$mail)
{
    // cette fonction modifie le pseudo d'un utilisateur
    $SQL ="UPDATE client SET mail='$mail' WHERE id='$idUser'";
    SQLUpdate($SQL);
}

function verifUser($login,$password){

    if ($id = verifUserBdd($login,$password)) {
        // Succes
        // On cr�e les variables de session
        return true;
    } else {
        // Echec
        return false;
    }
}

?>