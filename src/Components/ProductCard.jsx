import { LuDownload } from "react-icons/lu";
import { IoStar } from "react-icons/io5";

const ProductCard = ({ product }) => {
  const { image, title, downloads, ratingAvg } = product;

  return (
    <div className="card bg-base-100  shadow-sm hover:scale-105 transition ease-in-out">
      <figure className="h-[316px] overflow-hidden">
        <img className="h-full w-full object-cover p-4"
          src={image}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-1 text-[#00D390] bg-[#F1F5E8] p-1 px-2 font-bold rounded-sm">
            <LuDownload />
            <p> {downloads}M</p>
          </div>

          <div className="flex items-center gap-1 text-[#FF8811] bg-[#FFF0E1] p-1 px-2 font-bold rounded-sm">
            <IoStar />
            <span> {ratingAvg}</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;