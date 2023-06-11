import ArrayRandomValues from '../../src/ArrayRandomValues/ArrayRandomValues'
import { InvalidArgumentError } from '../../src/ArrayRandomValues/errors/InvalidArgumentError';
import { OutOfArrayRangeError } from '../../src/ArrayRandomValues/errors/OutOfArrayRangeError';

const arrayRandomValues = new ArrayRandomValues()
const mockValues = [1, 2, 3, 4, 5]

describe("ArrayRandomValue suite tests", () => {
    describe("get a random value between a range", () => {
        it("should get a value between a range", () => {
            const min = 2;
            const max = 5;
    
            const generatedValue = arrayRandomValues.getRandomValueBetweenARange(min, max)
    
            expect(generatedValue).toBeGreaterThanOrEqual(min)
            expect(generatedValue).toBeLessThanOrEqual(max)
        })    
    
        it("should throw an error if any argument is not a number", () => {
            //@ts-expect-error
            expect(() => arrayRandomValues.getRandomValueBetweenARange('1', 1)).toThrow(InvalidArgumentError)
            //@ts-expect-error
            expect(() => arrayRandomValues.getRandomValueBetweenARange(1, '1')).toThrow(InvalidArgumentError)
            expect(() => arrayRandomValues.getRandomValueBetweenARange(NaN, 1)).toThrow(InvalidArgumentError)
            expect(() => arrayRandomValues.getRandomValueBetweenARange(1, NaN)).toThrow(InvalidArgumentError)
        })
    })

    describe("get random values from an array", () => {
        it("should get a quantity of random values from an array", () => {        
            const randomValueQuantity = 2
            const gotRandomValues = arrayRandomValues.getArrayRandomValues(mockValues, randomValueQuantity)
    
            expect(Array.isArray(gotRandomValues))
            expect(gotRandomValues.length).toBe(randomValueQuantity)
        })
    
        it("should throw an error if random value quantity is greater than array length", () => {        
            const randomValueQuantity = 6
    
            expect(() => arrayRandomValues.getArrayRandomValues(mockValues, randomValueQuantity)).toThrow(OutOfArrayRangeError)
        })
    })
})

