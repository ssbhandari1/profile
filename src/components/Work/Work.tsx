import React from "react";
import Image from "next/image";
import Link from "next/link";
import Arrow from "../atoms/Arrow";
const Work = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <p className="font-sans font-bold text-xl text-white">
        See My Latest Works
      </p>
      <div className="w-full h-[50%] flex justify-center">
      <Image
        src="/projectsImg.png" // Path to your image in the public folder
        alt="My Image"
        width={200} // Desired width of the image
        height={200} // Desired height of the image
        className="rounded-lg w-[300px] sm:w-[200px]" // Tailwind CSS class for rounded corners
      />
      </div>
     <Arrow name={'All Project'} navigate={"mywork"}/>
    </div>
  );
};

export default Work;
