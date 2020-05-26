let names = ['amsb', 2,'akshha','ali','ali',2,5]
function uniqueNumbers(data) {
    let result = {};
    data.forEach((item) => {
        if (!Object.keys(result).includes(item)) {
            result[item] = 1;
        } else {
            result[item] += 1;
        }
    })
    return result;
}


console.log(uniqueNumbers(names))