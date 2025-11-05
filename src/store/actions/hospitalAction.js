import { TYPES } from "../constants/Constants";
import { createHospital as createHospitalAPI , getHospitalsApi ,createAdminApi } from "@/services/apiendpoint";
import { showLoading, hideLoading, showSuccess, showError } from "@/utils/toasttheme";

export const createHospital = (hospitalData , id) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.CREATE_HOSPITAL_LOADING });
    
   
    showLoading('Creating hospital...');
    
    const response = await createHospitalAPI(hospitalData);
    
    dispatch({
      type: TYPES.CREATE_HOSPITAL_SUCCESS,
      payload: response.data.data,
    });
    
    // Hide loading and show success
    hideLoading();
    dispatch(getHospitals(id));
    showSuccess('Hospital created successfully!');

    
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to create hospital';
    dispatch({
      type: TYPES.CREATE_HOSPITAL_FAILURE,
      payload: errorMessage,
    });
    
    // Hide loading and show error
    hideLoading();
    showError(errorMessage);
    
    throw error;
  }
};

export const getHospitals = () => async (dispatch) => {
  try {
    dispatch({ type: TYPES.GET_HOSPITALS_LOADING });
    const loadingToastId = showLoading("Fetching hospitals...");

    const response = await getHospitalsApi();
    console.log("Hospitals response:", response);
    const data = response.data;
    console.log("Hospitals data:", data);

    dispatch({
      type: TYPES.GET_HOSPITALS_SUCCESS,
      payload: data.content || [],
    });

    hideLoading();
    
    return data.content;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Failed to fetch hospitals";

    dispatch({
      type: TYPES.GET_HOSPITALS_FAILURE,
      payload: errorMessage,
    });

    hideLoading();
    showError(errorMessage);
    throw error;
  }
};
export const createAdmin = (adminData) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.CREATE_ADMIN_LOADING });
    const loadingToastId = showLoading("Creating admin...");

    const response = await createAdminApi(adminData);
    const data = response.data;

    dispatch({
      type: TYPES.CREATE_ADMIN_SUCCESS,
      payload: data,
    });

    hideLoading();
    showSuccess("Admin created successfully!");
    return data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Failed to create admin";

    dispatch({
      type: TYPES.CREATE_ADMIN_FAILURE,
      payload: errorMessage,
    });

    hideLoading();
    showError(errorMessage);
    throw error;
  }
};