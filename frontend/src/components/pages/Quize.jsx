import React, { useState, useEffect } from 'react';

export default function Quize() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAnswerPressed, setShowAnswerPressed] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [questionResults, setQuestionResults] = useState({});

  useEffect(() => {
    fetch('http://localhost:8000/api/questions/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setQuestions(data);
        const initialResults = {};
        data.forEach(question => {
          initialResults[question.id] = [];
        });
        setQuestionResults(initialResults);
      })
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
    setShowAnswerPressed(true);
    const questionId = questions[currentQuestion].id;
    const isCorrect = selectedOption && selectedOption.is_correct;
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }
    updateQuestionResult(questionId, isCorrect);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    setShowAnswerPressed(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
      submitExamResults();
    }
  };

  const submitExamResults = () => {
    fetch('http://localhost:8000/api/exam-attempts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        correct_answers: score,
        incorrect_answers: incorrectAnswers,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => console.log('Exam results submitted:', data))
      .catch(error => console.error('Error submitting exam results:', error));
  };

  const updateQuestionResult = (questionId, isCorrect) => {
    fetch(`http://localhost:8000/api/question-results/${questionId}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        correct_count: isCorrect ? 1 : 0,
        incorrect_count: isCorrect ? 0 : 1,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setQuestionResults(prevResults => ({
          ...prevResults,
          [questionId]: [...prevResults[questionId], isCorrect],
        }));
        console.log('Question result updated:', data);
      })
      .catch(error => console.error('Error updating question result:', error));
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-xl mx-auto p-4 pt-[6rem]">
      {showResult ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your Score: {score} out of {questions.length}</h2>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="text-right mb-4">
            <span className="text-sm font-semibold">Question {currentQuestion + 1} of {questions.length}</span>
          </div>
          <h2 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h2>
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`w-full py-2 px-4 border rounded-lg ${
                  showAnswer
                    ? option.is_correct
                      ? 'bg-green-200'
                      : selectedOption === option
                      ? 'bg-red-200'
                      : 'bg-gray-200'
                    : selectedOption === option
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200'
                }`}
                onClick={() => handleOptionClick(option)}
                disabled={showAnswer}
              >
                {option.text}
              </button>
            ))}
          </div>
          <div className="flex space-x-4 mt-4">
            {questionResults[questions[currentQuestion].id]?.map((result, index) => (
              <div
                key={index}
                className={`h-4 w-4 rounded-full ${result ? 'bg-green-500' : 'bg-red-500'}`}
              ></div>
            ))}
          </div>
          {showAnswerPressed ? (
            <button
              className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg disabled:opacity-50"
              onClick={handleNextQuestion}
              disabled={!selectedOption}
            >
              Next
            </button>
          ) : (
            <button
              className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg disabled:opacity-50"
              onClick={handleShowAnswer}
              disabled={!selectedOption}
            >
              Show Answer
            </button>
          )}
        </div>
      )}
    </div>
  );
}