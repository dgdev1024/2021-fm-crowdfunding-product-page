/**
 * @file components/completed-modal/index.jsx
 * @brief Displays the 'Thank you for your support!' box that shows up when the
 * user submits a pledge.
 */

import React from "react";
import { useProductContext } from "../../contexts/product";
import Modal from "../modal";
import IconCheck from "../svg/icon-check";
import "./index.scss";

const CompletedModal = ({ active, callbacks }) => {
  const { name } = useProductContext();

  return (
    <Modal
      active={active}
      modalClass="completed-modal"
      showCloseButton={false}
      callbacks={callbacks}
    >
      <div className="completed-modal__container">
        <IconCheck className="completed-modal__icon" />
        <div className="completed-modal__caption">
          <h2 className="heading completed-modal__heading">
            Thanks for your support!
          </h2>
          <p className="text completed-modal__text">
            Your pledge brings us one step closer to sharing {name} worldwide.
            You will get an email once our campaign is completed.
          </p>
        </div>
        <button
          className="button completed-modal__dismiss"
          onClick={callbacks.onClose}
        >
          Got it!
        </button>
      </div>
    </Modal>
  );
};

export default CompletedModal;
