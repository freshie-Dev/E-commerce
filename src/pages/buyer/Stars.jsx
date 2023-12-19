// import React from 'react';
// import StarRating from './StarsRating';

// export default function Stars({ rating }) {
//   // Calculate the average rating
//   const averageRating = rating.reduce((total, currentValue) => total + currentValue.stars, 0) / rating.length;

//   return (
//     <div className='flex justify-between'>
//       <StarRating rating = {averageRating}/>
//       <p className='light font-light'>({averageRating})</p>
//     </div>
//   );
// }

import React from 'react';
import StarRating from './StarsRating';

export default function Stars({ rating }) {
  // Calculate the average rating
  const averageRating = (rating.reduce((total, currentValue) => total + currentValue.stars, 0) / rating.length).toFixed(1);

  return (
    <div className='flex justify-between'>
      <StarRating rating={averageRating} />
      <p className='light font-light'>({averageRating})</p>
    </div>
  );
}
