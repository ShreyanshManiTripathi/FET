class Employee{
    // constructor(id,name){
    //     this.eid=10;
    //     this.ename=John
    // }

constructor(id,name){
this.eid=id;
this.name=name;
}
showDetails(){
    console.log("Employee details"+this.eid+"Name"+this.name)
}
}


class Manager extends Employee{
    constructor(mid,id,name){
        super(id,name);
        this.mid=mid;
    }

showManager(){
    super.showDetails();
    super.eid=11;
    console.log("Manager id:"+this.mid)
}
}


var emp=new Employee(101,"Sam");
emp.__proto__;
emp.showDetails();

var manager=new Manager(27,11,"Johnson");
manager.showManager();
