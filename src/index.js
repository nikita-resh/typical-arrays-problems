exports.min = function min(array) {
    if (typeof array == "undefined") {
        return 0;
    }
    if (array.length > 0) {
        let min = Infinity;
        for (let i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (typeof array == "undefined") {
        return 0;
    }
    if (array.length > 0) {
        let max = -Infinity;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (typeof array == "undefined") {
        return 0;
    }
    if (array.length > 0) {
        let s = 0;
        for (let i = 0; i < array.length; i++) {
            s += array[i];
        }
        return s / array.length;
    } else {
        return 0;
    }
};
