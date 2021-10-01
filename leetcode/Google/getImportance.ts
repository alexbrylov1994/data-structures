// 690. Employee Importance

// You have a data structure of employee information, which includes the employee's unique id, their importance value, and their direct subordinates' id.

// You are given an array of employees employees where:

// employees[i].id is the ID of the ith employee.
// employees[i].importance is the importance value of the ith employee.
// employees[i].subordinates is a list of the IDs of the subordinates of the ith employee.
// Given an integer id that represents the ID of an employee, return the total importance value of this employee and all their subordinates.

// Example 1:

// Input: employees = [[1,5,[2,3]],[2,3,[]],[3,3,[]]], id = 1
// Output: 11
// Explanation: Employee 1 has importance value 5, and he has two direct subordinates: employee 2 and employee 3.
// They both have importance value 3.
// So the total importance value of employee 1 is 5 + 3 + 3 = 11.
// Example 2:


// Input: employees = [[1,2,[5]],[5,-3,[]]], id = 5
// Output: -3

class Employee {
    id: number
    importance: number
    subordinates: number[]
    constructor(id: number, importance: number, subordinates: number[]) {
        this.id = (id === undefined) ? 0 : id;
        this.importance = (importance === undefined) ? 0 : importance;
        this.subordinates = (subordinates === undefined) ? [] : subordinates;
    }
}


function getImportance(employees: Employee[], id: number): number {
    const hashMap = {};

    employees.forEach(employee => hashMap[employee.id] = employee);

    return dfs(id);

    function dfs(id) {
        const info = hashMap[id] as Employee;
        let res = info.importance;

        for (const subordinate of info.subordinates) {
            res += dfs(subordinate);
        }

        return res;
    }
};

// space and time 0(N)