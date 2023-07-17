import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";

import ProgressBar from "@/components/Quiz/ProgressBar/ProgressBar";
import QuestionProgress from "@/components/Quiz/QuestionProgress/QuestionProgress";
import QuizBlock from "@/components/Quiz/QuizBlock/QuizBlock";

import { quizActions } from "@/store/slices/quiz";

const INITIAL_QUIZ_BLOCK_CLASS_NAMES = {
  container: "",
  child: "",
};

const Quiz = () => {
  const dispatch = useDispatch();

  const {
    questions,
    time: { minutes, seconds },
  } = useSelector(state => state.quiz);

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
          {minutes} : {seconds.toString().padEnd(2, 0)}
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
