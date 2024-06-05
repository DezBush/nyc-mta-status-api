const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        phone: {
            type: String,
            unique: true,
            required: true
        },
        favorites: {
            type: [String],
            default: []
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
