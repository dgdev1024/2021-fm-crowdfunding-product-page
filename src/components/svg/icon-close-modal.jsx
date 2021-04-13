import * as React from "react";

function SvgIconCloseModal(props) {
  return (
    <svg width={15} height={15} {...props}>
      <path
        d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
        fillRule="evenodd"
        opacity={0.4}
      />
    </svg>
  );
}

export default SvgIconCloseModal;
