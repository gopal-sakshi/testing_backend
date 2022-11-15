var regex61 = /[abc]/                           // matches with a, b, c, ab, ba, ac, bc, ca, cb
var regex62 = /[abc]/g
console.log(regex61.test('ca'));
console.log(regex61.test('ba'));
console.log('a324bcwe33aabacabc'.match(regex62));