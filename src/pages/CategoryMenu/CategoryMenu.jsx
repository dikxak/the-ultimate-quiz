import mouseOverSound from "assets/sounds/mouse-over.mp3";
import buttonClick from "assets/sounds/button-click.mp3";

import Container from "components/Container/Container";
import QuizCategory from "components/CategoryMenu/QuizCategory";

import { CATEGORIES } from "constants/categoryMenu";

import playGameSound from "utils/playGameSound";

const CategoryMenu = () => {
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

export default CategoryMenu;
