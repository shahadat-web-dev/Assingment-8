import { Link } from "react-router";
import heroImg from '../assets/hero.png'
const Home = () => {
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
              <h2 className="md:text-6xl text-5xl font-extrabold py-4">29.6M</h2>
              <span className="text-[#E4D9FB]">21% more than last month</span>
            </div>
            <div className="text-center">
              <p className="text-[#E4D9FB]">Total Reviews</p>
              <h2 className="md:text-6xl text-5xl font-extrabold py-4">906k</h2>
              <span className="text-[#E4D9FB]">46% more than last month</span>
            </div>
            <div className="text-center">
              <p className="text-[#E4D9FB]">Active Apps</p>
              <h2 className="md:text-6xl text-5xl font-extrabold py-4">29.6M</h2>
              <span className="text-[#E4D9FB]">31 more will Launch</span>
            </div>
            
          </div>
        </div>

    </div>
  );
};

export default Home;