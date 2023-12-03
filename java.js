const quiz = [
    {
        question: "Quelle est la capitale de la France ?",
        reponse: [
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Londres", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Quelle est la capitale du Japon ?",
        reponse: [
            { text: "Pékin", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Séoul", correct: false },
            { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "Quelle est la capitale du Brésil ?",
        reponse: [
            { text: "Brasilia", correct: true },
            { text: "Buenos Aires", correct: false },
            { text: "Lima", correct: false },
            { text: "Rio de Janeiro", correct: false }
        ]
    },
    {
        question: "Quelle est la capitale de l'Australie ?",
        reponse: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Auckland", correct: false }
        ]
    },
    {
        question: "Quelle est la capitale de l'Égypte ?",
        reponse: [
            { text: "Le Caire", correct: true },
            { text: "Riyad", correct: false },
            { text: "Téhéran", correct: false },
            { text: "Casablanca", correct: false }
        ]
    },
    {
        question: "Quiz terminer :)",
    },
];




let QuestionActuelle = 0;
let score = 0;


const questionContainer = document.getElementById('question-container');
const reponseButtons = document.getElementById('reponse-buttons');
const scoreDisplay = document.getElementById('score');
const nextButton = document.getElementById('next-button');

function startQuiz() {
    showQuestion(quiz[QuestionActuelle]); //Pour demarrer le quiz
}

function showQuestion(question) {

    questionContainer.innerText = question.question;
    reponseButtons.innerHTML = "";
    
    question.reponse.forEach(reponse => { //boucle pour parcourir toute les reponse possible a la question actuelle

        const button = document.createElement('button');
        button.innerText = reponse.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(reponse));
        reponseButtons.appendChild(button);  //ajouter au bonton cree
    });
}

function selectAnswer(reponse) {
    const correct = reponse.correct;
    if (correct) {
        score++; // Augmente le score en cas de bonne réponse
        scoreDisplay.innerText = ` Votre score est de ${score} sur ${quiz.length-1}`;
    }

    // Change la couleur du bouton en fonction de la réponse
    const selectedButton = Array.from(reponseButtons.children).find(button => button.innerText === reponse.text);
    selectedButton.style.backgroundColor = correct ? '#2ecc71' : '#e74c3c';
    
    // Désactive les boutons après la sélection
    reponseButtons.querySelectorAll('.btn').forEach(button => button.disabled = true);

    // Affiche le bouton Suivant
    nextButton.style.display = 'block';
}

function nextQuestion() {
    if (QuestionActuelle < quiz.length - 1) {
        QuestionActuelle++;
        // Réinitialise les styles des boutons et réactive les boutons
        reponseButtons.querySelectorAll('.btn').forEach(button => {
            button.style.backgroundColor = '#3498db';
            button.disabled = false;
        });
        nextButton.style.display = 'none'; // Cache le bouton Suivant
        showQuestion(quiz[QuestionActuelle]);
    } else {
        // Le quiz est terminé
        endQuiz();
    }
}

// Démarrez le quiz lorsque la page se charge
startQuiz();