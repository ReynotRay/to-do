// function Model() {
//     this.items = [];
//     //this.listItems = [];
// }

// Model.prototype.returnData = function() {
//     return this.listItems;
// };

// Model.prototype.addData = function(item) {
//     this.listItems.push(item);
// };

// View.prototype.append = function(data) {
//     $('.list-todo').keyup(function(event) {
//   if (event.keyCode == 13) {
//     checkValue();
//     this.addItem(value);
//     console.log('shits');
//   }
// });
//     $('.add').click(function() {
//       checkValue();
// });
//     $('.todo-items').on('click', 'li', function() {
//   $(this).css('text-decoration', 'line-through');
// });
// $('.todo-items').on('click', '#delete', function() {
//   $(this).parent().remove();
// });
// };

// function checkValue() {
//   if ($('.list-todo').val() === "") {
//     alert('Please Type an Item ');
//   } else {
//     $('.todo-items').append('<li class="item">' + 
//         '<i id="delete" class="fa fa-square-o" aria-hidden="true"></i>' + $('.list-todo').val() +
//      '<i id="done" class="fa fa-star-o" aria-hidden="false"></i>');
//     resetValue();
//     // var display = item.children('.display');
//     // var name = display.children('.name');
//     input.val(name.text());
//   }
// }
function resetValue() {
  $('.list-todo').val("");
}

View.prototype.value = function() {
    return $(".list-todo").val();
};

View.prototype.getItems = function() {
$.ajax('/items')
    .done(function(users) {
        for (var i = 0; i < users.length; i++) {
            $('.todo-items').append('<li class="item">' + users[i].name + '</li>');
        }

    }).fail(function(error) {
        console.log('fuckin failed');
        console.log(error);
    });
};
View.prototype.addItem = function(name) {
    var item = {'.item': name};
    var ajax = $.ajax('/items', {
        type: 'POST',
        data: JSON.stringify(item),
        dataType: 'json',
        contentType: 'application/json'
    });
    ajax.done(this.listitems.bind(this));
};

View.prototype.deleteItem = function(id) {
    var ajax = $.ajax('/items/' + id, {
        type: 'DELETE',
        dataType: 'json'
    });
    ajax.done(this.getItems.bind(this));
};

View.prototype.editItem = function(id, name) {
    var item = {'.item': name, 'id': id};
    var ajax = $.ajax('/items/' + id, {
        type: 'PUT',
        data: JSON.stringify(item),
        dataType: 'json',
        contentType: 'application/json'
    });
    ajax.done(this.getItems.bind(this));
};

function Controller(view, model) {
    this.view = view;
    this.model = model;
}

function View() {
}

var model = new Model();
var view = new View();
var controller = new Controller(view, model);
view.append();

function View(){
}

var view = new View();
$(document).ready(function(){
    var app = new TodoList();
    TodoList();
});

function TodoList(){

}

view.getItems();

//   var ajax = $.ajax('/items', {
//         type: 'GET',
//         dataType: 'json'
//     });

// $.ajax('/items',{
//     type: 'Get',
//     dataType:'json'
//     });
//     done(function(users) {
//         for (var i = 0; i < users.length; i++) {
//             $('.todo-items').append('<li class="item">' + users[i].name + '</li>');
//         }

//     }).fail(function(error) {
//         console.log('fuckin failed');
//         console.log(error);
//     });