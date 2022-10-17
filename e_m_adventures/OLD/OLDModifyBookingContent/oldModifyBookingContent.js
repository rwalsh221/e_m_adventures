// import React, { useState, useRef, useEffect } from 'react';
// import { useSelector, useDispatch, connect } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { nanoid } from 'nanoid';
// import getBookingData from '../../src/helpers/booking/getBookingData';
// import { useAuth } from '../../src/contexts/AuthContext';

// // import HeaderSearch from '../NewSearch/HeaderSearch';
// import AccommodationIformationModal from '../../src/components/Modal/AccommodationInformationModal/AccommodationInformationModal';
// import ErrorComponent from '../../src/components/miniComponents/ErrorComponent/ErrorComponent';
// import errorTimeout from '../../src/helpers/error/errorTimeout';
// import Backdrop from '../../src/components/miniComponents/Backdrop/Backdrop';

// import { validateDate } from '../../src/helpers/validation';
// import {
//   dateToMilliseconds,
//   getFullDays,
//   formatDate,
// } from '../../src/helpers/utilities';
// import cancelBooking from '../../src/helpers/booking/cancelBooking';

// import bookingIsAvaliable from '../../src/helpers/booking/bookingIsAvaliable';
// import holdCurrentBooking from '../../src/helpers/booking/holdCurrentBooking';

// import * as actionTypes from '../Header/HeaderSearch/HeaderSearchSlice';

// import classes from './ModifyBookingContent.module.css';
// import ChangeBooking from '../../src/components/ModifyBookingContent/ChangeBooking/ChangeBooking';

// const mapDispatch = { ...actionTypes };

// const ModifyBookingContent = () => {
//   const [showBackdrop, setShowBackdrop] = useState(false);
//   const [backdropContent, setBackdropContent] = useState('');
//   const [error, setError] = useState('');
//   const [changeBooking, setChangeBooking] = useState('true');

//   const backdropRef = useRef(null);
//   const newCheckInRef = useRef();
//   const newCheckOutRef = useRef();

//   const dispatch = useDispatch();
//   const history = useHistory();

//   const reduxState = useSelector((state) => state.modifyBooking);

//   // const database =
//   //   'https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/';

//   const { currentUser } = useAuth();

//   // USEEFFECT FOR SHOWBACKDROP
//   useEffect(() => {
//     const pageClickEvent = (e) => {
//       // If the active element exists and is clicked outside of
//       if (
//         backdropRef.current !== null &&
//         !backdropRef.current.contains(e.target)
//       ) {
//         setError('');
//         setShowBackdrop(false);
//       }
//     };
//     // If the item is active (ie open) then listen for clicks
//     if (showBackdrop) {
//       window.addEventListener('click', pageClickEvent);
//     }

//     return () => {
//       window.removeEventListener('click', pageClickEvent);
//     };
//   }, [showBackdrop]);

//   const cancelBookingHandler = async () => {
//     try {
//       await cancelBooking(reduxState, currentUser, history);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const submitHandler = async () => {
//     const checkIn = dateToMilliseconds(newCheckInRef.current.value);
//     const checkOut = dateToMilliseconds(newCheckOutRef.current.value);

//     const fullDays = getFullDays(checkIn, checkOut);

//     const currentBooking = {
//       checkIn,
//       checkOut,
//       fullDays,
//     };

//     try {
//       const { allBookingsJson } = await getBookingData(currentUser);

//       delete allBookingsJson[reduxState.bookingRef];

//       if (
//         bookingIsAvaliable(allBookingsJson, currentBooking, setError) === true
//       ) {
//         const ref = `ref${nanoid()}`;
//         if (
//           await holdCurrentBooking(
//             dateToMilliseconds(newCheckInRef.current.value),
//             dateToMilliseconds(newCheckOutRef.current.value),
//             setError,
//             ref
//           )
//         ) {
//           dispatch(
//             actionTypes.booking({
//               checkIn: dateToMilliseconds(newCheckInRef.current.value),
//               checkOut: dateToMilliseconds(newCheckOutRef.current.value),
//               holdRef: ref,
//             })
//           );

