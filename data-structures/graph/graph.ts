interface IHash {
    [key: string]: any[];
}

export default class Graph {
    adjacencyList: IHash
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        // no override
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            if (!this.adjacencyList[vertex1].includes(vertex2)) {
                this.adjacencyList[vertex1].push(vertex2);
            }
            if (!this.adjacencyList[vertex2].includes(vertex1)) {
                this.adjacencyList[vertex2].push(vertex1);
            }
        }
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            if (this.adjacencyList[vertex1].includes(vertex2)) {
                let index = this.adjacencyList[vertex1].indexOf(vertex2);
                this.adjacencyList[vertex1].splice(index, 1);
            }
            if (this.adjacencyList[vertex2].includes(vertex1)) {
                let index = this.adjacencyList[vertex2].indexOf(vertex1);
                this.adjacencyList[vertex2].splice(index, 1);
            }
        }
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const vertexToRemove = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, vertexToRemove);
        }

        delete this.adjacencyList[vertex];
    }
}
