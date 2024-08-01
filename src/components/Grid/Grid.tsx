import Card from "../Card/Card";
import { Marquee } from "../Marquee";
import Motion from "../Motion/Motion";
import Skills from "../Skills/Skills";
import Work from "../Work/Work";
import Rotate from "../atoms/Rotate";
import Social from "../social";
import { GiSun } from "react-icons/gi";

const Grid = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-col  text-white w-full  gap-4">
        <div className=" flex flex-col md:flex-row w-full gap-4 ">
          <Motion className=" bg-slate-800 border border-slate-200 rounded-3xl p-3 flex-1 md:flex-none md:w-1/3">
            <Card />
          </Motion>
          <div className="h-full w-full flex flex-col items-center justify-between gap-3">
            <Motion className="bg-slate-800 border border-slate-200 rounded-3xl p-3 w-full h-[20vh]">
              <p className="font-sans font-bold text-xl text-slate-500">
                Title
              </p>
              <h2 className="font-sans font-bold text-2xl text-white">
                WEB DEVELOPER
              </h2>
            </Motion>
            <Motion className="bg-slate-800 border border-slate-200 rounded-3xl overflow-hidden p-3 flex-1 w-full">
              <Work />
            </Motion>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-4">
          <Motion className="bg-slate-800 border border-slate-200 rounded-3xl p-3 flex-1 flex flex-col gap-2  justify-center">
            <div className="w-full h-[20%] bg-black flex gap-2 justify-center items-center">
              <Rotate>
                <GiSun className="text-3xl text-blue-500" />
              </Rotate>
              <h2 className="font-bold">LATEST WORK AND FEATURED</h2>
              <Rotate>
                <GiSun className="text-3xl text-blue-500" />
              </Rotate>
            </div>
            <div className="flex-1 bg-slate-500">hey</div>
          </Motion>
          <Motion className="bg-slate-800 border border-slate-200 rounded-3xl p-3 flex-1 flex flex-col gap-3">
            <div className="flex items-center justify-around">
              <Motion className="bg-slate-800 p-2 text-center flex flex-col rounded-md">
                <h1 className="text-3xl font-bold">01</h1>
                <span className="text-md text-slate-500 font-bold">YEARS</span>
                <span className="text-md text-slate-500 font-bold">
                  EXPERIENCE
                </span>
              </Motion>

              <Motion className="bg-slate-800 p-2 text-center flex flex-col rounded-md">
                <h1 className="text-3xl font-bold">+10</h1>
                <span className="text-md text-slate-500 font-bold">TOTAL</span>
                <span className="text-md text-slate-500 font-bold">
                  PROJECTS
                </span>
              </Motion>
            </div>
            <Motion className="bg-slate-800 rounded-3xl">
              <Social />
            </Motion>
          </Motion>
          <Motion className="bg-slate-800 border border-slate-200 rounded-3xl p-3 flex-1">
            <Skills />
          </Motion>
        </div>
      </div>
    </div>
  );
};

export default Grid;
