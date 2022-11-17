const text1 = 'Ahoy, quick 4aC fox';

// const regexp01 = /\w/;                           // outputs first \w character... letter_number_underscore 
// const regexp01 = /\w{2}/;                        // outputs first two \w characters                           
// const regexp01 = /\w{2,6}/;                      // outputs only one occurence... since we did not group using ( )
                                                        // what it outputs is all \w with length between 2 & 6
                                                        
const regexp01 = /\w{5,77}/;                        // outputs quick... Ahoy is eliminated... because we want at least 5 \w characters
// const regexp01 = /\w/;
// const regexp01 = /\w/;

console.log(text1.match(regexp01));