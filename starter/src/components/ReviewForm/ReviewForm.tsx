import React, { useContext, useState } from "react";
import { RestaurantInterface } from "../../interfaces/type";
import { RestaurantContext } from "../../context/ContextConstructor";

interface Props {
  foundSlug: RestaurantInterface;
}

const ReviewForm = ({ foundSlug }: Props) => {
  const { handleUpdateReview } = useContext(RestaurantContext);
  const [author, setAuthor] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [stars, setStars] = useState(0);

  const handleFormSubmit = () => {
    if (author && comment && stars) {
      fetch(`https://igralishte-api.onrender.com/restaurants/${foundSlug.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...foundSlug,
          reviews: foundSlug.reviews + 1,
          reviewsList: [
            ...foundSlug.reviewsList,
            {
              id: foundSlug.reviews,
              author,
              comment,
              stars,
            },
          ],
        }),
      })
        .then((res) => res.json())
        .then(() => {
          handleUpdateReview();
        })
        .catch((error) => {
          alert(error);
        })
        .finally(() => {
          setAuthor("");
          setComment("");
          setStars(0);
        });
    }
  };

  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleFormSubmit();
      }}
    >
      <h1 className="review-form text-center text-uppercase">Review Form</h1>
      <label htmlFor="author">Name</label>
      <input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setAuthor(event.target.value)
        }
        type="text"
        id="author"
        value={author}
      />

      <label htmlFor="comment">Comment</label>
      <input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setComment(event.target.value)
        }
        type="text"
        id="comment"
        value={comment}
      />

      <label htmlFor="start">Stars</label>
      <input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setStars(+event.target.value)
        }
        type="range"
        id="stars"
        step="1"
        max="5"
        min="0"
        value={stars}
      />
      <button type="submit">Leave a review</button>
    </form>
  );
};

export default ReviewForm;
