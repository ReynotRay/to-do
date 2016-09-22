'use strict';

var TodoList = function() {
    this.input = $('.list-todo');
    this.list = $('.todo-items');
};

TodoList.prototype.addData = function(event) {

    var $value = this.input.val();

    if ($value) {
        console.log($value);
        this.list.append('<li class="item">' +
            '<i id="delete" class="fa fa-square-o" aria-hidden="true"></i>' +
            $value +
            '<i id="done" class="fa fa-star-o" aria-hidden="false"></i>'
        );
    } else {
        alert('Please Type an Item ');

    }

    TodoList.resetValue(this.input);
    TodoList.deleteItem();
};

TodoList.prototype.onKeydown = function() {
    this.input.keyup(function(event) {
        if (event.keyCode == 13) {
            TodoList.addData();
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
    $.ajax('/items').done(function(items) {
        for (var i = 0; i < items.length; i++) {
            that.list.append('<li class="item">' +
                '<i id="delete" class="fa fa-square-o" aria-hidden="true"></i>' +
                items[i].name +
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


var TodoList = new TodoList();
TodoList.onKeydown();
TodoList.getItems();
TodoList.deleteItem();