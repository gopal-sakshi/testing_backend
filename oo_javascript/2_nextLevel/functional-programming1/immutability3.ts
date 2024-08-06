class Immutable {
    constructor(
        public readonly myProp: string ) {}
}

type Mutable = {
    -readonly [K in keyof Immutable]: Immutable[K] 
}

let imm = new Immutable("I'm save here")
imm.myProp = "nono doesnt work. and thats good"         // error

let mut: Mutable = imm          // you could also "hard" cast here: imm as unknown as Mutable
mut.myProp = "there we go"      // imm.myProp value is "there we go"

// https://dev.to/dhrn/series/23670