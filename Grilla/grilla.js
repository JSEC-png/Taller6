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
               `<tr>
               <td> ${indice.id} </td>
               <td class='nombre'>${indice.name}</td>
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

$('#filtronombre').keyup(function () { 
    var filtro = $('td.nombre');
    var fil= filtronombre.val();
    var f = $('tr');
    for (i=0;i<filtro.length;i++){
    var iltro= filtro[i].innerHTML;
    var test = iltro.match(fil);
    var row = f[i+3];
    if (test !=null){
        row.style.visibility='visible';
    } else {   
        row.style.visibility='collapse';
    }
}
});
});