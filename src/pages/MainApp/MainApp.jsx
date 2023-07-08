import Container from "components/Container/Container";
import QuizCategory from "components/MainApp/QuizCategory";

const MainApp = () => {
  return (
    <Container className="grid--3-cols">
      <QuizCategory />
      <QuizCategory />
      <QuizCategory />
      <QuizCategory />
      <QuizCategory />
      <QuizCategory />
      <QuizCategory />
      <QuizCategory />
      <QuizCategory />
    </Container>
  );
};

export default MainApp;
