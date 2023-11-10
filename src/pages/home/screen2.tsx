import { useMemo, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Logo from "./logo";

const Screen2 = () => {
  const ref1 = useRef(null);

  useMemo(() => {
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-1000px",
      end: "top top+=-1800px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.opacity = self.progress * 1;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-1800px",
      end: "top top+=-2600px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.opacity = 1 - self.progress * 1;
        }
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      ref={ref1}
      className="absolute w-full h-screen flex flex-col justify-center items-center opacity-0"
    >
      <div className="absolute top-16">
        <Logo />
      </div>
      <div className="mt-">
        <p className="text-[78px] font-bold text-third-default">
          that rewards you points
        </p>
      </div>
      <img
        src="/home/screen2/effect1.svg"
        alt="effect1"
        className="absolute top-20 left-24"
      />
      <img
        src="/home/screen2/effect2.svg"
        alt="effect2"
        className="absolute bottom-16 right-32"
      />
    </div>
  );
};

export default Screen2;
