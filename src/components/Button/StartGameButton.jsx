import PropTypes from "prop-types";

import Button from "./Button";

const StartGameButton = ({ isGameStarted, setIsGameStarted }) => {
  if (isGameStarted) return null;

  return (
    <div className="text-center">
      <Button
        onClick={() => setIsGameStarted(true)}
        className="text-center"
        isPill
        variant="outline"
        size="medium"
      >
        Start Ultimate Quiz
      </Button>
    </div>
  );
};

StartGameButton.propTypes = {
  isGameStarted: PropTypes.bool.isRequired,
  setIsGameStarted: PropTypes.func.isRequired,
};

export default StartGameButton;
