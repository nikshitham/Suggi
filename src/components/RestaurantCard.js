import { CDN_URL } from "../utils/constants";
import { AiFillStar } from 'react-icons/Ai';

const RestaurantCard = (props) => {
    const { resData} = props;

    const {cloudinaryImageId, name, cuisines, avgRating, slaString, costForTwoString} = resData?.data;
    return(
        <div className="res-card">
            <img className="res-img" src={CDN_URL+cloudinaryImageId} alt="res-image"/>
            <div className="res-name">{name}</div>
            <div className="res-cuisine">{cuisines.join(", ")}</div>
            <div className="res-details">
            <div className="res-rating">
                <span><AiFillStar /></span>
                <span> {avgRating} </span></div>
            <div className="res-time">{slaString}</div>
            <div className="res-cost">{costForTwoString}</div>
            </div>
        </div>
    )
}

export default RestaurantCard;