import PropTypes from "prop-types";

const ProgressBar = ({ progressBarWidthPercentage }) => {
  return (
    <div className="outer-bar">
      <div
        style={{ width: progressBarWidthPercentage }}
        className="inner-bar"
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  progressBarWidthPercentage: PropTypes.string.isRequired,
};

export default ProgressBar;
