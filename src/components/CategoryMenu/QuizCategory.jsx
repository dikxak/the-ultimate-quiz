import PropTypes from "prop-types";

const QuizCategory = ({ icon, label, onMouseOver, onClick }) => {
  return (
    <div
      onMouseOver={onMouseOver}
      onClick={onClick}
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
  onClick: PropTypes.func.isRequired,
};

export default QuizCategory;
