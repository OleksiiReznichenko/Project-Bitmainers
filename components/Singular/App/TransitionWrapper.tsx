import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
};

export default function BaseLayout(props: PropsWithChildren) {

    return (
        <motion.main
            variants={variants} // Pass the variant object into Framer Motion 
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear', duration: 0.5 }} // Set the transition to linear
            className=""
        >
            {props.children}
        </motion.main>
    )
}