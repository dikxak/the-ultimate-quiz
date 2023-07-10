import { useState } from "react";
import { useDispatch } from "react-redux";

import StartGameButton from "@/components/Button/StartGameButton";
import GameView from "@/views/GameView/GameView";

import puzzle from "@/assets/icons/puzzle.svg";

import { viewActions } from "@/store/slices/view";

const App = () => {
  const dispatch = useDispatch();

  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleGameStart = () => {
    dispatch(viewActions.updateView("category"));

    setIsGameStarted(true);
  };

  return (
    <>
      <div className="game-heading-container">
        <img src={puzzle} alt="Puzzle" />
        <h1>The Ultimate Quiz</h1>
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
