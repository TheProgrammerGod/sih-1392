import React from "react";
import Circle from "../assets/circle2.svg";
const Process = () => {
  return (
    <div id="our-process" className="relative overflow-x-hidden mt-[1.5rem]">
      <img
        src={Circle}
        alt="side_image"
        className="hidden sm:block absolute top-0 left-0 -mx-32"
      />
      <div className="container mx-auto px-6 pt-0 pb-8 relative">
        <h3 className=" flex flex-col items-center text-4xl font-bold mb-5">
          Our Process{" "}
          <span className="bg-[#4763b7] h-1 w-20 block mt-4" />
        </h3>
        <div className="flex flex-col md:flex-row xl:px-32 py-5">
          {/* TODO() make this a component */}
          <div className="flex flex-col items-center md:px-6 py-4 lg:px-12">
            <span className="text-6xl text-[#4763b7] mb-4">1</span>
            <h4 className="font-semibold text-2xl text-secondary mb-2 text-center">
              What do we do?
            </h4>
            <p className=" lg:w-full md:w-full sm:w-1/2 px-1 text-center text-secondary-700 leading-relaxed">
            We collect and recycle electronic waste responsibly, focusing on environmental protection, data security, compliance, and community engagement while promoting sustainability.
            </p>
          </div>
          <div className="flex flex-col items-center md:px-6 py-4 lg:px-12">
            <span className="text-6xl text-[#4763b7] mb-4">2</span>
            <h4 className="font-semibold text-2xl text-secondary mb-2 text-center">
              How do we do it?
            </h4>
            <p className="lg:w-full md:w-full sm:w-1/2 px-1 text-center text-secondary-700 leading-relaxed">
We link users with private recyclers for responsible e-waste disposal, prioritizing secure connections, compliance, and eco-friendly community engagement.
            </p>
          </div>
          <div className="flex flex-col items-center md:px-6 py-4 lg:px-12 z-10">
            <span className="text-6xl text-[#4763b7] mb-4">3</span>
            <h4 className="font-semibold text-2xl text-secondary mb-2 text-center">
              How are we unique?
            </h4>
            <p className="lg:w-full md:w-full sm:w-1/2 px-1 text-center text-secondary-700 leading-relaxed">
            We stand out by serving as a seamless bridge between users and private recyclers, ensuring secure connections, compliance, and community-focused eco-friendly solutions.
            </p>
          </div>
        </div>
      </div>
      <img
        src={Circle}
        alt="side_image"
        className="hidden  sm:block absolute bottom-0 right-[-9%] z-0 "
      />
    </div>
  );
};

export default Process;
