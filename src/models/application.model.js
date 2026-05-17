import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true
    },
    selectedDomain: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    resumeUrl: {
        type: String,
        default: null
    }

}, {
    timestamps: true
});

const applicationModel = mongoose.model('Application', applicationSchema)

export default applicationModel;