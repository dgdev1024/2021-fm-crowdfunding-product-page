/**
 * @file about.jsx
 * @brief Displays the about section.
 */

import React from "react";
import SafeHtml from "safe-html";
import { useProductContext } from "../../contexts/product";
import AboutBackerPerk from "../about-backer-perk";
import "./index.scss";

const About = ({ showBackProjectModal }) => {
  const { about, perks } = useProductContext();

  return (
    <section className="section about">
      <h2 className="heading heading--small about__heading">
        About this project
      </h2>
      <p
        className="text about__description"
        dangerouslySetInnerHTML={{
          __html: SafeHtml(about, {
            allowedTags: ["br"],
          }),
        }}
      ></p>
      {perks.slice(1).map((perk, index) => (
        <AboutBackerPerk
          title={perk.title}
          pledge={perk.minimumPledge}
          remaining={perk.remaining}
          key={index}
          onPerkSelected={() => showBackProjectModal(index + 1)}
        >
          {perk.description}
        </AboutBackerPerk>
      ))}
    </section>
  );
};

export default About;
