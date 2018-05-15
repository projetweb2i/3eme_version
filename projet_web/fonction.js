var largeur, hauteur, barre, connection, inscription, contenu, indice, ss_menu, banniere;
var select1, select2, select3;
var test;
var test1, test2, test3, test4;



function largeur_hauteur_page()
{
    largeur=window.innerWidth;
    hauteur=window.innerHeight;
}

function init()
{
    var i, text, taille;
    taille=""+(100/menu.type.length)-2+"%";
    select1=document.getElementById("date_j");
    select2=document.getElementById("date_m");
    select3=document.getElementById("date_annee");
    connection=document.getElementById("conec");
    inscription=document.getElementById("inscription");
    contenu=document.getElementById("contenu");
    indice=document.getElementById("indice");
    barre=document.getElementById("menu");
    ss_menu = document.getElementById("ss_menu");
    banniere = document.getElementById("bannière");
    barre.innerHTML="";
    test1=test2=test3=test4=0;
    for(i=0;i<menu.type.length;i++)
    {
        text="<div class='interieur' style='width:"+taille+";' id='"+menu.type[i].nom+"' onclick='affi_menu(this)'>"+menu.type[i].nom+"</div>";
        console.log("Texte:", text);
        barre.innerHTML+=text;
    }
    option();
}

function affi_menu(obj)
{
    var j,k, text1, text2;

    console.log(test1,test2,test3,test4);
    if (obj.id === "Homme" && test1 === 0)
    {
        contenu.style.display = "none";
        indice.style.display = "none";
        ss_menu.style.display="block";
        ss_menu.style.height = "" + hauteur - 89 + "";
        ss_menu.innerHTML="";
        text1=text2="";
        for(j=0;j<ss_menu_homme.type.length;j++)
        {
            text1 = "<div id=" + ss_menu_homme.type[j].nom + " class='quart'><div class='titre'>" + ss_menu_homme.type[j].nom + "</div><div class='item'>";
            for(k=0;k<ss_menu_homme.type[j].variete.length;k++)
            {
                text2 ="<br>"+ss_menu_homme.type[j].variete[k].mat;
                text1+=text2;
            }
            text1+="</div></div>";
            ss_menu.innerHTML+=text1;
        }
        test2=test3=test4=0;
        test1 = 1;
    }
    else if (obj.id === "Homme")
    {
        contenu.style.display="block";
        indice.style.display="block";
        ss_menu.style.display="none";
        test1 = 0;
    }
    if (obj.id === "Femme" && test2 === 0)
    {
        contenu.style.display = "none";
        indice.style.display = "none";
        ss_menu.style.display="block";
        ss_menu.style.height = "" + hauteur - 89 + "";
        ss_menu.innerHTML="";
        text1=text2="";
        for(j=0;j<ss_menu_femme.type.length;j++)
        {
            text1 = "<div id=" + ss_menu_femme.type[j].nom + " class='quart'><div class='titre'>" + ss_menu_femme.type[j].nom + "</div><div class='item'>";
            for(k=0;k<ss_menu_femme.type[j].variete.length;k++)
            {
                text2 ="<br>"+ss_menu_femme.type[j].variete[k].mat;
                text1+=text2;
            }
            text1+="</div></div>";
            ss_menu.innerHTML+=text1;
        }
        test1=test3=test4=0;
        test2 = 1;
    }
    else if (obj.id === "Femme")
    {
        contenu.style.display="block";
        indice.style.display="block";
        ss_menu.style.display="none";
        test2 = 0;
    }
    if (obj.id === "Enfant" && test3 === 0)
    {
        contenu.style.display = "none";
        indice.style.display = "none";
        ss_menu.style.display="block";
        ss_menu.style.height = "" + hauteur - 89 + "";
        ss_menu.innerHTML="";
        text1=text2="";
        for(j=0;j<ss_menu_mixte.type.length;j++)
        {
            text1 = "<div id=" + ss_menu_enfant.type[j].nom +" class='quart'><div class='titre'>" + ss_menu_enfant.type[j].nom + "</div><div class='item'>";
            for(k=0;k<ss_menu_enfant.type[j].variete.length;k++)
            {
                text2 ="<br>"+ss_menu_enfant.type[j].variete[k].mat;
                text1+=text2;
            }
            text1+="</div></div>";
            ss_menu.innerHTML+=text1;
        }
        test1=test2=test4=0;
        test3 = 1;
    }
    else if (obj.id === "Enfant")
    {
        contenu.style.display="block";
        indice.style.display="block";
        ss_menu.style.display="none";
        test3 = 0;
    }
    if (obj.id === "Mixte" && test4 === 0)
    {
        contenu.style.display = "none";
        indice.style.display = "none";
        ss_menu.style.display="block";
        ss_menu.style.height = "" + hauteur - 89 + "";
        ss_menu.innerHTML="";
        text1=text2="";
        for(j=0;j<ss_menu_mixte.type.length;j++)
        {
            text1 = "<div id=" + ss_menu_mixte.type[j].nom +" class='quart'><div class='titre'>" + ss_menu_mixte.type[j].nom + "</div><div class='item'>";
            for(k=0;k<ss_menu_mixte.type[j].variete.length;k++)
            {
                text2 ="<br>"+ss_menu_mixte.type[j].variete[k].mat;
                text1+=text2;
            }
            text1+="</div></div>";
            ss_menu.innerHTML+=text1;
        }
        test1=test2=test3=0;
        test4 = 1;
    }
    else if(obj.id === "Mixte")
    {
        contenu.style.display="block";
        indice.style.display="block";
        ss_menu.style.display="none";
        test4 = 0;
    }
    console.log(test1,test2,test3,test4);
}

