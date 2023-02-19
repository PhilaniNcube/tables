import { createClient } from "@/utils/supabase-server";
import Link from "next/link";
import { Fragment } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import MenuCard from "../components/MenuCard";
import ReservationCard from "../components/ReservationCard";
import RestaurantNavbar from "../components/RestaurantNavbar";

type Restaurant = Database["public"]["Tables"]["Restaurant"]["Row"];
type Item = Database["public"]["Tables"]["Item"]["Row"];

const fetchRestaurant = async (slug: string): Promise<Restaurant> => {
  const supabase = createClient();
  const { data: restaurant, error } = await supabase
    .from("Restaurant")
    .select("*, location_id(*), cuisine_id(*)")
    .eq("slug", slug)
    .single();


    if(error) {
      throw new Error(error.message)
    }

  return restaurant;
};


const getMenuItems = async (id: number): Promise<Item[]> => {
    const supabase = createClient();
  const { data: items, error } = await supabase
    .from("Item")
    .select("*, restaurant_id(*)").eq('restaurant_id', id);

  if (error) {
    throw new Error(error.message);
  }

  return items;
};

const page = async ({ params: { slug } }: { params: { slug: string } }) => {

 const restaurant = await fetchRestaurant(slug);
 const menuItems = await getMenuItems(restaurant.id);


 console.log({menuItems})


  return (
    <Fragment>
      <Header name={restaurant.name} />
      <main className="bg-gray-100 w-full">
        <div className="flex m-auto w-2/3 justify-between items-start 0 ">
          <div className="bg-white w-[70%] rounded p-3 shadow -mt-10">
            <RestaurantNavbar restaurant={restaurant} />
            <Menu items={menuItems} />
          </div>{" "}
          <div className="w-[27%] relative text-reg -mt-10">
            <ReservationCard />
          </div>
        </div>
      </main>
    </Fragment>
  );
};
export default page;
