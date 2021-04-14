interface WeightedEdge {
    vertex: any,
    weight: number,
}
interface IHash {
    [key: string]: WeightedEdge[];
}
export default class WeightedGraph {
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

    addEdge(vertex1, vertex2, weight) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            if (!this.adjacencyList[vertex1].includes(vertex2)) {
                this.adjacencyList[vertex1].push({ vertex: vertex2, weight: weight });
            }
            if (!this.adjacencyList[vertex2].includes(vertex1)) {
                this.adjacencyList[vertex2].push({ vertex: vertex1, weight: weight });
            }
        }
    }
}