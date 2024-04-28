import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";


const Details = () => {
  const cards = useLoaderData();
  console.log(cards);

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-5xl font-pop font-bold text-center mt-8">Details</h1>
      <div className="card lg:card-side bg-base-100 shadow-xl mt-6 grid lg:grid-cols-2 rounded-xl">
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
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;