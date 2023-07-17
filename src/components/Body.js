import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";




const Body = () => {
     const [listOfRestaurants, setListOfRestaurants] = useState([]);
     const [searchText, setSearchText] = useState("");
     const [filteredRestuarant,setFilteredRestaurant] = useState([]);
     
     useEffect(()=>{
        fetchData();
     }, [])

     const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.936986&lng=77.630209&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
     }


    return listOfRestaurants.length === 0 ? (<Shimmer/>) : (
        <div className="body">
             <div className="search">
                <input type="text" className="search-input" placeholder="Search for restaurant" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button className="search-btn" onClick={()=> {
                    const filtered = listOfRestaurants.filter((res) =>
                    res.data.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                        setFilteredRestaurant(filtered);
                }}>Search</button>
             </div>
             <div className="filter-btn">
                <button className="top-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.data.avgRating > 4
                    );

                    setFilteredRestaurant(filteredList);
                }
                    
                     }>Top Restaurant</button>
             
             <button className="bot-btn"
             onClick={() => {
                const LowfilteredList = listOfRestaurants.filter(
                    (res) => res.data.avgRating < 4
                );

                setFilteredRestaurant(LowfilteredList);
            }
                
                 }>Low Rated</button>

              </div>
             
             <div className="res-container">
                 {
                    filteredRestuarant.map((restaurant)=> (<RestaurantCard key={restaurant.data.id} resData={restaurant}/>))
                 }
             </div>
        </div>
    );
}
 
export default Body;