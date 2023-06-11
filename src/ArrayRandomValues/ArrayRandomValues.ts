import { InvalidArgumentError } from './errors/InvalidArgumentError';
import { OutOfArrayRangeError } from './errors/OutOfArrayRangeError';

class ArrayRandomValues {
    getArrayRandomValues(array: any[], randomValueQuantity: number){
        const min = 0;
        const arrayLength = array.length

        if(randomValueQuantity > arrayLength){
            throw new OutOfArrayRangeError()
        }

        const randomArray = new Array(randomValueQuantity)
        const randomIndexes: number[] = []

        for(let i = 0; i < randomValueQuantity; i++){
            let randomIndex = this.getRandomValueBetweenARange(min, arrayLength)
            
            while(randomIndexes.includes(randomIndex)){
                randomIndex = this.getRandomValueBetweenARange(min, arrayLength)
            }

            randomIndexes.push(randomIndex)
            randomArray[i] = (array[randomIndex])
        }
            
        return randomArray
    }

    getRandomValueBetweenARange(min: number, max: number){
        if(typeof min !== 'number' || typeof max !== 'number' || isNaN(min) || isNaN(max)){
            throw new InvalidArgumentError()
        }

        min = Math.ceil(min);
        max = Math.floor(max);    
        return Math.floor(Math.random() * (max - min) + min)
    }
}

export default ArrayRandomValues