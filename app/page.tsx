

import Header from './components/Header';
import Cards from './components/Cards';
import prisma from '@/lib/prisma';
import { createClient } from '@/utils/supabase-server';


export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  slug: string;
  cuisine: {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  };
  location: {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  };
  price: "CHEAP"|"REGULAR"|"EXPENSIVE";
}



export type Restaurants = Database["public"]["Tables"]["Restaurant"]["Row"][];

const fetchRestaurants = async (): Promise<Restaurants> => {
  const supabase = createClient();
  const { data: restaurants, error } = await supabase
    .from("Restaurant")
    .select("*, location_id(*), cuisine_id(*)")

    if(error) {
      throw new Error(error.message)
    }

   return restaurants;
};

export default async function Home() {
 const restaurants = await fetchRestaurants();
  return (
        <main className="bg-gray-100 w-full">
          <Header />
          <Cards restaurants={restaurants} />
        </main>
  );
}
