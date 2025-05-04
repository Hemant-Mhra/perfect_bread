'use client';
// import { getData } from "@/libs";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
//   const [data, setData] = useState([]);
//   useEffect(async () => {
//     const result = await getData('blog');
//     setData(result);
//   }, []);
  
  return (
    <section className="my-14">
      <Image
        src="/hero_image.png"
        alt="hero image"
        width={2000}
        height={2000}
        className="w-full h-full"
      />
    </section>
  );
}
