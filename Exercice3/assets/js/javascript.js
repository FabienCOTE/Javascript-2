//Fonction qui s'enclenche quand on appuie sur une touche du clavier
onkeyup = function() {
  //La variable correcpond à la valeur ID lastname
  var letter = document.getElementById("lastname").value;
  //On affiche la boite de dialogue
  alert(letter);
}
