type Item = Database["public"]["Tables"]["Item"]["Row"];
type Props = {
  item: Item;
};

const MenuCard = ({item}:Props) => {
  return (
    <div className=" border rounded p-3 w-[49%] mb-3">
      <h3 className="font-bold text-lg capitalize">{item.name}</h3>
      <p className="font-light mt-1 text-sm">
        {item.description}
      </p>
      <p className="mt-7">{item.price}</p>
    </div>
  );
};
export default MenuCard;
