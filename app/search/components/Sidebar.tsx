import Link from "next/link";

export type Location = Database["public"]["Tables"]["Location"]["Row"];
export type Cuisine = Database["public"]["Tables"]["Cuisine"]["Row"];

type Props = {
  locations: Location[];
  cuisine: Cuisine[];
  searchParams: {
    city?: string
    cuisine?: string
  }
};

const Sidebar = ({ locations, cuisine, searchParams }: Props) => {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        <div className="flex flex-col">
          {locations.map((location) => (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  city: location.name,
                },
              }}
              key={location.id}
              className="font-light text-reg capitalize"
            >
              {location.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        <div className="flex flex-col">
          {cuisine.map((item) => (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  cuisine: item.name,
                },
              }}
              key={item.id}
              className="font-light text-reg capitalize"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="border w-full text-reg font-light rounded-l p-2">
            $
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2">
            $$
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
