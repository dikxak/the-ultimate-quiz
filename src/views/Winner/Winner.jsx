import { useSelector, useDispatch } from "react-redux";

import Container from "@/components/Container/Container";

import trophy from "@/assets/images/trophy.png";
import Button from "@/components/Button/Button";

import { viewActions } from "@/store/slices/view";
import { quizActions } from "@/store/slices/quiz";

const Winner = () => {
  const dispatch = useDispatch();

  const { score, totalScore } = useSelector(({ quiz }) => quiz);

  const scorePercentage = ((score / totalScore) * 100).toFixed(2);

  const handlePlayAgain = () => {
    dispatch(viewActions.resetView());
    dispatch(quizActions.resetScores());
  };

  return (
    <Container className="winner-container">
      <span className="winner-text">🎉🎉 Winner 🎉🎉</span>

      <img className="trophy-img" src={trophy} alt="Trophy" />

      <p className="score-description">
        You scored <strong>{score}</strong> out of{" "}
        <strong>
          {totalScore} ({scorePercentage}%)
        </strong>
      </p>

      <Button
        onClick={handlePlayAgain}
        variant="outline"
        size="medium"
        isPill={true}
      >
        Play Again
      </Button>
    </Container>
  );
};

export default Winner;
