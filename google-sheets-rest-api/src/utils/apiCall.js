import fetch from 'node-fetch';


exports.apiFetch = async (url, body, method) => {

    return await fetch(url, {
        method: method,
        body: body
    });

};