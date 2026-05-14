import { pizzas } from "../data";
import CardGrid from "./CardGrid";

const MenuAll = () => {
  return <CardGrid data={pizzas} />;
};

const MenuMeat = () => {
  return <CardGrid data={pizzas.filter((p) => p.category === "meat")} />;
};

const MenuVegetarian = () => {
  return <CardGrid data={pizzas.filter((p) => p.category === "vegetarian")} />;
};

const MenuSea = () => {
  return <CardGrid data={pizzas.filter((p) => p.category === "sea")} />;
};

const MenuMushroom = () => {
  return <CardGrid data={pizzas.filter((p) => p.category === "mushroom")} />;
};

export { MenuAll, MenuMeat, MenuVegetarian, MenuSea, MenuMushroom };
