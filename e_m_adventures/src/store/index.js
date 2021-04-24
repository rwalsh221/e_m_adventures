// import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import HeaderSearchReducer from '../components/Header/HeaderSearch/HeaderSearchSlice';
import DashboardContentSlice from '../components/DashboardContent/DashboardContentSlice';

export default combineReducers({
  headerSearch: HeaderSearchReducer,
  dashboardContent: DashboardContentSlice,
});
