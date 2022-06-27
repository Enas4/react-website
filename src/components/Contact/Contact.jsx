import { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    msg: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    return setData({ ...data, [name]: value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My fullname is ${data.fullname} .My mobile num is ${data.phone}.My email is ${data.email}.My message is ${data.msg}`
    );
  };

  return (
    <>
      <h1 className="text-center mt-4">Contact Us</h1>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form action="" onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Mobile number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
                <div class="col-auto">
                  <button
                    type="submit"
                    class="btn btn-outline-primary mb-3 mt-3"
                  >
                    Submit Form
                  </button>
                </div>
                {/* </div>
          </div>
        
        </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
