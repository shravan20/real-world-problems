import * as repository from './repository.js';

const uploadFile = async (file) => {
    try {
        let newFile = { "fileName" : file.originalname , "url":file.path };
        return await repository.create(newFile);
    } catch (error) {
        throw error;
    }
}


const uploadMultipleFile = async (files) => {
    try {
        let newFiles = files.map(data => {
            return { "fileName" : file.originalname , "url":file.path };
        })
        return await repository.create(newFile);
    } catch (error) {
        throw error;
    }
}


const fetchFiles =  async ( ) => {
    try {
        return await repository.find();
    } catch (error) {
        throw error;
    }
}



export { uploadFile, uploadMultipleFile, fetchFiles };