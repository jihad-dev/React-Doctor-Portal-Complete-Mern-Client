import React from "react";

const ContactHome = () => {
  return (
   <section className="lg:mt-16 mt-14 ">
  
        <div className=" text-center  ps-5 pt-3">
          <h4 className="text-primary font-bold ">Contact Us</h4>
          <p className="text-3xl">Stay connected with us</p>
        </div>

  <div className="hero-content lg:w-1/2 mx-auto ">
        <div className="card flex-shrink-0 w-full  ">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 ">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
   </section>
  );
};

export default ContactHome;
