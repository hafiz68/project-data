import { React, useState } from "react";
import "./form.css";
import { AiOutlineArrowRight } from "react-icons/ai";


const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  return (
    <>
    <div className="form_background-color">
      <div className="form-section-style">
        <h1 className="form_heading">GET IN TOUCH </h1>
        <form className="form-style">
          <div className="form-fields">
            <div className="form_box__style ">
            <div className="container whole_form__style">

              <div className="form_fields_style">
           <div className="form_botttom_line">
              <input
                type="text"
                placeholder="Enter Name*"
                value={user.name}
                onChange={(e) => {
                  setUser({ ...user, name: e.target.value });
                }}
              />
              </div>
              <div className="form_botttom_line">

              <input
                type="text"
                placeholder="Enter Email*"
                value={user.email}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
              </div>
              </div>

              <div className="form-last-fields">

              <input
                type="text"
                placeholder="Enter Subject*"
                value={user.subject}
                onChange={(e) => {
                  setUser({ ...user, subject: e.target.value });
                }}
              />
</div>
<div className="form-last-fields">

                <input
                type="text"
                placeholder="Message*"
                value={user.message}
                onChange={(e) => {
                  setUser({ ...user, message: e.target.value });
                }}
              />
            </div>
          </div>
          </div>

</div>



          <div className="red-text2 form_button__style">
          <button>Submit <AiOutlineArrowRight size={15}/></button>
          </div>
          <p className="form_p">
            Please subscribe to our newslist to get the latest news from us.
          </p>
        </form>

      </div>
      </div>
    </>
  );
};

export default Form;
