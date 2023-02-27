class Node23 { 
    constructor(element, info = null) { 
        this.element = element; 
        this.info = info; 
        this.next = null;
    } 
}
/*********************************************************************/
class LinkedList23 {
	constructor() { this.head = null; this.size = 0; } 
	add23(element) {        
        var node = new Node23(element);
        var current;
        if (this.head == null) this.head = node;
        else {
            current = this.head;
            while (current.next) { current = current.next }
            current.next = node;
        }
        this.size ++;
    }
	insertAt23(element, index) {
        if (index < 0 || index > this.size) return console.log('pora rei'); 
        var node = new Node23(element);
        var prev23, curr23, next23; 
        if (index == 0) { node.next = this.head; this.head = node; } 
        else { 
            curr23 = this.head; var iterate = 0;
            while (iterate < index) { iterate++; prev23 = curr23; curr23 = curr23.next; }
            node.next = curr23; prev23.next = node;
        }
        this.size++;
    }
	removeFrom23(index) {
        if (index < 0 || index >= this.size) return console.log("Please Enter a valid index");
        var curr, prev, it = 0;
        curr = this.head; prev = curr;            
        if (index === 0) { this.head = curr.next; } 
        else {
            while (it < index) { it++; prev = curr; curr = curr.next; } 
            prev.next = curr.next;
        }
        this.size--;           
        return curr.element;
    }
	removeElement23(element) { 
        var current = this.head; var prev = null;        
        while (current != null) {            
            if (current.element === element) {
                if (prev == null) { this.head = current.next; } 
                else { prev.next = current.next; }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }  
	isEmpty23() { return this.size == 0; }
	size_Of_List23() { console.log(this.size); }
	printList23() { 
        var curr = this.head; var str = '';
        // while(curr) { console.log(curr.element); curr = curr.next; }
        while(curr) { str = str + ' --> ' + curr.element; curr = curr.next; }
        console.log(str);
    }
}
/*********************************************************************/
var ll1 = new LinkedList23();
ll1.add23(1);
ll1.add23(3);
ll1.add23(5);
ll1.add23(7);
ll1.add23(9);
ll1.printList23();
ll1.insertAt23(2,1);            // insert element 2 @ 1st position      (array starts from 0th position)
ll1.printList23();
ll1.removeElement23(7);
ll1.printList23();
ll1.size_Of_List23();
/*********************************************************************/


// linkedlist functions         ===> add23, insertAt23, removeFrom23, removeElement23, isEmpty23, size23, print23
    // add23 = if list is empty then add an element and it will be head; else if list isnt empty, iterate till list end & add there


// Why linked list
    // insertion in linked list ====> O(1)
    // But if you insert in middle of array ===> all elements must be moved one step right
    //          1 3 5 7 9
    //          1 2 3 5 7 9             // say, u insert 2... then 3, 5, 7, 9 must be right shifted by one index in array... 
                                        // costly operation
    // But thats not the case in linkedList    
/*********************************************************************/    