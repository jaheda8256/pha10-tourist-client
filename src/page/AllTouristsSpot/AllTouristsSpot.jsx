import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import AllCard from "../../Shared/AllCard/AllCard";


const AllTouristsSpot = () => {

    const loadedTourists = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <h2>All Tourists spot:{loadedTourists.length}</h2>

            {
                loadedTourists.map(tourist => <AllCard
                key={tourist._id}
                tourist={tourist}
                >

                </AllCard>)
            }

        </div>
    );
};

export default AllTouristsSpot;