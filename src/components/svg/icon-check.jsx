import * as React from "react";

function SvgIconCheck(props) {
  return (
    <svg width={64} height={64} {...props}>
      <g fill="none" fillRule="evenodd">
        <circle fill="#3CB3AB" cx={32} cy={32} r={32} />
        <path stroke="#FFF" strokeWidth={5} d="M20 31.86L28.093 40 44 24" />
      </g>
    </svg>
  );
}

export default SvgIconCheck;
