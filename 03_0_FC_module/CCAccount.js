class CCAccount{
    constructor(n, e, p, a){
        this.customerName = n
        this.customerEmail = e
        this.customerPhoneNumber = p
        this.usedUpAmount = a
    }
    getPendingBill(){
        return this.usedUpAmount
    }
    isTransactionAllowed(amount){
        if(amount+this.usedUpAmount>200000) {console.log("No, Your credit limit exceeds")}
        else {this.usedUpAmount += amount;console.log("Transaction Success")}
    }
    
}
class goldCCAccount extends CCAccount{
    constructor(n, e, p, a){
        super(n, e, p, a)
    }
    isTransactionAllowed(amount){
        if(amount+this.usedUpAmount>500000) {console.log("No, Your credit limit exceeds")}
        else {this.usedUpAmount += amount;console.log("Transaction success")}
    }
}
let customer1 = new CCAccount("Ashwin", "ashwinramuk@gmail.com",9629945467,20000)
customer1.getPendingBill();
customer1.isTransactionAllowed(200000);
let customer2 = new goldCCAccount("Aravind", "aravindramuk@gmail.com",9629945467,20000)
customer2.isTransactionAllowed(200000);