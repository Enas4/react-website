import Card from "./Card";
import Data from "./Data.js";

function Services() {
  return (
    <>
      <h1 className="text-center mt-4">Our Services</h1>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Data.map((val, idx) => {
                return <Card key={idx} imgSrc={val.imgSrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
