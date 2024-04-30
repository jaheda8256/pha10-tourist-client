
import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Slider from "../../Shared/Slider/Slider";
import Card from "../../Shared/Card/Card";
import Country from "../../components/Country";
import { Fade } from "react-awesome-reveal";
import About from "../../components/About/About";


const Home = () => {

    const tourists = useLoaderData();
    
   

    return (
        <div>
            <Navbar />

       <Slider></Slider>

     <div className="my-16">
     <h2 className="text-4xl text-green-400 font-bold text-center mb-3"> <Fade cascade damping={0.1}>
     Tourists Spots 
              </Fade></h2>
    
        <p className="text-center">Nice, capital of the Alpes-Maritimes department on the French Riviera, sits on the pebbly <br /> shores of the Baie des Anges. Founded by the Greeks and later a retreat for 19th-century European elite, the city has also long attracted artists</p>
     </div>
         <div className="grid md:grid-cols-2 gap-4 mb-16">
         {
                tourists.slice(0,6).map(tourist => <Card
                key={tourist._id}
                tourist={tourist}
                >

                </Card>)
            } 
         </div>
         <About></About>
         <Country></Country>
           
        </div>
    );
};

export default Home;
