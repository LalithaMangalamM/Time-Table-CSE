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
    password : {type: String},
    
})

module.exports = mongoose.model("faculty", userSchema);

