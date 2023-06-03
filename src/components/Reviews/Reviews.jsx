import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from 'services/api';

const ReviewsMovie = () => {
  const [review, setReview] = useState([]);
  const {movieId} = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const review = await getReviewsMovie(movieId);
        setReview(review);
      } catch (evt) {
        console.log(evt);
      }
    };
    fetchReview();
  }, [movieId]);

  return (
    <>
      {review.length === 0 ? (
        <h2>We dont have any reviews for this movie.</h2>
      ) : (
        <ul>
          {review.map(({ id, author, content }) => (
            <li key={id}>
              <p>
                <span>Author:</span> {author}
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ReviewsMovie;