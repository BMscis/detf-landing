"use client";
import { Feature } from "@/types/feature";
import { motion } from "framer-motion";
const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <motion.div
      className="w-full"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ amount: "all" }}
      onViewportEnter={() => console.log(`title: ${title}`)}
    >
      <div
        className="grid max-h-full grid-cols-2 items-center"
        data-wow-delay=".15s"
      >
        <div className="mb-10 flex items-center justify-center rounded-md ">
          {icon}
        </div>
        <div>
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
          <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
            {paragraph}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleFeature;
