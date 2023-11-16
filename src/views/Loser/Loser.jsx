import { useDispatch, useSelector } from "react-redux";

import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";

import thumbsDown from "@/assets/images/thumbs-down.png";

import { viewActions } from "@/store/slices/view";
import { quizActions } from "@/store/slices/quiz";

const Loser = () => {
  const dispatch = useDispatch();

  const { score, totalScore } = useSelector(({ quiz }) => quiz);

  const scorePercentage = ((score / totalScore) * 100).toFixed(2);

  const handlePlayAgain = () => {
    dispatch(viewActions.resetView());
    dispatch(quizActions.resetScores());
  };

  return (
    <Container className="loser-container">
      <span className="loser-text">You Lost 🤨</span>

      <img className="thumbs-down-img" src={thumbsDown} alt="Thumbs Down" />

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
        Try Again
      </Button>
    </Container>
  );
};

export default Loser;
