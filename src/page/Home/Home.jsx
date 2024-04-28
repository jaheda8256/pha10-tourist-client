
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
     <div className="my-16">
     <h2 className="text-4xl font-bold text-center"> Tourists Spots </h2>
        <p className="text-center">Nice, capital of the Alpes-Maritimes department on the French Riviera, sits on the pebbly <br /> shores of the Baie des Anges. Founded by the Greeks and later a retreat for 19th-century European elite, the city has also long attracted artists</p>
     </div>
         <div className="grid md:grid-cols-2 gap-4 mb-16">
         {
                tourists.map(tourist => <Card
                key={tourist._id}
                tourist={tourist}
                >

                </Card>)
            } 
         </div>
           
        </div>
    );
};

export default Home;
