import React from "react";
import CoursesLink from "../components/CoursesLink";
import Benefits from "../components/Benefits";

function Home() {
  return (
    <>
      <img src="banner.png" alt="main cover photo" className="h-80 sm:h-auto" />

      <Benefits />
      <CoursesLink />
    </>
  );
}

export default Home;
