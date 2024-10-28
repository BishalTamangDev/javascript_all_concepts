let person = {
    name: "tobey maguire",
    contact: "987654321"
};

// dot notation
person.name = "Chris Evan";

// bracket notation
person['contact'] = "11111";

console.log(person);
console.log("Name: " + person.name);
console.log("Contact: " + person.contact);