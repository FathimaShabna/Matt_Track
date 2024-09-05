import { GET_HEALTH_CARE_DATA } from '@crema/actions/Dashboard.action';
import {
  REATE_ALERGY_DATA,
  CREATE_DAILY_ACTIVITY_RECORD_DATA,
  CREATE_DAILY_SELECTED_FOOD_DATA,
  CREATE_FOOD_RECORD_TARGET_DATA,
  CREATE_MEDICATION_DATA,
  CREATE_PHYSICAL_ACTIVITY_RECORD_TARGET_DATA,
  CREATE_USER_SELECTED_FOOD_DATA,
  CREATE_WEIGHT_SLEEP_DATA,
  DELETE_ALERGY_DATA,
  DELETE_MEDICATION_DATA,
  GET_CONSUMED_FOOD_DATA,
  GET_DAILY_SELECTED_FOOD_DATA,
  GET_USER_DATA,
  GET_ALL_USERS,
  GET_USER_SELECTED_FOOD_DATA,
  UPDATE_ALERGY_DATA,
  UPDATE_BG_DATA,
  UPDATE_CONSUMED_FOOD_DATA,
  UPDATE_DAILY_ACTIVITY_RECORD_DATA,
  UPDATE_DAILY_SELECTED_FOOD_DATA,
  UPDATE_FOOD_RECORD_TARGET_DATA,
  UPDATE_MEDICATION_DATA,
  UPDATE_PHYSICAL_ACTIVITY_RECORD_TARGET_DATA,
  CREATE_DOCTOR_DATA,
  GET_DOCTOR_DATA,
  CREATE_CONSULTATION_DATA,
  GET_CONSULTATION_DATA,
  UPDATE_CONSULTATION_DATA,
  CREATE_SOCIAL_DATA,
  GET_FOOD_RECORD_TARGET_DATA,
  GET_PHYSICAL_ACTIVITY_RECORD_TARGET_DATA,
  GET_SOCIAL_DATA,
  CREATE_GROUPREQUEST_DATA,
  GET_GROUP_REQUEST,
  UPDATE_SOCIAL_DATA,
  UPDATE_GROUPREQUEST_DATA,
  CREATE_GROUP_MEMBER,
  GET_GROUP_MEMBER,
  CREATE_GROUPINVITATION_DATA,
  UPDATE_GROUP_INVITATION,
  GET_GROUP_INVITATION,
  GET_BG_DATA,
  UPDATE_BP_DATA,
  GET_BP_DATA,
  GET_WEIGHT_SLEEP_DATA,
  GET_POST_DATA,
  GET_LIKE_DATA,
  SET_ERRORS,
  LOADING_UI,
  CLEAR_ERRORS,
  GET_ALL_POST_DATA,
  GET_DASHBOARD_DATA_POST,
  FETCH_USER_DATA,
  GET_ALL_REMINDER_RECORDS,
} from '@crema/actions/PatientDashboard.action';

import { GET_FOOD_DATA } from '@crema/actions/FoodItem.action';

import { fetchError, fetchStart, fetchSuccess } from './Common';
import { AnyAction, Dispatch } from 'redux';
import { AppActions } from '@crema/actions';
import jwtAxios from '@crema/services/auth/JWT';

export const onGetHCData = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .get('/dashboard/health_care')
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_HEALTH_CARE_DATA, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong, Please try again!'));
        }
      })
      .catch((error: any) => {
        dispatch(fetchError(error.message));
      });
  };
};

// export const onGetPateintDetails = (user) => async (dispatch) => {
//   dispatch({ type: LOADING_UI });
//   // return async (dispatch: Dispatch<AppActions>, LOADING_UI) => {
//   dispatch(fetchStart());
//   try {
//     const response = await jwtAxios.post('/api/get-user', { data: user });

//     if (response.status === 201) {
//       dispatch(fetchSuccess());
//       dispatch({ type: GET_USER_DATA, payload: response.data });
//       dispatch({ type: CLEAR_ERRORS });
//       return response.data; // Return the data
//     } else {
//       dispatch(fetchError('Something went wrong, Please try again!'));
//       dispatch({
//         type: SET_ERRORS,
//         payload: response.data,
//       });
//       throw new Error('Error fetching patient details');
//     }
//   } catch (error) {
//     dispatch(fetchError(error.message));
//     throw error;
//   }
// };
// // };

// export const onGetPatientBgFilterRecords =
//   (getBgReadings, filterData) => async (dispatch) => {
//     dispatch({ type: LOADING_UI });

//     dispatch(fetchStart());
//     try {
//       const response = await jwtAxios.post('/api/get-bg-record-by-filter', {
//         bgReadings: getBgReadings,
//         filterData: filterData,
//       });

//       if (response.status === 200) {
//         dispatch(fetchSuccess());

//         return response.data;
//       } else {
//         dispatch(fetchError('Something went wrong, Please try again!'));

//         throw new Error('Error fetching patient details');
//       }
//     } catch (error) {
//       dispatch(fetchError(error.message));
//       throw error;
//     }
//   };

// export const onGetPatientBpFilterRecords =
//   (getBpReadings, filterData) => async (dispatch) => {
//     dispatch({ type: LOADING_UI });

//     dispatch(fetchStart());
//     try {
//       const response = await jwtAxios.post('/api/get-bp-record-by-filter', {
//         bgReadings: getBpReadings,
//         filterData: filterData,
//       });

//       if (response.status === 200) {
//         dispatch(fetchSuccess());

//         return response.data;
//       } else {
//         dispatch(fetchError('Something went wrong, Please try again!'));

//         throw new Error('Error fetching patient details');
//       }
//     } catch (error) {
//       dispatch(fetchError(error.message));
//       throw error;
//     }
//   };


  