
import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const UserStarRating = ({ count, rating, color, onRating }) => {
    const [hoverRating, setHoverRating] = useState(0)

    //! function: 1
    const getColor = index => {
        if (hoverRating >= index) {
            return color.filled;
        } else if (!hoverRating && rating >= index) {
            return color.filled;
        } else {
            return color.unfilled;
        }
    }

const starRating = useMemo(() => {
     ('-------------------------------'); // Add this line for debugging
    return Array(count)
        .fill(0)
        .map((item, i) => i + 1) // Generate an array of numbers from 1 to count
        .map((idx) => {
             ('Current idx:', idx); // Add this line for debugging
            
            return (
                <FontAwesomeIcon
                    key={idx}
                    className='cursor-pointer'
                    icon={faStar} // Use the star icon from FontAwesome
                    onClick={() => {onRating(idx);}} // Handle click event to set the rating
                    style={{ color: getColor(idx) }} // Set star color based on getColor function
                    onMouseEnter={() => setHoverRating(idx)} // Handle mouse enter event to set hoverRating
                    onMouseLeave={() => setHoverRating(0)} // Handle mouse leave event to reset hoverRating
                    />
                    );
                });
}, [count, rating, hoverRating]);




  return <>{starRating}</>;
};

UserStarRating.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onRating: PropTypes.func,
  color: PropTypes.shape({
    filled: PropTypes.string,
    unfilled: PropTypes.string,
  }),
};

UserStarRating.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: '#ffcc32',
    unfilled: '#a3a3a3',
  },
};

export default UserStarRating;
