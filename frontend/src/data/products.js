import daytona from "../assets/daytona.jpg";
import nautilus from "../assets/nautilus.jpg";
import royaloak from "../assets/royaloak.jpg";
import omegaSeamaster from "../assets/omega-seamaster.jpg";
import cartierSantos from "../assets/cartier-santos.jpg";
import iwcPortugieser from "../assets/iwc-portugieser.jpg";

const products = [
  {
    id: 1,
    name: "Rolex Daytona",
    price: 7950,
    image: daytona,
  },
  {
    id: 2,
    name: "Patek Philippe Nautilus",
    price: 12500,
    image: nautilus,
  },
  {
    id: 3,
    name: "Audemars Piguet Royal Oak",
    price: 9800,
    image: royaloak,
  },
  {
    id: 4,
    name: "Omega Seamaster",
    price: 6200,
    image: omegaSeamaster,
  },
  {
    id: 5,
    name: "Cartier Santos",
    price: 8400,
    image: cartierSantos,
  },
  {
    id: 6,
    name: "IWC Portugieser",
    price: 11200,
    discount: 15,
    oldPrice: 13200,
    image: iwcPortugieser,
  },
];

export default products;