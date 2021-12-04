import { database, putConfig } from '../AsyncHelpers/AsyncConfig';

const deleteHoldCurrentBooking = async (currentBookingRef) => {
  try {
    const getHoldCurrentBooking = await fetch(
      `${database}/holdCurrentBooking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
    );

    const getHoldCurrentBookingJson = await getHoldCurrentBooking.json();

    delete getHoldCurrentBookingJson[currentBookingRef];

    const putHoldBookings = await fetch(
      `${database}holdCurrentBooking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
      {
        ...putConfig,
        body: JSON.stringify({
          ...getHoldCurrentBookingJson,
        }),
      }
    );
    if (!putHoldBookings.ok) throw new Error('patch hold bookign failed');
  } catch (error) {
    console.error(error);
  }
};

export default deleteHoldCurrentBooking;
