function calculateGrade(score) {
    let grade;

    switch (true) {
        case (score >= 90 && score <= 100):
            grade = "A";
            break;
        case (score >= 80 && score < 90):
            grade = "B";
            break;
        case (score >= 70 && score < 80):
            grade = "C";
            break;
        case (score >= 60 && score < 70):
            grade = "D";
            break;
        case (score >= 0 && score < 60):
            grade = "F";
            break;
        default:
            grade = "Invalid Score";
    }

    console.log(`Score: ${score}, Grade: ${grade}`);
}

console.log("Grade Calculation Results:");  
calculateGrade(95); // A
calculateGrade(85);
calculateGrade(75);
calculateGrade(65);
calculateGrade(55);
calculateGrade(-10); // Invalid Score
module.exports = calculateGrade;