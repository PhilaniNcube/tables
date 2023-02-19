import MenuCard from "./MenuCard";

type Item = Database["public"]["Tables"]["Item"]["Row"];
type Props = {
items: Item[],
}

const Menu = ({items}:Props) => {
  return (
    <div className="flex flex-wrap justify-between">
      {items?.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
};
export default Menu;
