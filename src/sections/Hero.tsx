"use client";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import {motion} from 'framer-motion';

export const Hero = ( ) => {
  return (
  <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
  <div className="container">
    <div className="md:flex items-center">
    <div className="md:w-[478px]">
    <div className="text-sm inline-flex border ☐ border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Ai Video Generator</div>
    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b ☐ from-black ☐ to-[#001E80] text-transparent bg-clip-text mt-6">
      Pathway to productivity!
      </h1>
    <p className="text-xl text-[#010D3E] tracking-tight mt-6">
    An innovative application designed to revolutionize the way video content is created on the internet.
    </p>
    <div className="flex gap-1 items-center mt-[30px]">
    <button className="bg-black hover:bg-white text-white hover:text-black transition ease-in-out duration-500 px-4 py-2 rounded-lg font-mdeium inline-flex items-center justify-center tracking-tight">
      Get Started!</button>
    </div>
    </div>
    <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
      <motion.img src={cogImage.src} alt="Cog Image" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
      animate={{
        translateY: [-30,30],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 3,
        ease: "easeInOut"
      }}/>
      <Image src={cylinderImage} alt="Cylinder Image" width={220} height={220} className="hidden md:block -top-8 -left-32 md:absolute"/>
      <Image src={noodleImage} width={220} alt="Noodle Image" className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"/>
    </div>
    </div>
  </div>
  </section>
  );
  };