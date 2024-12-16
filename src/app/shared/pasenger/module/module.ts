export interface Ipasenger {
    id: number;
    fullname: string;
    ckeakedIn: boolean;
    chackIndate: null | number;
    childredn:  null  | Array<Ichile>
}

export interface Ichile{
    name : string, 
    age : number
}
