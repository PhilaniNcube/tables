/* eslint-disable @next/next/no-img-element */
const RestaurantImages = ({images}: {images: string[]}) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">{images.length} photos</h1>
      <div className="flex flex-wrap gap-3">
        {images.map((image, i) => (
          <img
            key={i}
            className="w-56 aspect-auto object-cover"
            src={image}
            alt="Photo"
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantImages;
