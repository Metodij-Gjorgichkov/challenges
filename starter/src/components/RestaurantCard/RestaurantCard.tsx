import React, { useContext } from "react";
import { RestaurantInterface } from "../../interfaces/type";
import { Link } from "react-router-dom";
import { RestaurantContext } from "../../context/ContextConstructor";

const RestaurantCard = (props: RestaurantInterface) => {
  const { handleAddFavorite, handleRemoveFavorite, favorites } =
    useContext(RestaurantContext);

  const isFavorite = favorites.find((fav) => fav.id === props.id);

  const starCalculated =
    props.reviewsList.length > 0 &&
    props.reviewsList.map((review) => review.stars).reduce((a, b) => a + b);

  return (
    <div className="res">
      <Link to={`restaurant/${props.slug}`} className="inner-res">
        <button
          className="fav-icon"
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.preventDefault();
            isFavorite ? handleRemoveFavorite(props) : handleAddFavorite(props);
          }}
        >
          {isFavorite ? (
            <i className="fas fa-heart" />
          ) : (
            <i className="far fa-heart" />
          )}
        </button>
        <picture>
          <img src={props.image} />
        </picture>
        <div className="content">
          <h3 className="business-name">{props.businessname}</h3>
          <p className="restaurant-type">{props.restauranttype}</p>
          {starCalculated && (
            <p>
              rating - {starCalculated / props.reviews}, <br />
              <small>based on {props.reviews} reviews</small>
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
