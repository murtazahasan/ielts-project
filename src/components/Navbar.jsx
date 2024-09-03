import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenSubmenu, setShowMenSubmenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleMenSubmenu = () => setShowMenSubmenu(!showMenSubmenu);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const both = () => {
    toggleMenu();
    scrollToTop();
  };

  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "Courses",
      path: "/courses",
      submenu: ["Ielts", "TOEFL", "GRE", "PTE", "SAT"],
    },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-100 shadow-md py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={toggleMenu} className="md:hidden">
            {showMenu ? <HiMenuAlt1 size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
          <NavLink to="/" onClick={scrollToTop} className="flex">
            <img
              src="/logo.jpeg"
              alt=""
              className="sm:ml-6 ml-3 w-10 h-10 rounded-full"
            />
            <span className="text-3xl font-bold ml-2">Test Mentor</span>
          </NavLink>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) =>
            item.submenu ? (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setShowMenSubmenu(true)}
                onMouseLeave={() => setShowMenSubmenu(false)}
              >
                <NavLink
                  to={item.path}
                  className="text-black font-semibold hover:text-blue-500"
                  onClick={scrollToTop}
                >
                  {item.name}
                </NavLink>
                <div
                  className={`absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 ${
                    showMenSubmenu ? "block" : "hidden"
                  }`}
                >
                  {item.submenu.map((subItem) => (
                    <NavLink
                      key={subItem}
                      to={`${item.path}/${subItem
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {subItem}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                className="text-black font-semibold hover:text-blue-500"
                onClick={scrollToTop}
              >
                {item.name}
              </NavLink>
            )
          )}
        </div>
      </div>
      {showMenu && (
        <div className="absolute top-0 left-0 w-3/4 h-screen bg-white flex flex-col p-4">
          <h2 className="font-bold text-xl mt-1 mb-16">Menu</h2>
          <ul className="space-y-5">
            {menuItems.map((item) =>
              item.submenu ? (
                <li
                  key={item.name}
                  className="border-t-2 border-b-2 py-1 border-gray-300"
                >
                  <div
                    className="text-gray-700 hover:text-blue-500 cursor-pointer flex justify-between items-center"
                    onClick={toggleMenSubmenu}
                  >
                    {item.name}
                    <span>{showMenSubmenu ? "-" : "+"}</span>
                  </div>
                  <ul className={`pl-4 ${showMenSubmenu ? "block" : "hidden"}`}>
                    {item.submenu.map((subItem) => (
                      <li
                        key={subItem}
                        className="border-t border-gray-200 my-1 py-2"
                      >
                        <NavLink
                          to={`${item.path}/${subItem
                            .toLowerCase()
                            .replace(/ /g, "-")}`}
                          className="block text-gray-700 hover:text-blue-500"
                          onClick={both}
                        >
                          {subItem}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li
                  key={item.name}
                  className="border-t-2 border-b-2 border-gray-300"
                >
                  <NavLink
                    to={item.path}
                    className="text-gray-700 hover:text-blue-500"
                    onClick={both}
                  >
                    {item.name}
                  </NavLink>
                </li>
              )
            )}
          </ul>
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <HiMenuAlt1 size={24} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
