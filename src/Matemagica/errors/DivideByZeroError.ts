export class DivideByZeroError extends Error{
    constructor(){
        super("Divider can't be 0")
    }
}