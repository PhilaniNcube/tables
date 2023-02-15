import Link from "next/link";
import Header from "./components/Header";
import ReservationCard from "./components/ReservationCard";
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurantImages from "./components/RestaurantImages";
import RestaurantNavbar from "./components/RestaurantNavbar";
import ReviewCard from "./components/ReviewCard";
import Reviews from "./components/Reviews";

/* eslint-disable @next/next/no-img-element */
const page = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">

       {/* HEADER */}
        <Header />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
              <RestaurantNavbar />
              <RestaurantDetails />
              <RestaurantImages />
              <Reviews />
          </div>
          <div className="w-[27%] relative text-reg">
           <ReservationCard />
          </div>
        </div>
        {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */}
        {/* RESERVATION
    CARD PORTION */}
      </main>

  );

};
export default page;
