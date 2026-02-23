import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import Accordion from "../../components/accordion";

const about = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    const section = document.getElementById("some-numbers");

    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;

          counters.forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            const suffix = counter.getAttribute("data-suffix") || "";
            const duration = 1500;
            const startTime = performance.now();

            const updateCounter = (currentTime) => {
              const progress = Math.min(
                (currentTime - startTime) / duration,
                1,
              );

              const value = Math.floor(progress * target);

              counter.innerText =
                suffix === "K" ? `${Math.floor(value / 1000)}K` : value;

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              }
            };

            requestAnimationFrame(updateCounter);
          });

          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>About - Digital Agency</title>
      </Helmet>
      <div
        className={`fixed inset-0 bg-neutral-50 z-50 transition-opacity duration-700
          ${loading ? "opacity-90" : "opacity-0 pointer-events-none"}`}
      />
      <section>
        <div className="page-heading">
          <div className="overlay flex justify-center items-center">
            <div className="flex flex-col md:w-[45%] items-center text-center justify-center gap-8">
              <div className="text-content items-center text-center flex flex-col text-white gap-5">
                <h1 className="text-[48px] font-bold">About Us </h1>
                <strong className="text-[20px]">
                  Welcome to The Digital Agency
                </strong>
                <p className="w-[80%] text-[17px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Suspendisse et justo. Praesent mattis commodo augue. Aliquam
                  ornare hendrerit augue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="flex flex-col items-center m-h-screen gap-5 py-20 grad-rev"
      >
        <div className="cards flex flex-wrap lg:grid lg:grid-cols-3 gap-5 justify-center">
          <div className="card relative top-[-50%] bg-white px-10 py-8 w-[95%] md:w-[320px] flex flex-col gap-5">
            <div className="line w-12.5 h-1.75 bg-(--e-global-color-astglobalcolor0)"></div>
            <h3 className="text-[28px] font-bold">Who Are We</h3>
            <p>
              Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut elit
              tellus, luctus nec ullam corper mattis, pulvinar. Etiam erat
              lectus, finibus eget commodo quis, tinci dunt eget leo. Nullam
              quis vulpu tate orci, ac accum san quam.
            </p>
          </div>

          <div className="card relative top-[-50%] bg-white px-10 py-8 w-[95%] md:w-[320px] flex flex-col gap-5">
            <div className="line w-12.5 h-1.75 bg-(--e-global-color-astglobalcolor0)"></div>
            <h3 className="text-[28px] font-bold">Our Mission</h3>
            <p>
              Ut elit tellus, luctus nec ullam corper mattis, pulvinar. Etiam
              erat lectus, finibus eget commodo quis, tinci dunt eget leo.
              Nullam quis vulpu tate orci, ac accum san quam. Morbi frin gilla
              congue libero.
            </p>
          </div>

          <div className="card relative top-[-50%] bg-white px-10 py-8 w-[95%] md:w-[320px] flex flex-col gap-5">
            <div className="line w-12.5 h-1.75 bg-(--e-global-color-astglobalcolor0)"></div>
            <h3 className="text-[28px] font-bold">What We Do </h3>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-(--e-global-color-astglobalcolor0)"
                />{" "}
                UI UX Design
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-(--e-global-color-astglobalcolor0)"
                />{" "}
                Website Development
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-(--e-global-color-astglobalcolor0)"
                />{" "}
                Marketing
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-(--e-global-color-astglobalcolor0)"
                />{" "}
                Social Media
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-(--e-global-color-astglobalcolor0)"
                />{" "}
                eCommerce Store
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-(--e-global-color-astglobalcolor0)"
                />{" "}
                Tech Support
              </li>
            </ul>
          </div>
        </div>

        <article className="flex flex-col gap-10 items-center">
          <h2 className="text-[35px] font-bold">Our 6-D Process</h2>
          <div className="grid place-items-center grid-cols-1 md:grid-cols-3 gap-10">
            <div className="w-[90%] md:w-[320px]">
              <div className="relative flex flex-col">
                <h6 className="text-[100px] font-bold text-gray-200">01.</h6>
                <strong className="absolute bottom-5 text-[20px]">
                  Discover
                </strong>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar.
              </p>
            </div>

            <div className="w-[90%] md:w-[320px]">
              <div className="relative flex flex-col">
                <h6 className="text-[100px] font-bold text-gray-200">02.</h6>
                <strong className="absolute bottom-5 text-[20px]">
                  Define
                </strong>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar.
              </p>
            </div>

            <div className="w-[90%] md:w-[320px]">
              <div className="relative flex flex-col">
                <h6 className="text-[100px] font-bold text-gray-200">03.</h6>
                <strong className="absolute bottom-5 text-[20px]">
                  Design
                </strong>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar.
              </p>
            </div>

            <div className="w-[90%] md:w-[320px]">
              <div className="relative flex flex-col">
                <h6 className="text-[100px] font-bold text-gray-200">04.</h6>
                <strong className="absolute bottom-5 text-[20px]">
                  Develop
                </strong>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar.
              </p>
            </div>

            <div className="w-[90%] md:w-[320px]">
              <div className="relative flex flex-col">
                <h6 className="text-[100px] font-bold text-gray-200">05.</h6>
                <strong className="absolute bottom-5 text-[20px]">
                  Deploy
                </strong>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar.
              </p>
            </div>

            <div className="w-[90%] md:w-[320px]">
              <div className="relative flex flex-col">
                <h6 className="text-[100px] font-bold text-gray-200">06.</h6>
                <strong className="absolute bottom-5 text-[20px]">
                  Deliver
                </strong>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar.
              </p>
            </div>
          </div>
        </article>
      </section>
      <section
        id="why-chose-us"
        className="bg-(--e-global-color-astglobalcolor4)"
      >
        <div className="flex flex-col md:flex-row">
          <div className="image w-full h-[20%] md:w-[50%] bg-(--e-global-color-astglobalcolor2)">
            <img
              className="w-full h-full opacity-25 object-fit-cover"
              src="https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/01/why-choose-us.jpg"
            />
          </div>
          <div className="flex flex-col justify-start right p-10 md:p-20 md:w-[50%]">
            <div>
              <h2 className="text-[42px]">Why Choose Us?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar.
              </p>
            </div>
            <Accordion />
          </div>
        </div>
        <div
          id="some-numbers"
          className="p-20 flex flex-wrap gap-3 items-center justify-center"
        >
          <div className="w-60 flex flex-col gap-5">
            <h4 className="text-[20px] font-bold">Some Numbers</h4>
            <p>Lorem ipsum dolor sit amet, consec tetur adipis. </p>
          </div>

          <div className="w-60 flex items-center gap-2">
            <span
              className="counter font-bold text-[45px] text-(--e-global-color-astglobalcolor0)"
              data-target="87"
            >
              0
            </span>
            <span className="font-bold text-[15px] w-28">
              Satisfied Clients
            </span>
          </div>

          <div className="w-60 flex items-center gap-2">
            <span
              className="counter font-bold text-[45px] text-(--e-global-color-astglobalcolor0)"
              data-target="150"
            >
              0
            </span>
            <span className="font-bold text-[15px] w-28">
              Projects Completed
            </span>
          </div>

          <div className="w-60 flex items-center gap-2">
            <span
              className="counter font-bold text-[45px] text-(--e-global-color-astglobalcolor0)"
              data-target="28"
            >
              0
            </span>
            <span className="font-bold text-[15px] w-28">Accolades Earned</span>
          </div>

          <div className="w-60 flex items-center gap-2">
            <span
              className="counter font-bold text-[45px] text-(--e-global-color-astglobalcolor0)"
              data-target="56000"
              data-suffix="K"
            >
              0
            </span>
            <span className="font-bold text-[15px] w-28">Lines of Code</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
