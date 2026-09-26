class Bank{
    #bankName
    #accountNumber
    #balance

    setBankName(bankname){
        this.#bankName=bankname
    }

    setAccountNumber(accountNo){
        this.#accountNumber=accountNo
    }

    setBankBalance(balance){
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

let obj=new Bank()
obj.setBankName("IDFC Bank")
obj.setAccountNumber(100000011)
obj.setBankBalance(25000)
console.log(obj.getBankName());
console.log(obj.getAccountNumber());
console.log(obj.getBankBalance());