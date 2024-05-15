import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import CheckList from "../Features/checkList";
import { motion } from "framer-motion";
function DefaultImage() {
  return (
    <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
      <Image
        src="/images/about/about-image.svg"
        alt="about-image"
        fill
        className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
      />
      <Image
        src="/images/about/about-image-dark.svg"
        alt="about-image"
        fill
        className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
      />
    </div>
  );
}

const AboutSectionOne = ({
  title,
  paragraph,
  lists,
  component,
}: {
  title: string;
  paragraph: string;
  lists: string[];
  component?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ amount: "all" }}
      onViewportEnter={() => console.log(`title: ${title}`)}
      id="about"
      className="w-full pt-16 md:pt-20 lg:px-20 lg:pt-28"
    >
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className=" flex flex-row-reverse flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle title={title} paragraph={paragraph} mb="44px" />
              <CheckList lists={lists} />
            </div>

            <div className="flex w-full items-center justify-center px-4 lg:w-1/2">
              {component ? component : <DefaultImage />}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSectionOne;
