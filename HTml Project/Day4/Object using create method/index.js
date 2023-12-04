var animal={
    type:"Invertebrates",
    displayType: function(){
        console.log(this.type);
    }
}

var animal1=Object.create(Animal);
