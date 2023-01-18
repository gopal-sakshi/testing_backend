function greeting23() { console.log('Hello World'); }
greeting23();  

// To prove functions are objects in JavaScript
    // We can add properties to functions like we do with objects
greeting23.lang = 'English23';
console.log(greeting23.lang);
console.log(greeting23);

// While this is perfectly valid in JavaScript, this is considered a harmful practice