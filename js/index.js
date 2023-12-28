const arr = [1, 2, 3];
//--------------some-----------------//
function some(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

console.log(some(arr, el => el > 1)); 
//--------------filter-----------------//
function filter(array, predicate) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(filter(arr, el => el > 1)); 
//--------------reduce-----------------//
function reduce(array, predicate, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
        accumulator = predicate(accumulator, array[i], i, array);
    }

    return accumulator;
}

console.log(reduce(arr, (sum, el) => sum + el, 0)); 