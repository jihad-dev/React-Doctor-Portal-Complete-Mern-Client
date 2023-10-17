import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";
import UseToken from "../../Hooks/UseToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { CreateUser, UpdateUser, GoogleSignIn } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail,setCreatedUserEmail] = useState('');
  const [token] = UseToken(createdUserEmail);
  const navigate = useNavigate();
  if(token){
    navigate('/');
  }

  const HandleSignUp = (data) => {
    setSignUpError("");
    CreateUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        
    
        toast("User created successfully");
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        UpdateUser(userInfo)
        
          .then(() => {
            saveUser(data.name,data.email);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error.message);
        setSignUpError(error.message);
      });
  };
  const HandleGoogleSignIn = () => {
    GoogleSignIn()
    .then((result) => {
      const user = result.user;
      toast("User created successfully",{
        type:'success',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

      });
    })
    .catch(error => {
      console.error(error.message);
    })
  };

const saveUser = (name,email) =>{
  const user = {name,email};
  fetch('https://doctor-portal-server-mu.vercel.app/users',{
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(data =>{
    setCreatedUserEmail(email)
  //  getUserToken(email)
  
  })
}

// const getUserToken = email =>{
//   fetch(`https://doctor-portal-server-mu.vercel.app/jwt?email=${email}`)
//   .then(res => res.json())
//   .then(data => {
//     if(data.accessToken){
//       localStorage.setItem('accessToken',data.accessToken);
//       navigate('/');
//     }
//   })
// }


  return (
    <div className="flex justify-center items-center mt-8 ">
      <div className="w-[500px]  bg-base-300 rounded-lg p-9">
        <h2 className="text-center font-bold text-3xl">SignUp</h2>
        <form onSubmit={handleSubmit(HandleSignUp)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              className="input input-bordered"
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
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
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                  message: "password must be strong",
                },
              })}
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}
          <div className="form-control mb-3 my-5">
            <button className="btn btn-primary">SignUp</button>
            {signUpError && <p className="text-red-600">{signUpError}</p>}
            <p className="my-4">
              Already have an account{" "}
              <Link className="text-primary" to="/login">
                Please Login
              </Link>
            </p>
          </div>
        </form>
        <div className="divider">OR</div>
        <button onClick={HandleGoogleSignIn} className="btn btn-outline w-full">
          {" "}
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
