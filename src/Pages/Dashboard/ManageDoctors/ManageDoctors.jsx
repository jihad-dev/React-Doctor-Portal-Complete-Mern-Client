import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shered/Loading/Loading";
import ConfirmationModal from "../../Shered/ConfirmationModal/ConfirmationModal";
import toast from "react-hot-toast";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const closeModal = () =>{
    setDeletingDoctor(null);
  }


 

  const { data: doctors, isLoading ,refetch} = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("https://doctor-portal-server-mu.vercel.app/doctors", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });



  const handleDeleteDoctor = doctor =>{
    fetch(`https://doctor-portal-server-mu.vercel.app/doctors/${doctor._id}`,{
      method: 'DELETE',
      headers:{
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(response => response.json())
    .then(data =>{
        if(data.deletedCount > 0){
            console.log(data);
            refetch();
            toast.success(`Doctor ${doctor.name} deleted successfully`)
        }
      
    })
    }
  

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-3xl text-primary font-bold ps-5 mt-6 mb-7">
        Manage Doctors:{doctors?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
                <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors &&
              doctors.map((doctor, i) => (
                <tr key={doctor._id} className="hover">
                  <th>{i + 1}</th>
                  <td>
                    {" "}
                    <div className="avatar">
                      <div className="w-20 rounded-full">
                        <img src={doctor.image} alt="doctor-avatar" />
                      </div>
                    </div>
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.specialty}</td>
                  <td>
                    <label onClick={() => setDeletingDoctor(doctor)}  htmlFor="confirmation-modal" className="btn btn-xs btn-error">
                    Delete
                    </label>
                   
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {
        deletingDoctor &&
        <ConfirmationModal title={`Are you sure you want to be delete?`} 
        message={`if you delete ${deletingDoctor.name}. it cannot nt undone`}
        closeModal={closeModal}
        successAction={handleDeleteDoctor}
        successButtonName='Delete'
        modalData={deletingDoctor}
        
        ></ConfirmationModal>
      }
    </div>
  );
};

export default ManageDoctors;
