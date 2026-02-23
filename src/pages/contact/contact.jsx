import {
  faEnvelope,
  faLocationDot,
  faMobilePhone,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";

const contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact - Digital Agency</title>
      </Helmet>
      <div
        className={`fixed inset-0 bg-neutral-50 z-50 transition-opacity duration-700
          ${loading ? "opacity-90" : "opacity-0 pointer-events-none"}`}
      />
      <div className="page-heading">
        <div className="overlay flex justify-center items-center">
          <div className="flex flex-col md:w-[45%] items-center text-center justify-center gap-8">
            <div className="text-content items-center text-center flex flex-col text-white gap-5">
              <h1 className="text-[48px] font-bold">Contact Us</h1>
              <strong className="text-[20px]">
                Contact for Premium Business Services
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
      <section className="flex gap-25 flex-col md:flex-row justify-center p-20 px-10 grad">
        <article className="flex flex-col gap-10">
          <h3 className="font-bold text-[28px]">Request Free Consultation</h3>
          <div className="flex flex-wrap gap-5 md:gap-0 w-full md:w-190">
            <form
              action=""
              className="bg-white px-10 py-10 md:py-20 gap-8 md:gap-0 flex flex-col justify-between w-full md:w-[50%]"
            >
              <input
                className="border border-gray-300 rounded-md p-2 px-3"
                type="text"
                placeholder="Your Name *"
                required
              />
              <input
                className="border border-gray-300 rounded-md p-2 px-3"
                type="text"
                placeholder="Your Email"
                required
              />

              <textarea
                className="border border-gray-300 rounded-md p-2 px-3"
                placeholder="Your Message"
              ></textarea>

              <button type="submit" className="button button2">
                SUBMIT
              </button>
            </form>

            <div className="relative w-full md:w-[50%] pb-[66.6667%]">
              <div className="top-0 left-0 w-full h-full overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://maps.google.com/maps?width=600&height=400&hl=en&q=I-66%20United%20States&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </article>

        <article className="flex flex-col gap-10">
          <h3 className="font-bold text-[28px]">Get In Touch</h3>

          <div className="flex flex-col gap-6">
            <strong>Reach Us</strong>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-3 items-center">
                <FontAwesomeIcon
                  className="text-(--e-global-color-astglobalcolor0)"
                  icon={faLocationDot}
                />
                <p>123/B, Route 66, Downtown, Washington, DC 20004, US​</p>
              </li>
              <li className="flex gap-3 items-center">
                <FontAwesomeIcon
                  className="text-(--e-global-color-astglobalcolor0)"
                  icon={faEnvelope}
                />
                <Link to={"mailto:info@example.com​"}>info@example.com</Link>
              </li>
              <li className="flex gap-3 items-center">
                <FontAwesomeIcon
                  className="text-(--e-global-color-astglobalcolor0)"
                  icon={faPhone}
                />
                <Link to={"tel:+001 987-654-3210"}>+001 987-654-3210 </Link>
              </li>
              <li className="flex gap-3 items-center">
                <FontAwesomeIcon
                  className="text-(--e-global-color-astglobalcolor0)"
                  icon={faMobilePhone}
                />
                <Link to={"tel:+001 987-654-3210"}>+001 987-654-3210 </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <strong>Call us Toll-Free</strong>
            <h3 className="text-[28px] text-(--e-global-color-astglobalcolor0) font-bold">
              <Link to={"tel:+1-800-1234-567"}>+1-800-1234-567</Link>
            </h3>
          </div>
        </article>
      </section>
    </>
  );
};

export default contact;
