import MainApp from "pages/MainApp/MainApp";

import puzzle from "assets/icons/puzzle.svg";

const App = () => {
  return (
    <>
      <div className="game-heading-container">
        <img src={puzzle} alt="Puzzle" />
        <h1>The Ultimate Quiz</h1>
      </div>
      <MainApp />
    </>
  );
};

export default App;
