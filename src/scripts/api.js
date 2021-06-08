import data from "../utils/DATA.json";
import RestaurantSource from "./data/restaurant-source";

let restaurantElement = "";
const getRestaurant = RestaurantSource.restaurants;
console.log(getRestaurant);
// RestaurantSource.restaurants.forEach(({ name, description, pictureId, city, rating }) => {
//   restaurantElement += `
//   <div class="resto" id="${name}">
//     <div class="citycontainer">
//           <div class="citybg">
//             <p class="city">${city}</p>
//           </div>
//           <img src="${pictureId}" width="100%"
//             alt=${name}" />
//         </div>
//         <div class="detailResto">
//           <p>Rating: ${rating}</p>
//           <a href="#${name}">${name}</a>
//           <p>${description}</p>
//         </div>
//         </div>
//     `;
// });

// document.querySelector(".listResto").innerHTML = restaurantElement;



