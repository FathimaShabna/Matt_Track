


import { createReducer } from '@reduxjs/toolkit';
// import { HealthCareType } from '@crema/models/dashboards/HealthCare';
// import {
//   ConsultationType,
//   DoctorType,
//   UserType,
//   like,
//   patientFoodCaloriesTargetingTable,
//   patientPhysicalActivityRecords,
//   post,
// } from '@crema/models/dashboards/User';
import { Project } from '@crema/types/models/trackMate/MattTrack';
// import {
//   getPatientSelectedFoodItems,
//   patientSelectedFoodItemsTable,
//   userSelectedFoodTargetTable,
// } from '@crema/models/dashboards/User';
import {
  CreateWeightSleepAction,
  GetHealthcareAction,
  GetUserAction,
  GetAllUsers,
  UpdateBgDataAction,
  GetUserBpAction,
  UpdateUserBpAction,
  createMedicationAction,
  createAlergyAction,
  updateMedicationAction,
  deleteMedicationAction,
  updateAlergyAction,
  deleteAlergyAction,
  createPhyicalTargetRecordsAction,
  updatePhyicalTargetRecordsAction,
  createDailyPhysicalActivityDataAction,
  updateDailyPhysicalActivityDataAction,
  createFoodTargetRecordsAction,
  updateFoodTargetRecordsAction,
  GetFoodAction,
  GetUserSelectionFoodAction,
  RemoveUserSelectionFoodAction,
  CreateDoctorData,
  getDoctorDetails,
  createSelectedFoodDataAction,
  getUserSelectedFoodDataAction,
  addUserSelectedFoodDataAction,
  removeUserSelectedFoodDataAction,
  createDailySelectedFoodDataAction,
  updateDailySelectedFoodDataAction,
  getDailySelectedFoodDataAction,
  updateConsumedFoodDataAction,
  getConsumedFoodDataAction,
  createConsultationData,
  getConsultationDetails,
  updateConsultationData,
  getFoodTargetRecordsAction,
  getPhyicalTargetRecordsAction,
  GetSocialData,
  GetGroupRequest,
  UpdatedSocialData,
  GetGroupMember,
  GetGroupInvitation,
  GetUserBgAction,
  GetWeightSleepAction,
  getPostData,
  getLikeData,
  getAllPostData,
  getDashboardPostData,
  removeUserData,
  fetchUserData,
  fetchUserReminderData,
} from './ActionTypes/Dashboard';

const initialState: {
  healthCare: HealthCareType | null;
  userData: any | null;
  allUsers: any | null;
  bgReadingsData: any | null;
  // getBpReadings: any | null;
  WeightSleepData: any | null;
  bpReadingsData: any | null;
  foodItem: any | null;
  selectedFoodItem: any | null;
  doctorData: any | null;
  doctorRecord: any | null;
  consultationRecord: any | null;
  foodCaloriesTargetingTable: patientFoodCaloriesTargetingTable[] | null;
  userFoodSelectionTable: patientSelectedFoodItemsTable[] | null;
  getUserSelectedFoodItem: any | null;
  userDailyConsumptionFoodTable: userSelectedFoodTargetTable[] | null;
  consumedFoodDataAction: patientSelectedFoodItemsTable[] | null;
  physicalActivityRecords: patientPhysicalActivityRecords[] | null;
  postData: post[] | null;
  likeData: like[] | null;
  allPostData: post[] | null;
  dashboardPostData: any | null;
  socialData: any | null;
  updatedSocialData: any | null;
  groupRequest: any | null;
  groupMember: any | null;
  groupInvitation: any | null;
  fetchUserData: any | null;
  fetchUserReminderData: any | null;
} = {
  healthCare: null,
  userData: null,
  allUsers: null,
  bgReadingsData: null,
  // getBpReadings: null,
  bpReadingsData: null,
  WeightSleepData: null,
  foodItem: null,
  selectedFoodItem: [],
  doctorData: null,
  doctorRecord: null,
  consultationRecord: null,
  foodCaloriesTargetingTable: null,
  userFoodSelectionTable: null,
  getUserSelectedFoodItem: [],
  userDailyConsumptionFoodTable: [],
  consumedFoodDataAction: [],
  physicalActivityRecords: [],
  socialData: null,
  updatedSocialData: null,
  groupRequest: null,
  groupMember: null,
  groupInvitation: null,
  postData: [],
  allPostData: [],
  likeData: [],
  dashboardPostData: [],
  fetchUserData: true,
  fetchUserReminderData: null,
};

const dashboardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(CreateDoctorData, (state, action) => {
      state.doctorData = action.payload;
    })
    .addCase(getDoctorDetails, (state, action) => {
      state.doctorRecord = action.payload;
    })
    .addCase(createConsultationData, (state, action) => {
      state.consultationRecord = action.payload;
    })
    .addCase(getLikeData, (state, action) => {
      state.likeData = action.payload;
    })
    .addCase(getDashboardPostData, (state, action) => {
      state.dashboardPostData = action.payload;
    })
    .addCase(fetchUserData, (state, action) => {
      state.fetchUserData = action.payload;
    })
    .addCase(fetchUserReminderData, (state, action) => {
      state.fetchUserReminderData = action.payload;
    })
    .addCase(removeUserData, (state) => {
      return {
        ...initialState,
      };
    });
});

export default dashboardReducer;
