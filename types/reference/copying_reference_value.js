// objects are copied by their reference

let friendCircle1 = {
    friendCount: 10
};

// the copied values are dependent
let friendCircle2 = friendCircle1;
friendCircle2.friendCount++; 

console.log("Friend circle 1: " + friendCircle1.friendCount);
console.log("Friend circle 2: " + friendCircle2.friendCount);