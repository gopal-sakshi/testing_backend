var reg23_single = /ac+2/;
var reg23_multiple = /ac+2/g;

// since we use c+   it is 1 or more 'c' occurences...
    // it would NOT match a2.... as c is absent
    // it would match ====> ac2, acc2, accc2 only
var line44 = 'ascea2flac2kskld;jacc2fweior/acccc2z,ckl;sdjweilvkl;aiw;ifaj;welkfnf;lkm;ef/;bao;jiopui wqesdf 33';

console.log(line44.match(reg23_single));
console.log(line44.match(reg23_multiple));
