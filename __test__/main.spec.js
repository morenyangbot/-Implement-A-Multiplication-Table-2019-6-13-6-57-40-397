const getMultiplicationTable = require('../main')



describe('Check is start smaller than end', () => {

    it("Should return true in isStartSmallerThanEnd when call 1, 2 ", () => {
        expect(getMultiplicationTable.isStartSmallerThanEnd(1, 2)).toBe(true);
    })

    it("Should return false in isStartSmallerThanEnd when call 10, 2", () => {
        expect(getMultiplicationTable.isStartSmallerThanEnd(10, 2)).toBe(false);
    })

    it("Should return true in isStartSmallerThanEnd when call 2, 2", () => {
        expect(getMultiplicationTable.isStartSmallerThanEnd(2, 2)).toBe(true);
    })
})

describe('Arguments range check', () => {

    it("Should return true in isArgumentsInTheRange when call 1, 1000", () => {
        expect(getMultiplicationTable.isArgumentsInTheRange(1, 1000)).toBe(true)
    })

    it("Should return false in isArgumentsInTheRange when call 0, 1000", () => {
        expect(getMultiplicationTable.isArgumentsInTheRange(0, 1000)).toBe(false)
    })

    it("Should return false in isArgumentsInTheRange when call 1, 1001", () => {
        expect(getMultiplicationTable.isArgumentsInTheRange(1, 1001)).toBe(false)
    })

    it("Should return false in isArgumentsInTheRange when call 0, 1001", () => {
        expect(getMultiplicationTable.isArgumentsInTheRange(0, 1001)).toBe(false)
    })

    it("Should return false in isArgumentsInTheRange when call -1, 0", () => {
        expect(getMultiplicationTable.isArgumentsInTheRange(-1, 0)).toBe(false)
    })

    it("Should return false in isArgumentsInTheRange when call 1001, 1002", () => {
        expect(getMultiplicationTable.isArgumentsInTheRange(1001, 1002)).toBe(false)
    })
})

describe('Multiplication Table Check', () => {
    it("Should return multipalication table when call 7, 11", () => {
        expect(getMultiplicationTable.getMultiplicationTableText(7, 11, true, true)).toBe(
            ` 7 *  7 = 49\n` +
            ` 8 *  7 = 56	 8 *  8 = 64\n` +
            ` 9 *  7 = 63	 9 *  8 = 72	 9 *  9 = 81\n` +
            `10 *  7 = 70	10 *  8 = 80	10 *  9 = 90	10 * 10 = 100\n` +
            `11 *  7 = 77	11 *  8 = 88	11 *  9 = 99	11 * 10 = 110	11 * 11 = 121`)
    })

    it("Should return null table when start-end check is false", () => {
        expect(getMultiplicationTable.getMultiplicationTableText(3, 2, false, true)).toBe(null)
    })

    it("Shoult return out of range when range check is false", () => {
        expect(getMultiplicationTable.getMultiplicationTableText(-1, 10, true, false)).toBe('Arguments out of range.')
    })
})
