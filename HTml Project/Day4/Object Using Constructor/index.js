class Employee{
    constructor(ename,eid){
        this.eid=eid;
        this.ename=ename;
    }

showData(){
    console.log("Employee data:"+this.ename)
}


}

var emp=new Employee(101,Jim)