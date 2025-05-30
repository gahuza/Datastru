class Graph {
    constructor() {
      this.adjList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjList.has(vertex)) {
        this.adjList.set(vertex, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.adjList.get(vertex1).push(vertex2);
      this.adjList.get(vertex2).push(vertex1); // For undirected graph
    }
  
    printGraph() {
      for (let [vertex, edges] of this.adjList) {
        console.log(`${vertex} -> ${edges.join(', ')}`);
      }
    }
  }
  
  // Usage
  const graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addEdge("A", "B");
  graph.printGraph();
  