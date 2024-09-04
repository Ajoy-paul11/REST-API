import mongoose, { Schema } from "mongoose";


const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    joining_date: {
        type: Date,
        required: true
    }
}, { timestamps: true })


export const Employee = mongoose.model("Employee", employeeSchema)