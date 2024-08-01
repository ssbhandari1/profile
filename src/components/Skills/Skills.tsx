import React from "react";
import { Marquee } from "../Marquee";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandMongodb } from "react-icons/tb";

const experties = [
  { id: "ReactJS", icon: FaReact },
  { id: "NodeJS", icon: FaNodeJs },
  { id: "TypeScript", icon: TbBrandTypescript },
  { id: "MongoDB", icon: TbBrandMongodb },
];

const Skills = () => {
  // const experties = ["ReactJS", "NodeJS", "TypeScript", "MongoDB"];
  return (
    <div className=" h-full flex flex-col justify-between space-y-4">
      <p className="font-sans font-bold text-xl text-white">Skills & Tools</p>
      <Marquee to={"left"}>
        {experties.map((expert) => (
          <span
            className="p-2 rounded-xl text-sm border border-slate-700"
            key={expert.id}
          >
            {expert.id}
          </span>
        ))}
      </Marquee>
      <Marquee to={"right"}>
        {experties.map((expert) => (
          <span
            key={expert.id}
            className="p-3 rounded-full text-sm border border-slate-700 cursor-pointer hover:border-black hover:bg-[#6343e4]"
          >
            <expert.icon className="text-white" size={24} />
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
