import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbWheel } from "react-icons/tb";

const SocialIcon = [
  { id: "facebook", icon: FaFacebook, color: "blue-700" },
  { id: "whatsapp", icon: FaWhatsapp, color: "blue-700" },
  { id: "insta", icon: FaInstagram, color: "blue-700" },
];
const Social = () => {
  return (
    <div className="flex items-center  justify-center gap-3">
      {SocialIcon.map((social) => (
        <div
          className="relative w-16 h-16 border rounded-full flex items-center justify-center cursor-pointer"
          key={social.id}
        >
          <TbWheel className="absolute inset-0 w-full h-full text-white hover:text-blue-600 duration-300 transform hover:rotate-180 transition-transform duration-2000 z-10" />
          <social.icon
            className={`text-4xl rounded-full z-20  text-${social.color} bg-black`}
          />
        </div>
      ))}
    </div>
  );
};

export default Social;
