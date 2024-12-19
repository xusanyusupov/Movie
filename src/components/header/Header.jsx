import React from "react";
import logo from "../../assets/head.svg";
import { NavLink } from "react-router-dom";
// icons
import { IoHomeSharp } from "react-icons/io5";
import { MdViewWeek } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
// icons

const Header = ({className}) => {
  document.body.style.background = 'black'


  return (
    <>
      <header className={className}>
        <nav className="container xl pt-5 pb-5">
          <div className="flex justify-between items-center max-lg:px-5">
            <NavLink to={'/'} >
              <img src={logo} alt="header__logo" />
            </NavLink>
            <ul className="flex items-center max-[950px]:fixed max-[950px]:bottom-0 max-[950px]:left-0 max-[950px]:w-full max-[950px]:justify-around max-[950px]:py-2  max-[950px]:bg-black min-[951px]:justify-center bg-transparent">
              <li className="pt-0 pl-5 pr-5 text-secondaryColor font-semibold ">
                <NavLink to={"/"} className={({ isActive }) => isActive ? "text-mainColor flex flex-col items-center" : "flex flex-col items-center text-secondaryColor  hover:text-mainColor" }>
                  <IoHomeSharp/>
                  Главное
                </NavLink>
              </li>
              <li className="pt-0 pl-5 pr-5 text-secondaryColor font-semibold text-base "> 
                <NavLink to={"/session"}  className={({ isActive }) => isActive ? "text-mainColor flex flex-col items-center" : "flex flex-col items-center text-secondaryColor hover:text-mainColor" }>
                  <MdViewWeek /> 
                  Сеансы
                </NavLink>
              </li>
              <li className="pt-0 pl-5 pr-5 text-secondaryColor font-semibold text-base ">
                <NavLink to={"/ticket"}  className={({ isActive }) => isActive ? "text-mainColor flex flex-col items-center" : "flex flex-col items-center text-secondaryColor  hover:text-mainColor" }>
                  <FaTicketAlt />
                  Билеты
                </NavLink>
              </li>
              <li className="pt-0 pl-5 pr-5 text-secondaryColor font-semibold text-base ">
                <NavLink to={"/search"}  className={({ isActive }) => isActive ? "text-mainColor flex flex-col items-center" : "flex flex-col items-center text-secondaryColor  hover:text-mainColor" }>
                  <AiOutlineSearch />
                  Поиск
                </NavLink>
              </li>
            </ul>
            <div className="flex items-center gap-5">
              <select name="" id="" className="pt-3 pb-3 pl-5 pr-5 rounded-xl bg-rarelyColor text-mutedColor font-semibold focus:outline-none hover:bg-secondaryColor2 cursor-pointer max-[500px]:pr-3 max-[500px]:pl-3">
                <option value="">Ру</option>
                <option value="">Uz</option>
              </select>

              <button className="pr-8 pl-8 pt-3 pb-3 bg-mainColor rounded-xl text-mutedColor font-semibold hover:bg-red-800 max-[500px]:pr-3 max-[500px]:pl-3">
                Войти
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
