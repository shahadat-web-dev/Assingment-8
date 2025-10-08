import { Link, } from "react-router";
import heroImg from '../assets/hero.png'
import ProductCard from "../Components/ProductCard";
import useProducts from "../Components/Hooks/useProducts";
import { FaDownload } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";

const Home = () => {
  const { products, loading, error } = useProducts()

  const data = useProducts()
  console.log(data);

  const homeProduct = products.slice(0, 8)
  // console.log(products);

  return (
    <div className="bg-[#F5F5F5]">
      <div className="text-center">
        <h1 className="text-7xl font-bold pt-20">We Build <br /> <span className="text-[#9A65F0]">Productive</span> Apps</h1>
        <p className="pt-4 ">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      </div>
      <div className="text-center flex justify-center gap-4 pt-10">
        <Link to='https://play.google.com/store/games?hl=en' className="btn border text-xl font-semibold border-gray-300"><img
          className="h-8" src="https://i.ibb.co.com/Tx4yHRTF/icons8-play-store-48-1.png" alt="" /> Google Play</Link>

        <Link to='https://www.apple.com/app-store/' className="btn border text-xl font-semibold border-gray-300"><img className="h-8" src="https://i.ibb.co.com/TqByGRgY/icons8-app-store-48.png" alt="" /> App Store</Link>
      </div>
      <div className="flex justify-center pt-10">
        <img src={heroImg} alt="" />
      </div>

      <div className="bg-linear-to-r from-[#6933E5] to-[#9A5DF1] text-white p-20">
        <h1 className="text-center md:text-5xl text-4xl font-bold">Trusted by Millions, Built for You</h1>
        <div className="md:flex justify-center pt-10 gap-30">

          <div className="text-center">
            <p className="text-[#E4D9FB]">Total Downloads</p>
            <div className="flex items-center md:text-5xl text-5xl font-extrabold gap-10">
             <div>
               <h2 className="md:text-6xl text-5xl font-extrabold py-4">29.6M </h2>
             </div>
              <div>
                <FaDownload />
              </div>
            </div>

            <span className="text-[#E4D9FB]">21% more than last month</span>
          </div>

          <div className="text-center">
            <p className="text-[#E4D9FB]">Total Reviews</p>
            <div className="flex items-center md:text-5xl text-5xl font-extrabold gap-10">
             <div>
               <h2 className="md:text-6xl text-5xl font-extrabold py-4">906K</h2>
             </div>
              <div>
               <IoStar />
              </div>
            </div>
            <span className="text-[#E4D9FB]">46% more than last month</span>
          </div>

          <div className="text-center">
            <p className="text-[#E4D9FB]">Active Apps</p>
            <div className="flex items-center md:text-5xl text-5xl font-extrabold gap-10">
             <div>
               <h2 className="md:text-6xl text-5xl font-extrabold py-4">132+</h2>
             </div>
              <div>
                <FaGooglePlay />
              </div>
            </div>
            <span className="text-[#E4D9FB]">31 more will Launch</span>
          </div>

         

        </div>
      </div>

      <h1 className="text-5xl font-bold pt-20 text-center">Trending Apps </h1>

      <p className="text-center pt-4 pb-10 text-xl text-[#6B7B8A]">Explore All Trending Apps on the Market developed by us</p>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-4">

        {
          homeProduct.map(product => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))
        }
      </div>

      {/* Show all button */}

      <div className="pt-10 pb-20 text-center ">
        <Link to='/app' className="bg-linear-to-r from-[#6933E5] to-[#9A5DF1] text-white py-3 px-10 font-semibold cursor-pointer rounded-md hover:scale-105 transition ease-in-out">Show All</Link>
      </div>

    </div>
  );
};

export default Home;