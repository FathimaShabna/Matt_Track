
import { fetchError, fetchStart, fetchSuccess } from './Common';
import { AnyAction, Dispatch } from 'redux';
// import { AppActions } from '@crema/actions';
// import jwtAxios from '@crema/services/auth/JWT';
// import { GET_PROJECTS_LIST } from '../../../actions/Projects.actions';
import jwtAxios from '@crema/services/auth/jwt-auth';
import { AppActions } from '@crema/types/actions';
import { GET_PROJECTS_LIST } from '../../../actions/Project.action';

// export const onGetHCData = () => {
//   return (dispatch: Dispatch<AppActions>) => {
//     dispatch(fetchStart());
//     jwtAxios
//       .get('/dashboard/health_care')
//       .then((data: any) => {
//         if (data.status === 200) {
//           dispatch(fetchSuccess());
//           dispatch({ type: GET_HEALTH_CARE_DATA, payload: data.data });
//         } else {
//           dispatch(fetchError('Something went wrong, Please try again!'));
//         }
//       })
//       .catch((error: any) => {
//         dispatch(fetchError(error.message));
//       });
//   };
// };

export const onGetProjectsDetails = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .get('/api/get-project')
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type:GET_PROJECTS_LIST, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong, Please try again!'));
        }
      })
      .catch((error: any) => {
        dispatch(fetchError(error.message));
      });
  };
};

// import { NextRequest, NextResponse } from "next/server";
// import prismadb from "../../../../prisma/prisma";



// export async function GET(req:NextRequest){

//     if(req.method === 'GET'){
//         try{
//             const getprojectData= await prismadb?.project?.findMany();
//             return NextResponse.json(getprojectData)
//         } catch (error) {
//                 console.error('Error fetching projects:', error);
//                 return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
//               }
  
// }
// }





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


  