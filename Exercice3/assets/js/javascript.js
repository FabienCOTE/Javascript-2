//Fonction qui s'enclenche quand on appuie sur une touche du clavier
onkeyup = function(e) {
  //La variable correcpond à la valeur de ID lastname
  var letter = document.getElementById("lastname").value;
  //On affiche la boite de dialogue
  alert(letter);
}
