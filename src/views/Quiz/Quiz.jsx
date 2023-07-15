import { useState } from "react";
import { useSelector } from "react-redux";

import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";

import ProgressBar from "@/components/Quiz/ProgressBar/ProgressBar";
import QuestionProgress from "@/components/Quiz/QuestionProgress/QuestionProgress";
import QuizBlock from "@/components/Quiz/QuizBlock/QuizBlock";

const Quiz = () => {
  const { questions } = useSelector(state => state.quiz);

  const [questionNumber, setQuestionNumber] = useState(0);

  const currentQuestion = questions[questionNumber];

  const totalQuestions = questions.length;
  const progressBarWidthPercentage = `${(
    ((questionNumber + 1) / totalQuestions) *
    100
  ).toFixed(4)}%`;

  const handleQuestionNumberChange = () => {
    setQuestionNumber(prevQuestionNum => ++prevQuestionNum);
  };

  return (
    <Container className="quiz-container">
      <ProgressBar progressBarWidthPercentage={progressBarWidthPercentage} />
      <QuestionProgress
        questionNumber={questionNumber + 1}
        totalQuestions={totalQuestions}
      />
      <QuizBlock currentQuestion={currentQuestion} />

      <div className="quiz-footer">
        <span className="quiz-timer">5 : 00</span>
        <Button
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
