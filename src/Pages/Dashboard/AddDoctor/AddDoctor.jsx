import { data } from "autoprefixer";
import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../../Shered/Loading/Loading";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const AddDoctor = () => {
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["Specialty"],
    queryFn: async () => {
      const res = await fetch("https://doctor-portal-server-mu.vercel.app/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imgHostkey = process.env.REACT_APP_IMG_HOST_KEY;
  const navigate = useNavigate();
  // console.log(imgHostkey)
  const handleAddDoctor = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostkey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor ={
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          }

          // save doctor information in the database
          fetch('https://doctor-portal-server-mu.vercel.app/doctors',{
            method: 'POST',
            headers:{
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
            ,
            body:JSON.stringify(doctor)
          })
          .then(res => res.json())
          .then(result =>{
            toast.success(`${data.name} is successfully added to the database`);
            console.log(result);
            navigate('/dashboard/managedoctors');
          })
         
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="flex justify-center items-center mt-8 ">
      <div className="w-[500px]  bg-base-300 rounded-lg p-9">
        <h2 className="text-center font-bold text-3xl mb-3">ADD A Doctor</h2>
        <form onSubmit={handleSubmit(handleAddDoctor)}>
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
              <span className="label-text">specialist</span>
            </label>
            <select
              {...register("specialty")}
              className="select input-bordered w-full"
            >
              {specialties.map((specialty) => (
                <option key={specialty._id} value={specialty.name}>
                  {specialty.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">photo</span>
            </label>
            <input
              className="input input-bordered"
              type="file"
              {...register("image", { required: "photo is required" })}
            />
            {errors.image && (
              <p className="text-red-600">{errors.image.message}</p>
            )}
          </div>
          <div className="form-control mb-3 my-5">
            <button className="btn btn-primary">Add Doctor</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
