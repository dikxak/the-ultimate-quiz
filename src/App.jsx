import { useState } from "react";

import CategoryMenu from "pages/CategoryMenu/CategoryMenu";
import StartGameButton from "components/Button/StartGameButton";

import puzzle from "assets/icons/puzzle.svg";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <>
      <div className="game-heading-container">
        <img src={puzzle} alt="Puzzle" />
        <h1>The Ultimate Quiz</h1>
      </div>

      <StartGameButton
        isGameStarted={isGameStarted}
        setIsGameStarted={setIsGameStarted}
      />

      {isGameStarted && <CategoryMenu />}
    </>
  );
};

export default App;
