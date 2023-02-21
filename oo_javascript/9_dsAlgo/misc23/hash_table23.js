// https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/
// https://www.geeksforgeeks.org/hashing-in-javascript/
// https://stackoverflow.com/questions/456932/hash-table-in-javascript
class HashTable {
    constructor() {
        this.table = new Array(127);
        this.size = 0;
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) { hash += key.charCodeAt(i); }
        return hash % this.table.length;
    }

    set(key, value) {
        const index = this.hash(key);
        this.table[index] = [key, value];
        this.size++;
    }

    get(key) {
        const index = this.hash(key);
        return this.table[index];
    }

    remove(key) {
        const index = this.hash(key);      
        if (this.table[index] && this.table[index].length) {
            this.table[index] = undefined;
            this.size--;
            return true;
        } else { 
            return false; 
        }
    }
}

