"use client"

import SkillsBadge from "@/components/SkillsBadge"
import { motion } from "framer-motion"
import Marquee from "react-fast-marquee"

function MarqueeSection({ }) {
    return (
        <div className="flex flex-col gap-5">
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="flex dark:hidden flex-col gap-5"
            >
                <Marquee speed={15} gradient gradientColor="#DFECFB" gradientWidth={50} autoFill>
                    <SkillsBadge />
                </Marquee>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="flex dark:hidden flex-col gap-5"
            >
                <Marquee speed={15} gradient gradientColor="#DFECFB" gradientWidth={50} autoFill direction="right">
                    <SkillsBadge />
                </Marquee>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="hidden dark:flex flex-col gap-5"
            >
                <Marquee gradient speed={15} gradientColor="#041121" gradientWidth={50} autoFill>
                    <SkillsBadge />
                </Marquee>
                <Marquee autoFill speed={15} gradient gradientColor="#041121" gradientWidth={50} direction="right">
                    <SkillsBadge />
                </Marquee>
            </motion.div>
        </div>
    )
}

export default MarqueeSection