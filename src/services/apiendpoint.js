import apiService from './api';

// Super Admin Auth APIs
export const Login = async (credentials) => {
  return await apiService.post('/auth/login', credentials);
};

export const createHospital = async (hospitalData) => {
  return await apiService.post('/entity/createEntity', hospitalData);
};