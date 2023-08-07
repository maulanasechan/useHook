/* eslint-disable no-param-reassign */
import axios from "axios";
// import { store } from "store";

const apiClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(async (config) => {
  // const {
  //   root: {
  //     authToken: { myDashboardToken, azureADToken },
  //   },
  //   dashboard: {
  //     profile: { activeRole },
  //   },
  // } = store.getState();

  //   config.headers = config.headers ?? {};

  //   if (myDashboardToken) {
  //     config.headers.Authorization = `Bearer ${myDashboardToken}`;
  //   }
  //   if (azureADToken) {
  //     config.headers.AzureADToken = `Bearer ${azureADToken}`;
  //   }
  //   if (activeRole?.roleId) {
  //     config.headers.roleId = activeRole?.roleId;
  //     config.headers.userRoleId = activeRole?.roleId;
  //   }
  return config;
});

apiClient.interceptors.response.use(
  (res) => res,
  (err) =>
    // const { dispatch } = store;
    // if (err.response?.data?.errorCode === 'REFRESH_TOKEN_INVALID') {
    //   window.location.href = '/logout';
    // }

    // if (err.response?.status === 500) {
    //   const {
    //     authToken: { myDashboardToken, refreshToken },
    //   } = store.getState();

    //   return apiClient
    //     .post<IdentityLoginResponse>(`${ApiIdentity.refreshAccessToken}`, {
    //       accessToken: myDashboardToken,
    //       refreshToken,
    //     })
    //     .then((res) => {
    //       dispatch(setAuthToken(res.data.accessToken));
    //       dispatch(setRefreshToken(res.data.refreshToken));
    //     });
    // }
    Promise.reject(err)
);

export default apiClient;
