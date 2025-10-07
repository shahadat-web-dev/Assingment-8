import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#001931]">
      <footer className="  max-w-7xl mx-auto text-neutral-content items-center pb-8">

        <div className="md:flex items-center justify-between mt-9 px-4">

          <div className="flex items-center gap-2">
            <img className="h-10 cursor-pointer" src="https://i.ibb.co.com/hRTCtpgt/logo.png" alt="" />
            <h1 className="font-bold"> HERO.IO</h1>
          </div>

          <div>
            <h2 className="text-xl font-medium">Social Links</h2>
            <div className="flex justify-around pt-4 cursor-pointer">
              <FaXTwitter />
              <FaLinkedin />
              <FaFacebook />
            </div>
          </div>
        </div>
        <div className="text-center mt-7">
          <p>Copyright © 2025 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;