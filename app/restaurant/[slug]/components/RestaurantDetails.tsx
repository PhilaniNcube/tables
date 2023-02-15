import { Fragment } from "react";

const RestaurantDetails = () => {
  return (
    <Fragment>

      <div className="mt-4 border-b pb-6">
        <h1 className="font-bold text-6xl">Milesstone Grill</h1>
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
          The classics you love prepared with a perfect twist, all served up in
          an atmosphere that feels just right. That&apos;s the Milestones
          promise. So, whether you&apos;re celebrating a milestone, making the
          most of Happy Hour or enjoying brunch with friends, you can be sure
          that every Milestones experience is a simple and perfectly memorable
          one.
        </p>
      </div>
    </Fragment>
  );
};
export default RestaurantDetails;
