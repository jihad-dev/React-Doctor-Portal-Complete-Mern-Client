import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";
import UseToken from "../../Hooks/UseToken";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {SignIn,GoogleSignIn} = useContext(AuthContext);
  const [LoginError,setLoginError] = useState('');
  const [loginUserEmail,setLoginUserEmail] = useState('');
  const [token] = UseToken(loginUserEmail)
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  if(token){
    navigate(from,{replace:true})
  }
  const HandleLogin = (data) => {
    setLoginError('')
    SignIn(data.email, data.password)
    .then((result) => {

      const user = result.user;
      setLoginUserEmail(data.email)
     
      console.log(user);
      // ...
    })
    .catch((error) => {
  console.error(error.message);
  setLoginError(error.message)
    });
  };

  const handleGoogle = () =>{
    GoogleSignIn()
    .then(result =>{
      const user = result.user;
      toast("User Login successfully",{
        type:'success',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
      
    })
    .catch(error =>{
      console.error(error);
    })
  }
  return (
    <div className="flex justify-center items-center mt-8 ">
      <div className="w-[500px]  bg-base-300 rounded-lg p-9">
        <h2 className="text-center font-bold text-3xl">Login</h2>
        <form onSubmit={handleSubmit(HandleLogin)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "email must be provided",
              })}
              placeholder="Email Address"
              className="input input-bordered"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: " password must be at least 6 characters",
                },
                pattern:{value:/(?=.*[A-Z])(?=.*[!@#$&*])/,message:"password must be strong"}
              })}
              placeholder="Enter password "
              className="input input-bordered"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mb-3 my-3">
            <button className="btn btn-primary">Login</button>
            {LoginError && <p className="text-red-600">{LoginError}</p>}
            <p className="my-4">
              Already have an account{" "}
              <Link className="text-primary" to="/signUp">
                Create new account
              </Link>
            </p>
           

            
          </div>
        </form>
        <div className="divider">OR</div>
        <button onClick={handleGoogle} className="btn btn-outline w-full text-xl"><FaGoogle></FaGoogle> CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
