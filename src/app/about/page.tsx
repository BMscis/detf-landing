import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Decentralized Exchange Traded Funds",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSectionOne
        title="Crafted for Startup, SaaS and Business Sites."
        paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
        lists={[
          "Premium quality",
          "Tailwind CSS",
          "Use for lifetime",
          "Next.js",
          "Rich documentation",
          "Developer friendly",
        ]}
      />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
