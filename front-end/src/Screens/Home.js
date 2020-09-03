import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from "react-bootstrap/Card";
import { BASE_API_URL } from "../Constants/network";
import { useAuth } from "../Context/auth.js";
import { Button } from "react-bootstrap";


function Home(props) {
  const { authTokens } = useAuth();
  const [currentPage, setCurrentPage] = useState(-1)
  const [lastPage, setLastPage] = useState(-1)
  const [quiz, setQuiz] = useState(null)
  const [answers, setAnswers] = useState([])
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const [error, setError] = useState(false);
  const [score, setScore] = useState(0)


  useEffect(() => {
    getQuiz()
  }, [])

  const getQuiz = async () => {
    try {
      console.log(authTokens)
      const response = await axios.get(BASE_API_URL + '/quizzes', {
        headers: {
          'Authorization': `JWT ${authTokens}`
        }
      })

      console.log({ response })

      initializeGame(response.data)
    }
    catch (error) {
      console.log(error)
    }
  }

  const initializeGame = (quiz) => {
    if (quiz && quiz.questions
      && quiz.questions.length > 0) {

      setQuiz(quiz)

      const emptyArray = Array(quiz.questions.length)
      setAnswers(emptyArray)
      setCurrentPage(0)
      setLastPage(quiz.questions.length - 1)
      setScore(0)
    }
  }

  const resetGame = () => {
    initializeGame(quiz)
  }

  const setAnswer = (questionIndex, answerIndex) => {
    answers[questionIndex] = answerIndex
    setAnswers(answers)

    goToNextPage()
  }

  const goToNextPage = async () => {
    if (currentPage === lastPage) return

    setCurrentPage(prevPage => prevPage + 1)
  }

  const goToPrevPage = async () => {
    if (currentPage === 0) return

    setCurrentPage(prevPage => prevPage - 1)
  }

  const submit = async () => {
    try {
      // Again, "loading"
      setSubmitDisabled(true)

      // Post payload
      const payload = {
        quiz_id: quiz._id,
        answers
      }

      const response = await axios.post(BASE_API_URL + '/quizzes/verify',
        payload, {
        headers: {
          'Authorization': `JWT ${authTokens}`
        }
      })

      setSubmitDisabled(false)

      const score = response.data.score
      setScore(score)
    }
    catch (error) {
      setSubmitDisabled(false)

      const errorMessage = error.response ?
        error.response.data : "Un problème est survenu, veuillez réessayez plus tard"
      setError(errorMessage);
    }
  }

  if (score === 0)
    return (
      <Card className="main-card card-huge font-normal">
        {quiz && quiz.questions.map((question, questionIndex) =>
          <div key={questionIndex} className={`quiz-page ${questionIndex !== currentPage ? 'display-none' : ''} `}>
            <p key={questionIndex} className="quiz-question">
              {question.question}
            </p>

            {question.answers.map((answer, answerIndex) =>
              <Button onClick={() => setAnswer(questionIndex, answerIndex)}
                className='answer-button'
                variant={answers[questionIndex] === answerIndex ? 'secondary' : 'dark'}
                key={answerIndex}>
                {answer}
              </Button>
            )}
          </div>
        )}

        <p>
          {(currentPage + 1) + ' / ' + (lastPage + 1)}
        </p>

        <div className="quiz-footer">
          <Button
            variant="secondary"
            onClick={goToPrevPage}
            disabled={currentPage === 0}>
            {"<"}
          </Button>

          <Button
            variant="secondary"
            onClick={goToNextPage}
            disabled={currentPage === lastPage}>
            {">"}
          </Button>
        </div>

        <div>
          <Button
            onClick={submit}
            disabled={answers.filter(answer => answer).length < answers.length - 1 || submitDisabled}>
            Envoyer
        </Button>

          {error && <p className="error-text">{error}</p>}
        </div>
      </Card >
    )

  // There're certainly better ways to do this...
  if (score !== 0)
    return (
      <Card className="main-card card-huge font-normal">
        <p>
          {`Score : ${score} / ${quiz.questions.length * 3} pts!`}
        </p>

        <Button onClick={resetGame}>
          Rejouer
        </Button>
      </Card>
    )
}

export default Home;