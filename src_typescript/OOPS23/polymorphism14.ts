class CheckingAccount {
    amount:number = 0;

    // open() ============> function overRIDING
    open(initialAmount: number) { this.amount = initialAmount; }

    // addAmount =========> function overLOADING
    addAmount(amount:number):number;
    addAmount(amount:number, currency:string):number;    
    addAmount(amount:number, currency?:string) { // implementation signature type should be generic enough to include the overload signatures.
        if(currency == 'USD') { this.amount = this.amount + 80*Number(amount) }
        if(currency = 'EUR') { this.amount = this.amount + 85*Number(amount) }
        else this.amount = this.amount + amount;
        return this.amount;
    }    
    getBalance() { return this.amount }
}
class BusinessCheckingAccount extends CheckingAccount {
    open(initialAmount: number) {
        if (initialAmount < 10000) { throw new Error("min 10000 INR needed for Biz accounts"); }
        super.open(initialAmount);
    }
}
class PersonalCheckingAccount extends CheckingAccount {
    open(initialAmount: number) {
        if (initialAmount <= 1000) { throw new Error("min 1000 INR needed for personal accounts"); }
        super.open(initialAmount);
    }
}
/*********************************************************************************************/
const bca1 = new BusinessCheckingAccount();
bca1.open(1000);
console.log(bca1.getBalance());