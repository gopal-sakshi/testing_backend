function addNumberOrString23<Type> (arg1:Type, arg2:Type):Type {
    return arg1
}

function identity23<Type>(arg1: Type): Type {
    return arg1
}

let id1 = ""

/*
    ActivatedRouteSnapshot is not a provider and cannot be injected
 
    Use ActivatedRoute instead of ActivatedRouteSnapshot. Then you can use the snapshot like this:
    
    constructor(activatedRoute: ActivatedRoute) { 
        var snapshot = activatedRoute.snapshot;
    }

*/