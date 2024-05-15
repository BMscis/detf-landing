import AboutSectionOne from "../About/AboutSectionOne";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import CheckList from "./checkList";
import featuresData from "./featuresData";
const style = "grid grid-cols-1 gap-x-8 gap-y-14 items-center";
export function FeatureTitle() {
  return (
    <div id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="Main Features" paragraph="DETF offers " center />
      </div>
    </div>
  );
}

export function Feature0() {
  return (
    <AboutSectionOne
      title={featuresData[0].title}
      paragraph={featuresData[0].paragraph}
      lists={featuresData[0].lists.map((l) => l.title)}
      component={featuresData[0].icon}
    />
  );
}
export function Feature1() {
  return (
    <AboutSectionOne
      title={featuresData[1].title}
      paragraph={featuresData[1].paragraph}
      lists={featuresData[1].lists.map((l) => l.title)}
      component={featuresData[1].icon}
    />
  );
}
export function Feature2() {
  return (
    <AboutSectionOne
      title={featuresData[2].title}
      paragraph={featuresData[2].paragraph}
      lists={featuresData[2].lists.map((l) => l.title)}
      component={featuresData[2].icon}
    />
  );
}
export function Feature3() {
  return (
    <AboutSectionOne
      title={featuresData[3].title}
      paragraph={featuresData[3].paragraph}
      lists={featuresData[3].lists.map((l) => l.title)}
      component={featuresData[3].icon}
    />
  );
}
export function Feature4() {
  return (
    <AboutSectionOne
      title={featuresData[4].title}
      paragraph={featuresData[4].paragraph}
      lists={[]}
      component={featuresData[4].icon}
    />
  );
}
export function Feature5() {
  return (
    <AboutSectionOne
      title={featuresData[5].title}
      paragraph={featuresData[5].paragraph}
      lists={[]}
      component={featuresData[5].icon}
    />
  );
}
const Features = () => {
  return (
    <div id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Main Features"
          paragraph="We offer the power "
          center
        />

        <div className={style}>
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
