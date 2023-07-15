import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";

import ProgressBar from "@/components/Quiz/ProgressBar/ProgressBar";
import QuestionProgress from "@/components/Quiz/QuestionProgress/QuestionProgress";
import QuizBlock from "@/components/Quiz/QuizBlock/QuizBlock";

import { quizActions } from "@/store/slices/quiz";

const Quiz = () => {
  const dispatch = useDispatch();

  const { questions } = useSelector(state => state.quiz);

  const [questionNumber, setQuestionNumber] = useState(0);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const currentQuestion = questions[questionNumber];

  const totalQuestions = questions.length;
  const progressBarWidthPercentage = `${(
    ((questionNumber + 1) / totalQuestions) *
    100
  ).toFixed(4)}%`;

  const handleQuestionNumberChange = () => {
    setQuestionNumber(prevQuestionNum => ++prevQuestionNum);
  };

  useEffect(() => {
    dispatch(quizActions.updateTotalScore(questions.length));
  }, [questions, dispatch]);

  return (
    <Container className="quiz-container">
      <ProgressBar progressBarWidthPercentage={progressBarWidthPercentage} />
      <QuestionProgress
        questionNumber={questionNumber + 1}
        totalQuestions={totalQuestions}
      />
      <QuizBlock
        currentQuestion={currentQuestion}
        setIsOptionSelected={setIsOptionSelected}
      />

      <div className="quiz-footer">
        <span className="quiz-timer">5 : 00</span>
        {isOptionSelected && (
          <Button
            onClick={handleQuestionNumberChange}
            isPill
            size="medium"
            variant="outline"
          >
            Next
          </Button>
        )}
      </div>
    </Container>
  );
};

export default Quiz;
