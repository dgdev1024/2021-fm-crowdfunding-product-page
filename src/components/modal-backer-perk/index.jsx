/**
 * @file components/modal-backer-perk/index.jsx
 * @brief Displays a backer perk pane in the Back Project modal box.
 */

import React, { useState } from "react";
import { useProductContext } from "../../contexts/product";
import "./index.scss";

const ModalBackerPerk = ({
  title,
  isReward,
  pledge,
  minimumPledge,
  remaining,
  onSelected,
  onPledgeComplete,
  isSelected,
  perkIndex,
  children,
}) => {
  const { makePledge } = useProductContext();
  const [pledgeAmount, setPledgeAmount] = useState(pledge || 1);

  const onPledgeFormSubmit = (ev) => {
    ev.preventDefault();
    if (makePledge(perkIndex, Number(pledgeAmount))) {
      onPledgeComplete();
    }
  };

  return (
    <div
      className={`modal-backer-perk ${
        typeof remaining === "number" &&
        remaining === 0 &&
        "modal-backer-perk--out-of-stock"
      } ${isSelected && "modal-backer-perk--selected"}`}
      role="button"
      aria-pressed={isSelected ? "true" : "false"}
      onClick={onSelected}
    >
      <div className="modal-backer-perk__selected"></div>
      <div className="modal-backer-perk__intro">
        <h3 className="heading heading--smaller modal-backer-perk__heading">
          {title}
        </h3>
        {isReward && (
          <p className="text modal-backer-perk__pledge">
            Pledge ${pledge} or more
          </p>
        )}
      </div>
      <p className="text modal-backer-perk__description">{children}</p>
      {isReward && (
        <p className="text modal-backer-perk__remaining">
          <span className="modal-backer-perk__remaining-count">
            {remaining}
          </span>
          <span className="modal-backer-perk__remaining-caption">left</span>
        </p>
      )}
      {isSelected && (
        <form
          onSubmit={onPledgeFormSubmit}
          className="modal-backer-perk__pledge-form"
        >
          <label
            htmlFor="pledge-input"
            className="text modal-backer-perk__pledge-label"
          >
            Enter your pledge
          </label>
          <input
            type="number"
            name="pledge-input"
            id="pledge-input"
            className={`modal-backer-perk__pledge-input ${
              pledgeAmount < minimumPledge &&
              "modal-backer-perk__pledge-input--not-enough"
            }`}
            min={1}
            value={pledgeAmount}
            onChange={(ev) => setPledgeAmount(ev.target.value)}
          />
          <button
            type="submit"
            className="button modal-backer-perk__pledge-submit"
          >
            Continue
          </button>
        </form>
      )}
    </div>
  );
};

export default ModalBackerPerk;
