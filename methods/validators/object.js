module.exports = {
    isObject: (data) => {
        if (typeof (data) == 'object' && data != null) return true;
        return false;
    }
}