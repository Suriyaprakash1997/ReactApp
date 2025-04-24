import { lazy } from "react";
import { Navigate } from "react-router-dom";

import AuthGuard from "./auth/AuthGuard";
import { authRoles } from "./auth/authRoles";

import Loadable from "./components/Loadable";
import MatxLayout from "./components/MatxLayout/MatxLayout";
import sessionRoutes from "./views/sessions/session-routes";
import materialRoutes from "app/views/material-kit/MaterialRoutes";


const Customer = Loadable(lazy(() => import("./pages/master/Customer")));
const CustomerList = Loadable(lazy(() => import("./pages/master/CustomerList")));
const Project = Loadable(lazy(() => import("./pages/master/Project")));
const InvoiceList = Loadable(lazy(() => import("./pages/transaction/InvoiceList")));
const Invoice = Loadable(lazy(() => import("./pages/transaction/Invoice")));
// E-CHART PAGE
const AppEchart = Loadable(lazy(() => import("app/views/charts/echarts/AppEchart")));
// DASHBOARD PAGE
const Analytics = Loadable(lazy(() => import("app/views/dashboard/Analytics")));

const routes = [
  { path: "/", element: <Navigate to="dashboard" /> },
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...materialRoutes,
      // dashboard route
      { path: "/dashboard", element: <Analytics />, auth: authRoles.admin },
      // e-chart route
      { path: "/charts/echarts", element: <AppEchart />, auth: authRoles.editor },

      {path:'/customer/:customerid?',element:<Customer/>},
      {path:'/customerlist',element:<CustomerList/>},
      {path:'/project',element:<Project/>},
      {path:'/invoicelist',element:<InvoiceList/>},
      {path:'/invoice/:id?',element:<Invoice/>}
    ]
  },

  // session pages route
  ...sessionRoutes
];

export default routes;
