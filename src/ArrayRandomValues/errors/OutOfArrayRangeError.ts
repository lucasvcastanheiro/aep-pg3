export class OutOfArrayRangeError extends Error{
    constructor(){
        super("Random value quantity can't be greater then array length")
    }
}