//           history.push({
//             pathname: 'summary',
//             state: { holdStatus: false, modify: true },
//           });
//         } else {
//           history.push({
//             pathname: 'summary',
//             state: { holdStatus: true },
//           });
//         }
//       } else {
//         errorTimeout(setError, 'Unfortunatley Those Dates Are Unavaliable');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // VALIDATE CHANGE BOOKING FORM
//   const validateChangeBookingForm = async () => {
//     let formIsValid = false;

//     formIsValid = validateDate(
//       newCheckInRef.current.value,
//       newCheckOutRef.current.value
//     );

//     if (formIsValid) {
//       submitHandler();
//     }
//   };

//   const cancelBookingBackdropContent = () => {
//     setBackdropContent(
//       <div>
//         {error && <ErrorComponent messageProps={error} />}
//         <h2>Are You Sure You Want To Cancel Your Booking?</h2>
//         <div className={classes.backdropBtnContainer}>
//           <button
//             type="button"
//             className={classes.submitBtn}
//             onClick={cancelBookingHandler}
//           >
//             YES
//           </button>
//           <button
//             type="button"
//             className={classes.submitBtn}
//             onClick={() => setShowBackdrop(false)}
//           >
//             NO
//           </button>
//         </div>
//       </div>
//     );
//     setShowBackdrop(true);
//   };

//   const changeBookingBackdropContent = () => {
//     setBackdropContent(
//       <div>
//         <h2>Change Your Booking</h2>
//         <form className={classes.searchForm}>
//           <div className={classes.start}>
//             <h6>Carnforth Forest Lodge</h6>
//           </div>
//           <div className={classes.date}>
//             <label htmlFor="checkIn" className={classes.dateCheckin}>
//               Check-in
//             </label>
//             <input type="date" id="checkIn" ref={newCheckInRef} />
//           </div>
//           <div className={classes.date}>
//             <label htmlFor="checkOut" className={classes.dateCheckout}>
//               Check-out
//             </label>
//             <input type="date" id="checkOut" ref={newCheckOutRef} />
//           </div>
//         </form>
//         <div className={classes.backdropBtnContainer}>
//           <button
//             type="button"
//             className={classes.submitBtn}
//             onClick={validateChangeBookingForm}
//           >
//             Submit
//           </button>
//           <button
//             type="button"
//             className={classes.submitBtn}
//             onClick={() => setShowBackdrop(false)}
//           >
//             Cancel
//           </button>
//         </div>
//         {/* <HeaderSearch /> */}
//       </div>
//     );
//     setShowBackdrop(true);
//   };

//   const [showModal, setShowModal] = useState({
//     showModal: true,
//     content: '',
//     image: {},
//     share: false,
//   });

//   const setShowModalHandler = (content, imageName, share) => {
//     setShowModal({
//       showModal: true,
//       content,
//       // image: { imageName, accomId: accomIdProps },
//       share,
//     });
//   };

//   return (
//     <main className={classes.main}>
//       {error && <ErrorComponent messageProps={error} />}
//       <Backdrop showProps={showBackdrop} ref={backdropRef}>
//         {backdropContent}
//       </Backdrop>
//       <h1 className={classes.mainHeading}>Change Your Booking</h1>
//       <h2 className={classes.secHeading}>
//         Your Going to Carnforth Forest Lodge
//       </h2>
//       <ul className={classes.bookingInfo}>
//         <li>
//           Booking Reference:&nbsp;<span>{reduxState.bookingRef}</span>
//         </li>
//         <li>
//           Check In:&nbsp;<span>{formatDate(reduxState.checkIn)}</span>
//         </li>
//         <li>
//           Check Out:&nbsp;<span>{formatDate(reduxState.checkOut)}</span>
//         </li>
//       </ul>
//       <button
//         type="button"
//         className={classes.submitBtn}
//         onClick={cancelBookingBackdropContent}
//       >
//         Cancel Your Booking
//       </button>
//       <button
//         type="button"
//         onClick={changeBookingBackdropContent}
//         className={classes.submitBtn}
//       >
//         Change Your Booking
//       </button>
//       <AccommodationIformationModal
//         showModalProps={showModal}
//         setShowModalParentProps={setShowModal}
//       />
//     </main>
//   );
// };

// export default connect(null, mapDispatch)(ModifyBookingContent);
