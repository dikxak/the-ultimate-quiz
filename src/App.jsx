import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import StartGameButton from "@/components/Button/StartGameButton";
import Button from "@/components/Button/Button";

import GameView from "@/views/GameView/GameView";

import puzzle from "@/assets/icons/puzzle.svg";

import { viewActions } from "@/store/slices/view";

const App = () => {
  const dispatch = useDispatch();
  const { viewCount } = useSelector(state => state.view);

  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleGameStart = () => {
    dispatch(viewActions.updateView("category"));

    setIsGameStarted(true);
  };

  const handleBack = () => {
    dispatch(viewActions.updateViewOnBack());
  };

  const gameHeadingClassName = viewCount > 1 ? "mr-auto" : "";

  return (
    <>
      <div className="navbar">
        {viewCount > 1 && (
          <Button
            onClick={handleBack}
            size="small"
            isPill={false}
            className="btn-back"
          >
            &larr; Back
          </Button>
        )}

        <div className={`game-heading-container ${gameHeadingClassName}`}>
          <img src={puzzle} alt="Puzzle" />
          <h1>The Ultimate Quiz</h1>
        </div>
      </div>

      <StartGameButton
        isGameStarted={isGameStarted}
        onGameStart={handleGameStart}
      />

      <GameView isGameStarted={isGameStarted} />
    </>
  );
};

export default App;
