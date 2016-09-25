'use strict';

var TodoList = function() {
    this.input = $('.list-todo');
    this.list = $('.todo-items');
};

TodoList.prototype.addData = function(event) {

    var $value = this.input.val();

    if ($value) {
        this.addItem($value);
        this.list.append('<li class="item">' +
            '<i id="delete" class="fa fa-square-o" aria-hidden="true"></i>' +
            $value +
            '<i id="done" class="fa fa-star-o" aria-hidden="false"></i>'
        );
    } else {
        alert('Please Type an Item ');

    }

    this.resetValue(this.input);
    this.deleteItem();
};

TodoList.prototype.onKeydown = function() {
    var that = this;
    this.input.keyup(function(event) {
        if (event.keyCode == 13) {
            that.addData();
        }
    });
};

TodoList.prototype.resetValue = function(input) {
    input.val("");
};
TodoList.prototype.deleteItem = function() {
    this.list.on('click', '#delete', function() {
        $(this).parent().remove();
    });
};
TodoList.prototype.markImportant = function() {
    $('.fa-star-o').on('click', 'li', function() {
        $(this).css('background', 'yellow');
    });
};
TodoList.prototype.getItems = function() {
    var that = this;
    $.ajax('/todos').done(function(items) {
        for (var i = 0; i < items.length; i++) {
            that.list.append('<li class="item">' +
                '<i id="delete" class="fa fa-square-o" aria-hidden="true"></i>' +
                items[i].todo +
                '<i id="done" class="fa fa-star-o" aria-hidden="false"></i>'
            );
        }
    }).fail(function(error) {
        console.log(error);
    });
};
TodoList.prototype.addItem = function(name) {

    var item = {
        'todo': name
    };
    var ajax = $.ajax('/todos', {
        type: 'POST',
        data: JSON.stringify(item),
        dataType: 'json',
        contentType: 'application/json'
    });

};


var todoList = new TodoList();
todoList.onKeydown();
todoList.getItems();
todoList.deleteItem();