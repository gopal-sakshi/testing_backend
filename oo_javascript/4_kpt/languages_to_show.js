let lang23 = [
    { enabled: true, value: 'en' },
    { enabled: true, value: 'te' },
    { enabled: true, value: 'hi' }
];

let teluguLang = { 
    enabled: true, 
    value: 'te' 
};

console.log(lang23.filter((lang) => lang.value == teluguLang.value))

if(lang23.indexOf(teluguLang) !== -1) {
    console.log('exitst23');
}