export {}

class Maths1{
    addition(x:number,y:number):void{
        let result:number=(x + y)
        console.log("Addition Result :"+result)
    }
}

class Maths2 {
    substraction(x:number,y:number):void{
        let result:number=(x - y)
        console.log("Substration Result :"+result)
    }
}

class Maths3 extends Maths1, Maths2{
    division(x:number,y:number):void{
        let result:number=(x / y)
        console.log("Division Result :"+result)
    }
}