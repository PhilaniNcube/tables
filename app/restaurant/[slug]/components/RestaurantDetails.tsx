
import { Fragment } from "react";

interface Props {
  restaurant: Database["public"]["Tables"]["Restaurant"]["Row"];
}

const RestaurantDetails = ({restaurant}:Props) => {
  return (
    <Fragment>
      <div className="mt-4 border-b pb-6">
        <h1 className="font-bold text-6xl">{restaurant.name}</h1>
      </div>
      {/* TITLE */} {/* RATING */}
      <div className="flex items-end">
        <div className="ratings mt-2 flex items-center">
          <p>*****</p>
          <p className="text-reg ml-3">4.9</p>
        </div>
        <div>
          <p className="text-reg ml-4">600 Reviews</p>
        </div>
      </div>
      {/* RATING */} {/* DESCRIPTION */}
      <div className="mt-4">
        <p className="text-lg font-light">
         {restaurant.description}
        </p>
      </div>
    </Fragment>
  );
};
export default RestaurantDetails;
