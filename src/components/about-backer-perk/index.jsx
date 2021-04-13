/**
 * @file components/about-backer-perk/index.jsx
 * @brief Displays a special perk for backers, in the About section.
 */

import React from "react";
import "./index.scss";

const AboutBackerPerk = ({
  title,
  pledge,
  remaining,
  onPerkSelected,
  children,
}) => (
  <div
    className={`about-backer-perk ${
      remaining === 0 && "about-backer-perk--out-of-stock"
    }`}
  >
    <div className="about-backer-perk__intro">
      <h3 className="heading heading--smaller about-backer-perk__heading">
        {title}
      </h3>
      <p className="text about-backer-perk__pledge">Pledge ${pledge} or more</p>
    </div>
    <p className="text about-backer-perk__description">{children}</p>
    <p className="text about-backer-perk__remaining">
      <span className="about-backer-perk__remaining-count">{remaining}</span>
      <span className="about-backer-perk__remaining-caption">left</span>
    </p>
    <button
      className={`button about-backer-perk__select ${
        remaining === 0 && "about-backer-perk__select--out-of-stock"
      }`}
      disabled={remaining === 0}
      onClick={onPerkSelected}
    >
      {remaining === 0 ? "Out of Stock" : "Select Reward"}
    </button>
  </div>
);

export default AboutBackerPerk;
