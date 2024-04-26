
import Navbar from "../../Shared/Navbar/Navbar";
import Slider from "../../Shared/Slider/Slider";

const Home = () => {

    return (
        <div>
            <Navbar />
            <Slider />
            <div className="">
                <h2 className="text-center text-purple-600 text-5xl font-bold mt-16 "> Visit <span className=" text-teal-600">Resorts</span></h2>
                <p className="text-center mt-4">Choose From a Wide Range of Properties Which Booking.com Offers. Search Now! Choose from a <br /> wide range of properties which Booking.com offers. Flight + Hotel. Hotels. Villas. Hostels. Motels. Apartments. Great Choice.</p>
            </div>
            <div className="grid gap-12 my-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
             
            </div>
        </div>
    );
};

export default Home;
