// components/Card.js
import Image from "next/image";
import Arrow from "../atoms/Arrow";
import mypic from "../../../public/santosh.jpg";
const Card = () => {
  return (
    <div className="opacity-100 transform-none flex flex-col  justify-between items-center h-full gap-3">
      <div className="relative w-[80%] h-auto xsm:w-[50%] xsm:h-[50%]">
        <Image
          alt="Profile Bio"
          width={260}
          height={260}
          className="biography-style__bio-image rounded-3xl"
          //  srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flanding-bio-image.3143b856.png&w=384&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flanding-bio-image.3143b856.png&w=640&q=75 2x"
          src={mypic}
          style={{ color: "transparent", width: "100%", height: "100%" }}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-col gap-3 items-center">
        <button className="rounded-2xl bg-[#6343e4] text-xl font-bold p-4">
          I'm Santosh Bhandari
        </button>
        <p className="text-base text-center font-semibold text-wrap">
          A Passionate Developer and Creative Thinker
        </p>
      </div>
      <Arrow name={"Biography"} navigate={"Bio"} />
    </div>
  );
};

export default Card;
