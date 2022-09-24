import { useState, useEffect } from "react";

export default function FilterNav({ setfilterNavigation }) {
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
      <div className={fix ? "filter-nav fixed" : "filter-nav"}>
        <button
          type="button"
          value="
          0"
          onClick={(e) => setfilterNavigation(e.target.value)}
        >
          Tous les Produits
        </button>
        <button
          type="button"
          value="
          1"
          onClick={(e) => setfilterNavigation(e.target.value)}
        >
          Formules
        </button>
        <button
          type="button"
          value="2"
          onClick={(e) => setfilterNavigation(e.target.value)}
        >
          Plats Froids
        </button>
        <button
          type="button"
          value="3"
          onClick={(e) => setfilterNavigation(e.target.value)}
        >
          Plats Chauds
        </button>
        <button
          type="button"
          value="4"
          onClick={(e) => setfilterNavigation(e.target.value)}
        >
          Desserts
        </button>
        <button
          type="button"
          value="5"
          onClick={(e) => setfilterNavigation(e.target.value)}
        >
          Boissons
        </button>
      </div>
    </div>
  );
}
