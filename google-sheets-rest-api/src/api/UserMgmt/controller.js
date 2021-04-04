import { createUser } from './service';

const createUser = async (req, res, next) => {
    try {
        res.status(200).send(await createUser(req.body));
    } catch (error) {
        res.status(400).send(error);
    }
}

