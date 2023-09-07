import smile from "../assets/smile.svg";
import work from "../assets/contact-title.svg";
import girl from "../assets/Swimming.svg";
import arrow from "../assets/arrow-small.svg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./samplePage.css";

const HomePage = () => {
  const app = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .fromTo(
          ".smile",
          3,
          { rotate: -45 },
          {
            rotate: 30,
            transform: "rotate(-30deg)",
            ease: "in-out",
            duration: 0.2,
            repeat: -1,
            yoyo: true,
            yoyoEase: "in-out",
          }
        )
        .to(".square2", { x: 200 });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={app} className="main-container bg-metal absolute top-16 w-full">
      <div className="flex justify-center items-center w-full absolute z-10">
        <img
          id="smile"
          src={smile}
          alt="smile"
          className="smile w-16 h-16 my-3"
        />
      </div>
      <div className="fake-div absolute l-0 w-100 bg-beige"></div>
      <div className="circle absolute top-0 left-0 leading-none bg-white rounded-[50%] w-full h-[90rem]">
        <div className="work flex justify-center top-24 relative">
          <img src={work} alt="" className="w-10/12" />
        </div>
        <div className="main-image relative w-full justify-center items-center flex top-[-9rem]">
          <img src={girl} alt="" className="w-2/5 absolute" />
        </div>
        <div className="arrow-block flex justify-center items-center w-full h-2/6 flex-col">
          <div>
            <span>
              With passionate creatives striving to create uniqueness.
            </span>
          </div>
          <div className="my-6">
            <img src={arrow} alt="" className="h-24 arrow-image" />
          </div>
        </div>
      </div>
      <div
        style={{ top: "calc(100vw - 16vw)" }}
        className="footer font-serif font-normal text-7xl flex h-full z-50 absolute justify-center items-end w-full"
      >
        <h2>If you like mails</h2>
      </div>
    </div>
  );
};

export default HomePage;
