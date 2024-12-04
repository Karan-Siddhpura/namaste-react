import React from "react";
import { useState, useEffect } from "react";
import { RESTAURANT_URL } from "../utils/constants";
import { useParams } from "react-router";

const Restaurant = () => {
  const [menuData, setMenuData] = useState([]);
  const [item, setItemData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const url = RESTAURANT_URL + id;
    const data = await fetch(url);

    const json = await data.json();

    setItemData(json?.data?.cards[2]?.card?.card?.info);

    console.log(
      json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );

    setMenuData(
      json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };

  return (
    <>
      <h1>Name: {item.name}</h1>
      <h3>Rs: {item.costForTwoMessage}</h3>
      <h3>Ratings ; {item.avgRating}</h3>
      <h2>Recommended</h2>
      <div>
        {menuData.map((ele, idx) => {
          return <li key={idx}>Item name: {ele?.card?.info.name}</li>;
        })}
      </div>
    </>
  );
};

export default Restaurant;
