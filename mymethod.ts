export let sample:string=("hey this is module example");
export class Product{
    pid:number;
    pname:string;
    constructor (id:number,name:string){
        this.pid = id;
        this.pname= name;
    }
    productdetails(){
        return `Id:${this.pid} Name:${this.pname}`;
    }
}