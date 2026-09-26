export default class Claculator {

    addition(x: number, y: number): void {
        let result: number = 0
        result = (x + y)
        console.log("Addition Result :" + result)
    }

    multiplication(a: number, b: number): void {
        let result: number = 0
        result = (a * b)
        console.log("Multiplication Result :" + result)
    }
}