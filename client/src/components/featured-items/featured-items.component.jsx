import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const images = [
  "https://res.cloudinary.com/dgdnpkfun/image/upload/v1673493607/arrangements/brightenDay_fanxij.png",
  "https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003850/arrangements/cosmoplolitan-design-alt_pmwds2.png",
  "https://res.cloudinary.com/dgdnpkfun/image/upload/w_500,h_550/v1656003850/arrangements/metropolitan-design_fashox.png",
  "https://res.cloudinary.com/dgdnpkfun/image/upload/v1657057747/arrangements/massive-metropolitan_jyj0ht.png",
  "https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003846/arrangements/asymmetric-centerpiece-design_anphoq.png",
];

const FeaturedItems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [direction, setDirection] = useState(null);

  const slideVariants = {
    hiddenRight: {
      x: "50%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
      hover: {
        scale: 1.2,
        transition: {
          duration: 0.75,
        },
      },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  const slidersVariants = {
    hover: {
      backgroundColor: "#ff00008e",
    },
  };

  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="relative rounded-lg h-full lg:h-96 max-w-1/4 mx-auto mt-0 lg:mt-48 lg:mb-12 overflow-hidden hover:overflow-visible">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="object-contain w-[400px] h-[300px] rounded-md border-none"
          />
        </AnimatePresence>
        <div className="flex justify-between">
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="left"
            onClick={handlePrevious}
          >
            <ArrowLeftIcon className="bg-amber-500/50 text-white p-2 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2 w-12 h-12" />
          </motion.div>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="right"
            onClick={handleNext}
          >
            <ArrowRightIcon className="bg-amber-500/50 text-white p-2 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2 w-12 h-12" />
          </motion.div>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-8">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`dot ${
              currentIndex === index
                ? "w-4 h-4 bg-amber-500 rounded-full"
                : "w-4 h-4 bg-gray-700 rounded-full"
            }`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={currentIndex === index ? "animate" : ""}
            whileHover="hover"
            variants={dotsVariants}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};


const FeaturedItemsContainer = () => (
  <div className="flex flex-col md:flex-row md:items-center md:justify-evenly md:mx-auto md:w-screen my-24 md:my-32">
    <div className="text-left lg:my-12 mx-5">
      <h1 className="text-7xl font-light font-[Urbanist]">
        Our Featured Items
      </h1>
      <div className="text-md font-light font-[Urbanist]">
        <p>Browse Premium Selections in Our Featured Assortment</p>
      </div>
    </div>
    <div className="w-screen md:w-1/2 h-[100vh] md:h-1/2 lg:h-[80vh] space-y-1 md:space-y-0 flex flex-col md:flex-row items-center md:items-start justify-evenly lg:justify-between bg-gradient-to-tr from-rose-200 to-amber-200 rounded-lg shadow-xl mt-0 py-32 md:py-0 relative">
      <div className="mx-auto h-full md:h-[50%] md:h-auto md:mt-[0vh] flex flex-row items-center justify-between">
        <FeaturedItems images={images} />
      </div>
    </div>
  </div>
);
export default FeaturedItemsContainer;
