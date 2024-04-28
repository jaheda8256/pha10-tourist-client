import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import AllCard from "../../Shared/AllCard/AllCard";


const AllTouristsSpot = () => {

    const loadedTourists = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-3xl my-10 text-center font-bold bg-[#6fafaf] text-[#195e5e] p-3'>All Tourists Spot: {loadedTourists.length}</h1>

            <div className="text-center my-10">
            <details className="dropdown">
  
  <summary className="m-1 btn bg-[#c0cece] text-[#134d4d] font-bold">Sort By: Random</summary>
  
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-[#c0cece] text-[#134d4d] font-bold rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
            </div>

        <div className="grid md:grid-cols-2 gap-4 mb-20">
        {
                loadedTourists.map(tourist => <AllCard
                key={tourist._id}
                tourist={tourist}
                >

                </AllCard>)
            }

        </div>
        </div>
    );
};

export default AllTouristsSpot;