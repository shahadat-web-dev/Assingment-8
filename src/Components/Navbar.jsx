import { Link } from 'react-router';
import { FaHome } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
  return (
   <div className='shadow'>
    <div className="navbar bg-base-100 max-w-7xl mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
             <li className=''>
            <Link to='/' className='font-medium hover:underline'><FaHome /> Home</Link>
          </li>
          <li>
           <Link to='/app' className='font-medium hover:underline'><FaAppStoreIos /> Apps</Link>
          </li>
          <li>
             <Link to='/install' className='font-medium hover:underline'><MdInstallDesktop /> Installation</Link>
          </li>
          </ul>
        </div>

       <Link to='/' className='flex items-center gap-1'>
         <img  className='h-10' src="https://i.ibb.co.com/hRTCtpgt/logo.png" alt="" />
        <Link  className="text-xl font-bold"> HERO.IO</Link>
       </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to='/' className='font-medium hover:underline'><FaHome /> Home</Link>
          </li>
          <li>
           <Link to='/app' className='font-medium hover:underline'><FaAppStoreIos /> Apps</Link>
          </li>
          <li>
             <Link to='/install' className='font-medium hover:underline'><MdInstallDesktop /> Installation</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='https://github.com/shahadat-web-dev' className="btn bg-linear-to-r from-[#6933E5] to-[#9A5DF1] text-white"><FaGithub /> Contribute</Link>
      </div>
    </div>
   </div>
  );
};

export default Navbar;