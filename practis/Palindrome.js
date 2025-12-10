function checkPalindrome(str) {
    // 1. Convert to lowercase to make it case-insensitive
    // 2. Remove non-alphanumeric characters (optional, but good for sentences)
    const cleanStr = str.toLowerCase();

    // 3. Split string into array, reverse array, join back to string
    const reversedStr = cleanStr.split('').reverse().join('');

    if (cleanStr === reversedStr) {
        console.log(`"${str}" is a Palindrome.`);
        return true;
    } else {
        console.log(`"${str}" is NOT a Palindrome.`);
        return false;
    }
}


console.log("Palindrome Check Results:");
checkPalindrome("Racecar"); // Palindrome
checkPalindrome("Hello"); // Not Palindrome
checkPalindrome("A man a plan a canal Panama"); // Palindrome   
checkPalindrome("12321"); // Palindrome
checkPalindrome("12345"); // Not Palindrome 
module.exports = checkPalindrome;

