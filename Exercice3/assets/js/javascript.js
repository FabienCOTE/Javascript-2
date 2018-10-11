//Fonction qui s'enclenche quand on appuie sur une touche du clavier
document.getElementById("lastname").addEventListener("keyup", key);

function key() {
  //La variable correspond à la valeur ID lastname
  var letter = document.getElementById("lastname").value;
  //On affiche la boite de dialogue
  alert(letter);
}
