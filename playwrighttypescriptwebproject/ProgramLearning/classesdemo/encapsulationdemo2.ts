export {}

class GovtBank{
    private balance:number=0

    deposit(amount:number):void{
        if(amount > 0){
            this.balance=this.balance+amount
        }
    }

    getBalance():number{
        return this.balance
    }
}

let o:GovtBank=new GovtBank()
o.deposit(15000)
console.log(o.getBalance())