let questions = [
  {
    question: "What is 10/2?",
    image: "#",
    answers: {
      a: "3",
      b: "5",
      c: "115",
    },
    correctAnswer: "b",
    difficulty: 1,
    point : 50,
  },

  {
    question: "What is 100/20?",
    image: "#",
    answers: {
      a: "3",
      b: "15",
      c: "50",
    },
    correctAnswer: "c",
    difficulty: 2,
    point : 50,
  },

  {
    question: "What is 150/3?",
    image: "#",
    answers: {
      a: "50",
      b: "15",
      c: "100",
    },
    correctAnswer: "a",
    difficulty: 5,
    point : 50,
  },
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
