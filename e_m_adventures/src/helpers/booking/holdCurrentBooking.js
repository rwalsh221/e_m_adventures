import { getFullDays } from '../utilities';
import deleteTimeout from './deleteTimeout';
import bookingIsAvaliable from './bookingIsAvaliable';

const holdCurrentBooking = async (checkIn, checkOut, setError, ref) => {
  const database =
    'https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/';

  const patchConfig = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  const putConfig = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  const fullDays = getFullDays(checkIn, checkOut);

  const currentBooking = {
    checkIn,
    checkOut,
    fullDays,
    timeStamp: Date.now(),
  };

  // const ref = `ref${nanoid()}`;

  try {
    // ADD CURRENT BOOKING TO DATABASE
    const patchHoldBookings = await fetch(
      `${database}holdCurrentBooking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
      {
        ...patchConfig,
        body: JSON.stringify({
          [ref]: {
            ...currentBooking,
          },
        }),
      }
    );
    if (!patchHoldBookings.ok) throw new Error('patch hold bookign failed');

    const getHoldBookings = await fetch(
      `${database}holdCurrentBooking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
    );
    const getHoldBookingsJson = await getHoldBookings.json();

    if (!getHoldBookings.ok) throw new Error('get hold bookign failed');

    // DELETE CURRENT BOOKING FROM HOLDBOOKING OBJECT FOR SEARCH
    delete getHoldBookingsJson[ref];

    let getHoldBookingsJsonTimeout = deleteTimeout(getHoldBookingsJson);

    if (
      bookingIsAvaliable(getHoldBookingsJsonTimeout, currentBooking, setError)
    ) {
      // ADD CURRENT BOOKING BACK TO HOLDBOOKING DB
      getHoldBookingsJsonTimeout = {
        ...getHoldBookingsJsonTimeout,
        [ref]: currentBooking,
      };

      const putHoldBookings = await fetch(
        `${database}holdCurrentBooking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
        {
          ...putConfig,
          body: JSON.stringify({
            ...getHoldBookingsJsonTimeout,
          }),
        }
      );
      if (!putHoldBookings.ok) throw new Error('patch hold bookign failed');

      return true;
    }
    const putHoldBookings = await fetch(
      `${database}holdCurrentBooking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
      {
        ...putConfig,
        body: JSON.stringify({
          ...getHoldBookingsJsonTimeout,
        }),
      }
    );
    if (!putHoldBookings.ok) throw new Error('patch hold bookign failed');
    return false;
  } catch (error) {
    console.error(error);
  }
};

export default holdCurrentBooking;
