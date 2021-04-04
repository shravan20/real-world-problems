import fetch from 'node-fetch';


const apiFetch = async (url, body, method) => {

    try {
        console.log(url, body, method)
        let options ={
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