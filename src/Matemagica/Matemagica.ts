import { DivideByZeroError } from './errors/DivideByZeroError';
import { InvalidArgumentError } from './errors/InvalidArgumentError'

class Matemagica {
    sum(a: number, b:number){
        Matemagica.validateArguments(a, b)

        return a + b
    }

    subtract(a: number, b: number){
        Matemagica.validateArguments(a, b)

        return a - b;
    }

    divide(a: number, b: number){
        Matemagica.validateArguments(a, b)

        if(b === 0){
            throw new DivideByZeroError()
        }

        return a / b;
    }

    multiply(a: number, b: number){
        Matemagica.validateArguments(a, b)

        return a * b;
    }

    static validateArguments(a: number, b: number){
        if(typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)){
            throw new InvalidArgumentError()
        }
    }
}

export default Matemagica
