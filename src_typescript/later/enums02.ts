enum PrintMedia01 { Newspaper, Magazine, Book }
var polity_laxmikath:PrintMedia01 = PrintMedia01.Book;
var eenadu:PrintMedia01;    eenadu = PrintMedia01.Newspaper;
/*************************************************************************/

function getMedia12(mediaName: string): PrintMedia01 {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') { return PrintMedia01.Magazine; } 
    else if (mediaName === 'UNDP Report' || mediaName === 'IMF Report') { return PrintMedia01.Book; }
    else return PrintMedia01.Newspaper;
}
/*************************************************************************/

console.log(getMedia12('eenadu'));
console.log(getMedia12('Forbes'));
/*************************************************************************/

// Numeric Enums
enum PrintMedia02 { Newspaper = 1, Newsletter = 5, Magazine = 24 };
enum PrintMedia03 { Newspaper = 12, Newsletter = 2, Magazine = 7 };

// Computed Enums
function getPrintMediaCode(arg:string) { return 22 };
enum PrintMedia04 { Newspaper = 1, Newsletter = getPrintMediaCode('newsletter'), Magazine = Newsletter * 3 };

// String Enum
enum Role { seller = "SELLER", buyer = "BUYER", assistant = "ASSISTANT" }

// Heterogenous Enum
enum Status { Active = 'ACTIVE', Deactivate = 1, Pending }