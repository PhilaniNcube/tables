
import { RestaurantCardType, Restaurants } from "../page";
import Card from "./Card";


interface Props {
  restaurants: Restaurants;
}


const Cards =  ({restaurants}:Props) => {



  return  <div className="py-3 px-36 mt-10 flex flex-wrap">
  {restaurants.map((restaurant) => (
    <Card key={restaurant.id} restaurant={restaurant} />
  ))}
  </div>;
};
export default Cards;
