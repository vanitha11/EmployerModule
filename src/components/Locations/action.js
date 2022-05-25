import {setLoading} from "../common/Loader/slice";
import requestUtil from "../../helpers/requestUtil";
import locationList from './list.json';
import { getLocationListSuccess, getLocationListError } from "./slice";

export function getLocationList() {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            //const response = await requestUtil(`${url}/Dashboard/myprofileinfo/${candidateId}`, "GET");
            const response = locationList;
            dispatch(getLocationListSuccess(response.data));
        } catch (error) {
            dispatch(getLocationListError(error.message));
            dispatch(setLoading(false));
        }
        dispatch(setLoading(false));
    };
}