// 937. Reorder Data in Log Files

// You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

// There are two types of logs:

// Letter-logs: All words (except the identifier) consist of lowercase English letters.
// Digit-logs: All words (except the identifier) consist of digits.
// Reorder these logs so that:

// The letter-logs come before all digit-logs.
// The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
// The digit-logs maintain their relative ordering.
// Return the final order of the logs.

// Example 1:

// Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
// Explanation:
// The letter-log contents are all different, so their ordering is "art can", "art zero", "own kit dig".
// The digit-logs have a relative order of "dig1 8 1 5 1", "dig2 3 6".
// Example 2:

// Input: logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
// Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]


function reorderLogFiles(logs: string[]): string[] {
    // The letter-logs come before all digit-logs.
    // The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
    // The digit-logs maintain their relative ordering.
    // Return the final order of the logs.

    let letterLogs = []
    let numberLogs = [];

    for (let log of logs) {
        // second element is number
        let type = log.split(' ')[1];

        if (Number.isInteger((parseInt(type)))) {
            numberLogs.push(log)
        } else {
            letterLogs.push(log);
        }
    }

    letterLogs.sort((log1, log2) => {
        let logBody1 = log1.split(' ');
        let identifier1 = logBody1[0];
        let content1 = logBody1.slice(1, logBody1.length).join(' ');

        let logBody2 = log2.split(' ');
        let identifier2 = logBody2[0];
        let content2 = logBody2.slice(1, logBody2.length).join(' ');

        // The letter-logs are sorted lexicographically by their contents
        if (content1 < content2) {
            return -1;
        }
        if (content1 > content2) {
            return 1
        }

        // If their contents are the same, then sort them lexicographically by their identifiers.
        if (identifier1 < identifier2) {
            return -1;
        }
        if (identifier1 > identifier2) {
            return 1
        }

        // a = b
        return 0;
    })

    // The letter-logs come before all digit-logs.

    // The digit-logs maintain their relative ordering, so we don't need to parse number logs
    return [...letterLogs, ...numberLogs];
};

// N: number of logs
// M: max length of a log
// Time: O(M*N*log(N))
// Space: O(M*log(N))