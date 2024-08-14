# ES7 (ES2016)

`new features`
- async/await
- Array.includes
- Exponentiation Operator               let z = 5 ** 2;          // result is 25

<!-- -------------------------------------------------------------------------------------- -->

# ES8 (ES2017 or Ecma Script 2017)
- It is also called ES2017 (or) EcmaScript 2017

`new features`
- String padding (padStart, padEnd)
- Object.values, Object.entries
- Object.getOwnPropertyDescriptors
    returns all the details (including getter & setter) of a given object
    to allow shallow copying / cloning an object into another object
- trailing commas in the function parameters    (help with tools like git blame)
- Async/Await
    not sure if introduced in ES2017 (or) ES2016
<!-- ------------------------------------------------------------------------------------------------------------ -->

# ES9 (ES2018)

`new features`
- async iteration
- rest & spread properties
- Promise.finally()


<!-- ------------------------------------------------------------------------------------------------------------ -->
# ES10 (ES2019)


`new features`
- Array.flat, Array.map
- optional catch binding without a parameter

<!-- ------------------------------------------------------------------------------------------------------------ -->



# ES11 (ECMA 2020)


`new features`
- BigInt datatype
- Nullish Coalescing Operator 
- Dynamic imports                   modules can be imported conditionally (or) on-demand
- import.meta                       provides metadata for the current module
- matchAll() method                 for regular expressions
- <globalThis> object  
<!-- ---------------------------------------------------------------------------------------------------- -->








<!-- ------------------------------------------------------------------------------------------------------------ -->

# code snippets



```js
// async iteration
for await (const item of fetchItemsFromServer()) {
    console.log(item);
}


// flat, map
[1, [2, [3]]].flat(2);


// Nullish Coalescing Operator 
const defaultValue = value ?? 'Default'; 


```

<!-- ------------------------------------------------------------------------------------------------------------ -->