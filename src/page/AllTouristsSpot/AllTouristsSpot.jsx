
import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import AllCard from "../../Shared/AllCard/AllCard";
import { useState } from "react";


const AllTouristsSpot = () => {
  const loadedTourists = useLoaderData();
  const [spots, setSpots] = useState(loadedTourists)
  console.log(spots);

  const handleSortSpots = e => {
    
    const sortBy = e.target.value
    console.log('sorting', sortBy)
    const newSortedSpots = [...spots].sort((spotA, spotB) => {
      // ascending
      if (sortBy === 'cost-asc') {
        return spotA.cost - spotB.cost
      }
      // descending
      else {
        return spotB.cost - spotA.cost
      }
    })

    setSpots([...newSortedSpots])
  }

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl my-10 text-center font-bold bg-[#c0cece] text-[#195e5e] p-3 rounded-xl">
        All Tourists Spot
      </h1>


{/* sort */}
<div className="flex items-center justify-center gap-4 mb-6">
          <span>Sort by:</span>
          <select name="sort" onChange={handleSortSpots} className="border min-w-0 px-4 py-2 rounded-md bg-gray-200" defaultValue={''}>
            <option value='' disabled>Random</option>
            <option value="cost-asc">average cost (asc)</option>
            <option value="cost-desc">average cost (desc)</option>
          </select>
        </div>

{/* card */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 mb-16">
         {
                spots.map(tourist => <AllCard
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

