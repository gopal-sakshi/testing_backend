// Arrays are like Objects only
    // In JS, The values are located by a key and not by an offset
            // {
            //     "0": true,
            //     "1": "this can be string - not bool (or) number",
            //     "2": 3,
            //     ...

            //     "99": "100th elem"
            // }
    // In C++, you can access 4th element of an array 
        // 1st elem         0x002700
        // 2nd elem         0x002704        4 bytes offset/increment between each elements of Array
        // 3rd elem         0x002708
        // 4th elem         0x002712        


// Only difference between array & Object
    // length property      which is 1 greater than the largest integer key in the array... here largest key = 99
    // 
