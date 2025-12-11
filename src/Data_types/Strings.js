// Quotes 
let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

function sum (a, b) {
    return a + b;
}
alert(`1 + 2 = ${sum(1, 2)}.`);

// Multiline strings
let guestList1 = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList1);

// Special characters 
let guestList2 = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList2);

let str1 = "Hello\nWorld";
let str2 = `Hello
World`;
alert(str1 == str2); //true

alert(`The backslash: \\`); // The backslash: \

alert('I\'m the Walrus!'); // I'm the Walrus!

// String length
alert(`My\n`.length); // 3


// Accessing characters 
let str = `Hello`;

// the first character
alert(str[0]); // H
alert(str.at(0)); // H

// the last character
alert(str[str.length - 1]); // o
alert(str.at(-1));
alert(str[-2]); // undefined
alert(str.at(-2)); // l

for (let char of "Hello") {
    alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}
// Strings are immutable
let str3 = 'Hi';

str3[0] = 'h'; // error
alert(str3[0]); // doesn't work

let str4 = 'Hi';
str4 = 'h' + str4[1]; // replace the string
alert(str4); 


// Changing the case
alert('Interface'.toUpperCase()); // INTERFACE
alert('Interface'.toLowerCase()); // interface
alert('Interface'[0].toLowerCase()); // 'i'


// Searching for a substring
let str5 = 'Widget with id';

alert(str5.indexOf('Widget')); // 0, because 'Widget' is found at the beginning
alert(str5.indexOf('widget')); // -1, not found, the search is case-sensitive

alert(str5.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)
alert(str5.indexOf('id', 2)); // 12


let str6 = 'As sly as a fox, as strong as an ox';
let target = 'as'; // let's look for it
let pos = 0;
while (true) {
    let foundPos = str6.indexOf(target, pos);
    if (foundPos == -1) break;

    alert(`Found at ${foundPos}`);
    pos = foundPos + 1; // continue the search from the next position
}

// includes, startsWith, endsWith 
alert("Widget with id".includes("Widget")); // true
alert("Hello".includes("Bye")); // false
alert("Widget".includes("id")); // true
alert("Widget".includes("id", 3)); // false, from position 3 there is no "id
alert("Widget".startsWith("Wid")); // true, "Widget" starts with "Wid"
alert("Widget".endsWith("get")); // true, "Widget" ends with "get"

//Getting a substring
let str7 = "stringify";
alert(str7.slice(0, 5)); // 'strin', the substring from 0 to 5 (not including 5)
alert(str7.slice(0, 1));
alert(str7.slice(2));
alert(str7.slice(-4, -1));

// Comparing strings
alert('a' > 'Z'); // true
alert('Österreich' > 'Zealand'); // true

// str.codePointAt(pos)
// different case letters have different codes
alert("Z".codePointAt(0)); // 90
alert("z".codePointAt(0)); // 122
alert("z".codePointAt(0).toString(16)); // 7a (if we need a hexadecimal value)
alert(String.fromCodePoint(90)); // Z
alert(String.fromCodePoint(0x5a)); // Z (we can also use a hex value as an argument)