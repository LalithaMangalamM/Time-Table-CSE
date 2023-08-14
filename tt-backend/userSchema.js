let mongoose  =  require("mongoose");

let userSchema = mongoose.Schema(
    {
    name : {
        type: String,
         required:true
        },
    email : {type: String,
        required:true
    },
    password : {
        type: String
    },
    role:{
        type: String
    },
    classes: [
        {
            class: String, 
            subjects: [String] 
        }
    ],
    timetable: [
        {
            day: String,
            hour: Number,
            subject: String
        }
    ]
    
})

module.exports = mongoose.model("faculty", userSchema);

