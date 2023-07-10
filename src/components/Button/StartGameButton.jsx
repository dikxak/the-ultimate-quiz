import PropTypes from "prop-types";

import Button from "./Button";

const StartGameButton = ({ isGameStarted, onGameStart }) => {
  if (isGameStarted) return null;

  return (
    <div className="text-center">
      <Button
        onClick={onGameStart}
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
  onGameStart: PropTypes.func.isRequired,
};

export default StartGameButton;
