module.exports = {
    sort: (data) => {
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
    }
}