import * as service from './service.js';

const createUser = async (req, res, next) => {
    try {
        
        let { body } = req;
        res.status(200).send(await service.createUser(body));
    
    } catch (error) {
        res.status(400).send(error);
    }
}

export {
    createUser
};
