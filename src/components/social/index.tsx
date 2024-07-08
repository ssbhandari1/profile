import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { GrActions } from "react-icons/gr";

const SocialIcon = [
  { id: "facebook", icon: FaFacebook, color: "blue-700" },
  { id: "whatsapp", icon: FaWhatsapp, color: "blue-700" },
  { id: "insta", icon: FaInstagram, color: "blue-700" },
];
const Social = () => {
  return (
    <div className="w-full h-full flex items-center flex-col justify-center gap-3">
      {SocialIcon.map((social) => (
        <div
          className="relative w-16 h-16 border border-white rounded-full flex items-center justify-center cursor-pointer hover:border-blue-500 transition-colors duration-300"
          key={social.id}
        >
          <GrActions className="absolute inset-0 w-full h-full text-white hover:text-blue-600 duration-300 transform hover:rotate-180 transition-transform duration-2000 z-10" />
          <social.icon
            className={`text-4xl rounded-full z-20  text-${social.color} bg-black`}
          />
        </div>
      ))}
    </div>
  );
};

export default Social;
