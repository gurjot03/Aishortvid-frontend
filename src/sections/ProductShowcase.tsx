import productImage from "@/assets/product.png";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

export const ProductShowcase = () => {
return (
  <section className="bg-gradient-to-b from-[#FFFFFF] Ito-[#D2DCFF] py-24 overflow-x-clip">
  <div className="container">
    <div className="max-w-[540px] mx-auto">
  <div className="flex justify-center">
  <div className="text-sm inline-flex border ☐ border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Boost your productivity</div>
  </div>
  <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b ☐ from-black ☐ to-[#001E80] text-transparent bg-clip-text mt-5">Fastrack your creativity!</h2>
  <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
  Effortlessly turn your ideas into a video in just minutes with this application.
  </p>
  </div>
  <div className="relative">
  <Image src={productImage} alt="Product Image" className="rounded-2xl mt-10" />
  <Image src={pyramidImage} alt="Pyramid Image" height={262} width={262} className=" hidden md:block absolute -right-36 -top-32" />
  <Image src={tubeImage} alt="Tube Image" height={248} className="hidden md:block absolute bottom-20 -left-36" />

  </div>
  </div>
  </section>
);
};