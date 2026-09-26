export {}

class Maths1{
    addition(x:number,y:number):void{
        let result:number=(x + y)
        console.log("Addition Result :"+result)
    }
}

class Maths2 extends Maths1{
    substraction(x:number,y:number):void{
        let result:number=(x - y)
        console.log("Substration Result :"+result)
    }
}

class Maths3 extends Maths2{
    division(x:number,y:number):void{
        let result:number=(x / y)
        console.log("Division Result :"+result)
    }
}

class Maths4 extends Maths1{
    multiplication(x:number,y:number):void{
        let result:number=(x * y)
        console.log("Multiplication Result :"+result)
    }
}

let obj1=new Maths4()
obj1.multiplication(13,10)
obj1.addition(50,70)

let obj2=new Maths3()
obj2.division(81,9)
obj2.substraction(57,7)
obj2.addition(90,70)
