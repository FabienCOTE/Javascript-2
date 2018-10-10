//Création d'une variable tableau qui a 5 valeurs
var imageNum = [document.getElementById("image1"), document.getElementById("image2"), document.getElementById("image3"), document.getElementById("image4"), document.getElementById("image5")];

//Création d'une boucle
for (var i = 0; i < imageNum.length; i++) {
  imageNum[i].addEventListener("mouseover", mouseOver);

  //fonction mouseOver
  function mouseOver() {
    this.src = "images/" + [this.id] + "_2.jpg";
  }

  imageNum[i].addEventListener("mouseout", mouseOut);

  //Fonction mouseOut
  function mouseOut() {
    this.src = "images/" + [this.id] + ".jpg";
  }
}
