import { ReactNode } from "react";
import Header from "../components/Header";
import RestaurantNavbar from "../components/RestaurantNavbar";

const layout = ({children}:{children:ReactNode}) => {
  return (
    <section className="bg-gray-100 min-h-screen w-screen">
      {/* HEADER */}
      <Header />
      {/* HEADER */}
      {/* DESCRIPTION PORTION */}
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[100%] rounded p-3 shadow">
          {/* RESAURANT NAVBAR */}
          <RestaurantNavbar />
          {/* RESAURANT NAVBAR */}

          {/* MENU */}

         {children}

          {/* MENU */}
        </div>
      </div>
      {/* DESCRIPTION PORTION */}
    </section>
  );
};
export default layout;
