import React from "react";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

interface ArrowType {
  navigate?: string;
  name?: string;
}

const Arrow = (props: ArrowType) => {
  const { name, navigate } = props;
  return (
    <div className="w-[100%] flex items-center justify-between">
      <div className="font-semibold">
        <span>{name}</span>
      </div>
      <Link
        href={`${navigate}`}
        className="hover:text-blue-600/100 transition delay-150"
      >
        <FaArrowAltCircleRight className="text-2xl" />
      </Link>
    </div>
  );
};

export default Arrow;
