import Link from "next/link";
import ReservationForm from "../components/ReservationForm";
import ReservationHeader from "../components/ReservationHeader";

/* eslint-disable @next/next/no-img-element */
const page = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">

        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            {/* HEADER */}
           <ReservationHeader />
            {/* HEADER */} {/* FORM */}

           <ReservationForm />


          </div>
        </div>
      </main>

  );
};
export default page;
