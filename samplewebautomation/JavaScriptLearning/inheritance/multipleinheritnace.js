class Maths1{
    addition(x,y){
        console.log("Addition Result :"+(x+y))
    }
}

class Maths2{
    substraction(a,b){
        let result=(a - b)
        console.log("Substraction Result :"+(a - b))
    }
}

class Maths3 extends Maths1, Maths2{
    division(x,y){
        let result=(x/y)
        console.log("Division Result :"+(x/y))
    }
}

let obj=new Maths3()
obj.division(600,12)
obj.substraction(70,30)
obj.addition(80,30)