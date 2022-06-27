export class User {
    
    private name: string;
    private password: string;
    private email: string;
    private age: string;

    constructor(name: string, email: string, age: string, password: string) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
    }
}