import * as React from "react";

function SvgIconHamburger(props) {
  return (
    <svg width={16} height={15} {...props}>
      <path
        d="M0 0h16v3H0zm0 6h16v3H0zm0 6h16v3H0z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgIconHamburger;
