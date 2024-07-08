import Card from "../Card/Card";
import { Marquee } from "../Marquee";
import Motion from "../Motion/Motion";
import { Service } from "../Services";
import Skills from "../Skills/Skills";
import Work from "../Work/Work";
import Rotate from "../atoms/Rotate";
import Social from "../social";
import { GiSun } from "react-icons/gi";

const Grid = () => {
  return (
    <div className="flex w-full  items-center justify-center ">
      <div className="grid  grid-cols-10 grid-rows-8 sm:grid-rows-6 h-full w-full gap-3 text-white">
        <div className="rounded-3xl col-span-10 row-span-2 xsm:row-span-3 md:h-full md:col-span-4 md:row-span-6 grid grid-rows-5 sm:grid-rows-3 gap-3">
          <Motion className="bg-gray-800 rounded-3xl p-4 border border-slate-200 row-span-1  sm:row-span-1">
            <p className="font-sans font-bold text-xl text-slate-500">Title</p>
            <h2 className="font-sans font-bold text-2xl text-white">
              WEB DEVELOPER
            </h2>
          </Motion>

          <Motion className="bg-slate-800 p-4 border border-slate-200 rounded-3xl row-span-4 sm:row-span-2">
            <Card />
          </Motion>
        </div>
        <div className="rounded-3xl col-span-10 row-span-2 sm:col-span-5 sm:row-span-2 md:col-span-3 md:row-span-4 grid  grid-rows-4 gap-3">
          <Motion className="bg-slate-800 p-3 border border-slate-200 rounded-3xl row-span-2">
            <Work />
          </Motion>
          <Motion className="bg-slate-800 p-4 border border-slate-200 rounded-3xl row-span-2">
            <Skills />
          </Motion>
        </div>
        <div className="rounded-3xl  col-span-10  row-span-2 sm:col-span-5 sm:row-span-2 md:col-span-3 md:row-span-4 grid  grid-cols-3 grid-rows-3 gap-3">
          <Motion className="bg-slate-800 rounded-3xl col-span-3 row-span-1 flex items-center">
            <Marquee to={"left"}>
              <Rotate>
                <GiSun className="text-3xl text-blue-500" />
              </Rotate>
              <h2 className="font-bold">LATEST WORK AND FEATURED</h2>
              <Rotate>
                <GiSun className="text-3xl text-blue-500" />
              </Rotate>
            </Marquee>
          </Motion>
          <div className="rounded-3xl col-span-3 row-span-3 grid  grid-cols-4 grid-rows-3 xsm:grid-rows-4 gap-3">
            <Motion className="bg-slate-800 rounded-3xl col-span-4 row-span-1 xsm:col-span-2 xsm:row-span-2 flex items-center justify-center flex-col">
              <h1 className="text-3xl font-bold">01</h1>
              <span className="text-md text-slate-500 font-bold">YEARS</span>
              <span className="text-md text-slate-500 font-bold">
                EXPERIENCE
              </span>
            </Motion>
            <Motion className="bg-slate-800 rounded-3xl col-span-4 row-span-1 xsm:col-span-2 xsm:row-span-4">
              <Social />
            </Motion>
            <Motion className="bg-slate-800 rounded-3xl col-span-4 row-span-1 xsm:col-span-2 xsm:row-span-2 flex items-center justify-center flex-col">
              <h1 className="text-3xl font-bold">+10</h1>
              <span className="text-md text-slate-500 font-bold">TOTAL</span>
              <span className="text-md text-slate-500 font-bold">PROJECTS</span>
            </Motion>
          </div>
        </div>
        <div className="rounded-3xl  col-span-10 row-span-2 xsm:row-span-1  md:col-span-6 md:row-span-2 grid  grid-cols-5 gap-3">
          <Motion className="bg-slate-800 rounded-3xl col-span-5 xsm:col-span-2  h-[30vh] p-4 border border-slate-200">
            <Service />
          </Motion>
          <Motion className="bg-slate-800 rounded-3xl col-span-5 xsm:col-span-2  h-[30vh] p-4 border border-slate-200">
            <Service />
          </Motion>
          <Motion className="bg-slate-800 rounded-3xl  col-span-5 xsm:col-span-1 h-[30vh] p-4 border border-slate-200">
            <Service />
          </Motion>
        </div>
      </div>
    </div>
  );
};

