// || (OR);

alert(true || true);   // true
alert(true || false);  // true
alert(false || true);  // true
alert(false || false); // false


let hour = 9;

if (hour < 10 || hour > 18) {
    alert('The office is closed.');
}

alert(1 || 0); 
alert(null || 1);
alert(null || 0 || 1);
alert(undefined || null || 0);

let firstName = '';
let lastName = '';
let nickName = 'Supercoder';

alert(firstName || lastName || nickName || 'Anonymous');

// && (AND)
alert(true && true);   // true
alert(false && true);  // false
alert(true && false);  // false
alert(false && false); // false


alert(1 && 0);
alert(1 && 5);
alert(null && 5);
alert(1 && 2 && 3);

// (! NOT)
alert(!true);  // false
alert(!0);     // true

// taks 
alert(null || 2 || undefined);

alert(alert(1) || 2 || alert(3));