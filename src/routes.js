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
import AddBlog from 'src/views/blog/AddBlog';
import Brands from 'src/views/brands/';
import AddBrands from 'src/views/brands/AddBrands';
import AddProducts from 'src/views/products/crud/AddProducts';
import Products from 'src/views/products/';
import ViewProducts from 'src/views/products/viewProduct';
import Details from './views/product/Details';
import Tables from './views/Table/Table';
import DateRangeTable from './views/Table/DateRangeTable';
import PrivateRoute from './privateRoute';

const homeroute = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      // { path: '*', element: <Navigate to="/404" /> }
    ]
  }
]


const getRoutes = (isProfileCompleted, isAuthenticated) => {
  return [
    {
      path: 'app',
      element: <PrivateRoute component={<DashboardLayout />} isProfileCompleted={isProfileCompleted} isAuthenticated={isAuthenticated} />,
      children: [
        { path: 'account', element: <AccountView /> },
        { path: 'customers', element: <CustomerListView /> },
        { path: 'addblog', element: <AddBlog /> }, ,
        { path: 'dashboard', element: <DashboardView /> },
        { path: 'blogs', element: <ProductListView /> },
        { path: 'addProducts', element: <AddProducts /> },
        { path: 'listProducts', element: <Products /> },
        { path: 'viewProducts', element: <ViewProducts /> },
        { path: 'brands', element: <Brands /> },
        { path: 'addBrands', element: <AddBrands /> },
        { path: 'settings', element: <SettingsView /> },
        { path: '/product/details', element: <Details /> },
        { path: 'table', element: <Tables /> },
        { path: 'datetable', element: <DateRangeTable /> },
        // { path: '*', element: <Navigate to="/404" /> }
      ]
    }

  ];
}

export { getRoutes, homeroute };
