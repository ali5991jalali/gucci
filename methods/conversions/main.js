module.exports = {
    boolean: (data) => {
        if (!/^(true|false)$/.test(data)) throw Error('Invalid data type')
        if (/^true$/.test(data)) return true;
        return false;
    }
}