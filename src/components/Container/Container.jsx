import PropTypes from "prop-types";

const Container = ({ children, className }) => (
  <div className={`container ${className}`}>{children}</div>
);

Container.defaultProps = { className: "" };

Container.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

export default Container;
