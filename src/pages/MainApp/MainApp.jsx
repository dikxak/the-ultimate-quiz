import Container from "components/Container/Container";
import QuizCategory from "components/MainApp/QuizCategory";

import { CATEGORIES } from "constants/mainApp";

const MainApp = () => {
  return (
    <Container className="grid--3-cols">
      {CATEGORIES.map(({ icon, label }) => (
        <QuizCategory key={label} icon={icon} label={label} />
      ))}
    </Container>
  );
};

export default MainApp;
