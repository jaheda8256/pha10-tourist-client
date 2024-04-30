import { useEffect, useState } from "react";

import Navbar from "../../Shared/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

function MyList() {
  const loadedUsers = useLoaderData();
  const { user } = useAuth() || {};
  const [spots, setSpots] = useState(loadedUsers);

  // get my spots
  useEffect(() => {
    fetch(`http://localhost:5000/tourists-email/${user.email}`)
      .then((res) => res.json())
      .then((data) => setSpots(data))
      .catch((err) => console.log(err.message));
  }, [user]);




  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //

        fetch(`http://localhost:5000/tourists/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = spots.filter((spot) => spot._id !== _id);
              setSpots(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="overflow-x-auto my-20 shadow-2xl bg-[#6fafaf] text-[#195e5e]">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>tourists_spot_name</th>
        <th>country_Name</th>
        <th>average_cost</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      spots.map((spot, index)=> <tr key={spot._id}
    
      >
      <th>{index + 1}</th>
      <td>{spot.name}</td>
      <td>{spot.country}</td>
      <td>{spot.cost}</td>
      <td>
        <Link to={`/update/${spot._id}`}>
        <button className="btn bg-purple-600 text-white border-none font-semibold">Update</button>
        </Link>
      </td>
      <td>
        <button onClick={()=> handleDelete(spot._id)} className="btn bg-red-600 border-none text-white font-semibold">Delete</button>
      </td>
    </tr>)
     }
    </tbody>
  </table>
</div>
    </div>
  );
}

export default MyList;
