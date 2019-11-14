import types from "../types";
import locationService from "../../services/locationService";


export const getUserLocation = () => {
    return async (dispatch) => {
        try {
            const response = await locationService.getUserLocation();
            await dispatch({ type: types.GET_USER_LOCATION, data: response });
        }
        catch (err) {
            throw err;
        }
    };
};
