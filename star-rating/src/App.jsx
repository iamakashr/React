import { useState } from "react";
import { FaStar } from "react-icons/fa";

const App = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseOut() {
    setHover(0); // Resets hover state back to 0 when mouse leaves
  }

  return (
    <div
      className="star-rating"
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      {[...Array(noOfStars)].map((_, index) => {
        const currentStarValue = index + 1;

        return (
          <FaStar
            key={currentStarValue}
            // If the star is less than or equal to the hover or chosen rating, make it yellow. Otherwise, grey.
            className={
              currentStarValue <= (hover || rating) ? "active" : "inactive"
            }
            onClick={() => handleClick(currentStarValue)}
            onMouseMove={() => handleMouseEnter(currentStarValue)}
            onMouseLeave={() => handleMouseOut()}
            size={40}
            style={{ cursor: "pointer", transition: "color 0.2s ease" }}
          />
        );
      })}
    </div>
  );
};

export default App;
