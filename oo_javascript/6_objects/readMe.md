# objects copy

`deep copy`
- json.parse(json.stringify)
- structuredClone (only in node version > 17.0.1)


json.parse(json.stringify) 
    =====> original object points to one memory location
    =====> a new object is created at different memory location in heap
    =====> changes to one object does not affect another object

structuredClone
- same as json.parse(json.stringify)
- original object at one memory location
- new object at another memory location
--------------------------------------------------------------------------------------------------------------------

`shallow copy`
- Object.assign()
- spread operators
- assignment operator


Object.assign()
- original object & cloned object at different locations in memory
- but both original & cloned objects share same nested object
- top property changed in originalObject ====> does NOT change top property in clonedObject
- nested object property changed in originalObject ====> that change will be reflected in nested property of clonedObject

spread operators
- same as Object.assign()


assignment operator
- we have a originalObject
    a variable in stack memory
    the whole object in heap memory
- with assignment operator, we just create a new variable in stack memory
    that new variable in stack memory points to the same location in heap memory pointed by originalObject
- whatever changes in originalObject will be reflected in clonedObject and viceversa


--------------------------------------------------------------------------------------------------------------------


# Object properties

Object.defineProperty(obj23, color23, {chusuko})
{chusuko} ===> 
    either { value: defaultValue, writable: false }
    Or { get: function() {}, set: function(value): {} }

we add a new property 'color23' to 'obj23'
- access it using obj23.color23
- but all such properties are <not-enumerable>
    for (prop23 in obj23) =======> empty 
    - bcoz obj23 has no iterable/ennumberable properties
    - it has only one property ie color23 which is not-enumerable

`empty Objects`
var emptyObj1 = { }
var emptyObj2 = { name: 'gopal' }
if(emptyObj1) { }        
if(emptyObj2) { }           // both emptyObj1 & emptyObj2 ====> evaluates to true


Object.keys()       // looks for only enumerable properties
                    // even in non-enumerable properties are there, it will evaluable to emptyObject
Object.getOwnPropertyNames(obj23)       // returns both enumerable & non-enumerable properties
for (var prop in obj23) { }     // obj23 = iterable... all enumerable properties in obj23