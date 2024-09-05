// import { GET_HEALTH_CARE_DATA } from '@crema/actions/Dashboard.action';

// import {
//   CREATE_ALERGY_DATA,
//   CREATE_MEDICATION_DATA,
//   CREATE_WEIGHT_SLEEP_DATA,
//   GET_USER_DATA,
//   GET_ALL_USERS,
//   UPDATE_BG_DATA,
//   UPDATE_MEDICATION_DATA,
//   DELETE_MEDICATION_DATA,
//   DELETE_ALERGY_DATA,
//   UPDATE_ALERGY_DATA,
//   CREATE_PHYSICAL_ACTIVITY_RECORD_TARGET_DATA,
//   UPDATE_PHYSICAL_ACTIVITY_RECORD_TARGET_DATA,
//   CREATE_DAILY_ACTIVITY_RECORD_DATA,
//   UPDATE_DAILY_ACTIVITY_RECORD_DATA,
//   CREATE_FOOD_RECORD_TARGET_DATA,
//   UPDATE_FOOD_RECORD_TARGET_DATA,
//   CREATE_DOCTOR_DATA,
//   GET_DOCTOR_DATA,
//   CREATE_USER_SELECTED_FOOD_DATA,
//   GET_USER_SELECTED_FOOD_DATA,
//   ADD_USER_SELECTED_FOOD_DATA,
//   REMOVE_USER_SELECTED_FOOD_DATA,
//   CREATE_DAILY_SELECTED_FOOD_DATA,
//   UPDATE_DAILY_SELECTED_FOOD_DATA,
//   GET_DAILY_SELECTED_FOOD_DATA,
//   UPDATE_CONSUMED_FOOD_DATA,
//   GET_CONSUMED_FOOD_DATA,
//   CREATE_CONSULTATION_DATA,
//   GET_CONSULTATION_DATA,
//   UPDATE_CONSULTATION_DATA,
//   CREATE_SOCIAL_DATA,
//   GET_FOOD_RECORD_TARGET_DATA,
//   GET_PHYSICAL_ACTIVITY_RECORD_TARGET_DATA,
//   GET_SOCIAL_DATA,
//   CREATE_GROUPREQUEST_DATA,
//   GET_GROUP_REQUEST,
//   UPDATE_SOCIAL_DATA,
//   UPDATE_GROUPREQUEST_DATA,
//   CREATE_GROUP_MEMBER,
//   GET_GROUP_MEMBER,
//   CREATE_GROUPINVITATION_DATA,
//   UPDATE_GROUP_INVITATION,
//   GET_GROUP_INVITATION,
//   GET_BG_DATA,
//   GET_BP_DATA,
//   UPDATE_BP_DATA,
//   GET_WEIGHT_SLEEP_DATA,
//   GET_POST_DATA,
//   CREATE_POST_DATA,
//   GET_LIKE_DATA,
//   GET_ALL_POST_DATA,
//   GET_DASHBOARD_DATA_POST,
//   REMOVE_USER_DATA,
//   SET_ERRORS,
//   LOADING_UI,
//   CLEAR_ERRORS,
//   FETCH_USER_DATA,
//   GET_ALL_REMINDER_RECORDS,
// } from '@crema/actions/PatientDashboard.action';

// import {
//   CREATE_SELECTED_FOOD_DATA,
//   GET_FOOD_DATA,
//   REMOVE_SELECTED_FOOD_DATA,
// } from '@crema/actions/FoodItem.action';

// import { HealthCareType } from '@crema/models/dashboards/HealthCare';

import { ProjectListProps } from '@crema/types/models/trackMate/MattTrack';
// import { GET_PROJECTS_LIST } from '../../../actions/Projects.actions';
 
// import{ProjectsListActions} from '../actions/ProjectActions'
// import {
//   ConsultationType,
//   DoctorType,
//   UserType,
//   bgReadings,
//   getPatientSelectedFoodItems,
//   like,
//   patientAlergyAndSideEffect,
//   patientFoodCaloriesTargetingTable,
//   patientMedicationDetails,
//   patientPhysicalActivityDailyRecords,
//   patientPhysicalActivityRecords,
//   patientSelectedFoodItemsTable,
//   patientWeightSleep,
//   post,
//   userSelectedFoodTargetTable,
// } from '@crema/models/dashboards/User';

// import {
//   FoodItemType,
//   selectedFoodItem,
// } from '@crema/models/dashboards/FoodItems';
import { createAction } from '@reduxjs/toolkit';
import { GET_PROJECTS_LIST } from '../../../actions/Project.action';

// export const SetErrors = createAction<any>(SET_ERRORS);
// export const Loading = createAction<any>(LOADING_UI);
// export const ClearErrors = createAction<any>(CLEAR_ERRORS);

// export const GetHealthcareAction =
//   createAction<HealthCareType>(GET_HEALTH_CARE_DATA);

// export const GetUserAction = createAction<UserType>(GET_USER_DATA);
// export const GetAllUsers = createAction<UserType>(GET_ALL_USERS);
// export const GetUserBgAction = createAction<UserType>(GET_BG_DATA);

export const GetProjectsAction = createAction<ProjectListProps>(GET_PROJECTS_LIST);


