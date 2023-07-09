import mouseOverSound from "assets/sounds/mouse-over.mp3";
import buttonClick from "assets/sounds/button-click.mp3";

import Container from "components/Container/Container";
import QuizCategory from "components/MainApp/QuizCategory";

import { CATEGORIES } from "constants/mainApp";

import playGameSound from "utils/playGameSound";

const MainApp = () => {
  const handleMouseClick = () => {
    playGameSound(buttonClick);
  };

  const handleMouseOver = () => {
    playGameSound(mouseOverSound);
  };

  return (
    <Container className="grid--3-cols">
      {CATEGORIES.map(({ icon, label }) => (
        <QuizCategory
          onClick={handleMouseClick}
          onMouseOver={handleMouseOver}
          key={label}
          icon={icon}
          label={label}
        />
      ))}
    </Container>
  );
};

export default MainApp;
