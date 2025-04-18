
// import React from 'react';
// import "./Restaurants.css"

// const Restaurants = ({ selectedVenue, restaurants, setSelectedRestaurant }) => {
//   const filteredRestaurants = restaurants.filter(
//     restaurant => selectedVenue && restaurant.venueId === selectedVenue.id
//   );

//   return (
//     <div className="restaurants-container">
      
//       {/* <h3 className="text-xl font-semibold mb-4 text-center">Select a Restaurant</h3> */}
//       <h1 className="text-4xl font-bold text-center mb-6">Select a Restaurant</h1>
//       {/* <h2 className="text-2xl font-bold mb-2 text-center">{selectedVenue.name}</h2> */}
//       <p className="text-gray-600 mb-6 text-center">{selectedVenue.address}</p>


//       {/* Flexbox container for restaurant cards */}
//       <div className="restaurants-list">
//         {filteredRestaurants.map(restaurant => (
//           <div
//             key={restaurant.id}
//             className="restaurant-card"
//             onClick={() => setSelectedRestaurant(restaurant)}
//           >
//             <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
//             <div className="restaurant-info">
//               <h3>{restaurant.name}</h3>
//               <p>{restaurant.description}</p>
//               <span className="cuisine-tag">{restaurant.cuisine}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Restaurants;
import React from 'react';
import "./Restaurants.css";

const Restaurants = ({ selectedVenue, restaurants, setSelectedRestaurant }) => {
  return (
    <div className="restaurants-container">
      <h1 className="text-4xl font-bold text-center mb-6">Select a Restaurant</h1>
      <p className="text-gray-600 mb-6 text-center">{selectedVenue?.address}</p>

      {/* Flexbox container for restaurant cards */}
      <div className="restaurants-list">
        {restaurants.map(restaurant => (  // Removed filtering to show all restaurants
          <div
            key={restaurant.id}
            className="restaurant-card"
            onClick={() => setSelectedRestaurant(restaurant)}
          >
            <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
            <div className="restaurant-info">
              <h3>{restaurant.name}</h3>
              <p>{restaurant.description}</p>
              <span className="cuisine-tag">{restaurant.cuisine}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
