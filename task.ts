class EmployeeSalary{
    EmployeeID :number;
    EmployeeName: string;
    BasicSalary:number;
    HRA :number ;
    DA:number;
    GrossSalary:number;

    constructor(id:number,name:string,sal:number){
        this.EmployeeID = id;
        this.EmployeeName=name;
        this.BasicSalary=sal;
        this.HRA = this.BasicSalary *0.20;
        this.DA = this.BasicSalary * 0.10;
        this.GrossSalary = this.HRA + this.DA +this.BasicSalary;
    }
    displayDetails():void{
        console.log(`${this.EmployeeID},${this.EmployeeName},${this.BasicSalary},${this.BasicSalary},${this.HRA},
            ${this.DA},${this.GrossSalary}`)
       } 
      }
    const emp = new EmployeeSalary(4719,"Abinesh",20000);
    emp.displayDetails();
    
