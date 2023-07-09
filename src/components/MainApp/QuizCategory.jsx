import PropTypes from "prop-types";

const QuizCategory = ({ icon, label, onMouseOver }) => {
  return (
    <div
      onMouseOver={onMouseOver}
      className="quiz-category"
      role="button"
      tabIndex={1}
    >
      <img className="pe-none" src={icon} alt={label} />
      <span className="pe-none">{label}</span>
    </div>
  );
};

QuizCategory.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func.isRequired,
};

export default QuizCategory;
