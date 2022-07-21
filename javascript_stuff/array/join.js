var doc23 = ['RFQ', 'QUOTATION', 'TENDER']
console.log(doc23.join());                              //      RFQ,QUOTATION,TENDER    
console.log(doc23.join(' and '));                       //      RFQ and QUOTATION and TENDER
console.log(doc23.join(`','`));


var doc23_join = `('${doc23.join(`','`)}')`;
console.log(doc23);
console.log(doc23_join);

/*
    EXPLANATION
    - joins array elements... 
    - DEFAULT separator (if no separator is specified) ---------> comma (,)
    - Any separator can be specified
        (' and ')
    - join() method returns an array as a string.
*/
