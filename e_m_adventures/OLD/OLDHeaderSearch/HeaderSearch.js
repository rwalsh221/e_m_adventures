// import React, { useRef, useState } from 'react';
// import { connect, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { nanoid } from 'nanoid';
// import { validateDate } from '../../../helpers/validation';
// import { dateToMilliseconds } from '../../../helpers/utilities';
// import ErrorComponent from '../../miniComponents/ErrorComponent/ErrorComponent';

// import holdCurrentBooking from '../../../helpers/booking/holdCurrentBooking';
// import errorTimeout from '../../../helpers/error/errorTimeout';

// import * as actionTypes from './HeaderSearchSlice';

// import classes from './HeaderSearch.module.css';

// TODO: REFACTOR CANCEL AND MODIFY WITH BOOKING HELPERS

// const mapDispatch = { ...actionTypes };

// const HeaderSearch = () => {
//   const dispatch = useDispatch();

//   const [error, setError] = useState();

//   const checkIn = useRef();
//   const checkOut = useRef();
//   const history = useHistory();

//   let formIsValid = false;

//   const submitSearchHandler = async () => {
//     formIsValid = validateDate(checkIn.current.value, checkOut.current.value);
//     if (formIsValid) {
//       const ref = `ref${nanoid()}`;
//       if (
//         await holdCurrentBooking(
//           dateToMilliseconds(checkIn.current.value),
//           dateToMilliseconds(checkOut.current.value),
//           setError,
//           ref
//         )
//       ) {
//         dispatch(
//           actionTypes.booking({
//             checkIn: dateToMilliseconds(checkIn.current.value),
//             checkOut: dateToMilliseconds(checkOut.current.value),
//             holdRef: ref,
//           })
//         );
//         history.push('/summary', {
//           pathname: 'summary',
//           state: { holdStatus: false },
//         });
//       } else {
//         history.push({
//           pathname: 'summary',
//           state: { holdStatus: true },
//         });
//       }
//     } else {
//       errorTimeout(setError, 'Please check your dates and try again');
//     }
//   };

//   return (
//     <div>
//       <div className={classes.searchContainer}>
//         <form className={classes.searchForm}>
//           <div className={classes.start}>
//             <h6>Start Your Adventure</h6>
//           </div>
//           <div className={classes.date}>
//             <label htmlFor="checkIn" className={classes.searchLabel}>
//               Check-in
//             </label>
//             <input type="date" id="checkIn" ref={checkIn} />
//           </div>
//           <div className={classes.date}>
//             <label htmlFor="checkOut" className={classes.searchLabel}>
//               Check-out
//             </label>
//             <input type="date" id="checkOut" ref={checkOut} />
//           </div>
//           <div className={classes.guests}>
//             <label htmlFor="guests" className={classes.searchLabel}>
//               Guests
//             </label>
//             <select id="guests">
//               <option value="one">One</option>
//               <option value="two">Two</option>
//               <option value="three">Three</option>
//               <option value="four">Four</option>
//             </select>
//           </div>

//           <button
//             type="button"
//             className={classes.btnSubmit}
//             onClick={async (e) => {
//               e.preventDefault();
//               submitSearchHandler();
//             }}
//           >
//             SUBMIT
//           </button>
//         </form>
//       </div>
//       {error && <ErrorComponent messageProps={error} />}
//     </div>
//   );
// };

// export default connect(null, mapDispatch)(HeaderSearch);
