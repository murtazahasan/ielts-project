import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const menShoe = [
    { name: "IELTS", path: "/courses/Ielts" },
    { name: "TOEFL", path: "/" },
    { name: "GRE", path: "/" },
    { name: "PTE", path: "/" },
    { name: "SAT", path: "/" },
  ];

  const womenShoe = [
    { name: "IELTS", path: "/" },
    { name: "TOEFL", path: "/" },
    { name: "GRE", path: "/" },
    { name: "PTE", path: "/" },
    { name: "SAT", path: "/" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="text-white bg-black rounded-t-3xl">
        <section className="container">
          <div className=" grid md:grid-cols-3 py-5">
            {/* company Details */}
            <div className=" py-8 pl-4 sm:pr-1 pr-4 ">
              <h1
                className="sm:text-3xl text-4xl text-cyan-700 font-semibold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif "
                // style={{ color: "#3e829a" }}
              >
                <img
                  src="/logo.jpeg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                Test Mentor
              </h1>
              <p className="text-sm">
                Unlock Your Potential with Test Mentor! Expert Coaching for
                IELTS, PTE, Duolingo, SAT, GRE, OET, and English Language.
                Tailored Strategies for Maximum Success
              </p>
              <br />
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Karachi, Pakistan</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaWhatsapp className="text-xl" />
                <p>03172835015</p>
              </div>
              {/* Social Handle */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-teal-600 duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-teal-600 duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-teal-600 duration-300" />
                </a>
              </div>
            </div>
            {/* 1 */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
              <div className="">
                <div className="py-8 px-4 ">
                  <h1
                    className="sm:text-xl  text-xl font-semibold sm:text-left text-justify mb-3"
                    style={{ color: "#3e829a" }}
                  >
                    Links
                  </h1>
                  <ul className="flex flex-col gap-3 ">
                    {menuItems.map((item, index) => (
                      <li key={index} className="cursor-pointer">
                        <Link to={item.path} onClick={scrollToTop}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* 2 */}
              <div className="">
                <div className="py-8 px-4 ">
                  <h1
                    className="sm:text-xl  text-xl font-semibold sm:text-left text-justify mb-3"
                    style={{ color: "#3e829a" }}
                  >
                    Courses
                  </h1>
                  <ul className="flex flex-col gap-3 ">
                    {menShoe.map((item, index) => (
                      <li key={index} className="cursor-pointer">
                        <Link to={item.path} onClick={scrollToTop}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* 3 */}
              <div className="">
                <div className="py-8 px-4 ">
                  <h1
                    className="sm:text-xl text-xl  font-semibold sm:text-left text-justify mb-3"
                    style={{ color: "#3e829a" }}
                  >
                    Pdfs
                  </h1>
                  <ul className="flex flex-col gap-3 ">
                    {womenShoe.map((item, index) => (
                      <li key={index} className="cursor-pointer">
                        <Link to={item.path}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <p className="text-center text-gray-300 border-t bg-black border-gray-500 py-2 text-sm">
          © 2024 Test Mentor | All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
