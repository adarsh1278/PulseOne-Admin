import { TYPES } from "../constants/Constants";

const initialState = {
  loading: false,
  hospitalList: [],
  success: false,
  error: null,
};

const hospitalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_HOSPITALS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case TYPES.GET_HOSPITALS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case TYPES.GET_HOSPITALS_SUCCESS:
      console.log("Reducer action payload:", action.payload);
      return {
        ...state,
        loading: false,
        hospitalList: action.payload,
        error: null,
        success: true,
      };

    case TYPES.CREATE_HOSPITAL_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case TYPES.CREATE_HOSPITAL_SUCCESS:
      return {
        ...state,
        loading: false,
       
        error: null,
        success: true,
      };

    case TYPES.CREATE_HOSPITAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
     case TYPES.CREATE_ADMIN_LOADING:
      return { ...state, loading: true, error: null, success: false };

    case TYPES.CREATE_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
     
        error: null,
      };

    case TYPES.CREATE_ADMIN_FAILURE:
      return { ...state, loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};

export default hospitalReducer;
