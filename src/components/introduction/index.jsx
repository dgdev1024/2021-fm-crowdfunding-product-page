/**
 * @file components/introduction/index.jsx
 * @brief The section which introduces the product to be backed.
 */

import React from "react";
import { useLocalStorage } from "../../hooks/use-local-storage";
import { useProductContext } from "../../contexts/product";
import LogoMastercraft from "../svg/logo-mastercraft";
import IconBookmark from "../svg/icon-bookmark";
import "./index.scss";

const Introduction = ({ showBackProjectModal }) => {
  const { name, description } = useProductContext();
  const [bookmarked, setBookmarked] = useLocalStorage(
    "-fm-cpp-bookmarked",
    false
  );
  const toggleBookmarked = () => setBookmarked((bm) => !bm);

  return (
    <section className="section intro">
      <LogoMastercraft className="intro__logo" />
      <h2 className="heading intro__heading">{name}</h2>
      <p className="text intro__description">{description}</p>
      <div className="intro__buttons">
        <button
          className="button intro__back-button"
          onClick={() => showBackProjectModal(-1)}
        >
          Back This Project
        </button>
        <button
          className={`button button--gray intro__bookmark-button ${
            bookmarked && "intro__bookmark-button--bookmarked"
          }`}
          aria-label="Bookmark This Project"
          title="Bookmark This Project"
          onClick={toggleBookmarked}
        >
          <IconBookmark className="intro__bookmark-button-icon" />
          <span className="intro__bookmark-button-caption">
            {bookmarked ? "Bookmarked" : "Bookmark"}
          </span>
        </button>
      </div>
    </section>
  );
};

export default Introduction;
