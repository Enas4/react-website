import "./Common.css";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

function Common(props) {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row col-10 mx-auto">
          <div className="col-10 mx-auto d-flex justify-content-center align-items-center mt-5 gap-5 flex-grow-1">
            <div>
              <h1 style={{ color: "blue" }}>{props.name}</h1>
              <h3 className="mb-4 mt-4">
                We are the team of talented
                <span style={{ color: "blue" }}> Developers</span> making
                wesite.
              </h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Fugit, eveniet.
              </p>
              <button type="button" class="btn btn-outline-primary">
                <NavLink className="btnAnchor" to={props.visit}>
                  {props.btnName}
                </NavLink>
              </button>
            </div>
            <div>
              <img
                src={props.image}
                class="rounded float-end animated"
                alt="..."
                width="500px"
                height="400px"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Common;
