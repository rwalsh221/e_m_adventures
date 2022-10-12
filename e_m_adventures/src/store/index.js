// import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import HeaderSearchReducer from '../components/HeaderSearch/HeaderSearchSlice';
import DashboardContentSlice from '../components/DashboardContent/DashboardContentSlice';

export default combineReducers({
  headerSearch: HeaderSearchReducer,
  modifyBooking: DashboardContentSlice,
});
