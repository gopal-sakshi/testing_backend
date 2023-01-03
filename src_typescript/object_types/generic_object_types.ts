// Read this as "A Box of Type23 ===> something whose contents is of type Type23"
    // When TypeScript sees Box<string>
    // it will replace every instance of Type23 in Box<Type23> with string
    // and end up working with something like { contents: string }
// Box is reusable in that Type23 can be substituted with anything
    // Type23 can be string (or) number (or) boolean
interface Box<Type23> {
    contents: Type23;
}


// we can avoid overloads entirely by instead using generic functions
function setContents<Type>(box: Box<Type>, newContents: Type) {
    box.contents = newContents;
}





