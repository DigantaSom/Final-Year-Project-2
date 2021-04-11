import ExperienceActionTypes from './experience.types';

// Fetch experiences actions

export const fetchExperiencesStart = () => ({
  type: ExperienceActionTypes.FETCH_EXPERIENCES_START
});

export const fetchExperiencesSuccess = experiences => ({
  type: ExperienceActionTypes.FETCH_EXPERIENCES_SUCCESS,
  payload: experiences
});

export const fetchExperiencesFailure = errorMessage => ({
  type: ExperienceActionTypes.FETCH_EXPERIENCES_FAILURE,
  payload: errorMessage
});

// Add an experience actions

export const addExperienceStart = experienceData => ({
  type: ExperienceActionTypes.ADD_EXPERIENCE_START,
  payload: experienceData
});

export const addExperienceSuccess = experience => ({
  type: ExperienceActionTypes.ADD_EXPERIENCE_SUCCESS,
  payload: experience
});

export const addExperienceFailure = errorMessage => ({
  type: ExperienceActionTypes.ADD_EXPERIENCE_FAILURE,
  payload: errorMessage
});