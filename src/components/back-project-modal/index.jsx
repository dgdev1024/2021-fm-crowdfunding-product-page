/**
 * @file components/back-project-modal/index.jsx
 * @brief Presents the 'Back This Project' modal box.
 */

import React from "react";
import { useProductContext } from "../../contexts/product";
import ModalBackerPerk from "../modal-backer-perk";
import Modal from "../modal";
import "./index.scss";

export default ({ active, callbacks }) => {
  const { perks, selectedPerk, setSelectedPerk } = useProductContext();

  return (
    <Modal
      modalClass="back-project-modal"
      active={active}
      showCloseButton={true}
      callbacks={callbacks}
    >
      <h1 className="heading back-project-modal__heading">Back this project</h1>
      <p className="text back-project-modal__text">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      {perks.map((perk, index) => (
        <ModalBackerPerk
          isReward={index !== 0}
          title={perk.title}
          pledge={perk.minimumPledge}
          minimumPledge={perk.minimumPledge}
          remaining={perk.remaining}
          isSelected={selectedPerk === index}
          onSelected={() => {
            if (typeof perk.remaining !== "number" || perk.remaining > 0)
              setSelectedPerk(index);
          }}
          onPledgeComplete={callbacks.onPledgeComplete}
          perkIndex={index}
          key={index}
        >
          {perk.description}
        </ModalBackerPerk>
      ))}
    </Modal>
  );
};
