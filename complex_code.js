/*
  filename: complex_code.js
  content: A complex code example implementing a custom graph data structure and performing various graph operations.
*/

class Graph {
  constructor(size) {
    this.numVertices = size;
    this.adjMatrix = Array(size).fill().map(() => Array(size).fill(0));
  }

  addEdge(v1, v2) {
    this.adjMatrix[v1][v2] = 1;
    this.adjMatrix[v2][v1] = 1;
  }

  removeEdge(v1, v2) {
    this.adjMatrix[v1][v2] = 0;
    this.adjMatrix[v2][v1] = 0;
  }

  printGraph() {
    for (let i = 0; i < this.numVertices; i++) {
      let row = '';
      for (let j = 0; j < this.numVertices; j++) {
        row += `${this.adjMatrix[i][j]} `;
      }
      console.log(row);
    }
  }

  bfs(startingNode) {
    const visited = Array(this.numVertices).fill(false);
    const queue = [];

    visited[startingNode] = true;
    console.log(`BFS starting from node ${startingNode}:`);

    queue.push(startingNode);
    while (queue.length !== 0) {
      let currentNode = queue.shift();
      console.log(currentNode);

      for (let i = 0; i < this.numVertices; i++) {
        if (this.adjMatrix[currentNode][i] === 1 && !visited[i]) {
          queue.push(i);
          visited[i] = true;
        }
      }
    }
  }

  dfs(startingNode) {
    const visited = Array(this.numVertices).fill(false);

    console.log(`DFS starting from node ${startingNode}:`);
    this.dfsHelper(startingNode, visited);
  }

  dfsHelper(currentNode, visited) {
    visited[currentNode] = true;
    console.log(currentNode);

    for (let i = 0; i < this.numVertices; i++) {
      if (this.adjMatrix[currentNode][i] === 1 && !visited[i]) {
        this.dfsHelper(i, visited);
      }
    }
  }
}

// Example usage of the graph class
const graph = new Graph(6);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);
console.log('Adjacency Matrix:');
graph.printGraph();
console.log('\n');
graph.bfs(0);
console.log('\n');
graph.dfs(0);

// Add more complex graph operations and methods below...

// End of code