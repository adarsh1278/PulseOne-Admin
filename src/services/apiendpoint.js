import apiService from './api';


export const Login = async (credentials) => {
  return await apiService.post('/auth/login', credentials);
};


export const createHospital = async (hospitalData) => {
  return await apiService.post('/entity/createEntity', hospitalData);
};
export const createAdminApi = async (adminData) => {
  return await apiService.post('/user', adminData);
};

export const getHospitalsApi = async (tenantID) => {
  return await apiService.post('/entity/getAllEntities', {
    tenantId: tenantID||"-1",
  });
};
