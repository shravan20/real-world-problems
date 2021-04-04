import { apiFetch } from "../../utils/apiCall.js";
import { GOOGLE_SHEET_API } from "../../constants/url.js";

const createUser = async (userBody) => {
    try {
        
        let data = await apiFetch(GOOGLE_SHEET_API, "POST", userBody);
        
        return data;

    } catch (error) {
        throw error;
    }
     
}

const getUsers = async () => {
    return await apiFetch(GOOGLE_SHEET_API,"GET");
}

export {
    createUser,
    getUsers
};