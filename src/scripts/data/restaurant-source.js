import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantSource {
  static async listRestaurant() {
    const res = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const resJson = await res.json();
    return resJson.restaurants;
  }
}

export default RestaurantSource;
