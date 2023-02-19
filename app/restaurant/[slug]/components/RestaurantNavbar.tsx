import Link from "next/link";

interface Props {
  restaurant: Database["public"]["Tables"]["Restaurant"]["Row"];
}

const RestaurantNavbar = ({restaurant}:Props) => {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href={`/restaurant/${restaurant.slug}`} className="mr-7">
        {" "}
        Overview{" "}
      </Link>
      <Link href={`/restaurant/${restaurant.slug}/menu`} className="mr-7">
        {" "}
        Menu{" "}
      </Link>
    </nav>
  );
};
export default RestaurantNavbar;
