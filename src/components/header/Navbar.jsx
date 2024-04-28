
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {

 

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark")
    }
    else {
      setTheme("light")
    }
  }
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  },[theme])





  const navigate = useNavigate();
  const [sideOpen, setSideOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const { user, logOut } = useAuth() || {};

  const handleLogOut = () => {
    logOut()
      .then((result) => toast.success("successfully Logout"))
      .catch((err) => toast.error(err));
    setUserOpen(false);
  };

  return (
    <div className=" mx-auto">
      <header className="shadow-lg  flex w-full   ">
       






      <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">
        <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FFFFFF] border-b-4 p-2 border-[#23BE0A] rounded bg-[#23BE0A]"
                    : "hover:text-[#23BE0A]"
                }
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addcraftitem"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FFFFFF] border-b-4 p-2 border-[#23BE0A] rounded bg-[#23BE0A]"
                    : "hover:text-[#23BE0A]"
                }
              >
                <span>Add Product</span>
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/mycrafts"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FFFFFF] border-b-4 p-2 border-[#23BE0A] rounded bg-[#23BE0A]"
                    : "hover:text-[#23BE0A]"
                }
              >
                <span>My Art and Crafts</span>
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/allcrafts"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FFFFFF] border-b-4 p-2 border-[#23BE0A] rounded bg-[#23BE0A]"
                    : "hover:text-[#23BE0A]"
                }
              >
                <span>ALL Product</span>
              </NavLink>
            </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>



       
        {/* middle */}
        <nav className="header-links md:contents font-medium text-base  hidden ">
          <ul className="flex  items-center ml-4  w-full justify-center dark:text-red">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FFFFFF] border-b-4 p-2 border-[#23BE0A] rounded bg-[#23BE0A]"
                    : "hover:text-[#23BE0A]"
                }
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addcraftitem"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FFFFFF] border-b-4 p-2 border-[#23BE0A] rounded bg-[#23BE0A]"
                    : "hover:text-[#23BE0A]"
                }
              >
                <span>Add Product</span>
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/mycrafts"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FFFFFF] border-b-4 p-2 border-[#23BE0A] rounded bg-[#23BE0A]"
                    : "hover:text-[#23BE0A]"
                }
              >
                <span>My Art and Crafts</span>
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/allcrafts"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FFFFFF] border-b-4 p-2 border-[#23BE0A] rounded bg-[#23BE0A]"
                    : "hover:text-[#23BE0A]"
                }
              >
                <span>ALL Product</span>
              </NavLink>
            </li>
            
             
          </ul>
        </nav>

        {/* End */}
        <div className="relative md:border-l flex items-center justify-end  w-full  ">
          <div className="">

          <label className="cursor-pointer grid place-items-center">
  <input type="checkbox" onChange={handleToggle} checked={theme==="light"? false:true} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
          </div>

          {user ? (
            <button
              onClick={() => setUserOpen(!userOpen)}
              className="border-2 border-[#FF497C] rounded-full w-[40px]"
            >
              <img
                src={user?.photoURL}
                alt=""
                className="w-full h-full rounded-full"
              />
            </button>
          ) : (
            <div className="flex gap-4">
 <button
              onClick={() => navigate("/login")}
              className="bg-[#23BE0A] hover:bg-[#23BE0A]  duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/registration")}
              className="bg-[#23BE0A] hover:bg-[#23BE0A]  duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded"
            >
              Registration
            </button>

            </div>

          )}

          {/* user Menu */}
          <div
            className={`absolute text-center ${
              userOpen ? "block" : "hidden"
            } flex flex-col justify-center items-center gap-4  shadow-lg bg-white dark:bg-[#120505] px-1 lg:px-8 py-4 top-16 dark:text-white z-50`}
          >
            <p className="text-lg font-semibold">{user?.displayName}</p>

            <button
              onClick={() => handleLogOut()}
              className="bg-[#FF497C] hover:bg-[#ab3154] duration-200 text-white font-bold px-1 lg:px-4 xl:px-6 py-1 rounded cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>

      
      </header>

      
    </div>
  );
};

export default Navbar;