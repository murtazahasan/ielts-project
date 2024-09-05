import React from "react";

const courses = [
  {
    name: "IELTS",
    link: "/ielts",
    description: "Prepare for the IELTS exam with our comprehensive course.",
  },
  {
    name: "TOEFL",
    link: "/toefl",
    description:
      "Achieve your best score in the TOEFL test with our expert guidance.",
  },
  {
    name: "GRE",
    link: "/gre",
    description: "Master the GRE with our targeted practice and strategies.",
  },
  {
    name: "PTE",
    link: "/pte",
    description: "Get ready for the PTE exam with our specialized training.",
  },
  {
    name: "SAT",
    link: "/sat",
    description: "Boost your SAT scores with our intensive preparation course.",
  },
  {
    name: "IDP",
    link: "/idp",
    description: "Excel in the IDP test with our tailored study plans.",
  },
];

const CoursesLink = () => {
  return (
    <div className="container mx-auto mb-20 p-4">
      <h1 className=" text-center mb-6 ">
        <span className="text-4xl font-bold border-l-4 pl-3 border-l-cyan-600">
          Courses
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.name}
            className="bg-gray-200 shadow-md rounded-3xl p-4 h-48"
          >
            <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
            <p className="mb-10">{course.description}</p>
            <a
              href={course.link}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesLink;
