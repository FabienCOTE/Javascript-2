//Création d'une variable avec querySelector qui permet de selectionner le premier élément
var x = document.querySelector("[name='button']");

//Création d'un événement sur le bouton du formulaire.
//On lui applique la fonction rza
x.addEventListener('click', raz);

//Fonction raz
function raz() {
  //On donne une valeur vide pour éffacer le champs
  document.getElementById('lastname').value = "";
  document.getElementById('firstname').value = "";
  document.getElementById('city').value = "";
}
