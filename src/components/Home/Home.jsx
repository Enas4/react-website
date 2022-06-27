import Common from "../Common/Common";
import rocket from "./rocket.png";

function Home() {
  return (
    <>
      <Common
        name="Grow your Business with"
        image={rocket}
        visit="/services"
        btnName="Get started"
      />
    </>
  );
}

export default Home;
