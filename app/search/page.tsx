import Link from "next/link";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import Sidebar from "./components/Sidebar";

/* eslint-disable @next/next/no-img-element */
const page = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
           <Sidebar />
          <div className="w-5/6">

            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />

          </div>
        </div>
      </main>

  );
};
export default page;
