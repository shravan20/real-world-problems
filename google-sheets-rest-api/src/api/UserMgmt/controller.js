import * as service from './service.js';

const createUser = async (req, res, next) => {
    try {
        
        let { body } = req;
        res.status(200).send(await service.createUser(body));
    
    } catch (error) {
        res.status(400).send(error);
    }
}

const getUsers = async (req, res, next) => {
    try {
        res.status(200).send(await service.getUsers());
    } catch (error) {
        
    }
}

export {
    createUser,
    getUsers
};
