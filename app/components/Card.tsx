/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { RestaurantCardType } from "../page";
import Price from "./Price";

type Restaurant = Database["public"]["Tables"]["Restaurant"]["Row"];
interface Props {
  restaurant: Restaurant;
}


const Card = ({restaurant}:Props) => {


  return (
    <Link
      href={`/restaurant/${restaurant.slug}`}
      className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
    >
      <img
        src={restaurant.main_image}
        alt={restaurant.name}
        className="w-full h-36"
      />
      <div className="p-1">
        <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2">77 reviews</p>
        </div>
        <div className="flex text-reg font-light capitalize">
          <p className=" mr-3 capitalize">{restaurant.cuisine_id.name}</p>
          <Price price={restaurant.price} />
          <p>{restaurant.location_id.name}</p>
        </div>
        <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
      </div>
    </Link>
  );
};
export default Card;
