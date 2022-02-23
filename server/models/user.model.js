const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        unique: [true, "This email has been taken"],
        required: [true, "An email is required"],
    },

    username: {
        type: String,
        unique: [true, "This username has been taken"],
        required: [true, "A user name is required"],
    },

    password: { 
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Passwords must be at least 8 characters"]
    },

}, { timestamps: true })

//before hash, validate confirmPassword matah password
UserSchema.virtual("confirmPassword")
    .get(()=>this._confirmPassword)
    .set((value)=>this._confirmPassword = value)

UserSchema.pre("validate", function(next){

    if(this.password !== this.confirmPassword){
        this.invalidate("confirmPassword", "Passwords don't match")
        console.log("Passwords don't match")
    }
    next()
})
//before save, hash the password
UserSchema.pre("save", function(next){
    console.log("in pre save");
        bcrypt.hash(this.password, 10)
            .then((hashedPassword)=>{
            this.password = hashedPassword;
            next()
            })
})

const User = mongoose.model("User", UserSchema);

module.exports = User;