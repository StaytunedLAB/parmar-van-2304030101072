// string conversion ⬇️

let value = true;
alert(typeof value); // boolean

// boolean to string conversion
value = String(value);
alert(typeof value); 


// Numeric Conversion ⬇️
// non numeric values to number
alert( "6" / "2" ); // 3, is output which is  converted from string to number

let str = "456"
alert(typeof str); 

let num = Number(str); // convert srtings to number
alert(typeof num);


// examples
alert(Number("   1245   "));
alert(Number("Abc542"));     
alert(Number(true));        
alert(Number(false));      

//  Boolean Conversion ⬇️
alert(Boolean(1)); // true
alert(Boolean(0)); // false

alert(Boolean("hello")); // true
alert(Boolean("")); // false