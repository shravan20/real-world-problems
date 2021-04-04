import fetch from 'node-fetch';


const apiFetch = async (url, method, body) => {

    try {
        
        let options = {
            method: method,
            body: JSON.stringify(body),
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }
        };

        let response = await fetch(url, options);
        return await response.json();    

    } catch (error) {

        console.log(error);
        throw error;
    }
};

export {
    apiFetch
}