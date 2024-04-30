import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";


const Details = () => {
  const cards = useLoaderData();
  console.log(cards);

  return (
    <div>
      <Navbar></Navbar>
      <div className="card lg:card-side bg-base-100 shadow-xl grid lg:grid-cols-2 rounded-xl my-16">
        <div className="rounded-xl">
        <figure>
          <img
            src={cards.photo}
            alt="Album"
            className="rounded-xl"
          />
        </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title font-pop text-3xl">{cards.name}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
           <Link to='/'>
           <button className="btn bg-[#c0cece] font-extrabold text-[#195e5e]">Back To Home</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;