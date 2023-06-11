import Matemagica from '../../src/Matemagica/Matemagica'
import { DivideByZeroError } from '../../src/Matemagica/errors/DivideByZeroError'
import { InvalidArgumentError } from '../../src/Matemagica/errors/InvalidArgumentError'

const matemagica = new Matemagica()

describe("Matemagica addition suite tests", () => {
    it("should sum 2 numbers", () => {
        expect(matemagica.sum(1, 1)).toBe(2)
    })

    it("should throw an error if any argument is not a number", () => {
        assertIfAnyArgumentIsNotANumber(matemagica.sum)
    })
})

describe("Matemagica subtraction suite tests", () => {
    it("should subtract 2 numbers", () => {
        expect(matemagica.subtract(2, 1)).toBe(1)
    })

    it("should throw an error if any argument is not a number", () => {
        assertIfAnyArgumentIsNotANumber(matemagica.subtract)
    })
})

describe("Matemagica division suite tests", () => {
    it("should divide 2 numbers", () => {
        expect(matemagica.divide(6, 2)).toBe(3)
    })

    it("should throw an error if any argument is not a number", () => {
        assertIfAnyArgumentIsNotANumber(matemagica.divide)
    })

    it("should throw an error if divider is 0", () => {
        expect(() => matemagica.divide(2, 0)).toThrow(DivideByZeroError)
    })
})

describe("Matemagica multiplication suite tests", () => {
    it("should multiply 2 numbers", () => {
        expect(matemagica.multiply(2, 2)).toBe(4)
    })

    it("should throw an error if any argument is not a number", () => {
        assertIfAnyArgumentIsNotANumber(matemagica.multiply)
    })
})

function assertIfAnyArgumentIsNotANumber(operation: Function) {
    expect(() => operation('1', 1)).toThrow(InvalidArgumentError)
    expect(() => operation(1, '1')).toThrow(InvalidArgumentError)
    expect(() => operation(NaN, 1)).toThrow(InvalidArgumentError)
    expect(() => operation(1, NaN)).toThrow(InvalidArgumentError)
}