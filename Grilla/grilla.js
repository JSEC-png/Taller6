$(document).ready(function () {
    
var responseInfo='';

/* $.getJSON("https://jsonplaceholder.typicode.com/users", 
function (data) {
        console.log(data);
        $('#prueba').html(data[1].company.name);
    }
); */


$.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    data: "data",
    dataType: "json",
    success: function (response) {
         
         tabla = $('#datos');
         for(var indice of response)
         {


           tabla.append(
               `<tr>\
               <td> ${indice.id} </td>
               <td>${indice.name}</td>
               <td>${indice.username}</td>
               <td>${indice.email}</td>
               <td>${indice.address.street}</td>
               <td>${indice.address.suite}</td>
               <td>${indice.address.city}</td>
               <td>${indice.address.zipcode}</td>
               <td>${indice.address.geo.lat}</td>
               <td>${indice.address.geo.lng}</td>
               <td>${indice.phone}</td>
               <td>${indice.website}</td>
               <td>${indice.company.name}</td>
               <td>${indice.company.catchPhrase}</td>
               <td>${indice.company.bs}</td>
               </tr>`            
               );

         };
    }
});

filtronombre = $('#filtronombre');

$('#fnombre').click(function () { 

    filtronombre.toggle();
   
});

$('#filtronombre').keyup(function () { 
    
    console.log(filtronombre.html());
    
    $('td').hide();

});

});