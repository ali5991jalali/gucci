module.exports = {
    isArray: (data) => {
        return Array.isArray(data)
    },
    isArrayOfObject(data) {
        if (!Array.isArray(data)) return false;
        for (item of data) {
            if (typeof (item) != 'object' || item == null) return false;
        }
        return true;
    }
}