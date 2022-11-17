var reg23_single = /pq+2/;
var reg23_multiple = /pq+2/g;

// since we use q+   it is 1 or more 'q' occurences...
    // it would NOT match p2.... as q is absent
    // it would match ====> pq2, pqq2, pqqq2 only
var line44 = 'ascep2flpq2kskld;jpqq2fweior/pqqqq2z,ckl;sdjweilvkl;aiw;ifaj;welkfnf;lkm;ef/;bao;jiopui wqesdf 33';

console.log(line44.match(reg23_single));
console.log(line44.match(reg23_multiple));
