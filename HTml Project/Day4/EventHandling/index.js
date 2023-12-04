var printTable=()=>{

let value=document.querySelector("input[type='number']").value;
for(let mul=1;mul<10;mul++){
document.querySelector('div').innerHTML+=value+"*"+mul+(value*mul)+"<br>";
}

}