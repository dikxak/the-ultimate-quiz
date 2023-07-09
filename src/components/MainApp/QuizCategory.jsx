import PropTypes from "prop-types";

const QuizCategory = ({ icon, label, onMouseEnter }) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className="quiz-category"
      role="button"
      tabIndex={1}
    >
      <img src={icon} alt={label} />
      <span>{label}</span>
    </div>
  );
};

QuizCategory.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
};

export default QuizCategory;
