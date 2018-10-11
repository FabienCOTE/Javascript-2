//Création de 5 variables
var a = document.getElementById("image1");
var b = document.getElementById("image2");
var c = document.getElementById("image3");
var d = document.getElementById("image4");
var e = document.getElementById("image5");

//On recherche ID des images dans le fichier HTML pour appliquer la fonction mouseOver et mouseOut
a.addEventListener("mouseover", mouseOver1);
a.addEventListener("mouseout", mouseOut1);
b.addEventListener("mouseover", mouseOver2);
b.addEventListener("mouseout", mouseOut2);
c.addEventListener("mouseover", mouseOver3);
c.addEventListener("mouseout", mouseOut3);
d.addEventListener("mouseover", mouseOver4);
d.addEventListener("mouseout", mouseOut4);
e.addEventListener("mouseover", mouseOver5);
e.addEventListener("mouseout", mouseOut5);

//Fonction mouseOver1
function mouseOver1() {
  //On change l'image au passage de la souris
  a.src="images/image1_2.jpg";
}

//Fonction mouseOut1
function mouseOut1() {
  //On remet l'image
  a.src="images/image1.jpg";
}

//Fonction mouseOver2
function mouseOver2() {
  //On change l'image au passage de la souris
  b.src="images/image2_2.jpg";
}

//Fonction mouseOut2
function mouseOut2() {
  //On remet l'image
  b.src="images/image2.jpg";
}

//Fonction mouseOver3
function mouseOver3() {
  //On change l'image au passage de la souris
  c.src="images/image3_2.jpg";
}

//Fonction mouseOut3
function mouseOut3() {
  //On remet l'image
  c.src="images/image3.jpg";
}

//Fonction mouseOver4
function mouseOver4() {
  //On change l'image au passage de la souris
  d.src="images/image4_2.jpg";
}

//Fonction mouseOut4
function mouseOut4() {
  //On remet l'image
  d.src="images/image4.jpg";
}

//Fonction mouseOver5
function mouseOver5() {
  //On change l'image au passage de la souris
  e.src="images/image5_2.jpg";
}

//Fonction mouseOut5
function mouseOut5() {
  //On remet l'image
  e.src="images/image5.jpg";
}
