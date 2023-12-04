$(document).ready(
    ()=>{
        // alert("jquery is loaded");


var allDivs=$('div');
console.log(allDivs)

var divWithId=$('div#id1');
console.log(divWithId);

var divWithClass=$('div.mystyle');
console.log(divWithClass);

var firstDiv=$('div:first')
console.log(firstDiv);

var jqElements=$('.odd.even')
console.log(jqElements);
}
)