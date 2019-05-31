var mongoose = require("mongoose");

var FormSchema = new mongoose.Schema({
    name: { type: String },
    username: { type: String, unique: true },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    role: { type: String }        // ANM, MO or BMO
});

module.exports = mongoose.model("User", UserSchema);
