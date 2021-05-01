// Code your solution here
//* findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

function findMatching(collection, match){
    const filteredCollection = collection.filter((element) => {
        if (element.toLowerCase() === match.toLowerCase()){
            return element;
        }
    })
    return filteredCollection;
}



//* fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(collection, match){
    const matchLength = match.split('').length;
    const filteredCollection = collection.filter((element) => {
        const elementSlice = element.substring(0, matchLength);
        return elementSlice === match;
    })
    return filteredCollection;
}

//* matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.

function matchName(collection, match){
    const filteredCollection = collection.filter((element) => {
        return element.name === match;
    })
    return filteredCollection;
}