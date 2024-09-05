import { ProjectListProps } from "@crema/types/models/trackMate/MattTrack";
import { GetProjectsAction } from "../ActionTypes/ProjectActionTypes";
import { createReducer } from "@reduxjs/toolkit";
import { WritableDraft } from 'immer/dist/internal';

interface ProjectState {
    projectList: WritableDraft<ProjectListProps>[] | null;
  }
  
  const initialState: ProjectState = {
    projectList: [],
  };


  const projectReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(GetProjectsAction, (state, action) => {
        state.projectList = action.payload;
      })
     
  });
  
  export default projectReducer;