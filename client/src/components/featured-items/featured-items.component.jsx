import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {FEATURED_ITEM_DATA} from "../../pages/shop/shop.data"
import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/24/solid";

const featuredItemData = [{

    image: `${FEATURED_ITEM_DATA[0].imageUrl}`,
    name: `${FEATURED_ITEM_DATA[0].name}`,
    price: `${FEATURED_ITEM_DATA[0].pricingText}`
}, {

    image: `${FEATURED_ITEM_DATA[1].imageUrl}`,
    name: `${FEATURED_ITEM_DATA[1].name}`,
    price: `${FEATURED_ITEM_DATA[1].pricingText}`
}, {

    image: `${FEATURED_ITEM_DATA[2].imageUrl}`,
    name: `${FEATURED_ITEM_DATA[2].name}`,
    price: `${FEATURED_ITEM_DATA[2].pricingText}`
},
    {

        image: `${FEATURED_ITEM_DATA[3].imageUrl}`,
        name: `${FEATURED_ITEM_DATA[3].name}`,
        price: `${FEATURED_ITEM_DATA[3].pricingText}`
    },
    {

        image: `${FEATURED_ITEM_DATA[4].imageUrl}`,
        name: `${FEATURED_ITEM_DATA[4].name}`,
        price: `${FEATURED_ITEM_DATA[4].pricingText}`
    }];
const images = [
    "https://res.cloudinary.com/dgdnpkfun/image/upload/v1673493607/arrangements/brightenDay_fanxij.png",
    "https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003850/arrangements/cosmoplolitan-design-alt_pmwds2.png",
    "https://res.cloudinary.com/dgdnpkfun/image/upload/w_500,h_550/v1656003850/arrangements/metropolitan-design_fashox.png",
    "https://res.cloudinary.com/dgdnpkfun/image/upload/v1657057747/arrangements/massive-metropolitan_jyj0ht.png",
    "https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003846/arrangements/asymmetric-centerpiece-design_anphoq.png"
];



const FeaturedItems = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [direction, setDirection] = useState(null);

    const slideVariants = {
        hiddenRight: {
            x: "50%", opacity: 0,
        }, hiddenLeft: {
            x: "-100%", opacity: 0,
        }, visible: {
            x: "0", opacity: 1, transition: {
                duration: 1,
            }, hover: {
                scale: 1.2, transition: {
                    duration: 0.75,
                },
            },
        }, exit: {
            x: "-100%", opacity: 0, scale: 0.8, transition: {
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
        }, animate: {
            y: 0, scale: 1.2, transition: {type: "spring", stiffness: 1000, damping: "10"},
        }, hover: {
            scale: 1.1, transition: {duration: 0.2},
        },
    };

    const handleNext = () => {
        setDirection("right");
        setCurrentIndex((prevIndex) => prevIndex + 1 === images.length ? 0 : prevIndex + 1);
    };

    const handlePrevious = () => {
        setDirection("left");
        setCurrentIndex((prevIndex) => prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1);
    };

    const handleDotClick = (index) => {
        setDirection(index > currentIndex ? "right" : "left");
        setCurrentIndex(index);
    };

    return (<div className="carousel">
            <div
                className="relative rounded-lg h-full lg:h-96 max-w-1/4 mx-auto mt-0 lg:mt-48 lg:mb-12 overflow-hidden hover:overflow-visible">
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
                        <ArrowLeftIcon
                            className="bg-amber-500/50 text-white p-2 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2 w-12 h-12"/>
                    </motion.div>
                    <motion.div
                        variants={slidersVariants}
                        whileHover="hover"
                        className="right"
                        onClick={handleNext}
                    >
                        <ArrowRightIcon
                            className="bg-amber-500/50 text-white p-2 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2 w-12 h-12"/>
                    </motion.div>
                </div>
            </div>

            <div className="mt-8 flex justify-center gap-8">
                {images.map((_, index) => (<motion.div
                        key={index}
                        className={`dot ${currentIndex === index ? "w-4 h-4 bg-amber-500 rounded-full" : "w-4 h-4 bg-gray-700 rounded-full"}`}
                        onClick={() => handleDotClick(index)}
                        initial="initial"
                        animate={currentIndex === index ? "animate" : ""}
                        whileHover="hover"
                        variants={dotsVariants}
                    ></motion.div>))}
            </div>

        </div>);
};

const FeaturedItemsData = ({currentIndex, featuredItemData}) => (
    <div className="mt-2 w-full h-auto flex justify-center gap-1 z-100 relative">
        {featuredItemData.map((item, index) => (
            <>
                <div className="mt-36">
                    <h2 className="z-100 text-xl md:text-5xl">{featuredItemData[index] === currentIndex && item.name}</h2>
                </div></>
        ))}
    </div>
)


const FeaturedItemsContainer = () => (<>
        <div className="text-left">
            <h1 className="text-7xl font-medium font-[Urbanist] m-5">
                Our Featured Items
            </h1>
        </div>
        <div className="text-md font-light font-[Urbanist] m-5">
            <p>Browse Premium Selections in Our Featured Assortment</p>
        </div>
        <div
            className="w-screen h-[100vh] space-y-1 flex flex-col lg:flex-row items-center justify-evenly bg-gradient-to-tr from-rose-200 to-amber-200 rounded-lg shadow-xl mt-0 lg:py-[32vh] md:py-72 relative">

            <div className="h-full">
                <FeaturedItemsData featuredItemData={featuredItemData} />

                <FeaturedItems images={images} />
            </div>
        </div>
    </>);
export default FeaturedItemsContainer;
