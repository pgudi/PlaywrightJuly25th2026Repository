export {}
class Bank{
    private balance!:number
    private bankName!:string

    constructor(balance:number, bankName:string){
        this.balance=balance
        this.bankName=bankName
    }

    getBalance():number{
        return this.balance
    }

    getBankName():string{
        return this.bankName
    }
}

let o:Bank=new Bank(5000,"IDFC Bank")
console.log(o.getBalance())
console.log(o.getBankName())