// Nullish coalescing operator '??'

let user;

alert(user ?? "Anonymous"); 

let usr = "John";

alert(usr ?? "Anonymous"); 

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

alert(firstName ?? lastName ?? nickName ?? "Anonymous"); 


// Comparison with || OR operator
let first_Name = null;
let last_Name = null;
let Nick_kName = "Supercoder";

alert(first_Name || last_Name || Nick_kName ||"Anonymous");

let height = 0;

alert(height || 100); 
alert(height ?? 100);



let h = null;
let w = null;

// important: use parentheses
let area = (h ?? 100) * (w ?? 50);
alert(area); 


// Using ?? with && or ||
let x = (1 && 2) ?? 3; 
alert(x); 