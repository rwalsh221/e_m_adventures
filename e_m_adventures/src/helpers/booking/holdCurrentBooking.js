import { patchConfig, putConfig, database } from '../AsyncHelpers/AsyncConfig';
import { getFullDays } from '../utilities';
import deleteTimeout from './deleteTimeout';
import bookingIsAvaliable from './bookingIsAvaliable';

const holdCurrentBooking = async (checkIn, checkOut, setError, ref) => {
  const sendHoldBookings = async (updatedHoldBooking) =>
    await fetch(
      `${database}holdCurrentBooking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
      {
        ...putConfig,
        body: JSON.stringify({
          ...updatedHoldBooking,
        }),
      }
    );

  const fullDays = getFullDays(checkIn, checkOut);

  const currentBooking = {
    checkIn,
    checkOut,
    fullDays,
    timeStamp: Date.now(),
  };

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
      // BOOKING IS AVALIABLE ADD CURRENT BOOKING BACK TO HOLDBOOKING DB AND SEND UPDATED HOLDBOOKINGS WITH TIMEDOUT BOOKINGS REMOVED
      getHoldBookingsJsonTimeout = {
        ...getHoldBookingsJsonTimeout,
        [ref]: currentBooking,
      };

      const putHoldBookings = await sendHoldBookings(
        getHoldBookingsJsonTimeout
      );

      if (!putHoldBookings.ok) throw new Error('patch hold bookign failed');

      return true;
    }
    // BOOKING NOT AVALIABLE SEND UPDATED HOLDBOOKINGS WITH TIMEDOUT AND CURRENT BOOKINGS REMOVED
    const putHoldBookings = await sendHoldBookings(getHoldBookingsJsonTimeout);
    if (!putHoldBookings.ok) throw new Error('patch hold bookign failed');

    return false;
  } catch (error) {
    console.error(error);
  }
};

export default holdCurrentBooking;
