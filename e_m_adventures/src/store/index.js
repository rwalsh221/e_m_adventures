// import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import HeaderSearchReducer from '../components/Header/HeaderSearch/HeaderSearchSlice';

export default combineReducers({
  headerSearch: HeaderSearchReducer,
});
