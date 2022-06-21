export class NumberPhoneregex{
    private NUM_PHONERE_REGEXP: RegExp = /^\([0-9]{2}\)-\(0[0-9]{9}\)$/;
     validatePhone (phone : string): boolean {
        return this.NUM_PHONERE_REGEXP.test(phone)}

}
