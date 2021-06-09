import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantSource {
  static async listRestaurant() {
    const res = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const resJson = await res.json();
    return resJson.restaurants;
  }

  static async detailRestaurant(id) {
    const res = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    const resJson = await res.json();
    return resJson.restaurant;
  }

  static async menuResto(id) {
    const res = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    const resJson = await res.json();
    return resJson.restaurant.menus;
  }
}

export default RestaurantSource;
