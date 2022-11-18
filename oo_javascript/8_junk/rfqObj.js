let rfqObj = {
    quotations: [],
    bestQuotation: null
}

if(rfqObj.quotations) {
    console.log(rfqObj.quotations);
} else {
    var blah = rfqObj.bestQuotation ? rfqObj.bestQuotation.quotId : 'jc'
    console.log(blah);
}

var blah = rfqObj.bestQuotation ? rfqObj.bestQuotation.quotId : 'jc'
console.log(blah);

let quotationId = "NO_QUOTE";
try {
    quotationId = rfqObj.bestQuotation
    ? rfq.bestQuotation.quotationId
    : rfq.quotations[0].quotationId;
} catch (e) { };

console.log(quotationId);