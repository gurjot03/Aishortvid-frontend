import Logo from "@/assets/logosaas.png";
import Image from "next/image";
export const Header = () => {
return (
  <div className="sticky top-0 py-5 backdrop-blur-sm z-20">
      <div className="container">
      <div className="inline-flex items-center justify-between">
      
      <Image src={Logo} alt="Saas Logo" height={40} width={40} />
      <h1 className="pl-4 text-4xl font-bold">AiShortVid</h1>
      </div>
      </div>
  </div>
);
};