// Functions
module.exports = {
    reverse: (data) => {
        let result = data;
        result.reverse();
        return result;
    },
    mean: (data) => {
        if (!Array.isArray(data)) throw Error('Invalid data type');
        let sum = 0;
        for (number of data) {
            if (isNaN(Number(number))) throw Error('Invalid data type');
            sum += number;
        }
        return sum / (data.length);
    },
    unique: (data) => {
        let result = [];
        data.forEach(item => {
            if (!result.includes(item)) result.push(item);
        });
        return result;
    },
    uniqueNumbers: (data) => {
        let result = {};
        data.forEach((item) => {
            if (!Object.keys(result).includes(item)) {
                result[item] = 1;
            } else {
                result[item] += 1;
            }
        })
        return result;
    },
    sort: (data) => {
        data.sort((a, b) => {
            return a - b;
        })
        return data;
    }
}