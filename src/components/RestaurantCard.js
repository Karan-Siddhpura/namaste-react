import { CDN_URL } from "../utils/constants.js";
const RestaurantCard = (props) => {
  console.log(props);

  const { resData } = props;
  const { cloudinaryImageId, name, costForTwo, avgRating } = resData?.info;
  return (
    <>
      <div className="res-card">
        <div className="res-card-img">
          <img src={CDN_URL + cloudinaryImageId} />
        </div>
        <div className="res-card-details">
          <p>{name}</p>
          <p>Rs {costForTwo}</p>
          <p>Ratings : - {avgRating}</p>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
