var largeur, hauteur, barre, connection, inscription, contenu, indice, ss_menu;

function largeur_hauteur_page()
{
    largeur=window.innerWidth;
    hauteur=window.innerHeight;
}

function init()
{
    var i, text, taille;
    taille=""+(100/menu.type.length)-2+"%";
    connection=document.getElementById("conec");
    inscription=document.getElementById("inscription");
    contenu=document.getElementById("contenu");
    indice=document.getElementById("indice");
    barre=document.getElementById("menu");
    ss_menu = document.getElementById("ss_menu");
    barre.innerHTML="";
    for(i=0;i<menu.type.length;i++)
    {
        text="<div class='interieur' style='width:"+taille+";' id='"+menu.type[i].nom+"' >"+menu.type[i].nom+"</div>";
        console.log("Texte:", text);
        barre.innerHTML+=text;
    }
}

function enl_menu()
{
    contenu.style.display="block";
    indice.style.display="block";
    ss_menu.style.display="none";
}

function affi_menu(obj)
{
    var i,j,k, text1, text2;

    for (i = 0; i < menu.type.length; i++)
    {
        if (obj.target.id === ""+menu.type[i].nom+"" || obj.target.id === "ss_menu")
        {
            contenu.style.display = "none";
            indice.style.display = "none";
            ss_menu.style.display="block";
            ss_menu.style.height = "" + hauteur - 90 + "";
        }
        if (obj.target.id === "Homme")
        {
            ss_menu.innerHTML="";
            text1=text2="";
            for(j=0;j<ss_menu_homme.type.length;j++)
            {
                text1 = "<div id=" + ss_menu_homme.type[j].nom + " class='quart'>" + ss_menu_homme.type[j].nom + "";
                for(k=0;k<ss_menu_homme.type[j].variete.length;k++)
                {
                    text2 ="<div id="+ss_menu_homme.type[j].variete[k].mat+">"+ss_menu_homme.type[j].variete[k].mat+"</div>";
                    text1+=text2;
                }
                text1+="</div>";
                ss_menu.innerHTML+=text1;
            }
        }
        if (obj.target.id === "Femme")
        {
            ss_menu.innerHTML="";
            text1=text2="";
            for(j=0;j<ss_menu_femme.type.length;j++)
            {
                text1 = "<div id=" + ss_menu_femme.type[j].nom + " class='quart'>" + ss_menu_femme.type[j].nom + "";
                for(k=0;k<ss_menu_femme.type[j].variete.length;k++)
                {
                    text2 ="<div id="+ss_menu_femme.type[j].variete[k].mat+">"+ss_menu_femme.type[j].variete[k].mat+"</div>";
                    text1+=text2;
                }
                text1+="</div>";
                ss_menu.innerHTML+=text1;
            }
        }
        if (obj.target.id === "Enfant")
        {
            ss_menu.innerHTML="";
            text1=text2="";
            for(j=0;j<ss_menu_enfant.type.length;j++)
            {
                text1 = "<div id=" + ss_menu_enfant.type[j].nom + " class='quart'>" + ss_menu_enfant.type[j].nom + "";
                for(k=0;k<ss_menu_enfant.type[j].variete.length;k++)
                {
                    text2 ="<div id="+ss_menu_enfant.type[j].variete[k].mat+">"+ss_menu_enfant.type[j].variete[k].mat+"</div>";
                    text1+=text2;
                }
                text1+="</div>";
                ss_menu.innerHTML+=text1;
            }
        }
        if (obj.target.id === "Mixte")
        {
            ss_menu.innerHTML="";
            text1=text2="";
            for(j=0;j<ss_menu_mixte.type.length;j++)
            {
                text1 = "<div id=" + ss_menu_mixte.type[j].nom +" class='quart'>" + ss_menu_mixte.type[j].nom + "";
                for(k=0;k<ss_menu_mixte.type[j].variete.length;k++)
                {
                    text2 ="<div id="+ss_menu_mixte.type[j].variete[k].mat+">"+ss_menu_mixte.type[j].variete[k].mat+"</div>";
                    text1+=text2;
                }
                text1+="</div>";
                ss_menu.innerHTML+=text1;
            }
        }
    }
}

function fermeture(obj)
{
    if(obj.id==="ferm1")
        connection.style.display="none";
    else
        inscription.style.display="none";
}

function ouverture(obj)
{
    if (obj.id === "compte")
        connection.style.display = "block";
    else
    {
        connection.style.display = "none";
        inscription.style.display = "block";
    }
}

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

function taille_page()
{
    setInterval(function(){ largeur_hauteur_page();}, 100);
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
}