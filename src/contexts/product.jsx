/**
 * @file contexts/product.jsx
 * @brief Context containing product properties and backer perks.
 */

import React, { useState, useContext } from "react";
import Product from "../lib/product.json";

const ProductContext = React.createContext();
const ProductProvider = ({ children }) => {
  const [moneyBacked, setMoneyBacked] = useState(Product.moneyBacked);
  const [backerCount, setBackerCount] = useState(Product.backerCount);
  const [perks, setPerks] = useState(Product.perks);
  const [selectedPerk, setSelectedPerk] = useState(-1);

  const makePledge = (id, amount) => {
    const slicedPerks = perks.slice();
    const hasRemaining = typeof slicedPerks[id].remaining === "number";
    const hasMinPledge = typeof slicedPerks[id].minimumPledge === "number";

    if (hasRemaining && slicedPerks[id].remaining <= 0) {
      return false;
    }

    if (hasMinPledge && slicedPerks[id].minimumPledge > amount) {
      return false;
    }

    if (hasRemaining) {
      slicedPerks[id].remaining -= 1;
    }

    setPerks(slicedPerks);
    setBackerCount((count) => count + 1);
    setMoneyBacked((backed) => backed + amount);
    return true;
  };

  return (
    <ProductContext.Provider
      value={{
        name: Product.name,
        description: Product.description,
        about: Product.about,
        perks,
        moneyBacked,
        moneyNeeded: Product.moneyNeeded,
        daysLeft: Product.daysLeft,
        backerCount,
        makePledge,
        selectedPerk,
        setSelectedPerk,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
export const useProductContext = () => useContext(ProductContext);
