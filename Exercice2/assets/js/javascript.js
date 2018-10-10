//On recherche ID lastname dans le fichier HTML pour lui appliquer la fonction focusEvent
document.getElementById("lastname").addEventListener("blur", focusEvent);

//Fonction focusEvent
function focusEvent() {
  //Affichage de la boite de dialogue
  alert('Merci de votre participation');
}
