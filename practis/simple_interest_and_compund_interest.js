//simple interest = P * R * T / 100
function simpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}           
//compound interest = P * (1 + R/100)^T - P
function compoundInterest(principal, rate, time) {
    return principal * Math.pow((1 + rate / 100), time) - principal;
}
console.log("Simple Interest: " + simpleInterest(1000, 5, 2) + "\nCompound Interest: " + compoundInterest(1000, 5, 2));
showMessage();
function showMessage() {
    console.log("This code calculates simple and compound interest.");
}
module.exports = { simpleInterest, compoundInterest }; 