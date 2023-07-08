import PropTypes from "prop-types";

const Container = ({ children }) => <div className="container">{children}</div>;

Container.defaultProps = { children: <></> };
Container.propTypes = { children: PropTypes.element };

export default Container;
