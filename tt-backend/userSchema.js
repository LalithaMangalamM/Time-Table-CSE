const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    department: String,
    password: String,
    role: String,
    classes: [
        {
            class: String,
            subjects: [String]
        }
    ],
    timetable: [
        {
            day: String,
            hour: String,
            subject: String
        }
    ],
    profilePicture: String
});

const Faculty = mongoose.model("Faculty", userSchema);

module.exports = Faculty;