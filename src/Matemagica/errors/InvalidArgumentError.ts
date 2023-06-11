export class InvalidArgumentError extends Error{
    constructor(){
        super("Argument should be a number")
    }
}