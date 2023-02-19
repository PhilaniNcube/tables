import prisma from "@/lib/prisma";
import { createClient } from "@/utils/supabase-server";
import Link from "next/link";
import { Fragment } from "react";
import Header from "./components/Header";
import ReservationCard from "./components/ReservationCard";
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurantImages from "./components/RestaurantImages";
import RestaurantNavbar from "./components/RestaurantNavbar";

import Reviews from "./components/Reviews";

type Restaurant = Database["public"]["Tables"]["Restaurant"]["Row"];

const fetchRestaurant = async (slug:string):Promise<Restaurant> => {
  const supabase = createClient()
   const {data:restaurant, error} =  await supabase.from('Restaurant').select('*, location_id(*), cuisine_id(*)').eq('slug', slug).single()
   return restaurant;
}

/* eslint-disable @next/next/no-img-element */
const page = async ({params: {slug}}:{params:{slug:string}}) => {

  const restaurant = await fetchRestaurant(slug)

  return (
    <Fragment>
      <div className="h-96 overflow-hidden">
        <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
          <h1 className="text-7xl text-white captitalize text-shadow text-center">
            {restaurant.name}
          </h1>
        </div>
      </div>
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavbar restaurant={restaurant} />
          <RestaurantDetails restaurant={restaurant} />
          <RestaurantImages images={restaurant.images} />
          <Reviews />
        </div>
        <div className="w-[27%] relative text-reg">
          <ReservationCard />
        </div>
      </div>
    </Fragment>
  );

};
export default page;
