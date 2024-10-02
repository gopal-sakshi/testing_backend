let COUNT = 10; 

class Node {
	constructor(data) {
		this.data = data; 
		this.left = null; 
		this.right = null;
	}
}

function print2DUtil(root,space) {	
	if (root == null) return;
	space += COUNT; 
	print2DUtil(root.right, space);         // process right child
	console.log("\n"); 
	for (let i = COUNT; i < space; i++) 
		console.log(" "); 
	console.log(root.data + "\n"); 
	print2DUtil(root.left, space);          // process left child
}

function print2D(root) {	
	print2DUtil(root, 0); 
}

// Driver code 
let root = new Node(1); 
root.left = new Node(2); 
root.right = new Node(3); 

root.left.left = new Node(4); 
root.left.right = new Node(5); 
root.right.left = new Node(6); 
root.right.right = new Node(7); 

root.left.left.left = new Node(8); 
root.left.left.right = new Node(9); 
root.left.right.left = new Node(10); 
root.left.right.right = new Node(11); 
root.right.left.left = new Node(12); 
root.right.left.right = new Node(13); 
root.right.right.left = new Node(14); 
root.right.right.right = new Node(15); 

print2D(root); 
