import React from "react";
import Image from "next/image";
import Link from "next/link";
import Arrow from "../atoms/Arrow";
import Carousel from "../carousel";
const Work = () => {
  return (
    <div className="w-full h-full  flex flex-col box-border justify-between overflow-hidden">
      <p className="font-sans font-bold text-xl text-white">
        See My Latest Works
      </p>
      <Carousel/>
      <Arrow name={"All Project"} navigate={"mywork"} />
    </div>
  );
};

export default Work;
