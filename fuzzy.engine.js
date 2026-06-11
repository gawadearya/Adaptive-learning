const FuzzyEngine = {
    /**
     * Categorizes user performance using fuzzy logic boundaries
     * @param {number} accuracy - Percentage of correct answers (0-100)
     * @param {number} timeTaken - Total seconds spent on the quiz
     * @param {number} totalQ - Total number of questions in the quiz
     */
    getFuzzyRecommendation: function(accuracy, timeTaken, totalQ) {
        const avgTimePerQuestion = timeTaken / totalQ;
        
        // 1. Define Accuracy Membership
        let isHighAccuracy = accuracy >= 80;
        let isLowAccuracy = accuracy <= 40;
        
        // 2. Define Speed Membership (Assuming 60s is the threshold)
        let isFast = avgTimePerQuestion < 30;
        let isSlow = avgTimePerQuestion > 50;

        // 3. Fuzzy Rule Controller
        // MASTERING: High accuracy + not slow
        if (isHighAccuracy && !isSlow) {
            return {
                status: "Mastering",
                color: "#4CAF50",
                description: "You have a strong grasp of these concepts!",
                action: "Advanced"
            };
        }
        
        // STRUGGLING: Low accuracy OR (Medium accuracy but very slow)
        if (isLowAccuracy || (accuracy < 60 && isSlow)) {
            return {
                status: "Struggling",
                color: "#f44336",
                description: "These topics need more practice.",
                action: "Review"
            };
        }

        // DEVELOPING: Everything in between
        return {
            status: "Developing",
            color: "#FF9800",
            description: "You are on the right track, keep pushing!",
            action: "Practice"
        };
    }
};

// Export for use in other files
if (typeof module !== 'undefined') {
    module.exports = FuzzyEngine;
}