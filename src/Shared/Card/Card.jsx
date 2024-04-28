
import PropTypes from 'prop-types'; 

const Card = ({tourist}) => {
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
<figure><img src={photo} alt="Movie"/></figure>
<div className="card-body">
<h2 className="card-title">New movie is released!</h2>
<p>Click the button to watch on Jetflix app.</p>
<div className="card-actions justify-end">
  <button className="btn btn-primary">Watch</button>
</div>
</div>
</div>
    </div>
    );
};

Card.propTypes = {
  name: PropTypes.node
};
export default Card;