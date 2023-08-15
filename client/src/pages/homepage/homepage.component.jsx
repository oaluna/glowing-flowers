import {useRef} from "react";
import { motion, useScroll } from "framer-motion";

import Hero from "../../components/hero/hero.component";
import FeaturedItemsContainer from "../../components/featured-items/featured-items.component";
import Directory from "../../components/directory/directory.component";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
	const { scrollYProgress } = useScroll()
	const scrollRef = useRef(null)
	return (
  <HomePageContainer>
    <motion.div
       initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
						
    >
      <Hero />
    </motion.div>
			<motion.div
		 initial={{opacity: 0}}
  whileInView={{opacity: 1}}
  viewport={{	root: scrollRef }}

	>
      <FeaturedItemsContainer/>
			</motion.div>
			<motion.div
		 initial={{opacity: 0}}
  whileInView={{opacity: 1}}
  viewport={{ 	root: scrollRef }}

	>  
			<Directory />
			</motion.div>
  </HomePageContainer>
)};

export default HomePage;
