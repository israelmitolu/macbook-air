import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <button className="text-white bg-[#0071e3] text-xs px-[10px] py-[3px] rounded-full">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
