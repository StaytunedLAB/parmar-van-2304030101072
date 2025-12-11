// JSON.stringify

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!

alert(json);

// a number in JSON is just a number
alert(JSON.stringify(1)); // 1

// a string in JSON is still a string, but double-quoted
alert(JSON.stringify('test')); // "test"

alert(JSON.stringify(true)); // true

alert(JSON.stringify([1, 2, 3])); // [1,2,3]


let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};

alert(JSON.stringify(meetup));

// Excluding and transforming: replacer
let room = {
    number: 23
};

let meet = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

alert(JSON.stringify(meet, ['title', 'participants', 'place', 'name', 'number']));

// Formatting: space
let user = {
    name: "John",
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true
    }
};

alert(JSON.stringify(user, null, 2));

// Custom “toJSON”
let room = {
    number: 23,
    toJSON () {
        return this.number;
    }
};

let metup = {
    title: "Conference",
    room
};

alert(JSON.stringify(room)); // 23

alert(JSON.stringify(metup));


// JSON.parse
// stringified array
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert(numbers[1]); // 1