//union
let info:string | number = "changepond";
console.log(info);

//any
let dataany:any ="change";
console.log(dataany);

//enum
enum days{sun=10,mon,tue,wed,thus,fri,sat};
let data=days.sat;
console.log(data);

//tuple
let item:[string,number,string] = ["sam",90,"kite"];
console.log(item);

//array
let rollno:number[]=[45,34,232,534];
let courses:string[]=["sam","jim","log"];
let breakf:Array<number>=[78,34,5342,5345,324];
let fastf:Array<string>=["noodles","pasta","chips"];
console.log(courses,rollno);
console.log(breakf,fastf);
