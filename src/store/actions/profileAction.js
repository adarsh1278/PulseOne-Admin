import { TYPES } from "../constants/Constants";
import { Login } from "@/services/apiendpoint";
import { showSuccess, showError, showLoading, hideLoading } from "@/utils/toasttheme";
import toast from "react-hot-toast";


export const UserLogin = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.USER_LOGIN_LOADING });
    
  
    const loadingToastId = showLoading('Signing in...');
    
    const response = await Login(credentials);
    
    // Handle the new API response format
    console.log('Login response:', response);
    const data = response.data;
    console.log('Login data:', data);
    
    if(data.isLoginSuccessful){
      localStorage.setItem('token', data.token);
      dispatch({
        type: TYPES.USER_LOGIN_SUCCESS,
        payload: {
          superAdmin: data,
          token: data.token,
        },
      });
      
      // Hide loading and show success
      hideLoading();
      showSuccess('Login successful! Welcome back.');
    }
    else{
      dispatch({
        type: TYPES.USER_LOGIN_FAILURE,
        payload:"please enter valid credentials",
      });
      
      // Hide loading and show error
      hideLoading();
      showError('Please enter valid credentials');
    }
    
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Login failed';
    dispatch({
      type: TYPES.USER_LOGIN_FAILURE,
      payload: errorMessage,
    });
    
    // Hide loading and show error
    hideLoading();
    showError(errorMessage);
    throw error;
  }
};
export const UserLogout = () => async (dispatch) => {
     localStorage.removeItem('token');
     dispatch({ type: TYPES.USER_LOGOUT_SUCCESS });
      toast.success("Logged out successfully");
}







