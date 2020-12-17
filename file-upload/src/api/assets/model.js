import mongoose from 'mongoose';

const assetSchema = new mongoose.Schema({
    fileName: String,
    url: String
});

const Asset = mongoose.model('asset', assetSchema);

export default Asset;