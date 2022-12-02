//          | 0 is an easy and fast way to convert anything to integer:


( 3|0 ) === 3;                                              // it does not change integers
( 3.3|0 ) === 3;                                            // it casts off the fractional part in fractionalal numbers
( 3.8|0 ) === 3;                                            // it does not round, but exactly casts off the fractional part
( -3.3|0 ) === -3;                                          // including negative fractional numbers
( -3.8|0 ) === -3;                                          // which have Math.floor(-3.3) == Math.floor(-3.8) == -4
( "3"|0 ) === 3;                                            // strings with numbers are typecast to integers
( "3.8"|0 ) === 3;                                          // during this the fractional part is cast off too
( "-3.8"|0 ) === -3;                                        // including negative fractional numbers
( NaN|0 ) === 0;                                            // NaN is typecast to 0
( Infinity|0 ) === 0;                                       // the typecast to 0 occurs with the Infinity
( -Infinity|0 ) === 0;                                      // and with -Infinity
( null|0 ) === 0;                                           // and with null,
( (void 0)|0 ) === 0;                                       // and with undefined
( []|0 ) === 0;                                             // and with an empty array
( [3]|0 ) === 3;                                            // but an array with one number is typecast to number
( [-3.8]|0 ) === -3;                                        // including the cast off of the fractional part
( [" -3.8 "]|0 ) === -3;                                    // including the typecast of strings to numbers
( [-3.8, 22]|0 ) === 0                                      // but an Array with several numbers is typecast to 0
( {}|0 ) === 0;                                             // an empty object is typecast to 0
( {'2':'3'}|0 ) === 0;                                      // or a not empty object
( (function(){})|0 ) === 0;                                 // an empty function is typecast to 0 too
( (function(){ return 3;})|0 ) === 0;