import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import StartGameButton from "@/components/Button/StartGameButton";
import Button from "@/components/Button/Button";

import GameView from "@/views/GameView/GameView";

import puzzle from "@/assets/icons/puzzle.svg";
import buttonClick from "@/assets/sounds/button-click.mp3";

import playGameSound from "@/utils/playGameSound";

import { viewActions } from "@/store/slices/view";

const App = () => {
  const dispatch = useDispatch();
  const { previousView } = useSelector(state => state.view);

  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleGameStart = () => {
    dispatch(viewActions.updateView("category"));

    setIsGameStarted(true);
  };

  const handleBack = () => {
    dispatch(viewActions.updateViewOnBack());

    playGameSound(buttonClick);
  };

  const gameHeadingClassName = previousView !== null ? "mr-auto" : "";

  return (
    <>
      <div className="navbar">
        {previousView !== null && (
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
