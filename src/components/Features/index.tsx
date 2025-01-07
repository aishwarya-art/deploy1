import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title=""
          paragraph="I'm a skilled Full Stack Developer with experience in TypeScript, PHP, and JavaScript, specializing in creating dynamic web and mobile applications. I have expertise in frameworks like ReactJS, React Native, CodeIgniter, and Cordova. I excel at designing scalable, user-friendly solutions, integrating APIs, and managing databases using tools such as Postman, Firebase, and MySQL. A quick learner and problem solver, I collaborate closely with teams to deliver impactful results. Let’s work together to build innovative solutions and bring your vision to life!"
          width="full"
          center={false}
        />

        {/* Adjusted the grid layout */}
        {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div> */}
      <div className="grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-2 lg:grid-cols-6">
  {featuresData.map((feature) => (
    <SingleFeature key={feature.id} feature={feature} />
  ))}
</div>



      </div>
    </section>
  );
};

export default Features;
