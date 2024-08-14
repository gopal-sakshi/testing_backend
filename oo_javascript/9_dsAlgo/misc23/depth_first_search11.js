// DFS -- similar to depth first traversal of tree... but catch is graph may contain cycles (a node may be visited twice)

function addEdge(adj, s, t) {
    adj[s].push(t);             // Add edge from vertex s to t
    adj[t].push(s);             // Due to undirected Graph
}

function dfsRec(adj, visited, s) {
    visited[s] = true;                  // Mark the current vertex as visited
    process.stdout.write(s + " ");          // Print the current vertex

    // Recursively visit all adjacent vertices that are not visited yet
    for (let i of adj[s]) {
        if (!visited[i]) {
            dfsRec(adj, visited, i);
        }
    }
}

function dfs(adj, s) {
    const visited = new Array(adj.length).fill(false);
    dfsRec(adj, visited, s);
}

const V = 5;                            // Number of vertices in the graph
const adj = Array.from({length : V}, () => []);     // Create an adjacency list for the graph

// Define the edges of the graph
const edges = [ 
    [ 1, 2 ], 
    [ 1, 0 ], 
    [ 2, 0 ], 
    [ 2, 3 ], 
    [ 2, 4 ] 
];

// Populate the adjacency list with edges
for (let e of edges) {
    addEdge(adj, e[0], e[1]);
}

const source = 1;
console.log("DFS from source: " + source);
dfs(adj, source);
