//On recherche ID des images dans le fichier HTML pour appliquer la fonction mouseOver
document.getElementById("image1").addEventListener("mouseover", mouseOver1);
document.getElementById("image2").addEventListener("mouseover", mouseOver2);
document.getElementById("image3").addEventListener("mouseover", mouseOver3);
document.getElementById("image4").addEventListener("mouseover", mouseOver4);
document.getElementById("image5").addEventListener("mouseover", mouseOver5);

//Fonction mouseOver1
function mouseOver1() {
  //On change l'image au passage de la souris
  document.getElementById("image1").src='images/image1_2.jpg';
}

//Fonction mouseOver2
function mouseOver2() {
  //On change l'image au passage de la souris
  document.getElementById("image2").src='images/image2_2.jpg';
}

//Fonction mouseOver3
function mouseOver3() {
  //On change l'image au passage de la souris
  document.getElementById("image3").src='images/image3_2.jpg';
}

//Fonction mouseOver4
function mouseOver4() {
  //On change l'image au passage de la souris
  document.getElementById("image4").src='images/image4_2.jpg';
}

//Fonction mouseOver5
function mouseOver5() {
  //On change l'image au passage de la souris
  document.getElementById("image5").src='images/image5_2.jpg';
}
