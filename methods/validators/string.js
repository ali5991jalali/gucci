module.exports = {
    isMongoId: (data) => {
        return (/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i.test(data))
    }
}