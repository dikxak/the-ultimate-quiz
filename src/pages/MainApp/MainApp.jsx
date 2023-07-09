import { Howl } from "howler";

import Container from "components/Container/Container";
import QuizCategory from "components/MainApp/QuizCategory";

import { CATEGORIES } from "constants/mainApp";

import mouseOverSound from "assets/sounds/mouse-over.mp3";

const MainApp = () => {
  const handleMouseEnter = () => {
    const sound = new Howl({
      src: [mouseOverSound],
    });

    sound.play();
  };

  return (
    <Container className="grid--3-cols">
      {CATEGORIES.map(({ icon, label }) => (
        <QuizCategory
          onMouseEnter={handleMouseEnter}
          key={label}
          icon={icon}
          label={label}
        />
      ))}
    </Container>
  );
};

export default MainApp;
