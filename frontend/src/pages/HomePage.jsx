import { useState } from "react";

import BanniereHome from "@components/BanniereHome";
import ElementsList from "@components/ElementsList";
import FilterNav from "@components/FilterNav";

export default function HomePage() {
  const [filterNavigation, setfilterNavigation] = useState("");
  return (
    <div className="container-main">
      <BanniereHome />
      <FilterNav setfilterNavigation={setfilterNavigation} />
      <ElementsList
        filterNavigation={parseInt(filterNavigation, 10)}
        setfilterNavigation={setfilterNavigation}
      />
    </div>
  );
}
