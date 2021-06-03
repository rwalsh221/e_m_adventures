const database =
  'https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/';

const getBookingData = async (currentUser) => {
  //GET CURENT USERS BOOKINGS
  const userBookings = await fetch(
    `${database}/users/${currentUser.uid}/booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
  );

  const userBookingsJson = await userBookings.json();
  // GET FULLDAYS
  const fullDays = await fetch(
    `${database}/fulldays.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
  );

  let fullDaysJson = await fullDays.json();

  // GET ALL BOOKINGS
  const allBookings = await fetch(
    `${database}/booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
  );

  const allBookingsJson = await allBookings.json();

  return { userBookingsJson, fullDaysJson, allBookingsJson };
};

export const cancelBooking = async (
  modifyBookingState,

  currentUser,
  history
) => {
  console.log('BOOKING CANCELLED');
  //TODO: BREAK EACH DELETE STEP INTO SEPERATE FUCTION
  const patchConfig = {
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
    const userBookingsKeys = Object.keys(userBookingsJson);

    // TODO: SEE STACKOVERFLOW BOOKMARK
    userBookingsKeys.filter((bookingKey) => {
      if (
        userBookingsJson[bookingKey].bookingRef ===
        modifyBookingState.bookingRef
      ) {
        delete userBookingsJson[bookingKey];
      }
    });

    // DELETE BOOKING FROM FULLDAYS

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
    for (let i = 0; i < bookingFullDaysArr.length; i++) {
      let index = fullDaysJson.findIndex((val) => {
        return val === bookingFullDaysArr[i];
      });

      if (index !== -1) fullDaysJson.splice(index, 1);
    }

    // DELETE BOOKING FROM ALL BOOKINGS

    delete allBookingsJson[modifyBookingState.bookingRef];

    // SEND UPDATED BOOKING OBJECT TO DATABASE.
    const updateUserBookingsDatabase = await fetch(
      `${database}/users/${currentUser.uid}/booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
      { ...patchConfig, body: JSON.stringify({ ...userBookingsJson }) }
    );

    if (!updateUserBookingsDatabase.ok)
      throw Error(updateUserBookingsDatabase.message);

    const updateFullDaysDatabase = await fetch(
      `${database}fulldays.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
      { ...patchConfig, body: JSON.stringify({ ...fullDaysJson }) }
    );

    if (!updateFullDaysDatabase.ok) throw Error(updateFullDaysDatabase.message);

    const updateBookingDatabase = await fetch(
      `${database}booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
      {
        ...patchConfig,
        body: JSON.stringify({
          ...allBookingsJson,
        }),
      }
    );

    if (!updateBookingDatabase.ok) throw Error(updateBookingDatabase.message);

    history.push('/dashBoard');
  } catch (error) {
    console.error(error);
  }
};
