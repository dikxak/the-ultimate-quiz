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
}) => {
  const pillClassName = isPill ? `${BUTTON_CLASS_PREFIX}pill` : "";
  const variantClassName = `${BUTTON_CLASS_PREFIX}${variant}`;
  const sizeClassName = `${BUTTON_CLASS_PREFIX}${size}`;

  const btnClasses = `${pillClassName} ${variantClassName} ${sizeClassName}`;

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

Button.defaultProps = { isPill: true, className: "", type: "button" };

Button.propTypes = {
  isPill: PropTypes.bool,
  children: PropTypes.any.isRequired,
  variant: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Button;
