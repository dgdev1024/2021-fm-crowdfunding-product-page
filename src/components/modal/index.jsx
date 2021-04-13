/**
 * @file components/modal/index.jsx
 * @brief Displays a modal box on screen.
 */

import React, { useEffect, useRef } from "react";
import IconClose from "../svg/icon-close-modal";
import "./index.scss";

const Modal = ({
  modalClass,
  showCloseButton,
  active,
  callbacks,
  children,
}) => {
  const modalBoxRef = useRef(null);
  const modalBgRef = useRef(null);

  useEffect(() => {
    const { current: modalBg } = modalBgRef;
    const { current: modalBox } = modalBoxRef;
    const { height: modalBgHeight } = modalBg.getBoundingClientRect();
    const { height: modalBoxHeight } = modalBox.getBoundingClientRect();

    if (modalBoxHeight > modalBgHeight) {
      modalBg.style.alignItems = "start";
    } else {
      modalBg.style.alignItems = "center";
    }
  }, []);

  return (
    <div
      className={`modal ${active && "modal--active"} ${modalClass}`}
      ref={modalBgRef}
    >
      <div className="modal__box" ref={modalBoxRef}>
        {showCloseButton && (
          <button
            className="modal__close"
            aria-label="Close Dialog"
            title="Close Dialog"
            onClick={() => callbacks?.onClose?.()}
          >
            <IconClose className="modal__close-icon" />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
