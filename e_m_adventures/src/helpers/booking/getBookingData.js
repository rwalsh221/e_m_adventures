import { database } from '../asyncHelpers/asyncConfig';

const getBookingData = async (currentUser) => {
  // GET CURENT USERS BOOKINGS
  const userBookings = await fetch(
    `${database}/users/${currentUser.uid}/booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
  );

  const userBookingsJson = await userBookings.json();
  // GET FULLDAYS
  const fullDays = await fetch(
    `${database}/fulldays.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
  );

  const fullDaysJson = await fullDays.json();

  // GET ALL BOOKINGS
  const allBookings = await fetch(
    `${database}/booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
  );

  const allBookingsJson = await allBookings.json();

  return { userBookingsJson, fullDaysJson, allBookingsJson };
};

export default getBookingData;
