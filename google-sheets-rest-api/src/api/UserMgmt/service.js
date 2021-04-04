import { apiFetch } from "../../utils/apiCall";
import { GOOGLE_SHEET_API } from "../../constants/url";

const createUser = async (userBody) => {
    try {
        return await apiFetch(GOOGLE_SHEET_API, userBody, "POST");
    } catch (error) {
        throw error;
    }
     
}

module.exports = {
    createUser
};