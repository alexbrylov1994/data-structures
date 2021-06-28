const adjacencyMatrix = [
    [0, 1, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0]
];

const matrixTraversalBFS = function (graph) {
    const seen = {};
    const queue = [0];
    const values = [];

    while (queue.length) {
        const vertex = queue.shift();

        values.push(vertex);
        seen[vertex] = true;

        const connections = graph[vertex];
        for (let v = 0; v < connections.length; v++) {
            if (connections[v] > 0 && !seen[v]) {
                queue.push(v);
            }
        }
    }

    return values;
}

console.log(matrixTraversalBFS(adjacencyMatrix));


const adjacencyList = [
    [1, 3],
    [0],
    [3, 8],
    [0, 2, 4, 5],
    [3, 6],
    [3],
    [4, 7],
    [6],
    [2]
];

const listTraversalBFS = function (graph) {
    const seen = {};
    const queue = [0];
    const values = [];

    while (queue.length) {
        const vertex = queue.shift();

        values.push(vertex);
        seen[vertex] = true;

        const connections = graph[vertex];
        for (let i = 0; i < connections.length; i++) {
            const connection = connections[i];
            if (!seen[connection]) {
                queue.push(connection);
            }
        }
    }

    return values;
}

console.log(listTraversalBFS(adjacencyList));