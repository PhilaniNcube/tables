import Link from "next/link";

export type Restaurant = Database["public"]["Tables"]["Restaurant"]["Row"]

type Props = {
  restaurant: Restaurant;
};

/* eslint-disable @next/next/no-img-element */
const RestaurantCard = ({restaurant}:Props) => {
  return (
    <Link
      href={`/restaurant/${restaurant.slug}`}
      className="border-b flex pb-5"
    >
      <img
        src={restaurant.main_image}
        alt=""
        className="w-44 rounded object-cover"
      />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <p className="mr-4">$$$</p>
            <p className="mr-4 capitalize">{restaurant.cuisine_id.name}</p>
            <p className="mr-4 capitalize">{restaurant.location_id.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </Link>
  );
};
export default RestaurantCard;
