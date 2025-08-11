// This is just for learning
let name = "hey Guys";
let age = 2;
isTrue = true;
let x;
let y = null;
let c = BigInt(123);
let b = Symbol("hello guys");

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(isTrue));
console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(b));
console.log(typeof(c));


// Practice Ques
const profile = {
    userName : "abc",
    isFollow : false,
    post : 10000,
    followers : 65874687,
    following : 1,
    bio : "xyz",
};

profile["following"] ++;
profile["isFollow"] = true;

console.log(profile);
