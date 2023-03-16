const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

/* selectionner le conteneur du carrousel*/
const conteneur = document.querySelector("#banner");
/* selectionner la flèche droite du carrousel*/
const flèchedroite = document.querySelector(".arrow.arrow_right");
/* selectionner la flèche gauche du carrousel*/
const flèchegauche = document.querySelector(".arrow.arrow_left");
/*selectionner les bullets en dessous du carrousel*/
const bullet = document.querySelector(".dots");

/*Mettre un event listener sur la flèche droite et ajouter une console log, au clic l'information "click droit" s'affiche. */
flèchedroite.addEventListener("click", () => {
  console.log("click droit");
});
/*Mettre un event listener sur la flèche gauche et ajouter une console log, au clic l'information "click gauche" s'affiche. */
flèchegauche.addEventListener("click", () => {
  console.log("click gauche");
});
