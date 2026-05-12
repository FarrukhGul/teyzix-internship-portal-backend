import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    domain: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    stipend: {
        type: String,
        required: true,
    },
    slots: {
        type: Number,
        required: true,
    },
    isOpen: {
        type: Boolean,
        required: true,
    }
}, {
    timestamps : true,
});

const internshipModel = mongoose.model("Internship", internshipSchema)

export default internshipModel;
