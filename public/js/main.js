var TodoList = function() {
    this.items = [];
    //this.item = ($('.list-todo').val());
};
TodoList.prototype.onKeydown = function() {
    $('.list-todo').keyup(function(event) {
        if (event.keyCode == 13) {
            TodoList.addData();
        }
    });
};
TodoList.prototype.addData = function(event) {
    item = ($('.list-todo').val());
    if (item === "") {
        alert('Please Type an Item ');
    } else {
        console.log(item);
        $('.todo-items').append('<li class="item">' +
            '<i id="delete" class="fa fa-square-o" aria-hidden="true"></i>' +
            item +
            '<i id="done" class="fa fa-star-o" aria-hidden="false"></i>'
        );
    }
    TodoList.resetValue();
    TodoList.deleteItem();
};
TodoList.prototype.resetValue = function() {
    $('.list-todo').val("");
};
TodoList.prototype.deleteItem = function() {
    $('.todo-items').on('click', '#delete', function() {
        $(this).parent().remove();
    });
};
TodoList.prototype.markImportant = function() {
    $('.fa-star-o').on('click', 'li', function() {
        $(this).css('background', 'yellow');
    });
};
TodoList.prototype.getItems = function() {
    $.ajax('/items').done(function(users) {
        for (var i = 0; i < users.length; i++) {
            $('.todo-items').append('<li class="item">' +
                '<i id="delete" class="fa fa-square-o" aria-hidden="true"></i>' +
                users[i].name +
                '<i id="done" class="fa fa-star-o" aria-hidden="false"></i>'
            );
        }
    }).fail(function(error) {
        console.log(error);
    });
};
TodoList.prototype.addItem = function(name) {
    var item = {
        '.item': name
    };
    var ajax = $.ajax('/items', {
        type: 'POST',
        data: JSON.stringify(item),
        dataType: 'json',
        contentType: 'application/json'
    });
    ajax.done(this.listitems.bind(this));
};
// TodoList.prototype.deleteItem = function(id) {
//     var ajax = $.ajax('/items/' + id, {
//         type: 'DELETE',
//         dataType: 'json'
//     });
//     ajax.done(this.getItems.bind(this));
// };

var TodoList = new TodoList();
TodoList.onKeydown();
TodoList.getItems();
TodoList.deleteItem();