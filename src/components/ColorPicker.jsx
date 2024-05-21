import PropTypes from "prop-types";

const ColorPicker = ({ colors, activeColor, onColorChange }) => {
  return (
    <div className="flex gap-8">
      {colors.map((color) => (
        <div key={color.name} className="flex flex-col gap-1 items-center">
          <div
            className={`w-8 h-8 rounded-full cursor-pointer shadow-[0_2px_4px_-1px_rgba(50,50,93,0.25)_inset,0_1px_2px_-1px_rgba(0,0,0,0.3)_inset] ${
              activeColor === color.name
                ? `ring-2 ring-blue-500 ring-offset-[3px] bg-[${color.hexCode}]`
                : `bg-[${color.hexCode}]`
            }`}
            onClick={() => onColorChange(color.name)}
          ></div>
          {activeColor === color.name && (
            <span className="text-xs font-light w-auto text-center">
              {color.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

ColorPicker.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      hexCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeColor: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired,
};

export default ColorPicker;
