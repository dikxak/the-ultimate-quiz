import PropTypes from "prop-types";

const QuestionProgress = ({ questionNumber, totalQuestions }) => {
  return (
    <span className="question-progress">
      Question {questionNumber} / {totalQuestions}
    </span>
  );
};

QuestionProgress.propTypes = {
  questionNumber: PropTypes.number,
  totalQuestions: PropTypes.number,
};

export default QuestionProgress;
