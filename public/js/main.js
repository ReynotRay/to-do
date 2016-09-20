var TodoList = function(){
    this.items =[];
    this.itemList = $('.list-input');
    this.input = $('#item-input');
    };      

TodoList.prototype.onAddInputKeydown = function(event){
  $('.list-input').keyup(function(event) {
            if (event.keyCode == 13) {
                checkValue();
            }
        });



//       //var ShoppingListApp = function() {};
//        
//         //ShoppingListApp.prototype.addItem = function(){
//         $('.add').click(function() {
//             if ($('.list-input').val().length) {
//                 $('.list').append('<li class="item">' + $('.list-input').val()+'<i id="done" class="fa fa-check" aria-hidden="true"></i>' +'<i id="delete" class="fa fa-trash-o" aria-hidden="true"></i>' +'</li>');
//             resetValue();
//             } else {
//                 alert('Please Type An Item');
//             }
//         });

//         //ShoppingListApp.prototype.lineThrough = function(){
//         $('.list').on('click', 'li', function() {
//             $(this).css('text-decoration', 'line-through');
//         });
//         //ShoppingListApp.prototype.removeItem = function(){
//         $('.list').on('click', '#delete', function() {
//             $(this).parent().remove();
//         });
//          //ShoppingListApp.prototype.
//         function resetValue() {
//                 $('.list-input').val("");
//             }

//         function checkValue() {
//                 if ($('.list-input').val() === "") {
//                 alert('Please Type an Item ');
//                 } else {
//                 $('.list').append('<li class="item">' + $('.list-input').val()+'<i id="done" class="fa fa-check" aria-hidden="true"></i>' +'<i id="delete" class="fa fa-trash-o" aria-hidden="true"></i>');
//                 resetValue();
//                 }
            
//             // var app = new ShoppingListApp();
//             //ShoppingListApp();
//         function addItem(){
//             var item = {'.item':item};
//             var ajax = $.ajax('/items', {
//                 type:'post',
//                 data:JSON.stringify(item),
//                 dataType:'json',
//                 currentType:'application/json'
//             });
//             ajax.done(this.getItems.bind(this));
//         };
// }

$(document).ready(function() {
    $('.header').hide();
    $('.header').delay(500).fadeIn();
     var app = new TodoList();
});





