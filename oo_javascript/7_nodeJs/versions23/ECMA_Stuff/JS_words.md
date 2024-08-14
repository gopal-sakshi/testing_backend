# Identifier
- An identifier is simply a name. 
- In JavaScript, identifiers are used to name variables and functions
    see `typescript_identifiers.txt`
- must begin with either of these
    letter
    underscore (_)
    dollar sign ($)
- we commonly use only ASCII letters & digits in identifiers.
- however, that JavaScript allows identifiers to contain letters and digits from the entire Unicode character set.
    var sí = true;
    var π = 3.14;
-----------------------------------------------------------------------------------------------------
# Reserved words
- Like any language, JavaScript reserves certain identifiers for use by the language itself ---> they are called reserved words
    meaning, these identifiers cant be used by programmer ---> to name variables, functions, etc
- But, you can use reserved words in strings
    In JS, `break` is a reserved statement
        var break=23 ----------------------------> ERROR (break is reserved word... here used as identifier)
        console.log('break the legs') -----------> NO_ERROR (break is reserved word... but not used as identifier)
- What are the reserved words in JS
    `keywords` -----------> break, case, new, var
    `future` -------------> class, enum
    `null literals` ------> null
    `boolean literals` ---> true, false
    THESE FOUR categories contain all the reserved words... they cant be used as identifiers
-----------------------------------------------------------------------------------------------------


