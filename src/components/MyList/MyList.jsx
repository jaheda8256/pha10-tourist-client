import { useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";

const MyList = () => {

    const {user} = useAuth();
    const [tour, setTour] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:5000/tourists/${user.email}`)
      .then(res => res.json())
      .then(data => setTour(data))
      .catch(error => console.log(error.message))
    }, [])

  return (
    <div>
      <Navbar></Navbar>
      <div className="my-10">
        <div className="container p-2 mx-auto sm:p-4 text-gray-100 dark:text-gray-800">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            Invoices
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="w-24" />
              </colgroup>
              <thead className="bg-gray-700 dark:bg-gray-300">
                <tr className="text-left">
                  <th className="p-3">tourists_spot_name</th>
                  <th className="p-3">average_cost</th>
                  <th className="p-3">seasonality</th>
                  <th className="p-3">travel_time</th>
                  <th className="p-3 text-right">Update</th>
                  <th className="p-3">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50">
                  <td className="p-3">
                    <p>{tour.email}</p>
                  </td>
                  <td className="p-3">
                    <p>Microsoft Corporation</p>
                  </td>
                  <td className="p-3">
                    <p>14 Jan 2022</p>
                    <p className="text-gray-400 dark:text-gray-600">Friday</p>
                  </td>
                  <td className="p-3">
                    <p>01 Feb 2022</p>
                    <p className="text-gray-400 dark:text-gray-600">Tuesday</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
                      <span>Update</span>
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 dark:bg-red-700 text-gray-900 dark:text-gray-50">
                      <span>Delete</span>
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50">
                  <td className="p-3">
                    <p>97412378923</p>
                  </td>
                  <td className="p-3">
                    <p>Tesla Inc.</p>
                  </td>
                  <td className="p-3">
                    <p>14 Jan 2022</p>
                    <p className="text-gray-400 dark:text-gray-600">Friday</p>
                  </td>
                  <td className="p-3">
                    <p>01 Feb 2022</p>
                    <p className="text-gray-400 dark:text-gray-600">Tuesday</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
                      <span>Update</span>
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 dark:bg-red-700 text-gray-900 dark:text-gray-50">
                      <span>Delete</span>
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50">
                  <td className="p-3">
                    <p>97412378923</p>
                  </td>
                  <td className="p-3">
                    <p>Coca Cola co.</p>
                  </td>
                  <td className="p-3">
                    <p>14 Jan 2022</p>
                    <p className="text-gray-400 dark:text-gray-600">Friday</p>
                  </td>
                  <td className="p-3">
                    <p>01 Feb 2022</p>
                    <p className="text-gray-400 dark:text-gray-600">Tuesday</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
                      <span>Update</span>
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 dark:bg-red-700 text-gray-900 dark:text-gray-50">
                      <span>Delete</span>
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50">
                  <td className="p-3">
                    <p>97412378923</p>
                  </td>
                  <td className="p-3">
                    <p>Nvidia Corporation</p>
                  </td>
                  <td className="p-3">
                    <p>14 Jan 2022</p>
                    <p className="text-gray-400 dark:text-gray-600">Friday</p>
                  </td>
                  <td className="p-3">
                    <p>01 Feb 2022</p>
                    <p className="text-gray-400 dark:text-gray-600">Tuesday</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
                      <span>Update</span>
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 dark:bg-red-700 text-gray-900 dark:text-gray-50">
                      <span>Delete</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyList;
