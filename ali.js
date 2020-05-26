let names = ['asas',5,3,2,63]
const sort = (data) => {
    data.sort((a, b) => {
        return b-a;
    })
    return data;
}

console.log(sort(names))