import DetailRestaurant from "../views/pages/detailRestaurant";
import Home from "../views/pages/home";
const routes = {
    '/': Home,
    '/detail/:id': DetailRestaurant,
};

export default routes;