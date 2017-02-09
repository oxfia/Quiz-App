function populate() {
	if(quiz.isEnded()) {
		showScores();
	}
	 else {
		// show question
       var element = document.getElementById('question');
			 element.innerHTML = quiz.getQuestionIndex().text;


    // show choices
      var choices = quiz.getQuestionIndex().choices;
			for (var i = 0; i < choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
			}
			showProgress();
	 }
};

function showProgress() {
	var questionNumber = quiz.questionIndex +  1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + questionNumber + " of " + quiz.questions.length;
}

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function () {
		quiz.guess(guess);
		populate();
	}
};

function showScores() {
	var gameOver = "<h1>Result</h1>";
	    gameOver += "<h2 id='score'>Your scores: " + quiz.score + " </h2>";
			var element = document.getElementById("quiz");
			element.innerHTML = gameOver;
};


var questions = [
	new Question("What Is the diffrence between Phylosophy and Psycology?", ["Nothing", "Thinking", "Predicting", "None Of The Above"] ,"Thinking"),
	new Question("Which of the following is a Common Libary?", ["jQuery", "Ruby", "JavaScript", "Python"], "jQuery"),
	new Question("Which of this is not commonly used in Web Developement?", ["Ruby On Rails", "JavaScript", "PHP", "Swift"], "Swift"),
	new Question("Which of this is used for IOS Development?", ["Rust", "C#", "Java", "Objective-C"], "Objective-C"),
	new Question("AngularJs could be used for the following except?",["Client-Side", "Windows Store Apps", "Mobile Development", "Web Apps"], "Windows Store Apps"),
	new Question("What is the current version of AngularJs?",["ng1", "ng2", "ng3", "ng4"], "ng2"),
	new Question('link rel="stylesheet" href="main.css" type="text/css" is used for?',["linking JavaScript files", "linking css files", "importing fonts", "importing libaries"], "linking css files"),
	new Question("Which of the following is not a JavaScript Libary?",["ReactJs", "jQuery", "RequireJs", "Kivy"], "Kivy"),
	new Question("Which of the following is not an Hybrid App Development framework?",["PhoneGap", "jQuery Mobile", "Ionic", "Django"], "Django"),
	new Question("What is the commonly used IDE for IOS Development?",["Adobe Dreamweaver", "Xcode", "Eclipse", "Android Studio"], "Xcode")
];

var quiz = new Quiz(questions);

populate();
