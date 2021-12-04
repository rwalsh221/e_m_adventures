import { database } from '../AsyncHelpers/AsyncConfig';
import getBookingData from './getBookingData';

// const getBookingData = async (currentUser) => {
//   // GET CURENT USERS BOOKINGS
//   const userBookings = await fetch(
//     `${database}/users/${currentUser.uid}/booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
//   );

//   const userBookingsJson = await userBookings.json();
//   // GET FULLDAYS
//   const fullDays = await fetch(
//     `${database}/fulldays.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
//   );

//   const fullDaysJson = await fullDays.json();

//   // GET ALL BOOKINGS
//   const allBookings = await fetch(
//     `${database}/booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
//   );

//   const allBookingsJson = await allBookings.json();

//   return { userBookingsJson, fullDaysJson, allBookingsJson };
// };

const cancelBookingUserDB = async (
  userBookingsJson,
  modifyBookingState,
  currentUser,
  putConfig
) => {
  try {
    const newUserBookingsJson = userBookingsJson;
    const userBookingsKeys = Object.keys(userBookingsJson);

    const userBookingKey = userBookingsKeys.filter((bookingKey) => {
      let deleteKey;
      if (
        userBookingsJson[bookingKey].bookingRef ===
        modifyBookingState.bookingRef
      ) {
        deleteKey = bookingKey;
      }

      return deleteKey;
    });

    delete newUserBookingsJson[userBookingKey];

    // SEND UPDATED BOOKING OBJECT TO DATABASE.
    const updateUserBookingsDatabase = await fetch(
      `${database}/users/${currentUser.uid}/booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
      { ...putConfig, body: JSON.stringify({ ...userBookingsJson }) }
    );

    if (!updateUserBookingsDatabase.ok)
      throw Error(updateUserBookingsDatabase.message);
  } catch (error) {
    console.error(error);
  }
};

const cancelBookingFullDaysDB = async (
  allBookingsJson,
  fullDaysJson,
  modifyBookingState,
  putConfig
) => {
  try {
    // get checkin
    const bookingFullDaysArr = [];
    bookingFullDaysArr.push(
      allBookingsJson[modifyBookingState.bookingRef].checkIn
    );

    // get fulldays if any
    if (allBookingsJson[modifyBookingState.bookingRef].fullDays) {
      allBookingsJson[modifyBookingState.bookingRef].fullDays.forEach(
        (element) => {
          bookingFullDaysArr.push(element);
        }
      );
    }

    // delete from fulldays database
    for (let i = 0; i < bookingFullDaysArr.length; i += 1) {
      const index = fullDaysJson.findIndex(
        (val) => val === bookingFullDaysArr[i]
      );

      // if remove cancelled booking full day from allFulldays array be searching for index
      if (index !== -1) fullDaysJson.splice(index, 1);
    }

    const updateFullDaysDatabase = await fetch(
      `${database}fulldays.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
      { ...putConfig, body: JSON.stringify({ ...fullDaysJson }) }
    );

    if (!updateFullDaysDatabase.ok) throw Error(updateFullDaysDatabase.message);
  } catch (error) {
    console.error(error);
  }
};

const cancelBookingAllBookingsDB = async (
  allBookingsJson,
  modifyBookingState,
  putConfig
) => {
  try {
    delete allBookingsJson[modifyBookingState.bookingRef];

    const updateBookingDatabase = await fetch(
      `${database}booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
      {
        ...putConfig,
        body: JSON.stringify({
          ...allBookingsJson,
        }),
      }
    );

    if (!updateBookingDatabase.ok) throw Error(updateBookingDatabase.message);
  } catch (error) {
    console.error(error);
  }
};

const cancelBooking = async (modifyBookingState, currentUser, history) => {
  const putConfig = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const { userBookingsJson, fullDaysJson, allBookingsJson } =
      await getBookingData(currentUser);

    // DELETE BOOKING FROM USER BOOKING DATABASE
    await cancelBookingUserDB(
      userBookingsJson,
      modifyBookingState,
      currentUser,
      putConfig
    );

    // DELETE BOOKING FROM FULLDAYS
    await cancelBookingFullDaysDB(
      allBookingsJson,
      fullDaysJson,
      modifyBookingState,
      putConfig
    );

    // DELETE BOOKING FROM ALL BOOKINGS
    await cancelBookingAllBookingsDB(
      allBookingsJson,
      modifyBookingState,
      putConfig
    );

    history.push('/dashBoard');
  } catch (error) {
    console.error(error);
  }
};

export default cancelBooking;
