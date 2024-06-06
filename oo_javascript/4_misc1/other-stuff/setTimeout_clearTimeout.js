let timer23 = setTimeout(() =>{
    console.log("this function ran after 3 seconds ");
}, 3000);

if(process.argv[2] == 'yes') {
    console.log("cancelling set time out2333333333333")
    clearTimeout(timer23)
} else {
    console.log("not cancelling set time out")
}


/*
    HOW TO RUN
        node oo_javascript/4_misc1/other-stuff/setTimeout_clearTimeout.js no
        node oo_javascript/4_misc1/other-stuff/setTimeout_clearTimeout.js yes
*/ 