// user has a reference to the object
let user = {
    name: "John"
};

user = null; // Now John becomes unreachable becuse user has null value
console.log(user)  


// Two references  
let usr = {
    name: "jay",
};

let admin = usr;
console.log(admin);


// Interlinked objects
function marry(man, woman){
    woman.husband = man;
    man.wife = woman;

    return{
        father: man,
        mother: woman,
    }
}

let family = marry({
    name:"Jhon"
}, {
    name: "Ann"
});

delete family.father;

console.log(family);