//On recherche ID des images dans le fichier HTML pour appliquer la fonction mouseOver et mouseOut
document.getElementById("image1").addEventListener("mouseover", mouseOver1);
document.getElementById("image1").addEventListener("mouseout", mouseOut1);
document.getElementById("image2").addEventListener("mouseover", mouseOver2);
document.getElementById("image2").addEventListener("mouseout", mouseOut2);
document.getElementById("image3").addEventListener("mouseover", mouseOver3);
document.getElementById("image3").addEventListener("mouseout", mouseOut3);
document.getElementById("image4").addEventListener("mouseover", mouseOver4);
document.getElementById("image4").addEventListener("mouseout", mouseOut4);
document.getElementById("image5").addEventListener("mouseover", mouseOver5);
document.getElementById("image5").addEventListener("mouseout", mouseOut5);


//Fonction mouseOver1
function mouseOver1() {
  //On change l'image au passage de la souris
  document.getElementById("image1").src='images/image1_2.jpg';
}

//Fonction mouseOut1
function mouseOut1() {
  //On change l'image au passage de la souris
  document.getElementById("image1").src='images/image1.jpg';
}

//Fonction mouseOver2
function mouseOver2() {
  //On change l'image au passage de la souris
  document.getElementById("image2").src='images/image2_2.jpg';
}

//Fonction mouseOut2
function mouseOut2() {
  //On change l'image au passage de la souris
  document.getElementById("image2").src='images/image2.jpg';
}

//Fonction mouseOver3
function mouseOver3() {
  //On change l'image au passage de la souris
  document.getElementById("image3").src='images/image3_2.jpg';
}

//Fonction mouseOut3
function mouseOut3() {
  //On change l'image au passage de la souris
  document.getElementById("image3").src='images/image3.jpg';
}

//Fonction mouseOver4
function mouseOver4() {
  //On change l'image au passage de la souris
  document.getElementById("image4").src='images/image4_2.jpg';
}

//Fonction mouseOut4
function mouseOut4() {
  //On change l'image au passage de la souris
  document.getElementById("image4").src='images/image4.jpg';
}

//Fonction mouseOver5
function mouseOver5() {
  //On change l'image au passage de la souris
  document.getElementById("image5").src='images/image5_2.jpg';
}

//Fonction mouseOut5
function mouseOut5() {
  //On change l'image au passage de la souris
  document.getElementById("image5").src='images/image5.jpg';
}
