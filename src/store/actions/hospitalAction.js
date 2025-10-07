import { TYPES } from "../constants/Constants";
import { createHospital as createHospitalAPI } from "@/services/apiendpoint";

export const createHospital = (hospitalData) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.CREATE_HOSPITAL_LOADING });
    
    const response = await createHospitalAPI(hospitalData);
    
    dispatch({
      type: TYPES.CREATE_HOSPITAL_SUCCESS,
      payload: response.data.data,
    });
    
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to create hospital';
    dispatch({
      type: TYPES.CREATE_HOSPITAL_FAILURE,
      payload: errorMessage,
    });
    throw error;
  }
};