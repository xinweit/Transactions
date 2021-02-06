export class data
{
    id : number;
    sender : string;
    receiver : string;
    totalAmount : number;

    constructor(id, sender, receiver, totalAmount) {
        this.id = id;
        this.sender = sender;
        this.receiver = receiver;
        this.totalAmount = totalAmount;
    }
}