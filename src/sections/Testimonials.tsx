import kartik from "@/assets/kartik.jpg";
import lokesh from "@/assets/lokesh.jpg";
import jiten from "@/assets/jiten.jpg";
import dilpreet from "@/assets/dilpreet.jpg";

const testimonials = [
  {
    text: "This tool is a game changer for anyone looking to create high-quality videos effortlessly. The AI behind it is super intelligent, and I’ve been able to create some amazing videos that I wouldn’t have been able to produce on my own. Truly an innovative tool!",
    imageSrc: lokesh.src,
    name: "Lokesh Yadav",
  },
  {
    text: "I love how easy it is to use the AI Video Generator. It’s the perfect balance between simplicity and advanced technology. It’s helped me create more engaging content for my social media, and I’m seeing a significant increase in engagement!",
    imageSrc: kartik.src,
    name: "Kartik Chauhan",
  },
  {
    text: "As a content creator, I’ve always struggled with finding the right tools to enhance my videos. With this app, I can generate professional-quality videos in minutes. The AI features are mind-blowing and have saved me hours of editing!",
    imageSrc: dilpreet.src,
    name: "Dilpreet Grover",
  },
  {
    text: "The AI Video Generator has completely transformed the way I approach video creation. It’s not only intuitive but also incredibly powerful. Whether I’m looking to boost my productivity or bring my ideas to life, this app makes it seamless. Highly recommend!",
    imageSrc: jiten.src,
    name: "Jiten Mehta",
  }
];
const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);

export const Testimonials = () => {
  return <section className="bg-white pb-20">
    <div className="container">
    <div className="max-w-[540px] mx-auto">
    <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b ☐ from-black ☐ to-[#001E80] text-transparent bg-clip-text pt-10">What are users say ?</h2>
    <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">From intuitive design to powerful features, our app has become an essential tool for users around the world.</p>
    </div>
    <div className="flex justify-center gap-6">
    <div className="flex flex-col gap-6 mt-10">
      {firstColumn.map(({text, imageSrc, name}) =>(
        <div className="p-10 border ☐ border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-5xl w-full">
          <div>{text}</div>
          <div className="flex items-center gap-2 mt-5">
            <img src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full" />
            <div className="flex flex-col">
              <div className="font-medium tracking-tight leading-5">{name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="hidden md:block flex flex-col gap-6 mt-10">
      {secondColumn.map(({text, imageSrc, name}) =>(
        <div className="mb-6 p-10 border ☐ border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-5xl w-full">
          <div>{text}</div>
          <div className="flex items-center gap-2 mt-5">
            <img src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full" />
            <div className="flex flex-col">
              <div className="font-medium tracking-tight leading-5">{name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>

    </div>
    </div>
  </section>;
};
