/**
 * @file components/app/index.jsx
 * @brief The application's top-level component.
 */

import React, { useState, useEffect } from "react";
import ProductProvider, { useProductContext } from "../../contexts/product";
import Header from "../header";
import Introduction from "../introduction";
import Backers from "../backers";
import About from "../about";
import BackProjectModal from "../back-project-modal";
import CompletedModal from "../completed-modal";
import "./index.scss";

const InnerApp = () => {
  const { setSelectedPerk } = useProductContext();
  const [activeModal, setActiveModal] = useState("");

  /*
    Effect hook to disable scrolling the main page if a modal window is on screen.

    Source: https://stackoverflow.com/a/66985940/2868302
    Derived from code by Martin Grönlund (https://stackoverflow.com/users/1780962/martin-gr%c3%b6nlund)
    License: CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/)
  */
  useEffect(() => {
    document.body.style.overflowY = activeModal === "" ? "scroll" : "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [activeModal]);

  const dismissModal = () => setActiveModal("");
  const showBackProjectModal = (selectedIndex = -1) => {
    setSelectedPerk(selectedIndex);
    setActiveModal("back-project");
  };
  const showCompletedModal = () => setActiveModal("completed");

  return (
    <>
      <main className="main">
        <Header />
        <div className="container main__container">
          <Introduction showBackProjectModal={showBackProjectModal} />
          <Backers />
          <About showBackProjectModal={showBackProjectModal} />
        </div>
      </main>

      <BackProjectModal
        active={activeModal === "back-project"}
        callbacks={{
          onClose: dismissModal,
          onPledgeComplete: showCompletedModal,
        }}
      />

      <CompletedModal
        active={activeModal === "completed"}
        callbacks={{
          onClose: dismissModal,
        }}
      />
    </>
  );
};

const App = () => (
  <ProductProvider>
    <InnerApp />
  </ProductProvider>
);

export default App;
