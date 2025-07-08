class User{
    private userId : string ="admin@gmail.com"
    private password : string ="admin@123";

    get _userId(){
        return this.userId;
    }
     get _password(){
        return this.password;
    }
    set _userId(val:any){
        this.userId = val;
    }
    set _password(val:any){
        this.password = val;
    }

    userDetails(){
        return` UserId:${this.userId} Password:${this.password}`;
    }
}
let user = new User();
console.log(user._userId);
user._userId="abinesh@gmail.com";
console.log(user._userId);

console.log(user._password);
user._password="abinesh@123"
console.log(user._password);

