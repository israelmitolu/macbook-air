import { ReactLenis } from "@studio-freight/react-lenis";
import PropTypes from "prop-types";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ duration: 1, syncTouch: true }}>
      {children}
    </ReactLenis>
  );
}

SmoothScrolling.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SmoothScrolling;
