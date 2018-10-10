//On recherche ID image1 dans le fichier HTML pour lui appliquer la fonction mouseOver
document.getElementById("image1").addEventListener("mouseover", mouseOver);

//Fonction mouseOver
function mouseOver() {
  //On change l'image au passage de la souris
  document.getElementById("image1").src="images/image1_2.jpg";
}
