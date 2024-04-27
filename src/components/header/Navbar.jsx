
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
    <div className="max-w-[1920px] mx-auto">
      <header className="shadow-lg  flex w-full dark:bg-[#120505] px-5 md:px-[50px] lg:px-[80px] xl:px-[120px] 2xl:px-[150px]">
        <Link to="/" className="md:border-r flex flex-shrink-0 items-center">
          <img
            className="md:w-[200px] w-[150px] h-[70px]  object-cover"
            src={logo}
            alt=""
          />
        </Link>
        {/* middle */}
        <nav className="header-links md:contents font-medium text-base  hidden ">
          <ul className="flex gap-8 items-center ml-4 xl:ml-8 mr-auto w-full justify-center dark:text-red">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF497C] border-b-4 border-[#FF497C]"
                    : "hover:text-[#FF497C]"
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
                    ? "text-[#FF497C] border-b-4 border-[#FF497C]"
                    : "hover:text-[#FF497C]"
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
                    ? "text-[#FF497C] border-b-4 border-[#FF497C]"
                    : "hover:text-[#FF497C]"
                }
              >
                <span>My Art and Crafts</span>
              </NavLink>
            </li>
              {/* <NavLink
                to="/myCart"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF497C] border-b-4 border-[#FF497C]"
                    : "hover:text-[#FF497C]"
                }
              >
                <span>My Cart</span>
              </NavLink> */}
              <Link to="/allcrafts">ALl Product</Link>
            
          </ul>
        </nav>

        {/* End */}
        <div className="relative md:border-l flex items-center  justify-end w-full md:w-auto pl-5 ">
          <div className=" w-[50px]">

            {/* dvrdgdhtfhdhfdghdr */}
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
              className="bg-[#FF497C] hover:bg-[#ab3154]  duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/registration")}
              className="bg-[#FF497C] hover:bg-[#ab3154]  duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded"
            >
              Registration
            </button>

            </div>
           



            
          )}

          {/* user Menu */}
          <div
            className={`absolute text-center ${
              userOpen ? "block" : "hidden"
            } flex flex-col justify-center items-center gap-4  shadow-lg bg-white dark:bg-[#120505] px-8 py-4 top-16 dark:text-white z-50`}
          >
            <p className="text-lg font-semibold">{user?.displayName}</p>

            <button
              onClick={() => handleLogOut()}
              className="bg-[#FF497C] hover:bg-[#ab3154] duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded cursor-pointer"
            >
              logout
            </button>
          </div>
        </div>

        {/* Drawer */}
        <button
          onClick={() => setSideOpen(!sideOpen)}
          className="text-4xl text-[#FF497C] flex items-center md:hidden ml-3"
        >
          <i className={`bx bx-${sideOpen ? "x" : "menu"}`}></i>
        </button>
      </header>

      {/* Side Menu */}
      {/* transition-transform transform -translate-x-full */}
      <div
        className={`absolute ${
          sideOpen ? "" : "hidden"
        } md:hidden  bg-white shadow-lg  w-56 min-h-screen overflow-y-auto top-0 left-0 ease-in-out duration-300 dark:bg-[#120505] dark:text-white z-50`}
      >
        <div className="p-4">
          <a href="" className=" flex-shrink-0 flex items-center ">
            <img
              className="w-[200px]  h-[70px] object-cover"
              // src="https://i.ibb.co/W6ZXdqN/2021-10-26-16h20-21.png"
              src={logo}
              alt=""
            />
          </a>
          <ul className="mt-6 flex flex-col gap-4 ml-5 dark:text-red-500">
            <li>
              <NavLink
                onClick={() => setSideOpen(!sideOpen)}
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF497C] border-b-4 border-[#FF497C]"
                    : "hover:text-[#FF497C]"
                }
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setSideOpen(!sideOpen)}
                to="/addcraftitem"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF497C] border-b-4 border-[#FF497C]"
                    : "hover:text-[#FF497C]"
                }
              >
                <span>Add Product</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setSideOpen(!sideOpen)}
                to="/allcrafts"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF497C] border-b-4 border-[#FF497C]"
                    : "hover:text-[#FF497C]"
                }
              >
                <span>All Crafts</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="ml-8 mt-8">
          {user ? (
            <div className={`flex flex-col gap-2 top-16 pr-5`}>
              <button className="border-2 mx-auto border-[#FF497C] rounded-full w-[40px]">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </button>
              <p className="text-lg font-semibold text-center">
                {user?.displayName}
              </p>
              <button
                onClick={() => handleLogOut()}
                className="bg-[#FF497C] hover:bg-[#ab3154] duration-200 text-white font-bold px-4  py-1 rounded "
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-[#FF497C] hover:bg-[#ab3154] duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;