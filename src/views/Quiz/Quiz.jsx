import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";

import ProgressBar from "@/components/Quiz/ProgressBar/ProgressBar";
import QuestionProgress from "@/components/Quiz/QuestionProgress/QuestionProgress";
import QuizBlock from "@/components/Quiz/QuizBlock/QuizBlock";

const Quiz = () => {
  return (
    <Container className="quiz-container">
      <ProgressBar />
      <QuestionProgress />
      <QuizBlock />

      <div className="quiz-footer">
        <span className="quiz-timer">5 : 00</span>
        <Button isPill size="medium" variant="outline">
          Next
        </Button>
      </div>
    </Container>
  );
};

export default Quiz;
