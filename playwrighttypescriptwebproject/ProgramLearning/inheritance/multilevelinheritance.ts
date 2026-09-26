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

let obj=new Maths3()
obj.division(81,9)
obj.substraction(57,7)
obj.addition(90,70)