//Création de 5 variables
var a = document.getElementById("image1");
var b = document.getElementById("image2");
var c = document.getElementById("image3");
var d = document.getElementById("image4");
var e = document.getElementById("image5");

//On recherche ID des images dans le fichier HTML pour appliquer la fonction mouseOver
a.addEventListener("mouseover", mouseOver1);
b.addEventListener("mouseover", mouseOver2);
c.addEventListener("mouseover", mouseOver3);
d.addEventListener("mouseover", mouseOver4);
e.addEventListener("mouseover", mouseOver5);

//Fonction mouseOver1
function mouseOver1() {
  //On change l'image au passage de la souris
  a.src="images/image1_2.jpg";
}

//Fonction mouseOver2
function mouseOver2() {
  //On change l'image au passage de la souris
  b.src="images/image2_2.jpg";
}

//Fonction mouseOver3
function mouseOver3() {
  //On change l'image au passage de la souris
  c.src="images/image3_2.jpg";
}

//Fonction mouseOver4
function mouseOver4() {
  //On change l'image au passage de la souris
  d.src="images/image4_2.jpg";
}

//Fonction mouseOver5
function mouseOver5() {
  //On change l'image au passage de la souris
  e.src="images/image5_2.jpg";
}
