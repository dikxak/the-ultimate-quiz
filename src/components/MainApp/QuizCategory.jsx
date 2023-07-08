import PropTypes from "prop-types";

const QuizCategory = ({ icon, label }) => {
  return (
    <div className="quiz-category" role="button" tabIndex={1}>
      <img src={icon} alt={label} />
      <span>{label}</span>
    </div>
  );
};

QuizCategory.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default QuizCategory;
