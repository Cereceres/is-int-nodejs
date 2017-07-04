const base = 10;

module.exports = (_number) => {
    const number = Number(_number);
    return parseInt(number, base) === number;
};