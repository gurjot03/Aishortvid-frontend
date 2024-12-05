import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
export default function Home() {
  return (
  <>
    <Header />
    <Hero/>
    <ProductShowcase/>
    <Testimonials/>
    <Footer/>
  </>
  );
}
