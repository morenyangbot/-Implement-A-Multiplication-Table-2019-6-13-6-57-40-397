function prefixInteger(num, length) {
    return (Array(length).join(' ') + num).slice(-length);
}

function getMax(a, b) {
    return a > b ? a : b;
}

function isStartSmallerThanEnd(start, end) {
    return start <= end;
}

function isArgumentsInTheRange(start, end) {
    return start >= 1 && start <= 1000 && end >= 1 && end <= 1000;
}

function getMultiplicationTableText(start, end, startEndCheck, rangeCheck) {
    if (!startEndCheck) {
        return null
    }
    if (!rangeCheck) {
        return 'Arguments out of range.'
    }
    let numLength = `${getMax(start, end)}`.length;
    let str = ""
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= i; j++) {
            let resultLength = `${j * end}`.length
            str += `${prefixInteger(i, numLength)} * ${prefixInteger(j, numLength)} = ${prefixInteger(i * j, resultLength)}`;
            i !== j && (str += '\t')
        }
        i !== end && (str += '\n')
    }
    return str;
}

exports.getMultiplicationTableText = getMultiplicationTableText
exports.isArgumentsInTheRange = isArgumentsInTheRange
exports.isStartSmallerThanEnd = isStartSmallerThanEnd

