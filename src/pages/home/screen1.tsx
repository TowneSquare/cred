import { useMemo, useRef } from "react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Logo from "./logo";

const Screen1 = () => {
  const ref1 = useRef(null);

  useMemo(() => {
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-200px",
      end: "top top+=-1000px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.opacity = 1 - (self.progress * 1);
        }
      },
    });
    
    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      ref={ref1}
      className="absolute w-full h-screen flex flex-col justify-center items-center"
    >
      <div className="absolute top-16">
        <Logo />
      </div>
      <div>
        <p className="text-[78px] font-bold">A loyalty system</p>
      </div>
      <img
        src="/home/screen1/effect1.svg"
        alt="effect1"
        className="absolute top-20 left-24"
      />
      <img
        src="/home/screen1/effect2.svg"
        alt="effect2"
        className="absolute bottom-16 right-32"
      />
    </div>
  );
};

export default Screen1;
