str = str.replace(/[^a-z0-9-]/g, '');
Everything between the () indicates what your are looking for

/               delimit your pattern so you have one to start and one to end... this is start regex pattern
[]              the pattern your are looking for on one specific character
^               indicates that you want every character NOT corresponding to what follows
a-z             matches any character between 'a' and 'z' included
0-9             matches any digit between '0' and '9' included (meaning any digit)
-               '-' character
/               indicates end of regex pattern
g               special parameter you dont want your regex to stop on the first character matching, but to continue on the whole string


Then your expression is delimited by / before and after. So here you say 
    every character not being a letter, a digit or a '-' will be replaced by 2nd parameter which is '' (effectively removing alpha-numerics)

<!-- ********************************************************************************** -->

# Characters
    Escape character:               \
    Any character:                  . (DOT)
    Digit:                          \d   ---------->        meaning [0-9], meaning [0,1,2,3,4,5,6,7,8,9]
    Not a digit:                    \D
    Word character:                 \w   ---------->        single letter, number, underscore... meaning [a-zA-Z0-9_]              
    Not a word character:           \W
    Whitespace:                     \s
    Not whitespace:                 \S
    Word boundary:                  \b
    Not a word boundary:            \B
    Beginning of a string:          ^   ---------->         behaves differently if its inside square brackets [^ ]
    End of a string:                $
# Groupings
    Matches characters in brackets:             [ ]
    Matches characters not in brackets:         [^ ]
    Either or:                                  |
    Capturing group:                            ( )
# Quantifiers
    0 or more:                          *
    1 or more:                          +
    0 or 1:                             ?
    An exact number of characters:      { }
    Range of number of characters:      {Minimum, Maximum}

<!-- ********************************************************************************** -->