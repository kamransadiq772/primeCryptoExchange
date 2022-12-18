/*!

=========================================================
* Now UI Dashboard React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Newdashboard from "views/Newdashboard";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";
import Market from "views/Market";
import Transaction from "views/Transaction";

var dashRoutes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "design_app",
  //   component: Dashboard,
  //   layout: "/admin"
  // },
  {
    path: "/newdashboard",
    name: "New Dashboard",
    icon: "design_app",
    component: Newdashboard,
    layout: "/admin"
  },
  {
    path: "/watchlist",
    name: "WatchList",
    icon: "design_image",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    icon: "location_map-big",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/market",
    name: "Market",
    icon: "location_map-big",
    component: Market,
    layout: "/admin"
  },
  {
    path: "/deposit",
    name: "Deposit",
    icon: "ui-1_bell-53",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/withdrawel",
    name: "Withdrawel",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/tradehistory",
    name: "Trade History",
    icon: "design-2_ruler-pencil",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/transactionhistory",
    name: "Transaction History",
    icon: "design-2_ruler-pencil",
    component: Transaction,
    layout: "/admin"
  },
  {
    path: "/discover",
    name: "Discover",
    icon: "design-2_ruler-pencil",
    component: Transaction,
    layout: "/admin"
  },
  // {
  //   // pro: true,
  //   path: "/transactionhistory",
  //   name: "",
  //   icon: "objects_spaceship",
  //   component: Upgrade,
  //   layout: "/admin"
  // }
];
export default dashRoutes;
