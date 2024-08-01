"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Marquee } from "../Marquee";

const Carousel = () => {
  const initialItems = [
    { src: "/cooperativelife.png", alt: "Image 1" },
    { src: "/projectsImg.png", alt: "Image 2" },
    { src: "/projectthumbnai.png", alt: "Image 3" },
  ];

  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        const firstItem: any = newItems.shift();
        newItems.push(firstItem);
        return newItems;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden relative w-full h-[200px]">
      <div className="flex  gap-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[250px] h-[200px] flex-shrink-0 flex transition-transform duration-5000"
            style={{ transform: "translateX(-0%)" }}
          >
            <div className="w-full h-full bg-slate-50 rounded-lg">
              <Image
                src={item.src}
                alt={item.alt}
                width={250}
                height={200}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
