interface IHash {
    [key: string]: number;
}

const validAnagram = (word: string, anagram: string): boolean => {
    // takes 2 strings 
    // retuns true if an annagram, false otherwise

    // steps:
    // if lenghts don't match -> false
    if (word.length !== anagram.length) {
        return false;
    }

    // loop string one and add characters to a has map
    //      if exists, increment
    //      if doesn't, add to hash map, set to 1
    const hashmap: IHash = {};

    word.split('').forEach((letter: string) => {
        if (hashmap[letter]) {
            hashmap[letter] += 1;
        } else {
            hashmap[letter] = 1;
        }
    });

    // loop over 2nd word and check hashmap
    //      if letter doesn't exist -> false
    //      if letter exists, decrease by 1
    //      if letter bellow 0, false
    for (let i = 0; i < anagram.length; i++) {
        // when if 0 === false (when 0, we don't need to decremenet, since we know it's false)
        const letter = anagram[i];
        if (hashmap[letter]) {
            hashmap[letter] -= 1;
        } else {
            return false;
        }
    }
    // for (let letter of anagram.split(''))
    // letter is element of []

    // loop over hashmap
    // if a counter != 0 false
    // if all are good -> true

    // not necesarry, if extra letters or w.e will fail earlier
    // for (let key of Object.keys(hashmap)) {
    //     if (hashmap[key] !== 0) {
    //         return false;
    //     }
    // }

    return true;
}

console.log('result', validAnagram('anagram', 'nagaram'));
