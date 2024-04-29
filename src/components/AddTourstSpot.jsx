import Navbar from "../Shared/Navbar/Navbar";
import Swal from 'sweetalert2'
import useAuth from "../hooks/useAuth";

const AddTouristSpot = () => {


  const { user } = useAuth() || {};


  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const email = user.email;
    const country = form.country.value;
    const  location = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const seasonality = form.seasonality.value;
    const  travel = form.travel.value;
    const  userName = form.userName.value;
    const  totalVisitorsPerYear = form.totalVisitorsPerYear.value;

    const addTourists= {
      name,
      country,
      location,
      description,
      cost,
      seasonality,
      travel,
      userName,
      totalVisitorsPerYear,
      email,
      photo,
    };
    console.log(addTourists);

  //   // send data to the server
    fetch('http://localhost:5000/tourists', {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(addTourists)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Coffee added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
  }
  return (
   <div>
    <Navbar></Navbar>
     <div className="bg-[#6aacac] p-24 my-16 mx-2 rounded-md">
        <h2 className="text-3xl font-pop text-center font-extrabold">Add Tourists Spot</h2>
        <form onSubmit={handleAddCoffee}>
            {/* photo url */}
        <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                required
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form name and subcategory name */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Tourists_Spot_Name</span>
              </label>
              <label className="input-group">
                <input
                required
                  type="text"
                  name="name"
                  placeholder="tourists_spot_name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Country_Name</span>
              </label>
              <select
              name="country"
               className="select text-gray-400">
                
                <option disabled selected>
                  Select Country
                </option>
                <option>Bangladesh</option>
                <option>Thailand</option>
                <option>Indonesia</option>
                <option>Malaysia</option>
                <option>Vietnam</option>
              </select>
          </div>
          </div>

          {/* form description and price row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text"> Location</span>
              </label>
              <label className="input-group">
                <input
                required
                  type="text"
                  name="location"
                  placeholder="location"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                required
                  type="text"
                  name="description"
                  placeholder="short description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form rating and customization row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Average_Cost</span>
              </label>
              <label className="input-group">
                <input
                required
                  type="text"
                  name="cost"
                  placeholder=" average_cost"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Seasonality</span>
              </label>
              <label className="input-group">
                <input
                required
                  type="text"
                  name="seasonality"
                  placeholder="seasonality"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form processing time and stock stactus */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Travel_time</span>
              </label>
              <label className="input-group">
                <input
                required
                  type="text"
                  name="travel"
                  placeholder="travel_time"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">TotalVisitorsPerYear</span>
              </label>
              <label className="input-group">
                <input
                required
                  type="text"
                  name="totalVisitorsPerYear"
                  placeholder="totalVisitorsPerYear"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
{/* form name, email */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <label className="input-group">
                <input
                required
                  type="text"
                  name="userName"
                  placeholder="User Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <label className="input-group">
                <input
                readOnly
                  type="email"
                  name="email"
                  placeholder="User Email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>


          <input type="submit" value="Add Tourists Spot" className="btn btn-block" />
        </form>
      </div>
   </div>
  );
};

export default AddTouristSpot;
