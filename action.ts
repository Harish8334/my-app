
import { login_request, login_success, login_failure } from "./actiontypes";
import { loginApi } from "./api";
import { AppDispatch } from "./store";
import Cookies from "js-cookie";
export const loginRequest = () => {
    return {
        type: login_request,
    };
};
export const loginSucess = (data: any) => {
    return {
        type: login_success,
        payload: data
    }
}
export const loginFailure = (error: any) => {
    return {
        type: login_failure,
        payload: error
    }
}
export const loginAction = (mobile_no: string, otp: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loginRequest())
        try {
            const data =await loginApi(mobile_no, otp)
            dispatch(loginSucess(data))
            Cookies.set('token', data.accesstoken, { expires: 1 });
            localStorage.setItem('user', data.posp_id);
            return {success : true, data};
        }
        catch (error: any) {
            const errorMessage =
        error.response?.data?.message || 'An unexpected error occurred';
      dispatch(loginFailure(errorMessage));
      throw error;
        }
    }
}
