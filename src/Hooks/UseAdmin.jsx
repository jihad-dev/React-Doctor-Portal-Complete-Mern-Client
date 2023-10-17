import { useEffect, useState } from "react";

const UseAdmin = (email) => {
    const [IsAdminLoading,setIsAdminLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`https://doctor-portal-server-mu.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin,IsAdminLoading];
};

export default UseAdmin;
