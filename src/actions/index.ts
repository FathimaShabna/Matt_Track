
// import { CommonActionTypes } from './Common.action';
import { SettingsActionTypes } from './Settings.action';
import { DashboardActionTypes } from './Dashboard.action';
// import { EcommerceActionTypes } from './Ecommerce.action';
import { AuthActions } from './Auth.actions';
// import { ChatActions } from './Chat.actions';
// import { ContactActions } from './Contact.actions';
// import { MailActions } from './Mail.action';
// import { TaskActions } from './Todo.action';
// import { WallActions } from './Wall.actions';
// import { ScrumboardActions } from './Scrumboard.actions';
import { UserListActions } from './UserList.actions';
// import { InvoiceActionTypes } from './Invoice.action';
// import { BlogActionTypes } from './Blogs.action';
import {
  PatientDashboardActionTypes,
  updatePatientBgDataActionTypes,
  updateWeightSleepActionTypes,
  createMedicationActionTypes,
  updateMedicationActionTypes,
  deleteMedicationActionTypes,
  createAlergicActionTypes,
  updateAlergicActionTypes,
  deleteAlergicActionTypes,
  createPhysicalTargetRecordTypes,
  updatePhyicalTargetRecordsAction,
  createDailyPhysicalActivityDataAction,
  updateDailyPhysicalActivityDataAction,
  createFoodTargetRecordsAction,
  updateFoodTargetRecordsAction,
  CreateDoctorData,
  createSelectedFoodDataAction,
  getUserSelectedFoodDataAction,
  // createDailySelectedFoodDataAction,
  updateDailySelectedFoodDataActionTypes,
  createDailySelectedFoodDataActionTypes,
  getDailySelectedFoodDataActionTypes,
  updateConsumedFoodDataActionTypes,
  getConsumedFoodDataAction,
  createConsultationData,
  getDoctorDetails,
  getConsultationDetails,
  updateConsultationData,
  CreateSocialData,
  getFoodTargetRecordsAction,
  getPhyicalTargetRecordsAction,
  GetSocialData,
  CreateGroupRequestData,
  GetGroupRequest,
  UpdatedSocialData,
  UpdatedGroupRequestData,
  CreateGroupMember,
  GetGroupMember,
  GetBgDataAction,
  UpdateBgDataAction,
  UpdateBpDataAction,
  GetBpDataAction,
  getWeightSleepAction,
  CreateGroupInvitationData,
  GetGroupInvitation,
  UpdateGroupInvitation,
  GetAllUsers,
  getPostDataAction,
  getLikeDataAction,
  removeUserData,
  Loading,
  SetErrors,
  ClearErrors,
  getAllPostDataAction,
  getdashboardPostDataAction,
  fetchUserReminderData,
} from './PatientDashboard.action';

import {
  createFoodActionTypes,
  foodActionTypes,
  removeFoodActionTypes,
} from './FoodItem.action';

import { CommonActionTypes } from './Common.action';
import { ProjectActionTypes } from './Project.action';

export type AppActions =
  | SetErrors
  | Loading
  | ClearErrors
  | CommonActionTypes
  | SettingsActionTypes
  | DashboardActionTypes
  |ProjectActionTypes
//   |CommonActionTypes 
  // | EcommerceActionTypes
  | AuthActions
  // | ChatActions
  // | MailActions
  // | TaskActions
  // | WallActions
  // | ScrumboardActions
  // | ContactActions
  // | InvoiceActionTypes
  // | BlogActionTypes
  | UserListActions
  | GetAllUsers
  | PatientDashboardActionTypes
  | GetBgDataAction
  | updatePatientBgDataActionTypes
  | UpdateBgDataAction
  | GetBpDataAction
  | UpdateBpDataAction
  | getWeightSleepAction
  | updateWeightSleepActionTypes
  | createMedicationActionTypes
  | updateMedicationActionTypes
  | deleteMedicationActionTypes
  | createAlergicActionTypes
  | updateAlergicActionTypes
  | deleteAlergicActionTypes
  | getPhyicalTargetRecordsAction
  | createPhysicalTargetRecordTypes
  | updatePhyicalTargetRecordsAction
  | createDailyPhysicalActivityDataAction
  | updateDailyPhysicalActivityDataAction
  | getFoodTargetRecordsAction
  | createFoodTargetRecordsAction
  | updateFoodTargetRecordsAction
  | foodActionTypes
  | createFoodActionTypes
  | removeFoodActionTypes
  | createSelectedFoodDataAction
  | getUserSelectedFoodDataAction
  | createDailySelectedFoodDataActionTypes
  | updateDailySelectedFoodDataActionTypes
  | getDailySelectedFoodDataActionTypes
  | updateConsumedFoodDataActionTypes
  | createConsultationData
  | getConsultationDetails
  | updateConsultationData
  | CreateDoctorData
  | getDoctorDetails
  | CreateSocialData
  | UpdatedSocialData
  | GetSocialData
  | CreateGroupRequestData
  | GetGroupRequest
  | UpdatedGroupRequestData
  | CreateGroupMember
  | GetGroupMember
  | CreateGroupInvitationData
  | UpdateGroupInvitation
  | GetGroupInvitation
  | getConsumedFoodDataAction
  | getPostDataAction
  | getLikeDataAction
  | getAllPostDataAction
  | getdashboardPostDataAction
  | fetchUserReminderData;
