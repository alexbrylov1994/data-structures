// 305. Number of Islands II

// You are given an empty 2D binary grid grid of size m x n. The grid represents a map where 0's represent water and 1's represent land. Initially, all the cells of grid are water cells (i.e., all the cells are 0's).

// We may perform an add land operation which turns the water at position into a land. You are given an array positions where positions[i] = [ri, ci] is the position (ri, ci) at which we should operate the ith operation.

// Return an array of integers answer where answer[i] is the number of islands after turning the cell (ri, ci) into a land.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: m = 3, n = 3, positions = [[0,0],[0,1],[1,2],[2,1]]
// Output: [1,1,2,3]
// Explanation:
// Initially, the 2d grid is filled with water.
// - Operation #1: addLand(0, 0) turns the water at grid[0][0] into a land. We have 1 island.
// - Operation #2: addLand(0, 1) turns the water at grid[0][1] into a land. We still have 1 island.
// - Operation #3: addLand(1, 2) turns the water at grid[1][2] into a land. We have 2 islands.
// - Operation #4: addLand(2, 1) turns the water at grid[2][1] into a land. We have 3 islands.
// Example 2:

// Input: m = 1, n = 1, positions = [[0,0]]
// Output: [1]

const Directions = [
    [-1, 0], // up
    [0, 1], // right
    [1, 0], // down
    [0, -1] // left
];

function numIslands2(m: number, n: number, positions: number[][]): number[] {
    if (!positions.length) {
        return [];
    }

    let grid = new Array(m).fill(0).map(() => new Array(n).fill('0'));
    let result = [];

    for (let position of positions) {
        let row = position[0];
        let col = position[1];

        grid[row][col] = '1'

        let islandCount = 0
        let visited = new Array(m).fill(0).map(() => new Array(n).fill(false));

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] === '1' && !visited[row][col]) {
                    islandCount++;
                    visited[row][col] = true;
                    const queue = [];
                    queue.push([row, col]);

                    while (queue.length) {
                        const currentPos = queue.shift();
                        const currentRow = currentPos[0];
                        const currentCol = currentPos[1];

                        for (let i = 0; i < Directions.length; i++) {
                            const currentDir = Directions[i];
                            const nextRow = currentRow + currentDir[0];
                            const nextCol = currentCol + currentDir[1];

                            if (nextRow < 0 || nextRow >= grid.length || nextCol < 0 || nextCol >= grid[0].length) continue;

                            if (grid[nextRow][nextCol] === '1' && !visited[nextRow][nextCol]) {
                                queue.push([nextRow, nextCol]);
                                visited[nextRow][nextCol] = true;
                            }
                        }
                    }
                }
            }
        }
        result.push(islandCount);
    }

    return result;
};

// Time complexity : O(L×m×n) where LL is the number of operations, mm is the number of rows and nn is the number of columns.

// Space complexity : O(m×n) for the grid and visited 2D arrays.

// Union Find

class UnionNode {
    id: string;
    parent: UnionNode;
    size: number = 1;

    constructor(id: string) {
        this.id = id;
        this.parent = this;
    }
}

class DisjointSet {
    nodes: Map<string, UnionNode> = new Map();
    numSets: number = 0;

    find(node: UnionNode): UnionNode {
        if (node.parent === node) {
            return node;
        }

        node.parent = this.find(node.parent);

        return node.parent;
    }

    union(idA: string, idB: string) {
        if (!this.nodes.has(idA) || !this.nodes.has(idB)) { throw new Error(); }

        const nodeA = this.nodes.get(idA)!;
        const nodeB = this.nodes.get(idB)!;

        const parentA = this.find(nodeA);
        const parentB = this.find(nodeB);

        if (parentA === parentB) {
            return;
        }

        const lesser = parentA.size < parentB.size ? parentA : parentB;
        const greater = lesser === parentA ? parentB : parentA;

        lesser.parent = greater;
        greater.size += lesser.size;

        this.numSets--;
    }

    make(id: string) {
        if (this.nodes.has(id)) { return; }

        this.nodes.set(id, new UnionNode(id));
        this.numSets++;
    }
}

function getId(position: number[]): string {
    return position.join("-");
}

const neighborOffsets = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
];

function numIslands2Union(m: number, n: number, positions: number[][]): number[] {
    const ds = new DisjointSet();
    const islands: number[] = [];

    const plot: number[][] = Array(m);
    for (let i = 0; i < m; i++) {
        plot[i] = Array(n).fill(0);
    }

    for (const p of positions) {
        plot[p[0]][p[1]] = 1;

        ds.make(getId(p));

        for (const offset of neighborOffsets) {
            const neighbor: number[] = [p[0] + offset[0], p[1] + offset[1]];

            if (neighbor[0] < 0 || neighbor[0] >= m || neighbor[1] < 0 || neighbor[1] >= n) {
                continue;
            }

            if (plot[neighbor[0]][neighbor[1]] === 1) {
                ds.union(getId(p), getId(neighbor));
            }
        }

        islands.push(ds.numSets);
    }

    return islands;
};

// Time complexity : O(M×N) where MM is the number of rows and NN is the number of columns. Note that Union operation takes essentially constant time[1] when UnionFind is implemented with both path compression and union by rank.

// Space complexity : O(M×N) as required by UnionFind data structure.