import React from "react";

function About() {
  return (
    <div>
      <h1 className=" text-center  mb-10 mt-10">
        <span className="text-4xl font-bold border-l-4 pl-3 border-l-cyan-600">
          About Us
        </span>
      </h1>
      <p className="text-center sm:px-16 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis fuga dolorem obcaecati architecto quidem ducimus repudiandae saepe delectus doloremque voluptatum quo odit, tempora alias dignissimos exercitationem quisquam, nulla dolores praesentium illum doloribus. Soluta quis ipsam eaque repellendus, dolorem perspiciatis consectetur!</p>

      <div className="mt-20 mb-28 sm:mb-40 sm:mt-40">
        <div className="flex flex-col lg:flex-row items-center  mx-auto container lg:justify-between py-5">
          <div className="w-full lg:w-1/2 order-1 lg:order-1">
            <img src="/d.png" alt="Vector Art" className="px-10" />
          </div>
          <div className="w-full px-2 lg:w-1/2 mt-4 lg:mt-0 order-2 lg:order-2">
            <h1 className="text-4xl font-bold mb-3">Our Mission</h1>
            <p className="mt-5 text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente numquam vitae distinctio corrupti, debitis ipsum recusandae at!
            </p>
            <p className="mt-5 text-xl">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde earum praesentium inventore excepturi? Laborum doloribus repudiandae architecto suscipit sit corporis magnam debitis culpa quia perspiciatis et totam perferendis quae dolorem deserunt dolor molestias aperiam recusandae ratione obcaecati, dignissimos ducimus modi maxime? Tempore nostrum ut maxime dolorum praesentium fugit quos itaque excepturi expedita quam.            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
