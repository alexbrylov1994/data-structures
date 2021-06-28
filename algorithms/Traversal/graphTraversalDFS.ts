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

const matrixTraversalDFS = function (vertex, graph, values, seen) {
    values.push(vertex);
    seen[vertex] = true;

    const connections = graph[vertex];
    for (let v = 0; v < connections.length; v++) {
        if (connections[v] > 0 && !seen[v]) {
            matrixTraversalDFS(v, graph, values, seen);
        }
    }
}

const matrixValues = [];
matrixTraversalDFS(0, adjacencyMatrix, matrixValues, {})

console.log(matrixValues);

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

const listTraversalDFS = function (vertex, graph, values, seen) {
    values.push(vertex);
    seen[vertex] = true;

    const connections = graph[vertex];
    for (let i = 0; i < connections.length; i++) {
        const connection = connections[i];

        if (!seen[connection]) {
            listTraversalDFS(connection, graph, values, seen);
        }
    }
}

const listValues = [];
listTraversalDFS(0, adjacencyList, listValues, {})

console.log(listValues);