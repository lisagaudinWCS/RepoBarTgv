import BanniereHome from "@components/BanniereHome";
import ElementsList from "@components/ElementsList";
import FilterNav from "@components/FilterNav";

export default function HomePage() {
  return (
    <div>
      <BanniereHome />
      <FilterNav />
      <ElementsList />
    </div>
  );
}
