// import { HealthCareType } from '../models/dashboards/HealthCare';

// export const GET_HEALTH_CARE_DATA = 'GET_HEALTH_CARE_DATA';

// export type GetHeathCareAction = {
//   type: typeof GET_HEALTH_CARE_DATA;
//   payload: HealthCareType;
// };

// export type DashboardActionTypes = GetHeathCareAction;

export const GET_PROJECTS_LIST='GET_PROJECTS_LIST'

export type GetProjectAction ={
    type:typeof GET_PROJECTS_LIST;
    payload:GetProjectAction;
};

export type ProjectActionTypes=GetProjectAction;
