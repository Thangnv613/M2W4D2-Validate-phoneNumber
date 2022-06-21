import { NumberPhoneregex } from "./NumberPhoneregex";

let numberPhoneregex = new NumberPhoneregex();
let validatephone: string[] = ['(84)-(0978262668)'];
let invalidatePhone: string[] = ['(a8)-(222222222)']

for (let numberPhone of validatephone) {
    let isvalid: boolean = numberPhoneregex.validatePhone(numberPhone);
    console.log("Phone number is " + numberPhone + " is valid " + isvalid);
    
}

for (let numberPhone of invalidatePhone) { 
    let isvalid: boolean = numberPhoneregex.validatePhone(numberPhone);
    console.log("Phone number is " + numberPhone + " is valid " + isvalid);

}