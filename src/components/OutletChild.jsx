import { pizzas } from "../data";
import CardGrid from "./CardGrid";

// Universal filter function
const filterByCategory = (category) => {
  if (category === "all") return pizzas;

  return pizzas.filter(
    (pizza) =>
      pizza.category?.toLowerCase().trim() === category.toLowerCase().trim(),
  );
};

const MenuAll = () => {
  return <CardGrid data={filterByCategory("all")} />;
};

const MenuMeat = () => {
  return <CardGrid data={filterByCategory("meat")} />;
};

const MenuVegetarian = () => {
  return <CardGrid data={filterByCategory("vegetarian")} />;
};

const MenuSea = () => {
  return <CardGrid data={filterByCategory("sea")} />;
};

const MenuMushroom = () => {
  return <CardGrid data={filterByCategory("mushroom")} />;
};

export { MenuAll, MenuMeat, MenuVegetarian, MenuSea, MenuMushroom };
