var doc23 = ['RFQ', 'QUOTATION', 'TENDER']
console.log(doc23.join());            // joins array elements... Any separator can be specified. The default is comma (,)
console.log(doc23.join(' and '));       //              ' and '            
console.log(doc23.join(`','`));


var doc23_join = `('${doc23.join(`','`)}')`;
console.log(doc23);
console.log(doc23_join);

// join() method returns an array as a string.
