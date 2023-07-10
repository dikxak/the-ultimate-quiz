import Container from "@/components/Container/Container";

const Loading = () => {
  return (
    <Container className="loader-container">
      <div className="loader"></div>
      <span className="loading-text">Loading The Ultimate Quiz...</span>
    </Container>
  );
};

export default Loading;
