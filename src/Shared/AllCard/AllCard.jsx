

const AllCard = ({tourist}) => {


    const { name,
        country,
        location,
        description,
        cost,
        seasonality,
        travel,
        userName,
        totalVisitorsPerYear,
        email,
        photo} = tourist;
    return (
        <div>

        <div className="card card-side bg-base-100 shadow-xl">
<figure><img className="rounded-2xl w-[300px]" src={photo} alt="Movie"/></figure>
<div className="card-body">
<h2 className="card-title"> {name}</h2>
<p>average_cost: {cost}</p>
<p>totalVisitorsPerYear: {totalVisitorsPerYear}</p>
<p>travel_time: {travel}</p>
<p>seasonality: {seasonality}</p>
<div className="">
  <button className="btn bg-[#6fafaf] text-[#134d4d] font-bold">View Details</button>
</div>
</div>
</div>
    </div>
    );
};

export default AllCard;