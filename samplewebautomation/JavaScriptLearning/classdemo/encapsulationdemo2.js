class Bank{
    constructor(bname, accno, balance){
        this.#bankName=bname
        this.#accountNumber=accno
        this.#balance=balance
    }

    getBankName(){
        return this.#bankName
    }

    getAccountNumber(){
        return this.#accountNumber
    }

    getBankBalance(){
        return this.#balance
    }
}

let obj=new Bank("ICICI Bank","0000100000111","25000")
console.log(obj.getBankName());
console.log(obj.getAccountNumber());
console.log(obj.getBankBalance());