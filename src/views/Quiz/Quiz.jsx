import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";

import ProgressBar from "@/components/Quiz/ProgressBar/ProgressBar";
import QuestionProgress from "@/components/Quiz/QuestionProgress/QuestionProgress";
import QuizBlock from "@/components/Quiz/QuizBlock/QuizBlock";

import { quizActions } from "@/store/slices/quiz";
import { viewActions } from "@/store/slices/view";

import playGameSound from "@/utils/playGameSound";

import gameWinSound from "@/assets/sounds/game-win.mp3";
import gameLoseSound from "@/assets/sounds/game-lose.mp3";
import buttonClickSound from "@/assets/sounds/button-click.mp3";

const INITIAL_QUIZ_BLOCK_CLASS_NAMES = {
  container: "",
  child: "",
};

const PASS_PERCENTAGE = 40;

const Quiz = () => {
  const dispatch = useDispatch();

  const {
    questions,
    time: { minutes, seconds },
    score,
    totalScore,
  } = useSelector(({ quiz }) => quiz);

  const [questionNumber, setQuestionNumber] = useState(0);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [quizBlockClassNames, setQuizBlockClassNames] = useState(
    INITIAL_QUIZ_BLOCK_CLASS_NAMES
  );

  const currentQuestion = questions[questionNumber];
  const totalQuestions = questions.length;
  const progressBarWidthPercentage = `${(
    ((questionNumber + 1) / totalQuestions) *
    100
  ).toFixed(4)}%`;

  const handleQuestionNumberChange = () => {
    playGameSound(buttonClickSound);
    setQuestionNumber(prevQuestionNum => ++prevQuestionNum);
    setIsOptionSelected(false);
    setQuizBlockClassNames(INITIAL_QUIZ_BLOCK_CLASS_NAMES);
  };

  useEffect(() => {
    dispatch(quizActions.updateTotalScore(questions.length));
  }, [questions, dispatch]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds === 0)
        return dispatch(
          quizActions.updateQuizTime({ seconds: 59, minutes: minutes - 1 })
        );

      return dispatch(
        quizActions.updateQuizTime({ seconds: seconds - 1, minutes })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch, minutes, seconds]);

  const isGameOver =
    (seconds === 0 && minutes === 0) || questionNumber === totalQuestions;

  useEffect(() => {
    const scorePercentage = ((score / totalScore) * 100).toFixed(2);

    if (isGameOver) {
      if (scorePercentage >= PASS_PERCENTAGE) {
        dispatch(viewActions.updateView("winner"));
        playGameSound(gameWinSound);
      } else {
        dispatch(viewActions.updateView("loser"));
        playGameSound(gameLoseSound);
      }
    }
  }, [isGameOver, score, totalScore, dispatch]);

  if (isGameOver) return null;

  return (
    <Container className="quiz-container">
      <ProgressBar progressBarWidthPercentage={progressBarWidthPercentage} />
      <QuestionProgress
        questionNumber={questionNumber + 1}
        totalQuestions={totalQuestions}
      />
      <QuizBlock
        quizBlockClassNames={quizBlockClassNames}
        setQuizBlockClassNames={setQuizBlockClassNames}
        currentQuestion={currentQuestion}
        setIsOptionSelected={setIsOptionSelected}
      />

      <div className="quiz-footer">
        <span className="quiz-timer">
          {minutes} : {seconds.toString().padStart(2, 0)}
        </span>

        <Button
          isVisible={isOptionSelected}
          onClick={handleQuestionNumberChange}
          isPill
          size="medium"
          variant="outline"
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

export default Quiz;
