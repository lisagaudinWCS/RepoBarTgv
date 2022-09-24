import { useState, useEffect } from "react";
import banPicture from "../assets/bantgv.jpg";

export default function BanniereHome() {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 600) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", setFixed);
  }, []);
  return (
    <div>
      <div className={fix ? "ban-picture fixed" : "ban-picture"}>
        <img src={banPicture} alt="repas" />
      </div>
    </div>
  );
}
