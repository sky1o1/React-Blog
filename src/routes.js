import React from 'react';
import { Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import AddBlog from 'src/views/blog/AddBlog'
import ImageGrid from './components/ImageGrid';
import Details from './views/product/Details';
import Tables from './views/Table/Table'

const homeroute = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      // { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      // { path: '*', element: <Navigate to="/404" /> }
    ]
  }
]

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'addblog', element: <AddBlog /> }, ,
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '/product/details', element: <Details /> },
      { path: 'table', element: <Tables /> },
      // { path: '*', element: <Navigate to="/404" /> }
    ]
  }

];

export { routes, homeroute };
