var PrintMedia01;
(function (PrintMedia01) {
    PrintMedia01[PrintMedia01["Newspaper"] = 0] = "Newspaper";
    PrintMedia01[PrintMedia01["Magazine"] = 1] = "Magazine";
    PrintMedia01[PrintMedia01["Book"] = 2] = "Book";
})(PrintMedia01 || (PrintMedia01 = {}));
var polity_laxmikath = PrintMedia01.Book;
var eenadu;
eenadu = PrintMedia01.Newspaper;
/*************************************************************************/
function getMedia12(mediaName) {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia01.Magazine;
    }
    else if (mediaName === 'UNDP Report' || mediaName === 'IMF Report') {
        return PrintMedia01.Book;
    }
    else
        return PrintMedia01.Newspaper;
}
/*************************************************************************/
console.log(getMedia12('eenadu'));
console.log(getMedia12('Forbes'));
