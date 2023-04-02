let room23 = { number: 23 };
  
let meetup = {
    title: "Conference",
    participants: [ "John", "Alice" ],
    place: room23 
};

room23.occupiedBy = meetup;

// APPROACH I       // fails
// JSON.stringify(meetup);             // Converting circular structure to JSON

// APPROACH II
console.log(JSON.stringify(meetup, ["title", "participants"]));
