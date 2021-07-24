function countComponents(n: number, edges: number[][]): number {
    if (n <= 1) {
        return n;
    }

    let map = new Array(n);

    // index is node and so far it points to itself
    for (let i = 0; i < n; i++) {
        map[i] = i;
    }

    // Union find
    // go over edge and set one of parents (index === value) to the value connected

    for (let edge of edges) {

        let start = edge[0];
        let end = edge[1];

        if (map[start] === start) {
            map[start] = end;
        } else {
            map[end] = start;
        }
    }
    console.log('arr:', map);
    // now we count parents, index === value
    let components = 0;
    for (let i = 0; i < map.length; i++) {
        if (i === map[i]) {
            components++;
        }
    }

    return components;
};

console.log(countComponents(5, [[0, 1], [1, 2], [3, 4]]))