import React, { useState } from "react";
import './App.css';

function App() {

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "Inside which HTML element do we put the JavaScript?",
      options: [
        { id: 0, text: "<scripting>", isCorrect: false },
        { id: 1, text: "<Script>", isCorrect: true },
        { id: 2, text: "<javascript>", isCorrect: false },
        { id: 3, text: "<js>", isCorrect: false },
      ]
    },
    {
      text: "Where is the correct place to insert a JavaScript?",
      options: [
        { id: 0, text: "The <body> section", isCorrect: false },
        { id: 1, text: "Both the <head> section and the <body> section are correct", isCorrect: true },
        { id: 2, text: "The <head> section", isCorrect: false },
        { id: 3, text: "Non of the above", isCorrect: false },
      ]
    },
    {
      text: 'What is the correct syntax for referring to an external script called "xxx.js"?',
      options: [
        { id: 0, text: '<script name="xxx.js">', isCorrect: false },
        { id: 1, text: '<script src="xxx.js">  ', isCorrect: true },
        { id: 2, text: '<script="xxx.js">', isCorrect: false },
        { id: 3, text: '<script href="xxx.js">', isCorrect: false },
      ]
    },
    {
      text: 'How do you write "Hello World" in an alert box?',
      options: [
        { id: 0, text: 'alertBox("Hello World");', isCorrect: false },
        { id: 1, text: 'msg("Hello World");', isCorrect: false },
        { id: 2, text: 'alert("Hello World"); ', isCorrect: true },
        { id: 3, text: 'msgBox("Hello World");', isCorrect: false },
      ]
    },
    {
      text: "How do you create a function in JavaScript?",
      options: [
        { id: 0, text: "function myFunction()  ", isCorrect: true },
        { id: 1, text: "function = myFunction()", isCorrect: false },
        { id: 2, text: "function:myFunction()", isCorrect: false },
        { id: 3, text: "function myFunction:()", isCorrect: false },
      ]
    },
    {
      text: 'How do you call a function named "myFunction"?',
      options: [
        { id: 0, text: 'call myFunction()', isCorrect: false },
        { id: 1, text: "call function myFunction()  ", isCorrect: false },
        { id: 2, text: "function:myFunction()", isCorrect: false },
        { id: 3, text: "myFunction() ", isCorrect: true },
      ]
    },
    {
      text: "How to write an IF statement in JavaScript?",
      options: [
        { id: 0, text: "if i = 5 ", isCorrect: false },
        { id: 1, text: "if i == 5 then", isCorrect: false },
        { id: 2, text: "if (i == 5)  ", isCorrect: true },
        { id: 3, text: "if i = 5 then", isCorrect: false },
      ]
    },
    {
      text: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
      options: [
        { id: 0, text: 'if i <> 5', isCorrect: false },
        { id: 1, text: 'if (i <> 5)', isCorrect: false },
        { id: 2, text: 'if i =! 5 then', isCorrect: false },
        { id: 3, text: 'if (i != 5)', isCorrect: true },
      ]
    }, {
      text: 'How does a WHILE loop start?',
      options: [
        { id: 0, text: 'while (i <= 10)', isCorrect: true },
        { id: 1, text: 'while (i <= 10; i++)', isCorrect: false },
        { id: 2, text: 'while i = (1 to 10); ', isCorrect: false },
        { id: 3, text: 'while i = 1 to 10;', isCorrect: false },
      ]
    }, {
      text: 'How does a FOR loop start?',
      options: [
        { id: 0, text: 'for i = 1 to 5', isCorrect: false },
        { id: 1, text: 'for (i = 0; i <= 5)', isCorrect: false },
        { id: 2, text: 'for (i = 0; i <= 5; i++)', isCorrect: true },
        { id: 3, text: 'for (i <= 5; i++)', isCorrect: false },
      ]
    },
  ]

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 2);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setFinalResults(true);
    }


  }

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  }

  return (
    <div className="App">

      {/* Header part */}
      <h1>Quiz</h1>

      {/* Present score */}
      <h2>Present Score: {score}</h2>

      {showFinalResults ? (

        <div className='f-r'>
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - ({(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart Quiz</button>
        </div>
      ) : (

        /* question card */

        <div className="page">
          <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
          <h3 className="q-t">{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
              )
            })}
          </ul>

        </div>)}


    </div>
  );
}

export default App;
