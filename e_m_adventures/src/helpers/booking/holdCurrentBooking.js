import { nanoid } from 'nanoid';

import { getFullDays } from '../utilities';
import { deleteTimeout } from './deleteTimeout';
import { bookingIsAvaliable } from './bookingIsAvaliable';

const holdCurrentBooking = async (checkIn, checkOut, setError) => {
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
    checkIn: checkIn,
    checkOut: checkOut,
    fullDays: fullDays,
    timeStamp: Date.now(),
  };

  const ref = `ref${nanoid()}`;

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

    // DELETE CURRENT BOOKING FROM DATABASE FOR SEARCH
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

      const patchHoldBookings = await fetch(
        `${database}holdCurrentBooking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
        {
          ...putConfig,
          body: JSON.stringify({
            ...getHoldBookingsJsonTimeout,
          }),
        }
      );
      if (!patchHoldBookings.ok) throw new Error('patch hold bookign failed');

      return true;
    } else {
      const patchHoldBookings = await fetch(
        `${database}holdCurrentBooking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
        {
          ...putConfig,
          body: JSON.stringify({
            ...getHoldBookingsJsonTimeout,
          }),
        }
      );
      if (!patchHoldBookings.ok) throw new Error('patch hold bookign failed');
      return false;
    }
  } catch (error) {
    console.error(error);
  }
};

export default holdCurrentBooking;
