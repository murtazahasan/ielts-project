import React from "react";
import stats from "/80-stats.png";
import trophy from "/80-trophy.png";
import study from "/80-study.png";
import star from "/80-star.png";

function Benefits() {
  const benefits = [
    {
      icon: stats,
      title: "3500+ Successful Students",
      description:
        "Over 3,500 dedicated students have achieved success with us!",
    },
    {
      icon: star,
      title: "3200+ Five Star Reviews",
      description:
        "We are loved and recommended by every student all over Pakistan",
    },
    {
      icon: study,
      title: "Pay Fees on the Go",
      description: "Our all courses are easy and affordable with fees.",
    },
    {
      icon: trophy,
      title: "Guaranteed Success",
      description:
        "With us, your success is not just a possibility—it’s a guarantee!",
    },
  ];

  return (
    <div className=" py-10 mb-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={benefit.icon}
              alt={benefit.title}
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
