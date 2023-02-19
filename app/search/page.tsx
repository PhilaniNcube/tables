import { createClient } from "@/utils/supabase-server";
import Link from "next/link";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import Sidebar from "./components/Sidebar";

export type Restaurants = Database["public"]["Tables"]["Restaurant"]["Row"][];
export type Location = Database["public"]["Tables"]["Location"]["Row"];
export type Cuisine = Database["public"]["Tables"]["Cuisine"]["Row"];

const searchRestaurants = async (city: string, cuisine:string):Promise<Restaurants> => {
  const supabase = createClient();


  if(!city) {
      const { data: restaurants, error } = await supabase
        .from("Restaurant")
        .select("*, location_id!inner(name), cuisine_id!inner(id,name)")
        .match({
          "cuisine_id.name": `${cuisine.toLowerCase()}`,
        });

      if (error) {
        throw new Error(error.message);
      }

      return restaurants;
  } else if(!cuisine) {
       const { data: restaurants, error } = await supabase
         .from("Restaurant")
         .select("*, location_id!inner(name), cuisine_id!inner(id,name)")
         .match({
           "location_id.name": `${city.toLowerCase()}`,
         });

       if (error) {
         throw new Error(error.message);
       }

       return restaurants;
  } else {
  const { data: restaurants, error } = await supabase
    .from("Restaurant")
    .select("*, location_id!inner(name), cuisine_id!inner(id,name)")
    .match({
      "location_id.name": `${city.toLowerCase()}`,
      "cuisine_id.name": `${cuisine.toLowerCase()}`,
    });

  if (error) {
    throw new Error(error.message);
  }

  return restaurants;
  }






};

const fetchLocations = async():Promise<Location[]> => {
    const supabase = createClient();
  const {data:locations, error} = await supabase.from('Location').select('*')

  if(error) {
    throw new Error(error.message);
  }

  return locations
}

const fetchCuisine = async():Promise<Cuisine[]> => {
    const supabase = createClient();
  const {data:cuisine, error} = await supabase.from('Cuisine').select('*')

  if(error) {
    throw new Error(error.message);
  }

  return cuisine
}

/* eslint-disable @next/next/no-img-element */
const page = async ({searchParams:{city = '', cuisine = ''}}:{searchParams: {city:string, cuisine:string}}) => {

  const restaurants = await searchRestaurants(city, cuisine)
  const locations = await fetchLocations()
  const cuisineData = await fetchCuisine()

  console.log(city, restaurants);


  return (
    <main className="bg-gray-100 w-full">
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <Sidebar
          locations={locations}
          cuisine={cuisineData}
          searchParams={{city, cuisine}}
        />
        <div className="w-5/6">
          {restaurants.length ? (
            restaurants?.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <p className="capitalize font-medium text-md">
              There are no restaurants matching your search term: {`${city}`}
            </p>
          )}
        </div>
      </div>
    </main>
  );
};
export default page;
