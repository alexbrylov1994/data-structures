export function depthFirstRecursive(graph, vertex) {
    const visited = {};
    const result = [];

    const dfs = (vertex) => {
        if (!vertex) {
            return null;
        }

        visited[vertex] = true;
        result.push(vertex);

        for (let neighbor of graph.adjacencyList[vertex]) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
    };

    dfs(vertex);

    return result;

}

export function depthFirstIterative(graph, start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
        currentVertex = stack.pop();
        result.push(currentVertex);

        graph.adjacencyList[currentVertex].forEach(neighbor => {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                stack.push(neighbor)
            }
        });
    }
    return result;
}