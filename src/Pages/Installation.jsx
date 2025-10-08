import { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import notFound from '../assets/App-Error.png'
  import { ToastContainer, toast } from 'react-toastify';

const Installation = () => {
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("install"));
    if (savedList) setWishlist(savedList);
  }, []);

  if(!wishlist.length) return <div className="flex justify-center pt-20">
    <img src={notFound} alt="" />
  </div>

  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...wishlist].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...wishlist].sort((a, b) => b.size - a.size);
    } else {
      return wishlist;
    }
  })();

  //  remove
  const handleRemove = (id) => {
    toast("🚫 Unsalled from your Device")
    const existingList = JSON.parse(localStorage.getItem("install")) || [];
    const updatedList = existingList.filter((p) => p.id !== id);
    localStorage.setItem("install", JSON.stringify(updatedList));
    setWishlist(updatedList);
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center pt-20">
          Your Installed Apps
        </h2>
        <p className="text-center text-[#627382] text-xl pt-4">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="flex justify-between items-center py-6">
          <h1 className="text-2xl font-semibold">
            {sortedItem.length} Apps Found
          </h1>

          <label className="form-control w-full max-w-xs">
            <select
              className="select select-bordered"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort By Size</option>
              <option value="size-asc">Low-High</option>
              <option value="size-desc">High-Low</option>
            </select>
          </label>
        </div>

        <div className="pb-20 space-y-3 pt-4">
          {sortedItem.map((p) => (
            <div
              key={p.id}
              className="card card-side bg-base-100 shadow-sm"
            >
              <figure className="h-[80px] w-[120px] pl-4 mt-10 overflow-hidden">
                <img className="rounded-xl" src={p.image} alt={p.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title mt-7">{p.title}</h2>
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1 text-[#00D390] font-bold">
                      <LuDownload />
                      <p>{p.downloads}M</p>
                    </div>
                    <div className="flex items-center gap-1 text-[#FF8811] font-bold">
                      <IoStar />
                      <span>{p.ratingAvg}</span>
                    </div>
                    <p>{p.size} MB</p>
                  </div>

                  <button
                    onClick={() => handleRemove(p.id)}
                    className="btn font-semibold bg-[#00D390] text-white"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Installation;
