const str = 'baby';
const process = (char23) => {
  console.log(`character is ${char23}`)
};

// APPROACH I
for (let i = 0; i < str.length; i++) { process(str[i]); }
console.log('**********************************************');
// APPROACH II
for (let i = 0; i < str.length; i++) { process(str.charAt(i)); }
console.log('**********************************************');
// APPROACH III
for (let c of str) { process(c) }
console.log('**********************************************');
// APPROACH IV              // transform string into array and then apply forEach...  performance suffers though
[...str].forEach(process)

// https://stackoverflow.com/questions/5943726/string-charatx-or-stringx
    // 'cat'.charAt(1)      vs      'cat'[1]
    // basically, in modern browsers you can safely use     'cat'[1]