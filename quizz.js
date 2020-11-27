const questionHTML = document.getElementById("question");
const btnStart = document.getElementById("start-btn");
const btns = document.querySelectorAll(".btn.answer");
const scoreElement = document.getElementById("score");
const etoile = document.getElementById("etoiles");
const starImage = "<img src=\"image/giphyStar.gif\" width='25px' height='25px'></img>";
const princess = "<br /><img src=\"Gif princess/princessFree.gif\" width='400px' height='400px'></img>";
const princessC = "<br /><img src=\"Gif princess/princessCry.gif\" width='200px' height='150px'></img>";

let quizz;

class Question { /* definit la class question */
  constructor(text, choices, answer, song) {  /*constructor prends 4 parametres */
    this.text = text; /* propriété du constructor */
    this.choices = choices;
    this.answer = answer;
    this.song = song;
  }
  isCorrectAnswer(choice) { // methode (ou fonction) qui prend le choix et retourne VRAI si le choix est egale à la bonne reponse 
    return this.answer === choice;
  }
}

let myQuestions = [
  new Question("", ["image/aladdin.jpg", "image/alice.jpg", "image/monster.jpg","image/pocahontas.jpg"], "image/aladdin.jpg", "sons/aladin.mp3"),
  new Question("", ["image/alice.jpg", "image/kingLion.jpg", "image/sirene.jpg", "image/aladdin.jpg"], "image/kingLion.jpg", "sons/king.mp3"),
  new Question("", ["image/blanche.jpg", "image/pocahontas.jpg", "image/reineNeige.jpg", "image/alice.jpg"], "image/reineNeige.jpg", "sons/reine.mp3"),
  new Question("", ["image/blanche.jpg", "image/pocahontas.jpg", "image/reineNeige.jpg", "image/alice.jpg"], "image/pocahontas.jpg", "sons/poca.mp3"),
  new Question("", ["image/aladdin.jpg", "image/alice.jpg", "image/monster.jpg","image/pocahontas.jpg"], "image/aladdin.jpg", "sons/aladin.mp3"),
  new Question("", ["image/alice.jpg", "image/kingLion.jpg", "image/sirene.jpg", "image/aladdin.jpg"], "image/kingLion.jpg", "sons/aladin.mp3"),
  
];


let count = 0;
let score = 0;
let audio;

function displayQuestion() {
  //questionHTML.innerHTML = myQuestions[count].text;
  myQuestions[count].choices.forEach((choice, i) => {
    console.log(i, choice);
    // écrire la réponse dans le bouton correspondant (0 - 3)
    // quelquechose.textContent
    //console.log(btns[i]);
    btns[i].innerHTML = "<img src='"+ choice +"' width='300px' height='150px'>";
  })
  audio = new Audio(myQuestions[count].song);
  audio.play();
}



function handleClick(evt) { // est appelé lorsque un bouton a été cliqué
  const currentQuestion = myQuestions[count];
  // 1 vérifier réponse
  if (currentQuestion.isCorrectAnswer(evt.target.getAttribute("src"))) {
    score++;
    etoile.innerHTML = etoile.innerHTML + starImage;
  }
  // 2 faire varier count
  count++;
  // 3 afficher question suivnate
  if (count >= myQuestions.length) {
    document.getElementById("quiz").style.display = "none";

    if (score > 3) {
      result = 'well done ! The princess is now free';
      result += princess;
    } else {
      result = 'Try again';
      result += princessC;
    }
    scoreElement.innerHTML = result;
    audio.pause();
  } else {
    audio.pause();
    displayQuestion();
  }

  // Verifier à chaque fois si on est à la derniere question
  // comment on peut savoir si on est à la derniere question???
  // Si on est à la derniere question afficher le SCORe

}

let startGame = () => {

  displayQuestion();

  btns.forEach(btn => { // pour chaque bouton, on lui lie la fonction handleClique lorsque le bouton est cliqué 
    btn.onclick = handleClick;
  });
  btnStart.style.display = "none";
  etoile.innerHTML = "Score "
  document.getElementById("choices").style.display = "initial";
  document.getElementById("presentation").style.display = "none";

};

// EVENT LISTENERS


btnStart.onclick = startGame


// dans l'index html rajouter une nvelle div ds laquelle je vais mettre id etoiles rajouter un id étoile, le score = le nombre d'étoile,
// a chaque fois qu'on clique le boiton choix le nombre d'étoile se met à jour par rapporr à la variable score

//getElementbyId de la div etoiles
//innerthtml=etoile.
//etoile 
//faire une boucle "for"
// d'abord mettre ue seule étoile ensuite faire une boucle