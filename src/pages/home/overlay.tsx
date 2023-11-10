import { useMemo, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Overlay = () => {
  const ref1 = useRef(null);

  const fadeIn = (self: globalThis.ScrollTrigger) => {
    if (ref1.current != null && (ref1.current as any).style != null) {
      const overlays = document.getElementsByClassName("overlay");

      for (let i = 0; i < overlays.length; i++) {
        let node: any = overlays[i];
        node.style.left = `${Width * i}%`;
        node.style.right = "auto";
        node.style.width = `${Width * self.progress}%`;
      }
    }
  };
  const fadeOut = (self: globalThis.ScrollTrigger) => {
    if (ref1.current != null && (ref1.current as any).style != null) {
      const overlays = document.getElementsByClassName("overlay");

      for (let i = 0; i < overlays.length; i++) {
        let node: any = overlays[i];
        node.style.left = "auto";
        node.style.right = `${Width * i}%`;
        node.style.width = `${Width * (1 - self.progress)}%`;
      }
    }
  };
  useMemo(() => {
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-200px",
      end: "top top+=-1000px",
      onUpdate: fadeIn,
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-1000px",
      end: "top top+=-1800px",
      onUpdate: fadeOut,
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-1800px",
      end: "top top+=-2600px",
      onUpdate: fadeIn,
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-2600px",
      end: "top top+=-3400px",
      onUpdate: fadeOut,
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-3400px",
      end: "top top+=-4000px",
      onUpdate: (self: globalThis.ScrollTrigger) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.zIndex = 0;
        }
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <div ref={ref1} className="absolute w-full h-screen z-10">
      <div className="overlay absolute left-0 top-0 w-0 h-full bg-gray-light-2"></div>
      <div className="overlay absolute left-1/3 top-0 w-0 h-full bg-gray-light-2"></div>
      <div className="overlay absolute left-2/3 top-0 w-0 h-full bg-gray-light-2"></div>
    </div>
  );
};

export default Overlay;

const Width = 33.3333333;