export default Grid;

// <div className='flex w-full h-screen md:h-auto items-center justify-center p-20'>
// <Grid/>
// 	</div>

// // for full screen

//  <div className='grid  grid-cols-10 grid-rows-6 h-full w-full gap-3 text-white'>
// <div className='bg-slate-900 rounded-3xl col-span-4 row-span-6 grid  grid-rows-4 gap-3'>
// <div className='bg-slate-500 rounded-3xl row-span-2 '>1.1</div>
//  <div className='bg-slate-500 rounded-3xl row-span-2'>1.2</div>
// </div>
// <div className='bg-slate-900 rounded-3xl col-span-3 row-span-4 grid  grid-rows-4 gap-3'>
// <div className='bg-slate-500 rounded-3xl row-span-2 '>2.1</div>
//  <div className='bg-slate-500 rounded-3xl row-span-2'>2.2</div>
// </div>
// <div className='bg-slate-900 rounded-3xl col-span-3 row-span-4 grid  grid-cols-3 grid-rows-3 gap-3'>
// <div className='bg-slate-500 rounded-3xl col-span-3 row-span-1'>4.2</div>
// <div className='bg-slate-900 rounded-3xl col-span-3 row-span-3 grid  grid-cols-3 grid-rows-4 gap-3'>
// <div className='bg-slate-500 rounded-3xl col-span-2 row-span-2'>4.1</div>
//  <div className='bg-slate-500 rounded-3xl col-span-1 row-span-4'>4.2</div>
//  <div className='bg-slate-500 rounded-3xl col-span-2 row-span-2'>4.3</div>
// </div>
// </div>

// <div className='bg-slate-900 rounded-3xl col-span-6 row-span-2 grid  grid-cols-5 gap-3'>
// <div className='bg-slate-500 rounded-3xl col-span-2 '>7.1</div>
//  <div className='bg-slate-500 rounded-3xl col-span-2'>7.2</div>
//  <div className='bg-slate-500 rounded-3xl col-span-1 '>7.3</div>
// </div>
// </div>

// /// for small screeen
// <div className='grid  grid-cols-10 grid-rows-6 h-full w-full gap-3 text-white'>
// 		<div className='bg-slate-900 rounded-3xl col-span-10 row-span-2 h-[40vh] grid  grid-rows-4 gap-3'>
// 		<div className='bg-slate-500 rounded-3xl row-span-1 '>1.1</div>
// 		 <div className='bg-slate-500 rounded-3xl row-span-3'>1.2</div>
// 		</div>
// <div className='bg-slate-900 rounded-3xl col-span-10 row-span-2 grid  grid-rows-4 gap-3'>
// <div className='bg-slate-500 rounded-3xl row-span-2 '>2.1</div>
// 		 <div className='bg-slate-500 rounded-3xl row-span-2'>2.2</div>
// </div>
// 		<div className='bg-slate-900 rounded-3xl col-span-10 row-span-4 grid  grid-cols-3 grid-rows-3 gap-3'>
// 	    <div className='bg-slate-500 rounded-3xl col-span-3 row-span-1'>4.0</div>
// 		<div className='bg-slate-900 rounded-3xl col-span-3 row-span-3 grid  grid-cols-4 grid-rows-4 gap-3 '>
//          <div className='bg-slate-500 rounded-3xl col-span-2 row-span-2'>4.1</div>
// 		 <div className='bg-slate-500 rounded-3xl col-span-4 row-span-2 order-last'>4.2</div>
// 		 <div className='bg-slate-500 rounded-3xl col-span-2 row-span-2'>4.3</div>
// 		</div>
// 		</div>

// 		<div className='bg-slate-900 rounded-3xl col-span-10 row-span-2 h-[40vh] grid  grid-cols-5 grid-rows-5 gap-3'>
// 		<div className='bg-slate-500 rounded-3xl col-span-5 row-span-2'>7.1</div>
// 		 <div className='bg-slate-500 rounded-3xl col-span-5 row-span-2'>7.2</div>
// 		 <div className='bg-slate-500 rounded-3xl col-span-5'>7.3</div>
// 		</div>
// 	</div>
