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
    sort: (data, type = 'desc') => {
        if (!/^(asc|desc)$/.test(type)) throw Error('Invalid data type');
        data.sort((a, b) => {
            if (type == 'desc') return b - a;
            else return a - b;
        })
        return data;
    }
}