import * as service from './service.js';

const uploadFile = async (req, res, next) => {
    try {
        console.log('1',req.file);
        let response = await service.uploadFile(req.file);
        console.log(response);
        res.send(response);

    } catch (error) {
        console.log(error);
        res.send({ errorName:error.name, errorMessage:error.message });   
    }
}


const uploadMultipleFile = async (req, res, next) => {
    try {
        console.log('3',req.files)
        let response = await service.uploadMultipleFile(req.files);
        console.log(response);
        res.send(response);
    } catch (error) {
        console.log(error);
        res.send({ errorName:error.name, errorMessage:error.message });
    }
}


const fetchFiles =  async (req, res, next) => {
    try {

        let response = await service.fetchFiles();
        console.log(response);
        res.send(response);

    } catch (error) {
        console.log(error);
        res.send({ errorName:error.name, errorMessage:error.message });
    }
}


export { uploadFile, uploadMultipleFile, fetchFiles };