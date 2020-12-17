import User from './model.js';


const create = async (data) => {
    try {
        return await User.create(data);
    } catch (error) {
        throw error;        
    }
}

const find = async (filter, view) => {
    try {
        return await User.find(filter, view);
    } catch (error) {
        throw error;        
    }
}

export { create, find };
