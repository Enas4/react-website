import Common from "../Common/Common";
import rocketImg from "./rocket.png";
function About() {
  return (
    <div>
      <Common
        name="Welcome to About page"
        image={rocketImg}
        visit="/contact"
        btnName="Contact Now"
      />
    </div>
  );
}

export default About;
