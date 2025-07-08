class Employee{
    //data member of a class
    empid:number=4719;
    empname:string="Abinesh";
    empnumber:number=30000;
    
    //constructor
    constructor(id:number, name:string,number:number){
        this.empid = id;
        this.empname = name;
        this.empnumber = number;
    }

    //memeber function of a class
    employeeDetails(){
        return`Id:${this.empid} Name:${this.empname} Salary:${this.empnumber}`;
    }
}
class Company extends Employee{
    cname: string;
    caddress: string;
    constructor(empid:number, empname:string,empnumber:number,company:string,address:string){
        super(empid,empname,empnumber);
        this.cname=company;
        this.caddress=address;
    }
}
let alldetails = new Company(4722,"Gokul",45000,"changepond","chennai");
console.log(alldetails.caddress);
//creating object of a class
let details =new Employee(4720,"Abinesh",31000);
console.log(details.empid);
console.log(details.employeeDetails());

let det =new Employee(4722,"Hari",31000);
console.log(det.empid);
console.log(det.employeeDetails());