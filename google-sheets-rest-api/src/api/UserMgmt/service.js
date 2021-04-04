import { apiFetch } from "../../utils/apiCall.js";
import { GOOGLE_SHEET_API } from "../../constants/url.js";

const createUser = async (userBody) => {
    try {
        
        let data = await apiFetch(GOOGLE_SHEET_API, userBody, "POST");
        console.log(data);
        return data;

    } catch (error) {
        throw error;
    }
     
}

export {
    createUser
};