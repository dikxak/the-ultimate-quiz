import PropTypes from "prop-types";

const Select = ({ id, name, options, className, onChange }) => {
  return (
    <select
      id={id}
      name={name}
      className={`select ${className}`}
      onChange={onChange}
    >
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

Select.defaultProps = { className: "" };

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Select;
