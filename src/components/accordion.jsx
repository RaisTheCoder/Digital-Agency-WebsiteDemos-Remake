import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Accordion() {
  // start with first one open (index 0)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    // if clicking the open one, close it
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  let placeholder =
    "Sed Fringilla Mauris Sit Amet Nibh. Donec Sodales Sagittis Magna. Sed Consequat, Leo Eget Bibendum, Sodales, Augue Velit Cursus Nunc, Quis Gravida Magna Mi A Libero.";

  const items = [
    { title: "Best Quality Designs", content: `${placeholder}` },
    { title: "24x7 Live Support", content: `${placeholder}` },
    { title: "Result Oriented Projects", content: `${placeholder}` },
    { title: "Award Winning Support Team", content: `${placeholder}` },
    { title: "Best ROI Techniques", content: `${placeholder}` },
    { title: "Experienced Professionals", content: `${placeholder}` },
  ];

  return (
    <div className="w-full mx-auto mt-8">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="flex flex-col gap-1 bg-white">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left p-3 font-semibold flex justify-between items-center"
            >
              {item.title}
              <FontAwesomeIcon
                className="text-[18px]"
                icon={isOpen ? faCircleMinus : faCirclePlus}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 bg-white ${
                isOpen ? "max-h-96 p-3" : "max-h-0 p-0"
              }`}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
