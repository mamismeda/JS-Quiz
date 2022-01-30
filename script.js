let questions = [
  {
    questions: "What is 10/2?",
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
    questions: "What is 100/20?",
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
    questions: "What is 150/3?",
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
        let output = [];
        let answers;
        for(var i=0; i<questions.length; i++){
		
            // first reset the list of answers
            answers = [];
    
            // for each available answer to this question...
            for(letter in questions[i].answers){
    
                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="quest-image">' + questions[i].question + '</div>'
                + '<div class="ans">' + answers.join('') + '</div>'
            );

            quizContainer.innerHTML = output.join('');
	}

    showQuestions(questions, quizContainer);

    
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
        	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
	}

	// show the questions
	// showQuestions(questions, quizContainer);

	// // when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
    }
  }
}