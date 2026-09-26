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

class Maths3 extends Maths1{
    division(x:number,y:number):void{
        let result:number=(x / y)
        console.log("Division Result :"+result)
    }
}

let obj1=new Maths2()
obj1.substraction(55,15)
obj1.addition(50,70)

let obj2=new Maths3()
obj2.division(45,9)
obj2.addition(70,80)