function fermeture(obj)
{
    if(obj.id==="ferm1")
    {
        connection.style.display="none";
        banniere.style.opacity="1";
        indice.style.opacity="1";
        contenu.style.opacity="1";
        test=0;
    }
    else
    {
        inscription.style.display = "none";
        banniere.style.opacity="1";
        indice.style.opacity="1";
        contenu.style.opacity="1";
        test=0;
    }
}

function ouverture(obj)
{
    if (obj.id === "compte" && test !== 1)
    {
        connection.style.display = "block";
        banniere.style.opacity="0.2";
        indice.style.opacity="0.2";
        contenu.style.opacity="0.2";
        test=1
    }
    if (obj.id === "autre")
    {
        connection.style.display = "none";
        inscription.style.display = "block";
        banniere.style.opacity="0.2";
        indice.style.opacity="0.2";
        contenu.style.opacity="0.2";
    }
}

function option()
{
    var i, text;

    select1.innerHTML=select2.innerHTML=select3.innerHTML="";
    for(i=1;i<=31;i++)
    {
        text="<option>"+i+"</option>";
        select1.innerHTML+=text;
    }
    for(i=1;i<=12;i++)
    {
        text="<option>"+i+"</option>";
        select2.innerHTML+=text;
    }
    for(i=1948;i<=2018;i++)
    {
        text="<option>"+i+"</option>";
        select3.innerHTML+=text;
    }
}

function cacher()
{
    var check, password;

    password=document.getElementById("password1");
    check=document.getElementById("aff_pass");

    if(check.checked)
    {
        password.type="text";
    }
    else
    {
       password.type="password";
    }
}

function taille_page()
{
    setInterval(function(){ largeur_hauteur_page();}, 100);
}

/*
function grandir(obj)
{
    var photo, desc;

    if (obj.target.id === "chaussure" || obj.target.id === "chaussurep" || obj.target.id === "chaussured")
    {
        photo=document.getElementById("chaussure");
        desc=document.getElementById("chaussured");
        contenu.style.height="150%";
        indice.style.top="150%";
        photo.style.width="30%";
        desc.style.fontSize="14px";
    }
    if(obj.target.id === "vetement" || obj.target.id === "vetementp" || obj.target.id === "vetementd")
    {
        photo=document.getElementById("vetement");
        desc=document.getElementById("vetementd");
        contenu.style.height="150%";
        indice.style.top="150%";
        photo.style.width="30%";
        desc.style.fontSize="14px";
    }
    if(obj.target.id === "accessoire" || obj.target.id === "accessoirep" || obj.target.id === "accessoired")
    {
        photo=document.getElementById("accessoire");
        desc=document.getElementById("accessoired");
        contenu.style.height="150%";
        indice.style.top="150%";
        photo.style.width="30%";
        desc.style.fontSize="14px";
    }
}

function dezoom()
{
    var photo, desc;

    contenu.style.height="140%";
    indice.style.top="140%";
    photo=document.getElementById("chaussure");
    desc=document.getElementById("chaussured");
    photo.style.width="26%";
    desc.style.fontSize="10px";
    photo=document.getElementById("accessoire");
    desc=document.getElementById("accessoired");
    photo.style.width="26%";
    desc.style.fontSize="10px";
    photo=document.getElementById("vetement");
    desc=document.getElementById("vetementd");
    photo.style.width="26%";
    desc.style.fontSize="10px";
}*/