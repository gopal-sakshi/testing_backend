
/*
    Smaller objects also generally have less fields for the garbage collector to visit when determining live & dead objects.

*/

// Use 1 << 1 for the second bit, 1 << 2 for the third bit etc.
const READONLY = 1;
class File {
	constructor() {
		this._bitField = 0
	}
	isReadOnly() {}
	setReadOnly() {
		this._bitField = 1 | this._bitField
	}
    // accessor methods are so short ====> very likely that they will be inlined at runtime ===> so there is no function call overhead involved.
	unsetReadOnly() {
		this._bitField = -2 & this._bitField
	}
}