import DetailRestaurant from "../views/pages/detailRestaurant";
import Home from "../views/pages/home";
import FavoriteRestaurant from "../views/pages/favoriteRestaurant";

const routes = {
    '/': Home,
    '/detail/:id': DetailRestaurant,
    '/favorite': FavoriteRestaurant,
};

export default routes;