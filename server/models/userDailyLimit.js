import mongoose from "mongoose";

const userDailyLimitSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: true
    },
    date: {
        type: String, // Store as YYYY-MM-DD format
        required: true,
        index: true
    },
    queryCount: {
        type: Number,
        default: 0,
        min: 0,
        max: 3
    },
    consultationCount: {
        type: Number,
        default: 0,
        min: 0,
        max: 3
    },
    totalRequests: {
        type: Number,
        default: 0,
        min: 0,
        max: 3
    }
}, {
    timestamps: true
});

// Compound index for efficient queries
userDailyLimitSchema.index({ email: 1, date: 1 }, { unique: true });

const UserDailyLimit = mongoose.model("UserDailyLimit", userDailyLimitSchema);

export default UserDailyLimit;