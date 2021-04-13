/**
 * @file components/backers/index.jsx
 * @brief Displays statistics on the number of backers and the amount
 * of money backed.
 */

import React, { useState, useEffect } from "react";
import { useProductContext } from "../../contexts/product";
import "./index.scss";

export default () => {
  const {
    moneyBacked,
    moneyNeeded,
    backerCount,
    daysLeft,
  } = useProductContext();
  const [displayedMoneyBacked, setDisplayedMoneyBacked] = useState(0);
  const [displayedBackerCount, setDisplayedBackerCount] = useState(0);
  const [displayedDaysLeft, setDisplayedDaysLeft] = useState(0);

  useEffect(() => {
    const interpolationCount = 50;
    let interpolations = 0;
    const moneyBackedInterpolation = Math.round(
      (moneyBacked - displayedMoneyBacked) / interpolationCount
    );
    const backerCountInterpolation = Math.round(
      (backerCount - displayedBackerCount) / interpolationCount
    );
    const daysLeftInterpolation = Math.round(daysLeft / interpolationCount);

    const interpolationInterval = setInterval(() => {
      setDisplayedMoneyBacked((count) => count + moneyBackedInterpolation);
      setDisplayedBackerCount((count) => count + backerCountInterpolation);
      setDisplayedDaysLeft((count) => count + daysLeftInterpolation);

      if (++interpolations === interpolationCount) {
        setDisplayedMoneyBacked(moneyBacked);
        setDisplayedBackerCount(backerCount);
        setDisplayedDaysLeft(daysLeft);
        clearInterval(interpolationInterval);
      }
    }, 5);

    return () => clearInterval(interpolationInterval);
  }, [moneyBacked, moneyNeeded, backerCount, daysLeft]);

  return (
    <div className="section backers">
      <div className="backers__statistics">
        <div className="backers__statistic">
          <p className="text text--extra-large text--strong backers__statistic-value">
            ${displayedMoneyBacked.toLocaleString()}
          </p>
          <p className="text backers__statistic-caption">
            of ${moneyNeeded.toLocaleString()} backed
          </p>
        </div>
        <div className="backers__statistic">
          <p className="text text--extra-large text--strong backers__statistic-value">
            {displayedBackerCount.toLocaleString()}
          </p>
          <p className="text backers__statistic-caption">total backers</p>
        </div>
        <div className="backers__statistic">
          <p className="text text--extra-large text--strong backers__statistic-value">
            {displayedDaysLeft}
          </p>
          <p className="text backers__statistic-caption">days left</p>
        </div>
      </div>
      <div className="backers__progress">
        <div
          className="backers__progress-value"
          style={{
            width: `${Math.min(
              (displayedMoneyBacked / moneyNeeded) * 100,
              100
            )}%`,
          }}
        ></div>
      </div>
    </div>
  );
};
