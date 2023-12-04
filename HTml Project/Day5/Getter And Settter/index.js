'use strict';
var Cat={
    name:{first:"John",last:"Dsouza"},
    color:'White'
};

Object.defineProperty(Cat,'fullname',{
    get:function(){
        return this.name.first +" "+this.name.last;
    },
    set:function(val){
        var value=val.split('');
        this.name.first=value[0];
        this.name.last=value[1]
    }
});

Cat.fullname="Muffin Top"  //set
console.log(Cat.fullname); //get

Cat.fullname='Morphy Richards';
Cat.fullname;