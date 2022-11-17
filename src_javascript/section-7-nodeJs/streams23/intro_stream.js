/*
    Traditional way 
    - when you tell the program to read a file, the file is read into memory, from start to finish
    - Only then you process it.

    Streams
    - Using streams you read it piece by piece, processing its content without keeping it all in memory
    - Memory efficiency: you don't need to load large amounts of data in memory before you are able to process it
    - Time efficiency: it takes way less time to start processing data, 
        since you can start processing as soon as you have it, rather than waiting till the whole data payload is available

*/


// Read in nodejs-certification
