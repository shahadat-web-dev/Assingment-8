import { useState } from "react";
import useProducts from "../Components/Hooks/useProducts";
import ProductCard from "../Components/ProductCard";
import { FaSearch } from "react-icons/fa";

const Apps = () => {
  const { products } = useProducts()
  const [search, setSearch] = useState('')

  const term = search.trim().toLocaleLowerCase()

  const searchedProducts = term ? products.filter(product => product.title.toLocaleLowerCase().includes(term)) : products

  // console.log(searchedProducts);

  return (
    <div className="bg-[#F5F5F5]">
      <div className="text-center">
        <h1 className="text-5xl font-bold pt-20">Our All Applications</h1>
        <p className="text-xl text-[#627382] pt-4 pb-10">Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      <div className="max-w-7xl mx-auto pb-6 flex items-center justify-between">
        <div className="text-2xl font-semibold">
          ({searchedProducts.length}) Apps Found
        </div>
        <div>
          <label className="input border-none">
            <FaSearch />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)} className="font-semibold " type="search" placeholder="search Apps" />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-4 pb-20">

        {
          searchedProducts.map(product => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))
        }
      </div>


    </div>
  );
};

export default Apps;