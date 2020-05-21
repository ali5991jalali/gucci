module.exports = {
    isBoolean: (data) => {
        return (/^(true|false)$/.test(data));
    }
}