const process_name = process.argv.slice(2)[0];

count = 0;
while (true) {
    count++;
    if (count == 2000 || count == 4000) {
        console.log(`${process_name}: ${count}`);
    }
}

/*
    node process23.js A33 &
    A33     = name of the process (stored in process_name)
    &       = allows node program to run in background

*/