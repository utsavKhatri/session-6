// window.onload = function () {
//   /* This is the code that is executed when the form is submitted. */
//   document.querySelector("form").addEventListener("submit", function () {
//     let item = document.querySelector("form input");
//     let todo = { item: item.value };

//     $.ajax({
//       type: "POST",
//       url: "/todo",
//       data: todo,
//       success: function (data) {
//         location.reload();
//       },
//     });

//     return false;
//   });

//   /* This is the code that is executed when the user clicks on an item in the list. It deletes the
//     item from the database. */

//   let li = document.querySelector("li");
//   li.addEventListener("click", function () {
//     let item = document.querySelector(this).text().replace(/ /g, "-");
//     console.log(item);
//     $.ajax({
//       type: "DELETE",
//       url: `/todo/${item}`,
//       success: function (data) {
//         location.reload();
//       },
//     });
//   });
// };





$(document).ready(function(){

    $('form').on('submit', function(){
  
        var item = $('form input');
        var todo = {item: item.val()};
  
        $.ajax({
          type: 'POST',
          url: '/todo',
          data: todo,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
  
        return false;
  
    });
  
    $('li').on('click', function(){
        var item = $(this).text().replace(/ /g, "-");
        $.ajax({
          type: 'DELETE',
          url: '/todo/' + item,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
    });
  
  });
