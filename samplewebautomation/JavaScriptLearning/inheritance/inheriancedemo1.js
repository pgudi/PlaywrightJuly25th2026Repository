class Maths1{
    addition(x,y){
        console.log("Addition Result :"+(x+y))
    }
}

class Maths2 extends Maths1{
    substraction(a,b){
        let result=(a - b)
        console.log("Substraction Result :"+(a - b))
    }
}

let obj=new Maths2()
obj.substraction(55,15)
obj.addition(70,20)
