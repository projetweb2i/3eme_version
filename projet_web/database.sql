CREATE DATABASE Buy_All;
USE Buy_All;

CREATE TABLE client
(
  id          int(200)    NOT NULL AUTO_INCREMENT COMMENT,
  nom         varchar(50),
  prenom      varchar(50),
  grade       integer NOT NULL,
  mail        varchar(60),
  password    varchar(20) NOT NULL,
  newsletter  varchar(3) NOT NULL,
  date_naissance date NOT NULL,

  CONSTRAINT PKid PRIMARY KEY (id),
  constraint Cknewsletter CHECK(newsletter IN ("oui","non"))
);

CREATE TABLE produit
(
id_produit     integer	 NOT NULL,
nom_Produit	   varchar(30) ,
prix_TTC	     INTEGER,
description		 varchar(100),
image          varchar(100),

CONSTRAINT PKidp	PRIMARY KEY (Id_Produit)
);

CREATE TABLE commande
(
id_commande    	INTEGER	 NOT NULL,
id_Produit    	INTEGER	 NOT NULL,
id    	INTEGER	 NOT NULL,
adresse_livraison		varchar(100),
date_commande			varchar(20),

CONSTRAINT PKidc	PRIMARY KEY (id_commande),
CONSTRAINT FKidp	FOREIGN KEY (id_produit) REFERENCES produit(id_produit),
CONSTRAINT FKid	FOREIGN KEY (id) REFERENCES client(id)
);

INSERT INTO client VALUES (2,"RYBAK","Alexis",3,"alexis.rybak@ig2i.centralelille.fr","11111","non",'1999-11-18');
INSERT INTO client VALUES (1,"DEMURGER","Pierre-Louis",3,"pierrelouisdemurger@gmail.com","03220","oui",'1999-06-08');