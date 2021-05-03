import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Navbar from "../../Home/Navbar/Navbar";
import contactImage from "../../../images/contactImage.jpg";
import { Animated } from "react-animated-css";
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    
    <div className="headerMain text-light">
      <Navbar></Navbar>
      <Animated
    animationIn="bounceInDown"
    animationOut="zoomOutDown"
    animationInDuration={1000}
    animationOutDuration={1000}
    isVisible={true}
  >
      <div className="w-75 m-auto pb-5 pt-5 ">
        <div className="row p-2 mt-5 mb-5 text-right bg-white rounded ">
          <div className="col-md-6 p-5">
            <Animated
              animationIn="bounceInRight"
              animationOut="zoomOutDown"
              animationInDuration={2000}
              animationOutDuration={1000}
              isVisible={true}
            >
              <img className="img-fluid" src={contactImage} alt="" />
            </Animated>
          </div>
          <div className="col-md-6  bg-white p-5">
            <Animated
              animationIn="bounceInLeft"
              animationOut="zoomOutDown"
              animationInDuration={2000}
              animationOutDuration={1000}
              isVisible={true}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  id="standard-basic"
                  label="Name"
                  className="form-control "
                  {...register("name")}
                />
                <br />
                {/* include validation with required or other standard HTML validation rules */}
                <TextField
                  className="form-control "
                  id="standard-basic"
                  label="Email"
                  {...register("email", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <TextField
                  className="form-control "
                  id="standard-textarea"
                  label="Message"
                  multiline
                  rows={4}
                  name="message"
                  {...register("message", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input
                  className=" btn btn-primary  m-3 m-2"
                  type="submit"
                  value="send message"
                />
              </form>
            </Animated>
          </div>
        </div>
      </div>
      </Animated>
    </div>
    
  );
};

export default Contact;
