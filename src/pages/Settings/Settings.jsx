import Container from "components/Container/Container";
import Button from "components/Button/Button";

const Settings = () => {
  const handleFormSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container className="settings-container">
      <form onSubmit={handleFormSubmit}>
        <div className="questions-length"></div>
        <div className="difficulty-level"></div>
        <Button type="submit" isPill></Button>
      </form>
    </Container>
  );
};

export default Settings;
