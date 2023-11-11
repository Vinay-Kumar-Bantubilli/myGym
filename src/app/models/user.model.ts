export class User{
    id:number;
    name:string;
    gender:string;
    mobile:string;
    mail:string;
    subtype:string;
    status:string;
    password:string;
    cPassword:string;
    isAdmin:boolean;
    constructor(id:number, name:string, gender:string, mobile:string, mail:string, subtype:string, status:string, password:string, cPassword:string, isAdmin:boolean){
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.mobile = mobile;
        this.mail = mail;
        this.subtype = subtype;
        this.status = status;
        this.password = password;
        this.cPassword = cPassword;
        this.isAdmin = isAdmin;
    }
}