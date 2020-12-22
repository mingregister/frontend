import Vue from "vue";
import VueRouter from "vue-router";
import MHome from "../views/MHome.vue";

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MHome",
    component: MHome,
    children: [
      {
        path: "/cart",
        name: "Cart",
        component: Cart
      },{
        path: "/home",
        name: "Home",
        component: Home
      },{
        path: "/category",
        name: "Category",
        component: Category
      },{
        path: "/profile",
        name: "Profile",
        component: Profile
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
