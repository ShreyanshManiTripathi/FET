         function addOnClick(){
 document.getElementById("addbutton").onclick = function () {
        location.href = "http://127.0.0.1:5500/addbook.html";
    };
         }

          
        function removeOnClick(){
 document.getElementById("removebutton").onclick = function () {
        location.href = "http://127.0.0.1:5500/removebook.html";
    };
         }


            function editOnClick(){
 document.getElementById("editbutton").onclick = function () {
        location.href = "http://127.0.0.1:5500/editbook.html";
    };
         }


         function listOnClick(){
 document.getElementById("listbutton").onclick = function () {
        location.href = "http://127.0.0.1:5500/list.html";
    };
         }

          function backOnClick(){
 document.getElementsByClassName("backbutton").onclick = function () {
        location.href = "http://127.0.0.1:5500/index.html";
    };
         }




  books=[    
          {id:1,  name : " Wings Of fire"} ,
    { id:2,name:  "Five Point Someone"} ,
      {id:3,name: 'Three Mistakes Of my Life'} ,
      {id:4,name:"Harry Potter And the Goblet Of Fire"},  
         {id:5,name:   "Marvel Spiderman"},
           {id:6,name : "DC Superman"}
        
        ] 



    

//         function addOnClick({id,name}){
//                 books.push({id,name})
//          }
// addOnClick({id:7,name:"Happymind"})
      


//            const wrapper=document.querySelector('#wrapper'),  
//  form=wrapper.querySelector('#form'),
// submitInput=form[0].querySelector('input[type="submit"]');


// function submit(e){
//     e.preventDefault();
//     var formData=new FormData(form[0]);
//     alert(formData.get('bookId'+' '+formData.get('bookName')     ))
// }

// document.addEventListener('DOMContentLoaded',function(){
// submitInput.addEventListener('click',getDataForm,false)
// },false)



// function yourData(){
// var bookid=document.querySelector('#bookid')

// var bookname=document.querySelector('#bookname')
// alert(bookname)
// }
  







	function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
            var row = `<tr>
                            <td>${data[i].id}</td
							<td>${data[i].name}</td> <br>
						
					  </tr>`
            table.innerHTML += row
            
        }
    }
buildTable(books)