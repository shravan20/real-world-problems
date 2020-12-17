import * as service from './service.js';

const uploadFile =  (req, res, next) => {
    try {
        console.log('1',req.file);

        service.uploadFile(req.file);
        res.send('response');
    } catch (error) {
        res.send('response');
    }
}


const uploadMultipleFile =  (req, res, next) => {
    try {

        console.log('3',req.files)
        service.uploadMultipleFile(req.files);
        res.send('response');
    } catch (error) {
        res.send('response');
    }
}


const fetchFiles =  (req, res, next) => {
    try {

        console.log('3',req.files)
        res.send('response');
    } catch (error) {
        res.send('response');
    }
}


export { uploadFile, uploadMultipleFile, fetchFiles };