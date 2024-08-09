const process_name = process.argv.slice(2)[0];
console.log("process.id ===> ", process.pid)
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

    top -H -p pid23

    ps -e | grep node       ----> to see list of all node processes

    node process23.js A33 & node process23.js A34 & node process23.js A35
    - to create multiple instances of same process
    - A33, A34, A35 ===> 3 process names
    - each process is not aware of any other process running





    kill all node processes
    sudo kill -9 `pgrep node`

*/