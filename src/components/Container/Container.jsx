import PropTypes from "prop-types";

const Container = ({ children, className }) => (
  <div className={`container ${className}`}>{children}</div>
);

Container.defaultProps = { children: [<></>], className: "" };

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string,
};

export default Container;
