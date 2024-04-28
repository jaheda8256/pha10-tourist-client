
import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Slider from "../../Shared/Slider/Slider";
import Card from "../../Shared/Card/Card";


const Home = () => {

    const tourists = useLoaderData();



    return (
        <div>
            <Navbar />
            <Slider />

            <h2>card: {tourists.length}</h2>
 
 
            {
                tourists.map(tourist => <Card
                key={tourist._id}
                tourist={tourist}
                >

                </Card>)
            } 
           
        </div>
    );
};

export default Home;
