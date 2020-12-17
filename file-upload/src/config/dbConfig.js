import mongoose from 'mongoose';

const connectToDb = async url => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('DB Connected');
    } catch (error) {
    throw error;
    } 
} 


export default connectToDb;
