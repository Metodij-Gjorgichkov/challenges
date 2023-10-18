import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RestaurantInterface } from "../../interfaces/type";
import { RestaurantContext } from "../../context/ContextConstructor";
import ReviewForm from "../ReviewForm/ReviewForm";

const RestaurantDetail = () => {
  const { restaurants } = useContext(RestaurantContext);
  const { slug } = useParams();

  let foundSlug: RestaurantInterface | undefined = undefined;

  if (slug) {
    foundSlug = restaurants.find((restaurant) => restaurant.slug === slug);
  }

  const starCalculated =
    foundSlug &&
    foundSlug.reviewsList.length > 0 &&
    foundSlug.reviewsList.map((review) => review.stars).reduce((a, b) => a + b);

  if (!foundSlug) {
    return <div>error 404 </div>;
  }
  return (
    <div className="container">
      <h1 className="text-center text-uppercase">{foundSlug.slug}</h1>
      <div className="res-details">
        <img src={foundSlug.image} alt={foundSlug.slug} />
        <div className="content">
          {starCalculated && (
            <p>
              rating - {starCalculated / foundSlug.reviews}, <br />
              <small>based on {foundSlug.reviews} reviews</small>
            </p>
          )}
          <p>
            <a href={`tel:${foundSlug.phone}`}>{foundSlug.phone}</a>
          </p>
          <p>
            <a href={`mailto:${foundSlug.email}`}>{foundSlug.email}</a>
          </p>
          <p>{foundSlug.address}</p>
          {foundSlug.parkinglot && <p>We have a parking lot waiting for you</p>}
        </div>
      </div>

      {foundSlug.reviewsList.length > 0 && (
        <div className="reviews-container">
          <h1 className="text-center text-uppercase">Reviews</h1>
          {foundSlug.reviewsList.map((review) => {
            return (
              <div className="review" key={`review-${review.id}`}>
                <p>
                  <b>Author:</b> {review.author}
                </p>
                <p>
                  <b>Message:</b> {review.comment}
                </p>
                <p>
                  <b>Stars:</b> {review.stars}
                </p>
              </div>
            );
          })}
        </div>
      )}
      <ReviewForm foundSlug={foundSlug} />
    </div>
  );
};

export default RestaurantDetail;
