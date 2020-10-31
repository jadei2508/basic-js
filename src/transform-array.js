module.exports = function transform(arr) {
    // throw new CustomError('Not implemented');
    if (arr === undefined) {
        return 'Unable to determine the time of year!'
    }
    if (arr.length === 0) return [];
    // if (Object.entries(arr).length > 0) throw new Error();
    // let index = 0;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            if (i < arr.length - 1) {
                i++;
            }
        } else if (arr[i] === '--discard-prev') {
            if (i - 1 >= 0 && arr[i - 2] !== '--discard-next') {
                result.pop();
            }
        } else if (arr[i] === '--double-next') {
            if (i < arr.length - 1) {
                result.push(arr[i + 1])
            }
        } else if (arr[i] === '--double-prev') {
            if (i >= 1 && arr[i - 2] !== '--discard-next') {
                result.push(arr[i - 1]);
            }
        } else {
            result.push(arr[i])
        }
    }
    return result;
};

