import React, { useEffect, useState } from "react";
import "./GoToTop.css";

const GoToTop = () => {

  const [isVisible, setVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return() => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="back-to-top" onClick={goToBtn}>
          <i className="bi bi-arrow-up-short "></i>
        </div>
      )}
    </>
  );
};

export default GoToTop;
