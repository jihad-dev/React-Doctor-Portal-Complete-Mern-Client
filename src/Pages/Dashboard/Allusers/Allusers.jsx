import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

const Allusers = () => {
  const { data: users = [],refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://doctor-portal-server-mu.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });


const handleMakeAdmin = id =>{
    fetch(`https://doctor-portal-server-mu.vercel.app/users/admin/${id}`,{
        method:'PUT',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            toast.success('make admin updated successfully');
            refetch()
        }
    })
}

  return (
    <div>
      <h2>All Users</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {
            users &&
            users.map((user,i) =>  <tr key={user._id}>
                <th>{i+ 1 }</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-xs btn-primary">Make Admin</button>}</td>
                <td><button className="btn btn-xs btn-warning">Delete</button></td>
              </tr>)
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allusers;
