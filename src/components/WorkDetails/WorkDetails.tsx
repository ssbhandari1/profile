import React from "react";

const WorkDetails = () => {
  return (
    <div className="grid  grid-cols-2 grid-rows-3 w-full bg-slate-200 gap-2 "   style={{ gridTemplateRows: "250px 200px auto"}}>
    <div className="row-start-1 col-span-3 ... bg-slate-900 rounded-2xl min-h-[250px] min-w-[200px] ">
      01
    </div>
    <div className="row-start-2 col-span-3  ... bg-slate-900 rounded-2xl min-h-[200px] min-w-[200px] max-w-full max-h-full">
      02
    </div>
    <div
      className="row-span-3  col-span-3 bg-slate-200 grid grid-cols-2 gap-2"
      style={{ gridTemplateRows: "auto 150px 150px" }}
    >
      <div className="col-start-1 col-end-3 h-[100px] bg-slate-900 rounded-2xl flex items-center justify-center">
        01
      </div>
      <div className="row-start-2 bg-slate-900 rounded-2xl flex items-center justify-center">
        02
      </div>
      <div className="row-span-2 bg-slate-900 rounded-2xl flex items-center justify-center">
        03
      </div>
      <div className="row-span-2 bg-slate-900 rounded-2xl flex items-center justify-center">
        04
      </div>
    </div>

    <div
      className="grid grid-col-3 gap-2 col-start-1 h-[35vh] col-end-4 bg-slate-200 "
      style={{ gridTemplateColumns: "1fr 1fr 25%" }}
    >
      <div className="bg-slate-900 rounded-2xl"></div>
      <div className="bg-slate-900 rounded-2xl"></div>
      <div className="bg-slate-900 rounded-2xl"></div>
    </div>
  </div>




    // <div className="grid  grid-cols-2 grid-rows-3 w-full bg-slate-200 gap-2"  style={{ gridTemplateRows: "250px 250px auto"}}>
    //   <div className="row-end-2 row-span-2 ... bg-slate-900 rounded-2xl min-h-[250px] min-w-[200px] max-w-full max-h-full">
    //     01
    //   </div>
    //   <div className="row-start-2  ... bg-slate-900 rounded-2xl  min-h-[250px] min-w-[200px] max-w-full max-h-full">
    //     02
    //   </div>
    //   <div
    //     className="row-span-3 bg-slate-200 grid grid-cols-2 gap-2"
    //     style={{ gridTemplateRows: "auto 1fr 1fr" }}
    //   >
    //     <div className="col-start-1 col-end-3 h-[120px] bg-slate-900 rounded-2xl flex items-center justify-center">
    //       01
    //     </div>
    //     <div className="row-start-2 bg-slate-900 rounded-2xl flex items-center justify-center">
    //       02
    //     </div>
    //     <div className="row-span-2 bg-slate-900 rounded-2xl flex items-center justify-center">
    //       03
    //     </div>
    //     <div className="row-span-2 bg-slate-900 rounded-2xl flex items-center justify-center">
    //       04
    //     </div>
    //   </div>

    //   <div
    //     className="grid grid-col-3 gap-2 col-start-1 col-end-4 h-[35vh] bg-slate-200 "
    //     style={{ gridTemplateColumns: "1fr 1fr 25%" }}
    //   >
    //     <div className="bg-slate-900 rounded-2xl"></div>
    //     <div className="bg-slate-900 rounded-2xl"></div>
    //     <div className="bg-slate-900 rounded-2xl"></div>
    //   </div>
    // </div>
  );
};

export default WorkDetails;








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