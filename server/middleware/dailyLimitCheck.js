import UserDailyLimit from "../models/userDailyLimit.js";

export const checkDailyLimit = async (req, res, next) => {
    try {
        const { email } = req.body;
        
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
        
        // Find or create today's limit record for this user
        let limitRecord = await UserDailyLimit.findOne({ email, date: today });
        
        if (!limitRecord) {
            limitRecord = new UserDailyLimit({
                email,
                date: today,
                queryCount: 0,
                consultationCount: 0,
                totalRequests: 0
            });
        }

        // Check if user has exceeded daily limit
        if (limitRecord.totalRequests >= 3) {
            return res.status(429).json({ 
                message: "Daily limit exceeded. You can only send 3 queries/consultations per day. Please try again tomorrow.",
                currentCount: limitRecord.totalRequests,
                maxAllowed: 3,
                resetTime: "midnight UTC"
            });
        }

        // Attach limit record to request for use in controller
        req.limitRecord = limitRecord;
        next();
        
    } catch (error) {
        console.error("❌ Error in checkDailyLimit:", error);
        res.status(500).json({ 
            message: "Internal server error while checking daily limits",
            error: error.message 
        });
    }
};

export const updateDailyCount = async (limitRecord, type) => {
    try {
        if (type === 'query') {
            limitRecord.queryCount += 1;
        } else if (type === 'consultation') {
            limitRecord.consultationCount += 1;
        }
        
        limitRecord.totalRequests += 1;
        await limitRecord.save();
        
        return limitRecord;
    } catch (error) {
        console.error("❌ Error updating daily count:", error);
        throw error;
    }
};