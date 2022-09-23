export default function FilterNav({ setfilterNavigation }) {
  return (
    <div>
      <div className="filter-nav">
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
