let names = [5,3,2,63]
const sort = (data, type = 'desc') => {
    if (!/^(asc|desc)$/.test(type)) throw Error('Invalid data type');
    data.sort((a, b) => {
        if (type == 'desc') return b - a;
        else return a - b;
    })
    return data;
}

console.log(sort(names,'asc'))