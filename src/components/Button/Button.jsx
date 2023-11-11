import PropTypes from "prop-types";

const BUTTON_CLASS_PREFIX = "btn-";

const Button = ({
  children,
  isPill,
  variant,
  size,
  className,
  onClick,
  type,
  isVisible,
}) => {
  if (!isVisible) return null;

  const pillClassName = isPill ? `${BUTTON_CLASS_PREFIX}pill ` : "";
  const variantClassName = variant ? `${BUTTON_CLASS_PREFIX}${variant} ` : "";
  const sizeClassName = size ? `${BUTTON_CLASS_PREFIX}${size}` : "";

  const btnClasses = `${pillClassName}${variantClassName}${sizeClassName}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className} ${btnClasses}`}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  isPill: true,
  className: "",
  type: "button",
  onClick: () => {},
  variant: "",
  isVisible: true,
};

Button.propTypes = {
  isPill: PropTypes.bool,
  children: PropTypes.any.isRequired,
  size: PropTypes.string.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  isVisible: PropTypes.bool,
};

export default Button;
