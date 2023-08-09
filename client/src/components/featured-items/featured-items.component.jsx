import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const images = [
  "https://res.cloudinary.com/dgdnpkfun/image/upload/v1673493607/arrangements/brightenDay_fanxij.png",

  "https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003850/arrangements/cosmoplolitan-design-alt_pmwds2.png",

  "https://res.cloudinary.com/dgdnpkfun/image/upload/w_500,h_550/v1656003850/arrangements/metropolitan-design_fashox.png",

  "https://res.cloudinary.com/dgdnpkfun/image/upload/v1657057747/arrangements/massive-metropolitan_jyj0ht.png",
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
      <div className="relative rounded-lg h-96 max-w-1/4 mx-auto my-12 overflow-hidden hover:overflow-visible">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="object-cover w-[400px] h-[300px] rounded-md border-none"
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
  <div className="w-[80vw] h-[55vh] flex flex-row items-center justify-evenly  bg-gradient-to-tr from-rose-200 to-amber-200 mx-[10vw] rounded-lg shadow-xl my-12">
    <div className="text-left">
      <h1 className="text-7xl font-medium font-[Urbanist]">
        Our Featured Items
      </h1>
      <p>Browse Premium Selections in Our Featured Assortment</p>
    </div>
    <div className="carousel-container">
      <FeaturedItems images={images} />
    </div>
  </div>
);
export default FeaturedItemsContainer;
